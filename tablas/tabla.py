from sqlite3 import Connection as Conn, Cursor
from abc import ABC, abstractmethod
from typing import Dict, List, Iterable, Any

type Tablas = str

_tablas_registradas = []
def registrar_tabla(cls):
    global _tablas_registradas
    _tablas_registradas.append(cls)
    return cls

def tablas_registradas() -> Iterable[Tabla]:
    global _tablas_registradas
    return map(lambda tabla: tabla(), _tablas_registradas)

class Tabla(ABC):
    nombre: Tablas
    necesito_tablas: List[Tablas]

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
