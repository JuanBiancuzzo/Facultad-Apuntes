import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .ejercicios import Ejercicio
from .tablas import TablaGuia as Tabla, TablaEjerciciosGuia

@dataclass
class Guia(Dato):
    numero: int
    nombre: str
    clave_ejercicios: List[Clave]

    @classmethod
    def parsear(cls, archivo: Archivo) -> Guia | None:
        try: 
            return Guia(
                numero = int(archivo.extra["numero"]), 
                nombre = archivo.extra["nombre"], 
                clave_ejercicios = [ 
                    Ejercicio._obtener_clave(int(ejercicio))
                    for ejercicio in archivo.extra["ejercicios"] 
                ],
            )

        except:
            return None

    def dependo(self) -> List[Clave]: 
        return self.clave_ejercicios

    def obtener_clave(self) -> Clave: 
        return Guia._obtener_clave(self.numero)

    @classmethod
    def _obtener_clave(cls, numero_guia) -> Clave: 
        return Clave.de_texto(TipoNodo.GUIA, f"{numero_guia}<|>{numero_guia}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_guia = Tabla.insertar(cursor, self.nombre)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar guia {self.numero} de ejercicios")
            raise e

        if id_guia is None:
            mensaje = f"La guia insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        try: 
            for clave_ejercicio in self.clave_ejercicios:
                id_ejercicio = dependencias[clave_ejercicio]
                TablaEjerciciosGuia.insertar(cursor, id_guia, id_ejercicio)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar guia {self.numero} con relacion con ejercicio")
            raise e

        return Nodo(id_guia, self.obtener_clave())
