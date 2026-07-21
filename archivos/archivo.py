import os
import yaml
import re

from dataclasses import dataclass
from typing import Dict, Tuple, Any
from enum import StrEnum
from pathlib import Path
import datetime as dt

from .texto import Texto
from .metadata import Metadata, Extension
from logger import loggear, LoggerNivel

class ErrorArchvio(StrEnum):
    EXTENSION_INVALIDA = "La extension no esta registrada"

@dataclass
class Archivo:
    metadata: Metadata
    extra: Dict[str, Any]
    contenido: Texto
    blob: bytes

    @classmethod 
    def crear_blob(cls, metadata: Metadata, blob: bytes) -> Archivo:
        return Archivo(metadata, {}, Texto(""), blob)


    @classmethod 
    def crear_md(cls, metadata: Metadata, extra: Dict[str, Any], contenido: Texto):
        return Archivo(metadata, extra, contenido, b'') 

    @classmethod
    def parsear(cls, nombre_archivo: str, root_path: str) -> Tuple[Archivo | None, ErrorArchvio | None]:
        basename = os.path.basename(nombre_archivo)
        filename, ext = os.path.splitext(basename)

        directorio = os.path.dirname(nombre_archivo).replace(root_path, "")
        _, _, directorio = os.path.splitroot(directorio)

        extension = Extension.de_texto(ext.replace(".", ""))
        if extension is None:
            print(nombre_archivo)
            return None, ErrorArchvio.EXTENSION_INVALIDA
        
        stadisticas = Path(nombre_archivo).stat()
        metadata = Metadata(
            filename,
            directorio,
            extension,
            dt.datetime.fromtimestamp(stadisticas.st_ctime, tz = dt.timezone.utc),
        )

        match extension:
            case Extension.MARKDOWN:
                return cls._parsear_md(metadata, nombre_archivo), None

            case _:
                return cls._parsear_blob(metadata, nombre_archivo)

    @classmethod
    def _parsear_md(cls, metadata: Metadata, nombre_archivo: str) -> Archivo:
        # Leer archivo
        texto = ""
        extra = {}
        with open(nombre_archivo, 'r', encoding="utf-8") as fd_archivo:
            texto = fd_archivo.read().strip() + "\n"

            # busca la sección de yaml que esta separada por los primeros --- y después termina con los ---
            resultado = re.search("-{3,}[ ]*[\n]*(.*?)-{3,}[ ]*[\n]", texto, re.DOTALL)
            if resultado is not None and resultado.span()[0] == 0:
                seccion_general = resultado.group()
                seccion_yaml = re.split("-{3,}[ ]*[\n]*", seccion_general)[1]

                extra = yaml.load(seccion_yaml, Loader = yaml.SafeLoader)
                texto = texto.replace(seccion_general, "")
            else:
                loggear(LoggerNivel.WARN, f"En el archivo: {nombre_archivo} no se tiene yaml")

        contenido = Texto.parsear(texto)
        if contenido is None:
            contenido = Texto()

        return Archivo.crear_md(metadata, extra, contenido)

    @classmethod
    def _parsear_blob(cls, metadata: Metadata, nombre_archivo: str) -> Tuple[Archivo | None, ErrorArchvio | None]:
        with open(nombre_archivo, 'rb') as fd_archivo:
            blob = fd_archivo.read()
        return Archivo.crear_blob(metadata, blob), None
