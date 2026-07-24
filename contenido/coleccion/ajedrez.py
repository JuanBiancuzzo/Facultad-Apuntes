import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
from enum import StrEnum

from archivos import Archivo
from contenido.general import embedding
from dependencias import Dato, Nodo, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.embedding import Embbeding
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
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        datos = []

        ajedrez = Ajedrez(
            archivo.metadata.nombre,
            TipoMovimientosAjedrez.APERTURA,
            archivo.extra["inicio"],
            list(map(lambda par: "-".join(par), archivo.extra["movimientos"])),
        )
        datos.append(ajedrez)

        clave_ajedrez = ajedrez.obtener_clave()
        embedding = Embbeding.de_string(Tabla.nombre, clave_ajedrez, ajedrez.nombre)
        datos.append(embedding)

        return datos

    def dependo(self) -> List[Clave]: 
        return super().dependo()

    def obtener_clave(self) -> Clave: 
        return Ajedrez._obtener_clave(self.nombre, self.tipo, self.inicio)
    
    @classmethod
    def _obtener_clave(cls, nombre: str, tipo: TipoMovimientosAjedrez, inicio: str) -> Clave: 
        return Clave.de_texto(TipoNodo.AJEDREZ, f"{nombre}({tipo})->{inicio}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_ajedrez = Tabla.insertar(
                cursor,
                self.nombre,
                self.tipo,
                self.inicio,
                self.movimientos,
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar movimiento de ajedrez con nombre: {self.nombre}")
            raise e

        if id_ajedrez is None:
            mensaje = f"El movimiento de ajedrez insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_ajedrez, self.obtener_clave())

