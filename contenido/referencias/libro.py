import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos.archivo import Archivo
from contenido.referencias.referencia import Referencia
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.editorial import Editorial
from contenido.general.autore import Autore

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
    def parsear(cls, archivo: Archivo) -> List[Dato]:
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
                Referencia._obtener_clave(int(archivo.extra["numReferencia"])),
            )
            datos.append(libro)

        except Exception as e:
            loggear(LoggerNivel.FATAL, "No se pudo crear ref de libro")
            raise e

        clave_libro = libro.obtener_clave()
        for autore in archivo.extra["nombreAutores"]:
            autore = Autore(autore["nombre"], autore["apellido"])
            datos.append(autore)

            autore_referencia = AutoreReferencia.libro(clave_libro, autore.obtener_clave())
            datos.append(autore_referencia)

        return datos

    def dependo(self) -> List[Clave]: 
        return [ self.clave_editorial, self.clave_referencia ] 

    def obtener_clave(self) -> Clave: 
        return ReferenciaLibro._obtener_clave(self.clave_referencia) 

    @classmethod
    def _obtener_clave(cls, referencia: int | Clave) -> Clave: 
        if type(referencia) is int:
            hash = Referencia._obtener_clave(referencia).hash

        elif type(referencia) is Clave:
            hash = referencia.hash

        else:
            mensaje = f"Al obtener clave de libro no es numero ni clave"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje) 

        return Clave(TipoNodo.REFERENCIA_LIBRO, hash)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
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

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar ref libro, con clave de libro: {self.titulo}")
            raise e 

        if id_libro is None:
            mensaje = f"El libro insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_libro, self.obtener_clave())
