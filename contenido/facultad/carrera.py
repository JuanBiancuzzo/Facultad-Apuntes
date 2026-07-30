import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.archivo import Archivo
from contenido.general.embedding import Embedding
from contenido.general.etapa import Etapa
from contenido.dependencias import TipoNodo
from contenido.links import facultad as link
from .plan_de_estudio import PlanDeEstudio
from .tablas import TablaCarrera as Tabla

@dataclass
class Carrera(Dato):
    nombre: str
    estado: str
    tiene_codigo: bool
    etapa: Etapa 

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        datos = []
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            return None

        carrera = Carrera(
            archivo.metadata.nombre,
            archivo.extra["estado"],
            archivo.extra["tieneCodigo"],
            etapa,
        )
        datos.append(carrera)
        clave_carrera = carrera.obtener_clave()

        for plan in archivo.extra["planes"]:
            datos.append(PlanDeEstudio(plan, clave_carrera))

        datos.append(Carrera._obtener_link(clave_carrera))
        link_palabra = link.Diccionario.gen_nombre(clave_carrera)
        datos.extend(Embedding.parsear((link_palabra, carrera.nombre)))

        return datos

    def dependo(self) -> List[Clave]: 
        return []

    def obtener_clave(self) -> Clave: 
        return Carrera._obtener_clave(self.nombre)

    @classmethod
    def _obtener_clave(cls, nombre_carrera) -> Clave:
        return Clave.de_texto(TipoNodo.CARRERA, f"{nombre_carrera}-|-{nombre_carrera}" )

    def obtener_link(self) -> link.Link: 
        return Carrera._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link: 
        return link.Carrera.gen(clave)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_carrera = Tabla.insertar(
                cursor, 
                self.nombre,
                self.estado,
                self.tiene_codigo,
                self.etapa.value
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar carrera con nombre: {self.nombre}")
            raise e

        if id_carrera is None:
            mensaje = f"La carrera insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_carrera, self.obtener_clave())
