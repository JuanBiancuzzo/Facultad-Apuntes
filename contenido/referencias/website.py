import datetime as dt
import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar
from contenido.general.autore import Autore
from contenido.referencias.referencia import Referencia
from dependencias import Clave, Dato, Nodo

from .autore_referencia import AutoreReferencia
from .tablas import TablaWebsite as Tabla


@dataclass
class ReferenciaWeb(Dato):
    nombre_articulo: str
    nombre_pagina: str
    fecha: dt.date | None
    url: str
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        datos = []
        try:
            fecha = dt.date.strptime(archivo.extra["fechaPublicacion"], "%Y-%m-%d")

        except TypeError:
            fecha = archivo.extra["fechaPublicacion"]

        except:
            fecha = None

        website = ReferenciaWeb(
            archivo.extra["tituloArticulo"],
            archivo.extra["nombrePagina"],
            fecha,
            archivo.extra["url"],
            Referencia._obtener_clave(archivo.extra["numReferencia"]),
        )
        datos.append(website)

        clave_website = website.obtener_clave()
        for autore in archivo.extra["nombreAutores"]:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.website(
                clave_website, autore.obtener_clave()
            )
            datos.append(autore_referencia)

        return datos

    def dependo(self) -> list[Clave]:
        return [self.clave_referencia]

    def obtener_clave(self) -> Clave:
        return ReferenciaWeb._obtener_clave(self.clave_referencia)

    @classmethod
    def _obtener_clave(cls, referencia: int | str | Clave) -> Clave:
        hash = Referencia._obtener_clave(referencia).hash
        return Clave(TipoNodo.REFERENCIA_WEBSITE, hash)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo:
        try:
            id_website = Tabla.insertar(
                cursor,
                self.nombre_articulo,
                self.nombre_pagina,
                self.fecha,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as err:
            mensaje = f"Al insertar ref web del articulo {self.nombre_articulo}"
            raise ErrorInsertar(mensaje, err)

        if id_website is None:
            raise ErrorIdNoGenerado("La referencia web insertada no tiene id")

        return Nodo(id_website, self.obtener_clave())
