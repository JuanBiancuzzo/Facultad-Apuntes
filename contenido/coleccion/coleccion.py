import sqlite3 as sql

from typing import Self, Iterable, Dict, List, Tuple
from dataclasses import dataclass
from enum import Enum

from dependencias import Dato, Nodo, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.archivo import Archivo
from contenido.general.embedding import Embedding
from contenido.general.bloque_texto import BloqueTexto
from contenido.links import coleccion as link
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
    nombre: TipoColeccion
    estado: str
    clave_descripcion: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        nombre = TipoColeccion.de_texto(archivo.metadata.nombre)
        if nombre is None:
            mensaje = f"El tipo de coleccion '{archivo.metadata.nombre}' no esta siendo manejada"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        datos = []
        descripcion = BloqueTexto(archivo.contenido)
        datos.append(descripcion)

        coleccion = Coleccion(
            nombre, 
            archivo.extra["estado"],
            descripcion.obtener_clave(),
        )
        datos.append(coleccion)

        clave_coleccion = coleccion.obtener_clave()
        link_coleccion = coleccion._obtener_link(clave_coleccion)
        datos.append(link_coleccion)

        link_nombre = link.Coleccion.gen_nombre(clave_coleccion)
        datos.extend(Embedding.parsear((link_nombre, nombre.texto())))

        pares: Iterable[Tuple[link.Link, str]] = (
            ( link.Coleccion.gen_descripcion(clave_coleccion, id), texto )
            for id, texto in descripcion.texto.chunks()
        )
        datos.extend(( link for link, _ in pares ))
        datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> List[Clave]: 
        return [ self.clave_descripcion ]

    def obtener_clave(self) -> Clave: 
        return Coleccion._obtener_clave(self.nombre)
    
    @classmethod
    def _obtener_clave(cls, nombre: str | TipoColeccion) -> Clave: 
        if type(nombre) is str:
            nuevo_nombre = TipoColeccion.de_texto(nombre)
            if nuevo_nombre is None:
                mensaje = f"El nombre de coleccion {nombre} no es posible para obtener clave"
                loggear(LoggerNivel.FATAL, mensaje)
                raise Exception(mensaje)
            nombre = nuevo_nombre

        if type(nombre) is TipoColeccion:
            return Clave.de_texto(TipoNodo.COLECCION, f"{nombre}-{nombre}")

        mensaje = f"El {nombre} con type {type(nombre)} no es un string o un nombre, por lo que no se puede obtener clave"
        loggear(LoggerNivel.FATAL, mensaje)
        raise Exception(mensaje)

    def obtener_link(self) -> link.Link: 
        return Coleccion._obtener_link(self.obtener_clave())
        
    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link: 
        return link.Coleccion.gen(clave)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_tabla = Tabla.insertar(
                cursor,
                self.nombre.texto(),
                self.estado,
                dependencias[self.clave_descripcion],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar coleccion con nombre: {self.nombre}")
            raise e

        if id_tabla is None:
            mensaje = f"La coleccion insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_tabla, self.obtener_clave())

