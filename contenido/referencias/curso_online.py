import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos.archivo import Archivo
from contenido.referencias.referencia import Referencia
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.autore import Autore

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
    def parsear(cls, archivo: Archivo) -> List[Dato]:
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

            autore_referencia = AutoreReferencia.curso_online(clave_curso, autore.obtener_clave())
            datos.append(autore_referencia)

        return datos

    def dependo(self) -> List[Clave]: 
        return [ self.clave_referencia ] 

    def obtener_clave(self) -> Clave: 
        return ReferenciaCursoOnline._obtener_clave(self.clave_referencia) 

    @classmethod
    def _obtener_clave(cls, referencia: int | str | Clave) -> Clave: 
        hash = Referencia._obtener_clave(referencia).hash
        return Clave(TipoNodo.REFERENCIA_CURSO_ONLINE, hash)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_curso = Tabla.insertar(
                cursor,
                self.nombre_curso,
                self.nombre_pagina,
                self.anio,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar ref de curso: {self.nombre_curso}")
            raise e 

        if id_curso is None:
            mensaje = f"El Curso insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_curso, self.obtener_clave())

