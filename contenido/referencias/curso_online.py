import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores.insertar import ErrorIdNoGenerado, ErrorInsertar
from contenido.general.autore import Autore
from contenido.referencias.referencia import Referencia
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

from .autore_referencia import AutoreReferencia
from .tablas import TablaCursoOnline as Tabla


@dataclass
class ReferenciaCursoOnline:
    nombre_curso: str
    nombre_pagina: str
    anio: int
    url: str
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        datos = []

        try:
            curso = ReferenciaCursoOnline(
                archivo.extra["nombreCurso"],
                archivo.extra["nombrePagina"],
                int(archivo.extra["fechaCurso"]),
                archivo.extra["url"],
                Referencia._obtener_clave(archivo.extra["numReferencia"]),
            )
            datos.append(curso)

        except Exception as e:
            loggear(LoggerNivel.FATAL, "No se pudo crear ref de curso")
            raise e

        clave_curso = curso.obtener_clave()

        autores = archivo.extra.get("nombreAutores", [])
        autores = []
        for autore in autores:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.curso_online(
                clave_curso, autore.obtener_clave()
            )
            datos.append(autore_referencia)

        return datos

    def dependo(self) -> list[Clave]:
        return [self.clave_referencia]

    def obtener_clave(self) -> Clave:
        return ReferenciaCursoOnline._obtener_clave(self.clave_referencia)

    @classmethod
    def _obtener_clave(cls, referencia: int | str | Clave) -> Clave:
        hash = Referencia._obtener_clave(referencia).hash
        return Clave(TipoNodo.REFERENCIA_CURSO_ONLINE, hash)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo:
        try:
            id_curso = Tabla.insertar(
                cursor,
                self.nombre_curso,
                self.nombre_pagina,
                self.anio,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as err:
            raise ErrorInsertar(f"Al insertar ref de curso: {self.nombre_curso}", err)

        if id_curso is None:
            raise ErrorIdNoGenerado("El Curso insertado no tiene id")

        return Nodo(id_curso, self.obtener_clave())
