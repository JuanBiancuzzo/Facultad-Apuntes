import sqlite3 as sql
from dataclasses import dataclass
from typing import Dict, List

from dependencias import Dato, Nodo, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaLink as Tabla

@dataclass
class Link(Dato):
    tabla: str
    info_arbitraria: bytes | None
    clave_dato: Clave

    @classmethod
    def parsear_entero(cls, tabla: str, clave_dato: Clave) -> Link:
        return Link(tabla, None, clave_dato)

    @classmethod
    def parsear(cls, tabla: str, clave_dato: Clave, info: bytes) -> Link:
        return Link(tabla, info, clave_dato)

    def dependo(self) -> List[Clave]: 
        return [ self.clave_dato ]

    def obtener_clave(self) -> Clave: 
        return Clave.de_texto(TipoNodo.LINK, f"{self.tabla}, {self.clave_dato}, {str(self.info_arbitraria)}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_link = Tabla.insertar(
                cursor, 
                self.tabla,
                dependencias[self.clave_dato],
                self.info_arbitraria,
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar link en la tabla {self.tabla}")
            raise e 

        if id_link is None:
            mensaje = f"El link insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_link, self.obtener_clave())
