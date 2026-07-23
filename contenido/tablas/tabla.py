from sqlite3 import Connection as Conn, Cursor
from abc import ABC, abstractmethod
from typing import Dict, List, Any
from .registros import Tablas

tablas_registradas = []
def registrar_tabla(cls):
    global tablas_registradas
    tablas_registradas.append(cls)

class Tabla(ABC):
    nombre: Tablas
    # necesito_tablas: List[Tablas]

    @abstractmethod
    def crear(self, conn: Conn) -> None: 
        """ Crear tablas """

    @classmethod
    def _insertar(cls, cursor: Cursor, valores: Dict[str, Any]) -> int | None:
        cursor.execute(f"""
            INSERT INTO {cls.nombre} ({", ".join(valores.keys())})
            VALUES ({", ".join("?" for _ in valores)})
        """, tuple(valores.values()))
        return cursor.lastrowid
