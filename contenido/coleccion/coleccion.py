import sqlite3 as sql

from typing import Self, Dict, List
from dataclasses import dataclass
from enum import Enum

from archivos import Archivo
from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.bloque_texto import BloqueTexto
from .tablas import TablaColeccion as Tabla

class TipoColeccion(Enum):
    DICCIONARIO = "Diccionario"
    AJEDREZ = "Ajedrez"
    COMPONENTES = "Componentes"
    ESTRUCTURA = "Estructura de datos"
    DISTRIBUCIONES = "Distribuciones"
    DOCUMENTOS_LEGALES = "Artículos"
    EJERCICIOS = "Ejercicios"
    IMPRESION_3D = "Filamentos"
    LIBRERIAS = "Librerias"
    BIBLIOTECTA = "Biblioteca"
    PAPERS = "Papers"
    PROGRAMAS = "Programas"
    RECETAS = "Recetas"
    BLOQUE_MATEMATICA = "Teorema, proposiciones y observaciones"

    @classmethod
    def de_texto(cls, texto: str) -> Self | None:
        texto = texto.strip().lower()
        for extension in cls:
            valor_extension = (extension.value, extension.texto())
            if any(map( lambda v: v.lower() == texto, valor_extension )):
                return extension
        return None

    def texto(self) -> str:
        match self:
            case TipoColeccion.DOCUMENTOS_LEGALES:
                return "Documentos legales"

            case TipoColeccion.IMPRESION_3D:
                return "Impresiones 3D"

            case TipoColeccion.BLOQUE_MATEMATICA:
                return "Bloque de matematica"

            case _: return self.value

@dataclass
class Coleccion(Dato):
    tipo: TipoColeccion
    estado: str
    clave_descripcion: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        tipo = TipoColeccion.de_texto(archivo.metadata.nombre)
        if tipo is None:
            mensaje = f"El tipo de coleccion '{archivo.metadata.nombre}' no esta siendo manejada"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        datos = []
        descripcion = BloqueTexto(archivo.contenido)
        datos.append(descripcion)

        coleccion = Coleccion(
            tipo, 
            archivo.extra["estado"],
            descripcion.obtener_clave(),
        )
        datos.append(coleccion)

        return datos

    def dependo(self) -> List[Clave]: 
        return [ self.clave_descripcion ]

    def obtener_clave(self) -> Clave: 
        return Coleccion._obtener_clave(self.tipo)
    
    @classmethod
    def _obtener_clave(cls, tipo: str | TipoColeccion) -> Clave: 
        if type(tipo) is str:
            nuevo_tipo = TipoColeccion.de_texto(tipo)
            if nuevo_tipo is None:
                mensaje = f"El tipo de coleccion {tipo} no es posible para obtener clave"
                loggear(LoggerNivel.FATAL, mensaje)
                raise Exception(mensaje)
            tipo = nuevo_tipo

        if type(tipo) is TipoColeccion:
            return Clave.de_texto(TipoNodo.COLECCION, f"{tipo}-{tipo}")

        mensaje = f"El {tipo} con type {type(tipo)} no es un string o un tipo, por lo que no se puede obtener clave"
        loggear(LoggerNivel.FATAL, mensaje)
        raise Exception(mensaje)
        

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try: 
            Tabla.insertar(
                cursor,
                self.tipo.texto(),
                self.estado,
                dependencias[self.clave_descripcion],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar coleccion con nombre: {self.tipo}")
            raise e

        return None

