import yaml
import re

from dataclasses import dataclass
from typing import Dict, Any

from logger import loggear, LoggerNivel
from archivos.archivo import Archivo as ArchivoGeneral
from archivos.metadata import Metadata, Extension

from .texto import Texto

@dataclass
class Archivo:
    metadata: Metadata
    extra: Dict[str, Any]
    contenido: Texto

    @classmethod
    def parsear(cls, archivo: ArchivoGeneral) -> Archivo:
        if archivo.metadata.extension != Extension.MARKDOWN:
            mensaje = f"El archivo, no es de markdown, es de {archivo.metadata.extension} pero se intento parsea como uno"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        # Leer archivo
        texto = archivo.contenido.decode("utf-8").strip()
        extra: Dict[str, Any] = {}

        # busca la sección de yaml que esta separada por los primeros --- y después termina con los ---
        resultado = re.search("-{3,}[ ]*[\n]*(.*?)-{3,}[ ]*[\n]*", texto, re.DOTALL)
        if resultado is not None and resultado.span()[0] == 0:
            seccion_general = resultado.group()
            seccion_yaml = re.split("-{3,}[ ]*[\n]*", seccion_general)[1]

            extra = yaml.load(seccion_yaml, Loader = yaml.SafeLoader)
            texto = texto.replace(seccion_general, "")

        else:
            loggear(LoggerNivel.WARN, f"En el archivo: {archivo.metadata.nombre} no se tiene yaml")

        contenido = Texto.parsear(texto)
        if contenido is None:
            contenido = Texto("")

        return Archivo(
            archivo.metadata,
            extra,
            contenido
        )
