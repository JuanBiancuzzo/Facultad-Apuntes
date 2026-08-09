from collections.abc import Callable, Iterable
from sqlite3 import Cursor
from typing import Any

from tablas import Tabla

type FnProcesarFila = Callable[[Cursor, Any], None]


def postprocesar(tabla: Tabla) -> tuple[Iterable[Any], FnProcesarFila] | None:
    match type(tabla):
        case _:
            return None
