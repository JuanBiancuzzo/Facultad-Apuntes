from abc import ABC, abstractmethod
from collections.abc import Iterable
from sqlite3 import Connection as Conn
from sqlite3 import Cursor
from typing import Any

type Tablas = str

_tablas_registradas = []


def registrar_tabla(cls):
    _tablas_registradas.append(cls)
    return cls


def tablas_registradas() -> Iterable[Tabla]:
    return (tabla() for tabla in _tablas_registradas)


class Tabla(ABC):
    nombre: Tablas
    necesito_tablas: list[Tablas]

    @abstractmethod
    def crear(self, conn: Conn) -> None:
        """Crear tablas"""

    @classmethod
    def _filtrar(
        cls, cursor: Cursor, parametros: list[str], condicion: str | None = None
    ) -> Iterable[dict[str, Any]]:
        parametros = ", ".join(parametros)
        condicion = "" if condicion is None else f"WHERE {condicion}"
        cursor.execute(f"SELECT {parametros} FROM {cls.nombre} {condicion}")

        return (
            {nombre: valor for nombre, valor in zip(parametros, fila)}
            for fila in cursor.fetchall()
        )

    @classmethod
    def _insertar(cls, cursor: Cursor, valores: dict[str, Any]) -> int | None:
        cursor.execute(
            f"""
            INSERT INTO {cls.nombre} ({", ".join(valores.keys())})
            VALUES ({", ".join("?" for _ in valores)})
        """,
            tuple(valores.values()),
        )
        return cursor.lastrowid
