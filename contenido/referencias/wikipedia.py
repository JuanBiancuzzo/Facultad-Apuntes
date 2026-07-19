import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
import datetime as dt

from archivos.archivo import Archivo
from dependencias import Clave, Dato
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .referencia import Referencia
from .tablas import TablaWikipedia as Tabla

@dataclass
class ReferenciaWikipedia(Dato):
    nombre_articulo: str
    fecha: dt.date
    url: str
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        try: 
            return [ReferenciaWikipedia(
                archivo.extra["nombreArticulo"],
                archivo.extra["fecha"],
                archivo.extra["url"],
                Referencia._obtener_clave(int(archivo.extra["numReferencia"])),
            )]

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al crear referencia de wikipedia")
            raise e

    def dependo(self) -> List[Clave]: 
        return [ self.clave_referencia ] 

    def obtener_clave(self) -> Clave: 
        return ReferenciaWikipedia._obtener_clave(self.clave_referencia) 

    @classmethod
    def _obtener_clave(cls, clave_referencia: Clave) -> Clave: 
        return Clave(TipoNodo.REFERENCIA_WIKIPEDIA, clave_referencia.hash)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try: 
            Tabla.insertar(
                cursor, 
                self.nombre_articulo, 
                self.fecha,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar referencia de wikipedia, con {self.nombre_articulo}")
            raise e 

