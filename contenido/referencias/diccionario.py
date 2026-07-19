import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
import datetime as dt

from archivos.archivo import Archivo
from dependencias import Clave, Nodo, Dato
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.editorial import Editorial
from .referencia import Referencia
from .tablas import TablaDiccionario as Tabla

@dataclass
class ReferenciaDiccionario(Dato):
    palabra: str
    fecha: dt.date
    diccionario: str
    url: str

    clave_editorial: Clave
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        editorial = Editorial(archivo.extra["editorial"])

        return [editorial, ReferenciaDiccionario(
            archivo.extra["palabraBuscada"],
            archivo.extra["fecha"],
            archivo.extra["nombreDiccionario"],
            archivo.extra["url"],
            editorial.obtener_clave(),
            Referencia._obtener_clave(int(archivo.extra["numReferencia"])),
        )]

    def dependo(self) -> List[Clave]: 
        return [ self.clave_editorial, self.clave_referencia ] 

    def obtener_clave(self) -> Clave: 
        return ReferenciaDiccionario._obtener_clave(self.clave_referencia) 

    @classmethod
    def _obtener_clave(cls, referencia: int | Clave) -> Clave: 
        if type(referencia) is int:
            hash = Referencia._obtener_clave(referencia).hash

        elif type(referencia) is Clave:
            hash = referencia.hash

        else:
            mensaje = f"Al obtener clave de diccionario no es numero ni clave"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje) 

        return Clave(TipoNodo.REFERENCIA_DICCIONARIO_ONLINE, hash)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_diccionario = Tabla.insertar(
                cursor,
                self.palabra,
                self.fecha,
                self.diccionario,
                self.url,
                dependencias[self.clave_editorial],
                dependencias[self.clave_referencia],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar referencia de palabra de diccionario, con {self.palabra}")
            raise e 

        if id_diccionario is None:
            mensaje = f"La referencia de diccionario insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_diccionario, self.obtener_clave())
