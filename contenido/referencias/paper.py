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
from .tablas import TablaPaper as Tabla


@dataclass
class ReferenciaPaper:
    titulo: str
    anio: int
    doi: str | None
    url: str | None
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
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
        if autores is None: autores = []
        for autore in autores:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.paper_autore(clave_paper, autore.obtener_clave())
            datos.append(autore_referencia)

        editores = archivo.extra.get("editores", [])
        if editores is None: editores = []
        for autore in editores:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.paper_editore(clave_paper, autore.obtener_clave())
            datos.append(autore_referencia)

        return datos

    def dependo(self) -> List[Clave]: 
        return [ self.clave_referencia ] 

    def obtener_clave(self) -> Clave: 
        return ReferenciaPaper._obtener_clave(self.clave_referencia) 

    @classmethod
    def _obtener_clave(cls, referencia: int | str | Clave) -> Clave: 
        hash = Referencia._obtener_clave(referencia).hash
        return Clave(TipoNodo.REFERENCIA_LIBRO, hash)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_paper = Tabla.insertar(
                cursor,
                self.titulo,
                self.anio,
                self.doi,
                self.url,
                dependencias[self.clave_referencia],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar ref paper, con clave de libro: {self.titulo}")
            raise e 

        if id_paper is None:
            mensaje = f"El paper insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_paper, self.obtener_clave())

def _string_vacio(texto: str | None) -> str | None:
    if texto is None:
        return None

    texto = texto.strip()
    return texto if texto != "" else None
