from dataclasses import dataclass
from enum import StrEnum

from archivos import ArchivoGeneral, Extension
from archivos.metadata import Metadata
from contenido.errores import ErrorParseo


class TipoImagen(StrEnum):
    PNG = Extension.PNG
    WEBP = Extension.WEBP
    JPG = Extension.JPG
    JPEG = Extension.JPEG
    SVG = Extension.SVG

    @classmethod
    def es_imagen(cls, extension: Extension) -> bool:
        return any(tipo == extension for tipo in cls)

    @classmethod
    def de_extension(cls, extension: Extension) -> TipoImagen | None:
        if cls.es_imagen(extension):
            return TipoImagen(extension)
        return None


@dataclass
class ArchivoImagen:
    metadata: Metadata
    contenido: bytes

    @classmethod
    def parsear(cls, archivo: ArchivoGeneral) -> ArchivoImagen:
        if not TipoImagen.es_imagen(archivo.metadata.extension):
            mensaje = f"El archivo, no es una imagen, es de {archivo.metadata.extension} pero se intento parsea como uno"
            raise ErrorParseo(mensaje)

        return ArchivoImagen(archivo.metadata, archivo.contenido)
