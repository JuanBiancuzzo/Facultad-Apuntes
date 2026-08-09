import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar
from contenido.general.autore import Autore
from contenido.referencias.referencia import Referencia
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

from .autore_referencia import AutoreReferencia
from .tablas import TablaPaper as Tabla


@dataclass
class ReferenciaPaper:
    titulo: str
    anio: int
    doi: str | None
    url: str | None
    clave_referencia: Clave

    @classmethod
    def nombre_representativo(cls, archivo: Archivo) -> str:
        nombre = archivo.extra["tituloInforme"]

        autores = archivo.extra.get("autores")
        if autores is None:
            autores = []
        autores = (f"{autore['nombre']} {autore['nombre']}" for autore in autores)
        nombre += f" escrito por: {', '.join(autores)}"

        editores = archivo.extra.get("editores")
        if editores is None:
            editores = []
        editores = (f"{autore['nombre']} {autore['nombre']}" for autore in editores)
        if len(editores) > 0:
            nombre += f" , con editores: {', '.join(editores)}"

        return nombre

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        datos = []

        try:
            paper = ReferenciaPaper(
                archivo.extra["tituloInforme"],
                int(archivo.extra["anio"]),
                _string_vacio(archivo.extra.get("doi")),
                _string_vacio(archivo.extra.get("url")),
                Referencia._obtener_clave(archivo.extra["numReferencia"]),
            )
            datos.append(paper)

        except Exception as e:
            loggear(LoggerNivel.FATAL, "No se pudo crear ref de paper")
            raise e

        clave_paper = paper.obtener_clave()
        autores = archivo.extra.get("autores", [])
        if autores is None:
            autores = []
        for autore in autores:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.paper_autore(
                clave_paper, autore.obtener_clave()
            )
            datos.append(autore_referencia)

        editores = archivo.extra.get("editores", [])
        if editores is None:
            editores = []
        for autore in editores:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.paper_editore(
                clave_paper, autore.obtener_clave()
            )
            datos.append(autore_referencia)

        return datos

    def dependo(self) -> list[Clave]:
        return [self.clave_referencia]

    def obtener_clave(self) -> Clave:
        return ReferenciaPaper._obtener_clave(self.clave_referencia)

    @classmethod
    def _obtener_clave(cls, referencia: int | str | Clave) -> Clave:
        hash = Referencia._obtener_clave(referencia).hash
        return Clave(TipoNodo.REFERENCIA_LIBRO, hash)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo:
        try:
            id_paper = Tabla.insertar(
                cursor,
                self.titulo,
                self.anio,
                self.doi,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as err:
            mensaje = f"Al insertar ref paper, con clave de libro: {self.titulo}"
            raise ErrorInsertar(mensaje, err)

        if id_paper is None:
            raise ErrorIdNoGenerado("El paper insertado no tiene id")

        return Nodo(id_paper, self.obtener_clave())


def _string_vacio(texto: str | None) -> str | None:
    if texto is None:
        return None

    texto = texto.strip()
    return texto if texto != "" else None
