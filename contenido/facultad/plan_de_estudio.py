import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaPlanDeEstudio as Tabla

@dataclass
class PlanDeEstudio(Dato):
    plan: str
    clave_carrera: Clave

    def dependo(self) -> List[Clave]: 
        return [ self.clave_carrera ]

    def obtener_clave(self) -> Clave: 
        return PlanDeEstudio._obtener_clave(self.plan, self.clave_carrera)

    @classmethod
    def _obtener_clave(cls, plan: str, clave_carrera: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.PLAN_DE_ESTUDIO, f"{plan}-|-{clave_carrera}-|-{plan}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_carrera = dependencias[self.clave_carrera]
            id_plan = Tabla.insertar(cursor, self.plan, id_carrera)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar plan de estudio, con plan: {self.plan}")
            raise e 

        if id_plan is None:
            mensaje = f"El plan de estudio insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_plan, self.obtener_clave())
