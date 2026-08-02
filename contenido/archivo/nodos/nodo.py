from hashlib import shake_256
from typing import Tuple
from collections.abc import Callable
from abc import ABC, abstractmethod
from enum import IntEnum, auto

from contenido.serializacion import Ser

"""
Consideraciones generales:
 * Cuando se serialicen todos los strings, realmente tener una
    cadena de caracteres utf8's de todos los strings concatenados
    y en cada estructura, se utilizan un indice de inicio y final
    sobre esta estructura

 * La idea general con los id's es generarlos a partir del contenido
    que contienen, para que sean deterministicos. Pero solo es para 
    este momento como forma de vincularlas, ya que en obsidian no 
    tenia una forma particular de esto. Despues se deberia generar 
    id's de forma aleatoria, ya que cada bloque deberia ser unico

    Esto implica que en la serializacion se tiene que incluir el id,
    que ya contiene el tipo, por lo que se puede hacer que el id sea
    un numero de uint64, donde el primer byte sea el tipo, y los 3
    bytes restantes el id

 * Acompañando lo anterior, se entiende que cualquier tipo de estandar
    que se utilice para generar los id's es completamente arbitrario y
    no forma parte de la especificacion de la estructura
"""

SER_ID = Ser.Uint64

class TipoNodo(IntEnum):
    # General
    DOCUMENTO  = 0
    PARRAFO    = auto()
    HEADER     = auto()
    LINEA      = auto()
    CODIGO     = auto()
    COMENTARIO = auto()
    ECUACION   = auto()
    IMAGEN     = auto()
    REFERENCIA = auto()
    CALLOUT    = auto()
    TABLA      = auto()
    BREAK      = auto()

    # Inline
    TEXTO_PLANO       = auto()
    CODIGO_INLINE     = auto()
    COMENTARIO_INLINE = auto()
    ECUACION_INLINE   = auto()
    IMAGEN_INLINE     = auto()
    REFERENCIA_INLINE = auto()
    LINEA_INLINE      = auto()

type FnGuardarTexto = Callable[[str], Tuple[int, int]]

class Nodo(ABC):
    @abstractmethod
    def id(self) -> int:
        """ Devuelve el id dependiendo de su tipo, y su contenido """

    def _combinar(self, tipo: TipoNodo, parcial_3bytes: bytes | None = None) -> int:
        parcial = b'' if parcial_3bytes is None else parcial_3bytes
        if len(parcial) < 3:
            parcial += b"\x00\x00\x00"
            parcial = parcial[:3]
        return int.from_bytes(Ser.pack(
            Ser.comb(Ser.Uint8, Ser.Bytes),
            tipo, parcial,
        ), "big", signed = False)

    @abstractmethod
    def string(self) -> str:
        """ 
            Muestra la estructura de forma necesario para luego
             crear un embedding, por lo que suele verse como texto
             plano sin ningun titulo de sintaxis por encima
        """
    
    @abstractmethod
    def reducir(self, exaustivo: bool) -> Nodo | None:
        """ 
            Esta es una forma de eliminar nodos que no sean 
             necesarios, como strings vacios, o tablas sin 
             elementos

            En el caso que se reduzca a ningun elemento, entonces
             deberia devolverse None
            
            Para el caso de tener elementos puramente como ayuda a
             el vinculo en el proceso de importar los archivos, 
             aca se eliminarian. Ejemeplo seria las tags
        """

    @abstractmethod
    def serializar(self, guadar_texto: FnGuardarTexto) -> bytes:
        """ 
            Guarda en el caso de ser necesario un string, y
             devuelve los bytes que se necesita para serializar

            No es necesario serializar los strings, utilizar los
             indices para hacer referencias a ellos

            Se asume que ya fue reducido los nodos, por lo que 
             cualquier consideracion de este estilo se puede
             descartar
        """

    @abstractmethod
    def vacio(self) -> bool:
        """ Devuelve si el nodo esta vacio """

def _hashear(texto: str) -> bytes:
    # Queremos 3 bytes, que son 6 numeros exadecimales
    # El //2 es porque es la cuenta que hace el codigo de shake_256 en esta libreria de python
    rep_string = shake_256(texto.encode("utf-8")).hexdigest(6 // 2)

    # Esta representacion tiene 6 caracteres, cada par es un byte
    return Ser.pack(
        Ser.comb(Ser.Uint8, Ser.Uint8, Ser.Uint8),
        *( int(rep_string[i:i+2], 16) for i in range(3) )
    )
