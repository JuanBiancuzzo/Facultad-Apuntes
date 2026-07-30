from dataclasses import dataclass
from enum import IntEnum, auto

from dependencias import Clave

from contenido.tablas import Tablas, TablasFacultad as Tabla
from contenido.general.link import Link 
from contenido.archivo.nodos import SER_ID
from contenido.serializacion import Ser

@dataclass
class Carrera:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * La palabra de la carrera
    """
    tabla: Tablas = Tabla.CARRERAS

    class Tipo(IntEnum):
        NOMBRE  = 0

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Carrera.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

@dataclass
class Materia:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * El nombre de la materia
     * Una parte en particular del resumen
    """
    tabla: Tablas = Tabla.MATERIAS

    class Tipo(IntEnum):
        NOMBRE  = 0
        RESUMEN = auto()

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Materia.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_resumen(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Materia.Tipo.RESUMEN, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

@dataclass
class Tema:
    """
    Tenemos que puede apuntar a:
     * El archivo en general
     * El nombre del tema
     * Una parte en particular del resumen
    """
    tabla: Tablas = Tabla.TEMA

    class Tipo(IntEnum):
        NOMBRE  = 0
        RESUMEN = auto()

    @classmethod
    def gen(cls, clave: Clave) -> Link:
        return Link.parsear_entero(cls.tabla, clave)

    @classmethod
    def gen_nombre(cls, clave: Clave) -> Link:
        info = Ser.pack(Ser.Uint8, Tema.Tipo.NOMBRE)
        return Link.parsear(cls.tabla, clave, info)

    @classmethod
    def gen_resumen(cls, clave: Clave, id_texto: int) -> Link:
        info = Ser.pack(
            Ser.comb(Ser.Uint8, SER_ID),
            Tema.Tipo.RESUMEN, id_texto,
        )
        return Link.parsear(cls.tabla, clave, info)

