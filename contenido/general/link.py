import sqlite3 as sql
from dataclasses import dataclass

from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

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

    def dependo(self) -> list[Clave]:
        return [self.clave_dato]

    def obtener_clave(self) -> Clave:
        return Clave.de_texto(
            TipoNodo.LINK,
            f"{self.tabla}, {self.clave_dato}, {self.info_arbitraria!s}",
        )

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo:
        try:
            id_link = Tabla.insertar(
                cursor,
                self.tabla,
                dependencias[self.clave_dato],
                self.info_arbitraria,
            )

        except Exception as err:
            raise ErrorInsertar(f"Al insertar link en la tabla {self.tabla}", err)

        if id_link is None:
            raise ErrorIdNoGenerado("El link insertado no tiene id")

        return Nodo(id_link, self.obtener_clave())
