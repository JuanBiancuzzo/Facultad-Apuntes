from dataclasses import dataclass
from enum import IntEnum, auto

from dependencias import Clave

from contenido.tablas import Tablas, TablasColeccion as Tabla
from contenido.general.link import Link 
from contenido.archivo.nodos import SER_ID
from contenido.serializacion import Ser

@dataclass
class Coleccion:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * La Nombre
     * La descripcion
    """
    tabla: Tablas = Tabla.COLECCION

    class Tipo(IntEnum):
        NOMBRE      = 0
        DESCRIPCION = auto()

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Coleccion.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_descripcion(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Coleccion.Tipo.DESCRIPCION, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

@dataclass
class Ajedrez:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
    En el futuro, posiblemente agregar uno para
     una descripcion del movimiento
    """
    tabla: Tablas = Tabla.AJEDREZ

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

@dataclass
class Diccionario:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * La palabra del diccionario
    """
    tabla: Tablas = Tabla.DICCIONARIO

    class Tipo(IntEnum):
        NOMBRE  = 0

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Diccionario.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

@dataclass
class Ejercicio:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * El nombre del ejercicio
     * Una parte en particular del enunciado
     * Una parte en particular de la resolucion
     * Una parte en particular del resultado
    """
    tabla: Tablas = Tabla.EJERCICIOS

    class Tipo(IntEnum):
        NOMBRE  = 0
        ENUNCIADO  = auto()
        RESOLUCION = auto()
        RESULTADO  = auto()

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Ejercicio.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_enunciado(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Ejercicio.Tipo.ENUNCIADO, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_resolucion(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Ejercicio.Tipo.RESOLUCION, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_resultado(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Ejercicio.Tipo.RESULTADO, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

@dataclass
class Libro:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * El nombre del libro
     * Una parte en particular del resumen
    """
    tabla: Tablas = Tabla.LIBRO

    class Tipo(IntEnum):
        NOMBRE  = 0
        RESUMEN = auto()

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Libro.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_resumen(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Libro.Tipo.RESUMEN, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

@dataclass
class Capitulo:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * El nombre del capitulo
     * Una parte en particular del resumen
    """
    tabla: Tablas = Tabla.CAPITULO

    class Tipo(IntEnum):
        NOMBRE  = 0
        RESUMEN = auto()

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Capitulo.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_resumen(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Capitulo.Tipo.RESUMEN, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

@dataclass
class Paper:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * El nombre del paper
     * Una parte en particular del resumen
    """
    tabla: Tablas = Tabla.PAPER

    class Tipo(IntEnum):
        NOMBRE  = 0
        RESUMEN = auto()

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Paper.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_resumen(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Paper.Tipo.RESUMEN, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)
