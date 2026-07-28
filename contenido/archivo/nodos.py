from typing import List
from dataclasses import dataclass
from enum import IntEnum, auto

"""
Consideraciones generales:
 * Cuando se serialicen todos los strings, realmente tener una
    cadena de caracteres utf8's de todos los strings concatenados
    y en cada estructura, se utilizan un indice de inicio y final
    sobre esta estructura
"""

class TipoNodo(IntEnum):
    DOCUMENTO       = 0
    TEXTO           = auto()
    PARRAFO         = auto()
    ECUACION_INLINE = auto()
    ECUACION_BLOQUE = auto()
    HEADER          = auto()
    LINK            = auto()
    TABLA           = auto()
    CODIGO_SIN_LENG = auto()
    CODIGO_CON_LENG = auto()
    CALLOUT         = auto()

type Nodo = Documento | Parrafo | Ecuacion | Link | Tabla | BloqueCodigo | BloqueCallout

@dataclass
class Documento:
    """
    Consideraciones:
     * Para serializar, crear un array de tuplas con el 
        primer elemento sea el tipo, y el segundo cuanto ocupa
        asi se puede deserializar mas simple
    """
    nodos: List[Nodo]

type SubTexto = String | Link | Ecuacion

@dataclass
class String(str):
    """
    Consideraciones:
     * Cuando se serialicen todos los strings, realmente tener una
        cadena de caracteres utf8's de todos los strings concatenados
        y en cada estructura, se utilizan un indice de inicio y final
        sobre esta estructura
    """
    def serializar(self) -> bytes: # ejemplo de como usar su info
        return bytes(self, "utf-8")

@dataclass
class Parrafo:
    """
    Consideraciones:
     * Para serializar, crear un array de tuplas con el 
        primer elemento sea el tipo, y el segundo cuanto ocupa
        asi se puede deserializar mas simple
    """
    textos: List[SubTexto]

@dataclass
class Ecuacion:
    """
    Consideraciones:
     * Usar el tipo para encodear si es bloque o inline
    """
    es_bloque: bool
    ecuacion: String

@dataclass
class Header:
    """
    Consideraciones:
     * El documento inferior a este no puede tener un nodo del 
        mismo o mayor nivel de header que el mismo
     * Al momento de serialzarlo usar un uint8 para el nivel, y
        usar un bit para representar si tiene o no linea debajo
     * Guardar el tamaño del parrafo para simplificar la 
        deserializacion
    """
    nivel: int
    con_linea: bool
    texto: Documento

@dataclass
class Link:
    """
    Consideraciones:
     * Al momento de serialzarlo crear un byte que tenga las
        flags de si tiene o no representacion, y si es interno
        al programa, o es un url externo
     * Guardar el tamaño del parrafo para simplificar la 
        deserializacion
    """
    es_interno: bool
    datos: bytes
    representacion: Parrafo | None

    path: String

class TipoAlinearColumna(IntEnum):
    IZQUIERDA = 0
    DERECHA = auto()
    CENTRO = auto()

@dataclass
class Tabla:
    """
    Consideraciones:
     * Vamos a forzar que siempre sean cuadradas
     * El largo de tipo_columnas es de ancho
     * Ver si se puede guardar de forma mas compacta el 
        tipo de alineacion, ya que usa solo 3 bits
     * El largo de datos es de ancho x alto
     * Al momento de serialzarlo, lo mejor seria agregar 
        la cantidad de bytes que ocupa datos, antes de
        guardarlos, asi al momento de leerlo es mas 
        simple la deserializacion
    """
    ancho: int
    alto: int
    tipo_columnas: List[TipoAlinearColumna]
    datos: List[Parrafo] 

@dataclass
class BloqueCodigo:
    """
    Consideraciones:
     * Usar el tipo para identificar si tiene o no un lenguaje
     * Crear dos ints que digan el largo del lenguaje y el texto
        en el caso q haya lenguaje, sino solo un int
    """
    lenguaje: String | None
    texto: String

class TipoAperturaCallout(IntEnum):
    DEFAULT = 0
    ABIERTO = auto()
    CERRADO = auto()

@dataclass
class BloqueCallout:
    """
    Consideraciones:
     * Aprovechar el espacio del tipo para agregar un bit que 
        represente si tiene un identificador, y otro por si
        tiene un nombre
     * Si tiene un parrafo se tiene que agregar el tamaño del 
        parrafo para simplificar la serializacion
    """
    tipo: TipoAperturaCallout
    identificador: String | None
    titulo: Parrafo | None
    texto: Documento
