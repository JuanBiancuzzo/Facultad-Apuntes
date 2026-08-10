from archivos import ArchivoGeneral
from archivos import Extension
from contenido.archivo import Archivo, ArchivoImagen, ArchivoMarkdown
from contenido.general import TipoImagen
from logger.logger import LoggerNivel, loggear


def preprocesar(archivo_general: ArchivoGeneral) -> Archivo | None:
    extension = archivo_general.metadata.extension
    if extension == Extension.MARKDOWN:
        return ArchivoMarkdown.parsear(archivo_general)

    elif TipoImagen.es_imagen(extension):
        return ArchivoImagen.parsear(archivo_general)

    else:
        loggear(LoggerNivel.WARN, f"Extension de archivo ({extension!s}) no registrado")
        return None
