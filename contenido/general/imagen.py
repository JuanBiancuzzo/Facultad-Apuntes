import sqlite3 as sql
from dataclasses import dataclass
from enum import StrEnum
from typing import Dict, List

from archivos import Archivo, Extension
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaImagen as Tabla

class TipoImagen(StrEnum):
    PNG = Extension.PNG
    WEBP = Extension.WEBP
    JPG  = Extension.JPG 
    JPEG = Extension.JPEG
    SVG  = Extension.SVG 

    @classmethod
    def es_imagen(cls, extension: Extension) -> bool:
        return any(( tipo == extension for tipo in cls ))

    @classmethod
    def de_extension(cls, extension: Extension) -> TipoImagen | None:
        if cls.es_imagen(extension):
            return TipoImagen(extension)
        return None

@dataclass
class Imagen(Dato):
    tipo: TipoImagen
    path: str
    blob: bytes

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        tipo = TipoImagen.de_extension(archivo.metadata.extension)
        if tipo is None:
            mensaje = f"Creando imagen, no es un tipo aceptado: {archivo.metadata.extension}"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return [Imagen(tipo, archivo.metadata.path(), archivo.blob)]

    def dependo(self) -> List[Clave]: 
        return super().dependo()

    def obtener_clave(self) -> Clave: 
        return Imagen._obtener_clave(self.path)

    @classmethod
    def _obtener_clave(cls, path_imagen: str) -> Clave:
        return Clave.de_texto(TipoNodo.IMAGEN, path_imagen)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_imagen = Tabla.insertar(cursor, self.tipo, self.blob)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar imagen {self.path}")
            raise e 

        if id_imagen is None:
            mensaje = f"La imagen insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_imagen, self.obtener_clave())
