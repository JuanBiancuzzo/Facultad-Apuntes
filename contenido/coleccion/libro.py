import os
import sqlite3 as sql
from dataclasses import dataclass
from typing import dict, iterable, list, tuple

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.embedding import Embedding
from contenido.general.etapa import Etapa
from contenido.general.imagen import Imagen
from contenido.links import coleccion as link
from contenido.referencias.libro import ReferenciaLibro
from dependencias import Clave, Dato, Nodo

from .tablas import TablaLibro as Tabla

CARPETA_COVER = "covers"


@dataclass
class Libro(Dato):
    etapa: Etapa

    clave_resumen: Clave | None
    clave_cover: Clave | None
    clave_ref_libro: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        datos = []

        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            raise ErrorParseo(
                f"Al intentar crear libro {archivo.metadata.nombre}, no tiene etapa"
            )

        clave_cover = None
        if "cover" in archivo.extra:
            clave_cover = Imagen._obtener_clave(
                os.path.join(
                    archivo.metadata.directorio,
                    CARPETA_COVER,
                    archivo.extra["cover"],
                )
            )

        bloque_resumen: BloqueTexto | None = None

        clave_ref_libro = ReferenciaLibro._obtener_clave(archivo.extra["numReferencia"])
        libro = Libro(
            etapa,
            bloque_resumen.obtener_clave() if bloque_resumen else None,
            clave_cover,
            clave_ref_libro,
        )
        datos.append(libro)

        clave_libro = libro.obtener_clave()
        datos.append(Libro._obtener_link(clave_libro))

        nombre = ReferenciaLibro.nombre_representativo(archivo)
        clave_nommbre = link.Libro.gen_nombre(clave_libro)
        datos.extend(Embedding.parsear((clave_nommbre, nombre)))

        if bloque_resumen is not None:
            pares: iterable[tuple[link.Link, str]] = (
                (link.Libro.gen_resumen(clave_libro, id), texto)
                for id, texto in bloque_resumen.texto.chunks()
            )
            datos.extend((link for link, _ in pares))
            datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> list[Clave]:
        dependencias = [self.clave_ref_libro]
        if self.clave_resumen:
            dependencias.append(self.clave_resumen)
        if self.clave_cover:
            dependencias.append(self.clave_cover)
        return dependencias

    def obtener_clave(self) -> Clave:
        return Libro._obtener_clave(self.clave_ref_libro)

    @classmethod
    def _obtener_clave(cls, clave_ref_libro: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.LIBRO, f"{clave_ref_libro}<|>{clave_ref_libro}")

    def obtener_link(self) -> link.Link:
        return Libro._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Libro.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_resumen = (
                dependencias[self.clave_resumen] if self.clave_resumen else None
            )
            id_cover = dependencias[self.clave_cover] if self.clave_cover else None

            id_libro = Tabla.insertar(
                cursor,
                self.etapa.value,
                id_resumen,
                id_cover,
                dependencias[self.clave_ref_libro],
            )

        except Exception as err:
            raise ErrorInsertar(
                f"Al insertar coleccion de libro, con clave de libro: {self.clave_ref_libro}, y lo que tengo es: {dependencias}",
                err,
            )

        if id_libro is None:
            raise ErrorIdNoGenerado("El libro insertado no tiene id")

        return Nodo(id_libro, self.obtener_clave())
