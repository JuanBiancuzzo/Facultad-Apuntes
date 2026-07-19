from enum import Enum

class Etapa(Enum):
    SIN_EMPEZAR = "sin-empezar"
    EMPEZADO = "empezado"
    AMPLIAR = "ampliar"
    TERMINADO = "terminado"

    @classmethod
    def de_texto(cls, texto: str) -> Etapa | None:
        for extension in cls:
            if extension.value == texto:
                return extension
        return None
