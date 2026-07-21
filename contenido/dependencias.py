from enum import IntEnum, auto

class TipoNodo(IntEnum):
    _INICIO = 0

    # Genearl y extra
    AUTORE = auto()
    BLOQUE_TEXTO = auto()
    EDITORIAL = auto()
    BIBLIOGRAFIA = auto()
    IMAGEN = auto()

    # Facultad
    CARRERA = auto()
    MATERIA = auto()
    CUATRIMESTRE = auto()
    PLAN_DE_ESTUDIO = auto() 

    # Coleccion
    EJERCICIO = auto()
    GUIA = auto()
    EVALUACION = auto()
    AJEDREZ = auto()
    LIBRO = auto()
    CAPITULO = auto()
    DICCIONARIO = auto()

    REFERENCIA = auto()
    AUTORES_REFERENCIA = auto()
    REFERENCIA_WEBSITE = auto()
    REFERENCIA_WIKIPEDIA = auto()
    REFERENCIA_YOUTUBE = auto()
    REFERENCIA_LIBRO = auto()
    REFERENCIA_CAPITULO_LIBRO = auto()
    REFERENCIA_DICCIONARIO_ONLINE = auto()
