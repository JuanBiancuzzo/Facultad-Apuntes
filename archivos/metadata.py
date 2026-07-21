import datetime as dt
import os

from typing import Self
from dataclasses import dataclass
from enum import StrEnum

class Extension(StrEnum):
    MARKDOWN = "md"
    PNG = "png"
    WEBP = "webp"
    JPG = "jpg"
    JPEG = "jpeg"
    GIF = "gif"
    PDF = "pdf"
    SVG = "svg"
    CANVAS = "canvas"

    @classmethod
    def de_texto(cls, texto: str) -> Self | None:
        for extension in cls:
            if extension == texto:
                return extension
        return None

@dataclass
class Metadata:
    nombre: str # sin extension
    directorio: str # directorio desde la raiz
    extension: Extension
    dia_creacion: dt.datetime

    def nombre_base(self) -> str: 
        return f"{self.nombre}.{self.extension}"

    def path(self) -> str:
        nombre_base = f"{self.nombre}.{self.extension}"
        return os.path.join(self.directorio, nombre_base)
