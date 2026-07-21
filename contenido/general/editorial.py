import sqlite3 as sql
from dataclasses import dataclass
from typing import Dict, List

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaEditorial as Tabla

@dataclass
class Editorial(Dato):
    nombre: str

    def dependo(self) -> List[Clave]: 
        return super().dependo()

    def obtener_clave(self) -> Clave: 
        return Editorial._obtener_clave(self.nombre)

    @classmethod
    def _obtener_clave(cls, nombre: str) -> Clave:
        return Clave.de_texto(TipoNodo.EDITORIAL, f"{nombre}:-|:|-:{nombre}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_editorial = Tabla.insertar(cursor, self.nombre)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar editorial de nombre: {self.nombre}")
            raise e 

        if id_editorial is None:
            mensaje = f"La editorial insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_editorial, self.obtener_clave())
