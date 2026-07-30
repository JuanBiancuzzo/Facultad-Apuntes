import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
from enum import StrEnum

from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaGuias as Tabla

class TipoGuias(StrEnum):
    MATERIA = "Materia"
    CAPITULO_LIBRO = "Capitulo de libro"
    CURSO = "Curso"

@dataclass
class GuiaPorDato(Dato):
    tipo: TipoGuias
    clave_dato: Clave
    clave_guia: Clave

    @classmethod
    def materia(cls, clave_materia: Clave, clave_guia: Clave) -> GuiaPorDato:
        return GuiaPorDato(TipoGuias.MATERIA, clave_materia, clave_guia)

    @classmethod
    def capitulo_libro(cls, clave_capitulo: Clave, clave_guia: Clave) -> GuiaPorDato:
        return GuiaPorDato(TipoGuias.CAPITULO_LIBRO, clave_capitulo, clave_guia)

    @classmethod
    def curso(cls, clave_curso: Clave, clave_guia: Clave) -> GuiaPorDato:
        return GuiaPorDato(TipoGuias.CURSO, clave_curso, clave_guia)

    def dependo(self) -> List[Clave]: 
        return [ self.clave_dato, self.clave_guia ]

    def obtener_clave(self) -> Clave: 
        return GuiaPorDato._obtener_clave(self.tipo, self.clave_dato, self.clave_guia)

    @classmethod
    def _obtener_clave(cls, tipo: TipoGuias, clave_dato: Clave, clave_guia: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.GUIAS_POR_DATO, f"{tipo}->{clave_dato}>{clave_guia}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try:
            id_dato = dependencias[self.clave_dato]
            id_guia = dependencias[self.clave_guia]
            Tabla.insertar(cursor, self.tipo, id_dato, id_guia)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar guias por dato con tipo: {self.tipo}, dato: {self.clave_dato} y ref: {self.clave_guia}")
            raise e
