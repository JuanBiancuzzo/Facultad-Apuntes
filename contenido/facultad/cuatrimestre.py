import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaCuatrimestre as Tabla

@dataclass
class Cuatrimestre(Dato):
    anio: int
    parte: int

    @classmethod
    def de_texto(cls, representacion: str) -> Cuatrimestre | None:
        secciones = representacion.lower().split("c")
        if len(secciones) != 2:
            return None
        rep_anio, rep_parte = tuple(secciones)
        if len(rep_anio) != 2 or len(rep_parte) != 1:
            return None

        try:
            return Cuatrimestre(
                2000 + int(rep_anio),
                int(rep_parte),
            )
        except:
            return None

    def dependo(self) -> List[Clave]: 
        return []

    def obtener_clave(self) -> Clave: 
        return Cuatrimestre._obtener_clave(self.anio, self.parte)

    @classmethod
    def _obtener_clave(cls, anio: int, parte: int) -> Clave:
        return Clave.de_texto(TipoNodo.CUATRIMESTRE, f"{anio}C{parte}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try:
            id_cuatri = Tabla.insertar(cursor, self.anio, self.parte)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar cuatrimestre de {self.anio}C{self.parte}")
            raise e 

        if id_cuatri is None:
            mensaje = f"El cuatrimestre insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_cuatri, self.obtener_clave())
