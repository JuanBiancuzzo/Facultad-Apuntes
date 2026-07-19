import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos.archivo import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.general.etapa import Etapa
from contenido.dependencias import TipoNodo
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
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            return None

        carrera = Carrera(
            archivo.metadata.nombre,
            archivo.extra["estado"],
            archivo.extra["tieneCodigo"],
            etapa,
        )

        return [
            carrera,
            *(
                PlanDeEstudio(plan, carrera.obtener_clave())
                for plan in archivo.extra["planes"]
            )
        ]

    def dependo(self) -> List[Clave]: 
        return []

    def obtener_clave(self) -> Clave: 
        return Carrera._obtener_clave(self.nombre)

    @classmethod
    def _obtener_clave(cls, nombre_carrera) -> Clave:
        return Clave.de_texto(TipoNodo.CARRERA, f"{nombre_carrera}-|-{nombre_carrera}" )

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
