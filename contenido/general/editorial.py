import sqlite3 as sql
from dataclasses import dataclass

from contenido.dependencias import TipoNodo
from contenido.errores.insertar import ErrorIdNoGenerado, ErrorInsertar
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

from .tablas import TablaEditorial as Tabla


@dataclass
class Editorial(Dato):
    nombre: str

    def dependo(self) -> list[Clave]:
        return super().dependo()

    def obtener_clave(self) -> Clave:
        return Editorial._obtener_clave(self.nombre)

    @classmethod
    def _obtener_clave(cls, nombre: str) -> Clave:
        return Clave.de_texto(TipoNodo.EDITORIAL, f"{nombre}:-|:|-:{nombre}")

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_editorial = Tabla.insertar(cursor, self.nombre)

        except Exception as err:
            raise ErrorInsertar(f"Al insertar editorial de nombre: {self.nombre}", err)

        if id_editorial is None:
            raise ErrorIdNoGenerado("La editorial insertada no tiene id")

        return Nodo(id_editorial, self.obtener_clave())
