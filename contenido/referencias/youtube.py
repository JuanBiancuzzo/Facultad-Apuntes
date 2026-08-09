import datetime as dt
import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from dependencias import Clave, Dato
from logger import LoggerNivel, loggear

from .referencia import Referencia
from .tablas import TablaYoutube as Tabla


@dataclass
class ReferenciaYoutube(Dato):
    nombre_video: str
    nombre_canal: str
    fecha_video: dt.date
    url: str
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        return [
            ReferenciaYoutube(
                archivo.extra["nombreVideo"],
                archivo.extra["nombreCanal"],
                archivo.extra["fecha"],
                archivo.extra["url"],
                Referencia._obtener_clave(int(archivo.extra["numReferencia"])),
            )
        ]

    def dependo(self) -> list[Clave]:
        return [self.clave_referencia]

    def obtener_clave(self) -> Clave:
        return ReferenciaYoutube._obtener_clave(self.clave_referencia)

    @classmethod
    def _obtener_clave(cls, clave_referencia: Clave) -> Clave:
        return Clave(TipoNodo.REFERENCIA_YOUTUBE, clave_referencia.hash)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> None:
        try:
            Tabla.insertar(
                cursor,
                self.nombre_video,
                self.nombre_canal,
                self.fecha_video,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as e:
            loggear(
                LoggerNivel.FATAL,
                f"Al insertar referencia de youtuve, con {self.nombre_video} de {self.nombre_canal}",
            )
            raise e
