import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
from enum import StrEnum

from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaBibliografia as Tabla

class TipoBibliografia(StrEnum):
    MATERIA = "Materia"
    TEMA_FACULTAD = "Tema de facultad"

@dataclass
class Bibliografia(Dato):
    tipo: TipoBibliografia
    clave_dato: Clave
    clave_referencia: Clave

    @classmethod
    def materia(cls, clave_materia: Clave, clave_referencia: Clave) -> Bibliografia:
        return Bibliografia(TipoBibliografia.MATERIA, clave_materia, clave_referencia)

    @classmethod
    def tema_facultad(cls, clave_tema: Clave, clave_referencia: Clave) -> Bibliografia:
        return Bibliografia(TipoBibliografia.TEMA_FACULTAD, clave_tema, clave_referencia)

    def dependo(self) -> List[Clave]: 
        return [ self.clave_dato, self.clave_referencia ]

    def obtener_clave(self) -> Clave: 
        return Bibliografia._obtener_clave(self.tipo, self.clave_dato, self.clave_referencia)

    @classmethod
    def _obtener_clave(cls, tipo: TipoBibliografia, clave_dato: Clave, clave_referencia: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.BIBLIOGRAFIA, f"{tipo}->{clave_dato}-{clave_referencia}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try:
            id_dato = dependencias[self.clave_dato]
            id_referencia = dependencias[self.clave_referencia]
            Tabla.insertar(cursor, self.tipo, id_dato, id_referencia)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar bibliografia con tipo: {self.tipo}, dato: {self.clave_dato} y ref: {self.clave_referencia}")
            raise e
