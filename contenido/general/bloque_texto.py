import sqlite3 as sql
from dataclasses import dataclass
from typing import Dict, List

from archivos import Texto
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general import tablas as ts

@dataclass
class BloqueTexto(Dato):
    texto: Texto

    def dependo(self) -> List[Clave]: 
        return super().dependo()

    def obtener_clave(self) -> Clave: 
        return BloqueTexto._obtener_clave(self.texto)

    @classmethod
    def _obtener_clave(cls, texto: Texto) -> Clave:
        return Clave(TipoNodo.BLOQUE_TEXTO, texto.hash())

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_texto = ts.TablaBloqueTexto.insertar(cursor, self.texto.bjson())

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar bloque de texto {self.texto.texto[:20]}")
            raise e 

        if id_texto is None:
            mensaje = f"El texto insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_texto, self.obtener_clave())
