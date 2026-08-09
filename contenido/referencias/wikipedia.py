import datetime as dt
import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorInsertar, ErrorParseo
from dependencias import Clave, Dato

from .referencia import Referencia
from .tablas import TablaWikipedia as Tabla


@dataclass
class ReferenciaWikipedia(Dato):
    nombre_articulo: str
    fecha: dt.date
    url: str
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        try:
            return [
                ReferenciaWikipedia(
                    archivo.extra["nombreArticulo"],
                    archivo.extra["fecha"],
                    archivo.extra["url"],
                    Referencia._obtener_clave(int(archivo.extra["numReferencia"])),
                )
            ]

        except Exception as err:
            raise ErrorParseo("Al crear referencia de wikipedia", err)

    def dependo(self) -> list[Clave]:
        return [self.clave_referencia]

    def obtener_clave(self) -> Clave:
        return ReferenciaWikipedia._obtener_clave(self.clave_referencia)

    @classmethod
    def _obtener_clave(cls, clave_referencia: Clave) -> Clave:
        return Clave(TipoNodo.REFERENCIA_WIKIPEDIA, clave_referencia.hash)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> None:
        try:
            Tabla.insertar(
                cursor,
                self.nombre_articulo,
                self.fecha,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as err:
            mensaje = f"Al insertar referencia de wikipedia, con {self.nombre_articulo}"
            raise ErrorInsertar(mensaje, err)
