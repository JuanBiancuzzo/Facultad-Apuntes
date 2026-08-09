import sqlite3 as sql
from dataclasses import dataclass
from enum import StrEnum

from contenido.dependencias import TipoNodo
from contenido.errores import ErrorInsertar
from dependencias import Clave, Dato

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
    def materia(
        cls, clave_materia: Clave, clave_evaluacion: Clave
    ) -> EvaluacionPorDato:
        return EvaluacionPorDato(
            TipoEvaluaciones.MATERIA, clave_materia, clave_evaluacion
        )

    @classmethod
    def curso(cls, clave_curso: Clave, clave_evaluacion: Clave) -> EvaluacionPorDato:
        return EvaluacionPorDato(TipoEvaluaciones.CURSO, clave_curso, clave_evaluacion)

    def dependo(self) -> list[Clave]:
        return [self.clave_dato, self.clave_evaluacion]

    def obtener_clave(self) -> Clave:
        return EvaluacionPorDato._obtener_clave(
            self.tipo, self.clave_dato, self.clave_evaluacion
        )

    @classmethod
    def _obtener_clave(
        cls, tipo: TipoEvaluaciones, clave_dato: Clave, clave_evaluacion: Clave
    ) -> Clave:
        return Clave.de_texto(
            TipoNodo.GUIAS_POR_DATO, f"{tipo}->{clave_dato}>{clave_evaluacion}"
        )

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> None:
        try:
            id_dato = dependencias[self.clave_dato]
            id_evaluacion = dependencias[self.clave_evaluacion]
            Tabla.insertar(cursor, self.tipo, id_dato, id_evaluacion)

        except Exception as err:
            raise ErrorInsertar(
                f"Al insertar evaluacions por dato con tipo: {self.tipo}, dato: {self.clave_dato} y ref: {self.clave_evaluacion}",
                err,
            )
