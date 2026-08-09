import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from contenido.general.autore import Autore
from contenido.general.editorial import Editorial
from contenido.referencias.referencia import Referencia
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

from .autore_referencia import AutoreReferencia
from .tablas import TablaLibro as Tabla


@dataclass
class ReferenciaLibro:
    titulo: str
    subtitulo: str | None
    anio: int
    edicion: str | None
    volumen: int | None
    doi: str | None
    clave_editorial: Clave
    clave_referencia: Clave

    @classmethod
    def nombre_representativo(cls, archivo: Archivo) -> str:
        try:
            volumen = int(archivo.extra["volumen"])
        except:
            volumen = None

        try:
            titulo = archivo.extra["tituloObra"]
            subtitulo = archivo.extra.get("subtituloObra", None)
            edicion = archivo.extra.get("edicion", None)
            autores = archivo.extra["nombreAutores"]

        except Exception as e:
            loggear(
                LoggerNivel.FATAL,
                "No se pudo obtener el nombre representativo del libro",
            )
            raise e

        nombre = titulo
        if subtitulo:
            nombre += f", {subtitulo}"
        if edicion:
            nombre += f" Edicion {edicion}"
        if volumen:
            nombre += f" Vol N°{volumen}"

        autores = (f"{autore['nombre']} {autore['nombre']}" for autore in autores)
        nombre += f" escrito por: {', '.join(autores)}"

        return nombre

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        datos = []

        editorial = Editorial(archivo.extra["editorial"])
        datos.append(editorial)

        try:
            volumen = int(archivo.extra["volumen"])
        except:
            volumen = None

        try:
            libro = ReferenciaLibro(
                archivo.extra["tituloObra"],
                archivo.extra.get("subtituloObra", None),
                int(archivo.extra["anio"]),
                archivo.extra.get("edicion", None),
                volumen,
                archivo.extra.get("url", None),
                editorial.obtener_clave(),
                Referencia._obtener_clave(archivo.extra["numReferencia"]),
            )
            datos.append(libro)

        except Exception as err:
            raise ErrorParseo("No se pudo crear ref de libro", err)

        clave_libro = libro.obtener_clave()
        for autore in archivo.extra["nombreAutores"]:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.libro(
                clave_libro, autore.obtener_clave()
            )
            datos.append(autore_referencia)

        return datos

    def dependo(self) -> list[Clave]:
        return [self.clave_editorial, self.clave_referencia]

    def obtener_clave(self) -> Clave:
        return ReferenciaLibro._obtener_clave(self.clave_referencia)

    @classmethod
    def _obtener_clave(cls, referencia: int | str | Clave) -> Clave:
        hash = Referencia._obtener_clave(referencia).hash
        return Clave(TipoNodo.REFERENCIA_LIBRO, hash)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo:
        try:
            id_libro = Tabla.insertar(
                cursor,
                self.titulo,
                self.subtitulo,
                self.anio,
                self.edicion,
                self.volumen,
                self.doi,
                dependencias[self.clave_editorial],
                dependencias[self.clave_referencia],
            )

        except Exception as err:
            raise ErrorInsertar(f"Al insertar ref libro: {self.titulo}", err)

        if id_libro is None:
            raise ErrorIdNoGenerado("El libro insertado no tiene id")

        return Nodo(id_libro, self.obtener_clave())
