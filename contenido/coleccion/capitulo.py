import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo
from archivos.texto import Texto, Seccion, split_secciones
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.etapa import Etapa
from contenido.referencias.libro import ReferenciaLibro
from contenido.referencias.capitulo import ReferenciaCapitulo
from .libro import Libro
from .tablas import TablaCapitulo as Tabla

@dataclass
class Capitulo(Dato):
    etapa: Etapa
    clave_resumen: Clave | None
    clave_libro: Clave
    clave_ref_capitulo: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            return None

        clave_ref_libro = ReferenciaLibro._obtener_clave(int(archivo.extra["numReferencia"]))
        clave_libro = Libro._obtener_clave(clave_ref_libro)

        datos = []
        for extra_capitulo in archivo.extra.get("info_capitulo", []):
            num_referencia = int(extra_capitulo["numReferencia"])
            clave_ref_capitulo = ReferenciaCapitulo._obtener_clave(num_referencia)
            datos.append(Capitulo(etapa, None, clave_libro, clave_ref_capitulo))
    
        return datos

    def dependo(self) -> List[Clave]: 
        dependencias = [self.clave_libro, self.clave_ref_capitulo]
        if self.clave_resumen is not None: 
            dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Capitulo._obtener_clave(self.clave_libro, self.clave_ref_capitulo)

    @classmethod
    def _obtener_clave(cls, clave_libro: Clave, clave_ref_capitulo: Clave) -> Clave: 
        return Clave.de_texto(TipoNodo.CAPITULO, f"{clave_libro}<:>{clave_ref_capitulo}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_libro = dependencias[self.clave_libro]
            id_ref_capitulo = dependencias[self.clave_ref_capitulo]
            id_resumen = None
            if self.clave_resumen is not None:
                id_resumen = dependencias[self.clave_resumen]

            id_capitulo = Tabla.insertar(
                cursor, 
                self.etapa.value, 
                id_resumen, 
                id_libro,
                id_ref_capitulo,
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar coleccion de capitulo de un libro, con clave de libro: {self.clave_libro} y ref capitulo: {self.clave_ref_capitulo}")
            raise e 

        if id_capitulo is None:
            mensaje = f"El capitulo insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return [Nodo(id_capitulo, self.obtener_clave())]
