import os

from dataclasses import dataclass
from pathlib import Path
import datetime as dt

from logger import loggear, LoggerNivel
from .metadata import Metadata, Extension

@dataclass
class Archivo:
    metadata: Metadata
    contenido: bytes

    @classmethod
    def parsear(cls, nombre_archivo: str, root_path: str) -> Archivo:
        basename = os.path.basename(nombre_archivo)
        filename, ext = os.path.splitext(basename)

        directorio = os.path.dirname(nombre_archivo).replace(root_path, "")
        _, _, directorio = os.path.splitroot(directorio)

        extension = Extension.de_texto(ext.replace(".", ""))
        if extension is None:
            mensaje = f"La extension '{extension}' no esta registrada"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        with open(nombre_archivo, 'rb') as fd_archivo:
            blob = fd_archivo.read()
        
        stadisticas = Path(nombre_archivo).stat()
        return Archivo(
            Metadata(
                filename,
                directorio,
                extension,
                dt.datetime.fromtimestamp(stadisticas.st_ctime, tz = dt.timezone.utc),
            ),
            blob,
        )
