import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.etapa import Etapa
from contenido.referencias.libro import ReferenciaLibro
from .tablas import TablaLibro as Tabla

@dataclass
class Libro(Dato):
    etapa: Etapa
    clave_resumen: Clave | None
    clave_ref_libro: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"Al intentar crear libro {archivo.metadata.nombre}, no tiene etapa"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        clave_ref_libro = ReferenciaLibro._obtener_clave(int(archivo.extra["numReferencia"]))
        return [Libro(etapa, None, clave_ref_libro)]

    def dependo(self) -> List[Clave]: 
        dependencias = [ self.clave_ref_libro ]
        if self.clave_resumen: dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Libro._obtener_clave(self.clave_ref_libro)

    @classmethod
    def _obtener_clave(cls, clave_ref_libro: Clave) -> Clave: 
        return Clave.de_texto(TipoNodo.LIBRO, f"{clave_ref_libro}<|>{clave_ref_libro}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_ref_libro = dependencias[self.clave_ref_libro]
            id_resumen = dependencias[self.clave_resumen] if self.clave_resumen else None

            id_libro = Tabla.insertar(
                cursor, 
                self.etapa.value, 
                id_resumen, 
                id_ref_libro,
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar coleccion de libro, con clave de libro: {self.clave_ref_libro}, y lo que tengo es: {dependencias}")
            raise e 

        if id_libro is None:
            mensaje = f"El libro insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_libro, self.obtener_clave())
