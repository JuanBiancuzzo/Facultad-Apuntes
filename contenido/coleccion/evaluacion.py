import sqlite3 as sql
import datetime as dt

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .ejercicios import Ejercicio
from .tablas import TablaEvaluacion as Tabla, TablaEjerciciosEvaluacion

@dataclass
class Evaluacion(Dato):
    numero: int
    fecha: dt.date
    clave_ejercicios: List[Clave]

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Evaluacion]:
        try: 
            evaluacion = Evaluacion(
                numero = int(archivo.extra["numero"]), 
                fecha = archivo.extra["fecha"], 
                clave_ejercicios = [ 
                    Ejercicio._obtener_clave(int(ejercicio))
                    for ejercicio in archivo.extra["ejercicios"] 
                ],
            )

        except Exception as err:
            loggear(LoggerNivel.FATAL, "Error al crear evaluacion")
            raise err

        return [evaluacion]

    def dependo(self) -> List[Clave]: 
        return self.clave_ejercicios

    def obtener_clave(self) -> Clave: 
        return Evaluacion._obtener_clave(self.numero)

    @classmethod
    def _obtener_clave(cls, numero_evaluacion) -> Clave: 
        return Clave.de_texto(TipoNodo.EVALUACION, f"{numero_evaluacion}<:>{numero_evaluacion}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_evaluacion = Tabla.insertar(cursor, self.fecha)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar evaluacion {self.numero} de ejercicios")
            raise e

        if id_evaluacion is None:
            mensaje = f"La guia insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        try: 
            for clave_ejercicio in self.clave_ejercicios:
                id_ejercicio = dependencias[clave_ejercicio]
                TablaEjerciciosEvaluacion.insertar(cursor, id_evaluacion, id_ejercicio)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar evaluacion {self.numero} con relacion con ejercicio")
            raise e

        return Nodo(id_evaluacion, self.obtener_clave())
