from dataclasses import dataclass

from archivos.archivo import Archivo as ArchivoGeneral
from archivos.metadata import Metadata
from contenido.errores import ErrorParseo
from contenido.general import TipoImagen


@dataclass
class ArchivoImagen:
    metadata: Metadata
    contenido: bytes

    @classmethod
    def parsear(cls, archivo: ArchivoGeneral) -> ArchivoImagen:
        if TipoImagen.es_imagen(archivo.metadata.extension):
            mensaje = f"El archivo, no es una imagen, es de {archivo.metadata.extension} pero se intento parsea como uno"
            raise ErrorParseo(mensaje)

        return ArchivoImagen(archivo.metadata, archivo.contenido)
