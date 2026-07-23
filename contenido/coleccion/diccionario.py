import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.bloque_texto import BloqueTexto
from contenido.referencias.diccionario import ReferenciaDiccionario
from .tablas import TablaDiccionario as Tabla

@dataclass
class Diccionario(Dato):
    clave_definicion: Clave 
    clave_ref_diccionario: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        texto = BloqueTexto(archivo.contenido)
        return [
            texto, 
            Diccionario(
                texto.obtener_clave(), 
                ReferenciaDiccionario._obtener_clave(int(archivo.extra["numReferencia"])),
            ),
        ]

    def dependo(self) -> List[Clave]: 
        return [ self.clave_definicion, self.clave_ref_diccionario ]

    def obtener_clave(self) -> Clave: 
        return Diccionario._obtener_clave(self.clave_ref_diccionario)

    @classmethod
    def _obtener_clave(cls, clave_ref_diccionario: Clave) -> Clave: 
        return Clave.de_texto(TipoNodo.DICCIONARIO, f"{clave_ref_diccionario}>|>{clave_ref_diccionario}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_diccionario = Tabla.insertar(
                cursor, 
                dependencias[self.clave_definicion],
                dependencias[self.clave_ref_diccionario], 
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar coleccion de diccionario, con clave de definicion: {self.clave_ref_diccionario}")
            raise e 

        if id_diccionario is None:
            mensaje = f"La definicion insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_diccionario, self.obtener_clave())
