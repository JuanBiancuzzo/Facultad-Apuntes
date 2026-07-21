import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
import datetime as dt
from enum import Enum

from archivos.archivo import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaReferencia as Tabla

class TipoReferencia(Enum):
    YOUTUBE = "Youtube"
    WIKIPEDIA = "Wikipedia"
    WEB = "Web"
    LIBRO = "Libro"
    CAPITULO = "Capitulo"
    DICCIONARIO = "DiccionarioOnline"
    PAPER = "Paper"
    # CURSO_ONLINE = "Curso"
    # CURSO_PRESENCIAL = "CursoPresencial"
    # TEMA_CURSO = "CursoTema"

    @classmethod
    def de_texto(cls, texto: str) -> TipoReferencia | None:
        for extension in cls:
            if extension.value.lower() == texto.lower():
                return extension
        return None

@dataclass
class Referencia(Dato):
    num_referencia: int
    tipo: TipoReferencia
    fecha_registrado: dt.datetime

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        datos: List[Dato] = []

        tipo = TipoReferencia.de_texto(archivo.extra["tipoCita"])
        if tipo is None:
            loggear(LoggerNivel.WARN, f"Tipo de referencia no reconocida: {archivo.extra["tipoCita"]}")
            return None # Despues cambiar a raise Exception(mensaje)

        try: 
            datos.append(Referencia(
                int(archivo.extra["numReferencia"]), 
                tipo, 
                archivo.metadata.dia_creacion,
            ))

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al crear referencia de tipo: {tipo}")
            raise e

        if tipo == TipoReferencia.LIBRO:
            capitulos = archivo.extra.get("capitulos", [])
            if capitulos is None: capitulos = []
            for extra_capitulo in capitulos:
                try:
                    datos.append(Referencia(
                        int(extra_capitulo["numReferencia"]), 
                        TipoReferencia.CAPITULO, 
                        archivo.metadata.dia_creacion,
                    ))

                except Exception as e:
                    loggear(LoggerNivel.FATAL, f"Al crear referencia de tipo: {tipo}")
                    raise e

        return datos

    def dependo(self) -> List[Clave]: 
        return []

    def obtener_clave(self) -> Clave: 
        return Referencia._obtener_clave(self.num_referencia)

    @classmethod
    def _obtener_clave(cls, referencia: int | str | Clave) -> Clave:
        if type(referencia) is Clave:
            if referencia.tipo == TipoNodo.REFERENCIA:
                return referencia

            mensaje = f"Se intento obtener la clave de una referencia pasando otra clave que no es referencia"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        if type(referencia) is str:
            try:
                referencia = int(referencia)

            except:
                mensaje = f"Se intento obtener la clave de una referencia pasando un string que no tiene el num_referencia"
                loggear(LoggerNivel.FATAL, mensaje)
                raise Exception(mensaje)

        if type(referencia) is int:
            return Clave.de_texto(TipoNodo.REFERENCIA, f"{referencia}><{referencia}")

        mensaje = f"Se intento obtener la clave de una referencia otro tipo de dato que es {type(referencia)}"
        loggear(LoggerNivel.FATAL, mensaje)
        raise Exception(mensaje)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_referencia = Tabla.insertar(
                cursor,
                self.tipo.value,
                self.fecha_registrado,
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar referencias con num: {self.num_referencia}")
            raise e 

        if id_referencia is None:
            mensaje = f"La referencia insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_referencia, self.obtener_clave())
