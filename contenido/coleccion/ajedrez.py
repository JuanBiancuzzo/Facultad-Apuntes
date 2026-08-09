import sqlite3 as sql
from dataclasses import dataclass
from enum import StrEnum

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from contenido.general.embedding import Embedding
from contenido.links import coleccion as link
from dependencias import Clave, Dato, Nodo

from .tablas import TablaAjedrez as Tabla


class TipoMovimientosAjedrez(StrEnum):
    APERTURA_ABIERTA = "Aperturas abiertas"
    APERTURA_SEMIABIERTA = "Aperturas semiabiertas"
    APERTURA_CERRADA = "Aperturas cerradas"
    APERTURA_SEMICERRADA = "Aperturas semicerradas"
    APERTURA_DE_FLANCO = "Aperturas de flanco"
    APERTURA_IRREGULARES = "Aperturas irregulares"

    MEDIO_JUEGO = "Medio juego"
    FINAL = "Final"


@dataclass
class Ajedrez(Dato):
    nombre: str
    tipo: TipoMovimientosAjedrez
    inicio: str
    movimientos: list[str]

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        datos = []

        try:
            ajedrez = Ajedrez(
                archivo.metadata.nombre,
                archivo.extra["tipo"],
                archivo.extra["inicio"],
                ["-".join(par) for par in archivo.extra["movimientos"]],
            )
            datos.append(ajedrez)

        except Exception as err:
            raise ErrorParseo(
                f"En el archivo: {archivo.metadata.nombre} no se pudo generar movimiento de ajedrez",
                err,
            )

        link_ajedrez = ajedrez.obtener_link()
        datos.append(link_ajedrez)

        datos.extend(Embedding.parsear((link_ajedrez, ajedrez.nombre)))

        return datos

    def dependo(self) -> list[Clave]:
        return super().dependo()

    def obtener_clave(self) -> Clave:
        return Ajedrez._obtener_clave(self.nombre, self.tipo, self.inicio)

    @classmethod
    def _obtener_clave(
        cls, nombre: str, tipo: TipoMovimientosAjedrez, inicio: str
    ) -> Clave:
        return Clave.de_texto(TipoNodo.AJEDREZ, f"{nombre}({tipo})->{inicio}")

    def obtener_link(self) -> link.Link:
        return Ajedrez._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Ajedrez.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo:
        try:
            id_ajedrez = Tabla.insertar(
                cursor,
                self.nombre,
                self.tipo,
                self.inicio,
                self.movimientos,
            )

        except Exception as err:
            mensaje = f"Al insertar movimiento de ajedrez con nombre: {self.nombre}"
            raise ErrorInsertar(mensaje, err)

        if id_ajedrez is None:
            raise ErrorIdNoGenerado("El movimiento de ajedrez insertado no tiene id")

        return Nodo(id_ajedrez, self.obtener_clave())
