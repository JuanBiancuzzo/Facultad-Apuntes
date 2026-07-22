import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.etapa import Etapa
from contenido.referencias.paper import ReferenciaPaper
from .tablas import TablaPaper as Tabla

CARPETA_COVER = "covers"

@dataclass
class Paper(Dato):
    etapa: Etapa

    clave_resumen: Clave | None
    clave_ref_paper: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"Al intentar crear paper {archivo.metadata.nombre}, no tiene etapa"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        clave_ref_libro = ReferenciaPaper._obtener_clave(archivo.extra["numReferencia"])
        return [Paper(etapa, None, clave_ref_libro)]

    def dependo(self) -> List[Clave]: 
        dependencias = [ self.clave_ref_paper ]
        if self.clave_resumen: dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Paper._obtener_clave(self.clave_ref_paper)

    @classmethod
    def _obtener_clave(cls, clave_ref_paper: Clave) -> Clave: 
        return Clave.de_texto(TipoNodo.PAPER, f"{clave_ref_paper}<|>{clave_ref_paper}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_resumen = dependencias[self.clave_resumen] if self.clave_resumen else None

            id_paper = Tabla.insertar(
                cursor, 
                self.etapa.value, 
                id_resumen, 
                dependencias[self.clave_ref_paper],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar coleccion de paper, con clave de libro: {self.clave_ref_paper}")
            raise e 

        if id_paper is None:
            mensaje = f"El paper insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_paper, self.obtener_clave())
