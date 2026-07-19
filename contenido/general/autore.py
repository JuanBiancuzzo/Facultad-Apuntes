import sqlite3 as sql
from dataclasses import dataclass
from typing import Dict, List

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general import tablas as ts

@dataclass
class Autore(Dato):
    nombre: str
    apellido: str

    def dependo(self) -> List[Clave]: 
        return super().dependo()

    def obtener_clave(self) -> Clave: 
        return Autore._obtener_clave(self.nombre, self.apellido)

    @classmethod
    def _obtener_clave(cls, nombre: str, apellido: str) -> Clave:
        return Clave.de_texto(TipoNodo.AUTORE, f"{nombre}:-:{apellido}:|:{apellido}:-:{nombre}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_autore = ts.TablaAutore.insertar(cursor, self.nombre, self.apellido)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar autore {self.nombre} {self.apellido}")
            raise e 

        if id_autore is None:
            mensaje = f"El autore insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_autore, self.obtener_clave())
