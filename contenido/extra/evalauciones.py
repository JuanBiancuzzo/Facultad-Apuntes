import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
from enum import StrEnum

from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaEvaluaciones as Tabla

class TipoEvaluaciones(StrEnum):
    MATERIA = "Materia"
    CURSO = "Curso"

@dataclass
class EvaluacionPorDato(Dato):
    tipo: TipoEvaluaciones
    clave_dato: Clave
    clave_evaluacion: Clave

    @classmethod
    def materia(cls, clave_materia: Clave, clave_evaluacion: Clave) -> EvaluacionPorDato:
        return EvaluacionPorDato(TipoEvaluaciones.MATERIA, clave_materia, clave_evaluacion)

    @classmethod
    def curso(cls, clave_curso: Clave, clave_evaluacion: Clave) -> EvaluacionPorDato:
        return EvaluacionPorDato(TipoEvaluaciones.CURSO, clave_curso, clave_evaluacion)

    def dependo(self) -> List[Clave]: 
        return [ self.clave_dato, self.clave_evaluacion ]

    def obtener_clave(self) -> Clave: 
        return EvaluacionPorDato._obtener_clave(self.tipo, self.clave_dato, self.clave_evaluacion)

    @classmethod
    def _obtener_clave(cls, tipo: TipoEvaluaciones, clave_dato: Clave, clave_evaluacion: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.GUIAS_POR_DATO, f"{tipo}->{clave_dato}>{clave_evaluacion}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try:
            id_dato = dependencias[self.clave_dato]
            id_evaluacion = dependencias[self.clave_evaluacion]
            Tabla.insertar(cursor, self.tipo, id_dato, id_evaluacion)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar evaluacions por dato con tipo: {self.tipo}, dato: {self.clave_dato} y ref: {self.clave_evaluacion}")
            raise e
