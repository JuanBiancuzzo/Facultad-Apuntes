import sqlite3 as sql
from typing import dict, list

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.embedding import Embedding
from contenido.links import coleccion as link
from contenido.referencias.diccionario import ReferenciaDiccionario
from dependencias import Clave, Dato, Nodo

from .tablas import TablaDiccionario as Tabla


class Diccionario(Dato):
    clave_definicion: Clave
    clave_ref_diccionario: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        datos = []

        texto = BloqueTexto(archivo.contenido)
        datos.append(texto)

        diccionario = Diccionario(
            texto.obtener_clave(),
            ReferenciaDiccionario._obtener_clave(archivo.extra["numReferencia"]),
        )
        datos.append(diccionario)

        clave_diccionario = diccionario.obtener_clave()
        datos.append(Diccionario._obtener_link(clave_diccionario))

        palabra = archivo.extra["palabraBuscada"]
        link_palabra = link.Diccionario.gen_nombre(clave_diccionario)
        datos.extend(Embedding.parsear((link_palabra, palabra)))

        return datos

    def dependo(self) -> list[Clave]:
        return [self.clave_definicion, self.clave_ref_diccionario]

    def obtener_clave(self) -> Clave:
        return Diccionario._obtener_clave(self.clave_ref_diccionario)

    @classmethod
    def _obtener_clave(cls, clave_ref_diccionario: Clave) -> Clave:
        return Clave.de_texto(
            TipoNodo.DICCIONARIO, f"{clave_ref_diccionario}>|>{clave_ref_diccionario}"
        )

    def obtener_link(self) -> link.Link:
        return Diccionario._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Diccionario.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_diccionario = Tabla.insertar(
                cursor,
                dependencias[self.clave_definicion],
                dependencias[self.clave_ref_diccionario],
            )

        except Exception as err:
            raise ErrorInsertar(
                f"Al insertar coleccion de diccionario, con clave de definicion: {self.clave_ref_diccionario}",
                err,
            )

        if id_diccionario is None:
            raise ErrorIdNoGenerado("La definicion insertada no tiene id")

        return Nodo(id_diccionario, self.obtener_clave())
