import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
from enum import StrEnum

from archivos import Archivo
from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaAjedrez as Tabla

class TipoMovimientosAjedrez(StrEnum):
    APERTURA = "Apertura"

@dataclass
class Ajedrez(Dato):
    nombre: str
    tipo: TipoMovimientosAjedrez
    inicio: str
    movimientos: List[str]

    @classmethod
    def parsear(cls, archivo: Archivo) -> Dato:
        return Ajedrez(
            archivo.metadata.nombre,
            TipoMovimientosAjedrez.APERTURA,
            archivo.extra["inicio"],
            list(map(lambda par: "-".join(par), archivo.extra["movimientos"])),
        )

    def dependo(self) -> List[Clave]: 
        return super().dependo()

    def obtener_clave(self) -> Clave: 
        return Ajedrez._obtener_clave(self.nombre, self.tipo, self.inicio)
    
    @classmethod
    def _obtener_clave(cls, nombre: str, tipo: TipoMovimientosAjedrez, inicio: str) -> Clave: 
        return Clave.de_texto(TipoNodo.AJEDREZ, f"{nombre}({tipo})->{inicio}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try: 
            Tabla.insertar(
                cursor,
                self.nombre,
                self.tipo,
                self.inicio,
                self.movimientos,
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar movimiento de ajedrez con nombre: {self.nombre}")
            raise e

        return None

