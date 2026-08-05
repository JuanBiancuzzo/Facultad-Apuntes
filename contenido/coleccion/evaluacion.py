import datetime as dt
import sqlite3 as sql
from dataclasses import dataclass
from typing import dict, list

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from dependencias import Clave, Dato, Nodo

from .ejercicios import Ejercicio
from .tablas import TablaEjerciciosEvaluacion
from .tablas import TablaEvaluacion as Tabla


@dataclass
class Evaluacion(Dato):
    numero: int
    fecha: dt.date
    clave_ejercicios: list[Clave]

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Evaluacion]:
        try:
            evaluacion = Evaluacion(
                numero=int(archivo.extra["numero"]),
                fecha=archivo.extra["fecha"],
                clave_ejercicios=[
                    Ejercicio._obtener_clave(int(ejercicio))
                    for ejercicio in archivo.extra["ejercicios"]
                ],
            )

        except Exception as err:
            raise ErrorParseo("Error al crear evaluacion", err)

        return [evaluacion]

    def dependo(self) -> list[Clave]:
        return self.clave_ejercicios

    def obtener_clave(self) -> Clave:
        return Evaluacion._obtener_clave(self.numero)

    @classmethod
    def _obtener_clave(cls, numero_evaluacion) -> Clave:
        return Clave.de_texto(
            TipoNodo.EVALUACION, f"{numero_evaluacion}<:>{numero_evaluacion}"
        )

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_evaluacion = Tabla.insertar(cursor, self.fecha)

        except Exception as err:
            raise ErrorInsertar(
                f"Al insertar evaluacion {self.numero} de ejercicios", err
            )

        if id_evaluacion is None:
            raise ErrorIdNoGenerado("La guia insertada no tiene id")

        try:
            for clave_ejercicio in self.clave_ejercicios:
                id_ejercicio = dependencias[clave_ejercicio]
                TablaEjerciciosEvaluacion.insertar(cursor, id_evaluacion, id_ejercicio)

        except Exception as err:
            raise ErrorInsertar(
                f"Al insertar evaluacion {self.numero} con relacion con ejercicio", err
            )

        return Nodo(id_evaluacion, self.obtener_clave())
