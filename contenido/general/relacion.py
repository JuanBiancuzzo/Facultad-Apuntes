import sqlite3 as sql
from dataclasses import dataclass

from contenido.dependencias import TipoNodo
from contenido.errores import ErrorInsertar
from dependencias import Clave, Dato, Nodo

from .link import Link
from .tablas import TablaRelaciones as Tabla


@dataclass
class Relacion(Dato):
    clave_dato: Clave
    clave_relacionado: Clave

    @classmethod
    def parsear(cls, link_dato: Link, link_relacionado: Link) -> Relacion:
        return Relacion(link_dato.obtener_clave(), link_relacionado.obtener_clave())

    def dependo(self) -> list[Clave]:
        return [self.clave_dato, self.clave_relacionado]

    def obtener_clave(self) -> Clave:
        return Relacion._obtener_clave(self.clave_dato, self.clave_relacion)

    @classmethod
    def _obtener_clave(cls, clave_dato: Clave, clave_relacion: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.RELACION, f"{clave_dato}:-|^|-:{clave_relacion}")

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            Tabla.insertar(
                cursor,
                dependencias[self.clave_dato],
                dependencias[self.clave_relacionado],
            )

        except Exception as err:
            raise ErrorInsertar(
                f"Al insertar relacion de claves: {self.clave_dato} y {self.clave_relacionado}",
                err,
            )
