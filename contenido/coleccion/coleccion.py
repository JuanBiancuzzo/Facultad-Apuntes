import sqlite3 as sql
from collections.abc import Iterable
from dataclasses import dataclass
from enum import Enum
from typing import Self

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.embedding import Embedding
from contenido.links import coleccion as link
from dependencias import Clave, Dato, Nodo

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
            if any(v.lower() == texto for v in valor_extension):
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

            case _:
                return self.value


@dataclass
class Coleccion(Dato):
    nombre: TipoColeccion
    estado: str
    clave_descripcion: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        nombre = TipoColeccion.de_texto(archivo.metadata.nombre)
        if nombre is None:
            mensaje = f"El tipo de coleccion '{archivo.metadata.nombre}' no esta siendo manejada"
            raise ErrorParseo(mensaje)

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

        pares: Iterable[tuple[link.Link, str]] = (
            (link.Coleccion.gen_descripcion(clave_coleccion, id), texto)
            for id, texto in descripcion.texto.chunks()
        )
        datos.extend((link for link, _ in pares))
        datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> list[Clave]:
        return [self.clave_descripcion]

    def obtener_clave(self) -> Clave:
        return Coleccion._obtener_clave(self.nombre)

    @classmethod
    def _obtener_clave(cls, nombre: str | TipoColeccion) -> Clave:
        if type(nombre) is str:
            nuevo_nombre = TipoColeccion.de_texto(nombre)
            if nuevo_nombre is None:
                raise ErrorParseo(
                    f"El nombre de coleccion {nombre} no es posible para obtener clave"
                )

            nombre = nuevo_nombre

        if type(nombre) is not TipoColeccion:
            mensaje = f"El {nombre} con type {type(nombre)} no es un string o un nombre, por lo que no se puede obtener clave"
            raise ErrorParseo(mensaje)

        return Clave.de_texto(TipoNodo.COLECCION, f"{nombre}-{nombre}")

    def obtener_link(self) -> link.Link:
        return Coleccion._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Coleccion.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo:
        try:
            id_tabla = Tabla.insertar(
                cursor,
                self.nombre.texto(),
                self.estado,
                dependencias[self.clave_descripcion],
            )

        except Exception as err:
            raise ErrorInsertar(f"Al insertar coleccion con nombre: {self.nombre}", err)

        if id_tabla is None:
            raise ErrorIdNoGenerado("La coleccion insertada no tiene id")

        return Nodo(id_tabla, self.obtener_clave())
