import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.etapa import Etapa
from contenido.coleccion.guias import Guia
from contenido.referencias.libro import ReferenciaLibro
from contenido.referencias.capitulo import ReferenciaCapitulo
from .libro import Libro
from .tablas import TablaCapitulo as Tabla, TablaGuiasDeCapitulo

@dataclass
class Capitulo(Dato):
    etapa: Etapa

    clave_resumen: Clave | None
    clave_libro: Clave
    clave_guias: List[Clave]
    clave_ref_capitulo: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            return None

        clave_ref_libro = ReferenciaLibro._obtener_clave(archivo.extra["numReferencia"])
        clave_libro = Libro._obtener_clave(clave_ref_libro)

        datos = []

        info_capitulos = archivo.extra.get("capitulos", [])
        if info_capitulos is None: info_capitulos = []

        for extra_capitulo in info_capitulos:
            capitulo = Capitulo(
                etapa, 
                None, 
                clave_libro, 
                list(map(lambda num: Guia._obtener_clave(int(num)), extra_capitulo.get("guias", []))),
                ReferenciaCapitulo._obtener_clave(extra_capitulo["numReferencia"]),
            )
            datos.append(capitulo)

        return datos

    def dependo(self) -> List[Clave]: 
        dependencias = [self.clave_libro, self.clave_ref_capitulo, *self.clave_guias ]
        if self.clave_resumen: dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Capitulo._obtener_clave(self.clave_libro, self.clave_ref_capitulo)

    @classmethod
    def _obtener_clave(cls, clave_libro: Clave, clave_ref_capitulo: Clave) -> Clave: 
        return Clave.de_texto(TipoNodo.CAPITULO, f"{clave_libro}<:>{clave_ref_capitulo}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
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
            loggear(LoggerNivel.FATAL, f"Al insertar coleccion de capitulo de un libro, con clave de libro: {self.clave_libro}")
            raise e 

        if id_capitulo is None:
            mensaje = f"El capitulo insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        try:
            for clave_guia in self.clave_guias:
                id_guia = dependencias[clave_guia]
                TablaGuiasDeCapitulo.insertar(cursor, id_capitulo, id_guia)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar capitulo con ref_capitulo {self.clave_ref_capitulo}, error al insertar las guias vinculadas")
            raise e 

        return Nodo(id_capitulo, self.obtener_clave())
