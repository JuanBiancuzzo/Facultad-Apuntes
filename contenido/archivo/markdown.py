import re
from dataclasses import dataclass
from typing import Any

import yaml

from archivos.archivo import Archivo as ArchivoGeneral
from archivos.metadata import Extension, Metadata
from contenido.errores import ErrorParseo
from logger import LoggerNivel, loggear

from .texto import Texto


@dataclass
class ArchivoMarkdown:
    metadata: Metadata
    extra: dict[str, Any]
    contenido: Texto

    @classmethod
    def parsear(cls, archivo: ArchivoGeneral) -> ArchivoMarkdown:
        if archivo.metadata.extension != Extension.MARKDOWN:
            mensaje = f"El archivo, no es de markdown, es de {archivo.metadata.extension} pero se intento parsea como uno"
            raise ErrorParseo(mensaje)

        # Leer archivo
        texto = archivo.contenido.decode("utf-8").strip()
        extra: dict[str, Any] = {}

        # busca la sección de yaml que esta separada por los primeros --- y después termina con los ---
        resultado = re.search("-{3,}[ ]*[\n]*(.*?)-{3,}[ ]*[\n]*", texto, re.DOTALL)
        if resultado is not None and resultado.span()[0] == 0:
            seccion_general = resultado.group()
            seccion_yaml = re.split("-{3,}[ ]*[\n]*", seccion_general)[1]

            extra = yaml.load(seccion_yaml, Loader=yaml.SafeLoader)
            texto = texto.replace(seccion_general, "")

        else:
            loggear(
                LoggerNivel.WARN,
                f"En el archivo: {archivo.metadata.nombre} no se tiene yaml",
            )

        contenido = Texto.parsear(texto)
        if contenido is None:
            contenido = Texto("")

        return ArchivoMarkdown(archivo.metadata, extra, contenido)
