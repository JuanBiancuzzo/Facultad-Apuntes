import sqlite3 as sql

from typing import Iterable, Dict, List, Tuple
from dataclasses import dataclass

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.archivo import Archivo, Texto, Seccion
from contenido.general.embedding import Embedding
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.etapa import Etapa
from contenido.links import coleccion as link
from contenido.referencias.paper import ReferenciaPaper
from .tablas import TablaPaper as Tabla

CARPETA_COVER = "covers"

@dataclass
class Paper(Dato):
    etapa: Etapa

    clave_resumen: Clave | None
    clave_ref_paper: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        datos = []

        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"Al intentar crear paper {archivo.metadata.nombre}, no tiene etapa"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        resultado: Dict[str, Texto | None] = archivo.contenido.split_secciones([ 
            Seccion(1, "Resumen"),
            Seccion(1, "Referencias"),
        ])

        bloque_resumen: BloqueTexto | None = None
        if resultado["Resumen"] is not None:
            resumen = resultado["Resumen"]
            if not resumen.vacio(): 
                bloque_resumen = BloqueTexto(resumen)
                datos.append(bloque_resumen)

        clave_ref_paper = ReferenciaPaper._obtener_clave(archivo.extra["numReferencia"])
        paper = Paper(
            etapa, 
            bloque_resumen.obtener_clave() if bloque_resumen else None, 
            clave_ref_paper,
        )
        datos.append(paper)

        clave_paper = paper.obtener_clave()
        datos.append(Paper._obtener_link(clave_paper))

        nombre = ReferenciaPaper.nombre_representativo(archivo)
        clave_nommbre = link.Libro.gen_nombre(clave_paper)
        datos.extend(Embedding.parsear((clave_nommbre, nombre)))

        if bloque_resumen is not None:
            pares: Iterable[Tuple[link.Link, str]] = (
                ( link.Paper.gen_resumen(clave_paper, id), texto )
                for id, texto in bloque_resumen.texto.chunks()
            )
            datos.extend(( link for link, _ in pares ))
            datos.extend(Embedding.parsear(*pares))
            
        return datos

    def dependo(self) -> List[Clave]: 
        dependencias = [ self.clave_ref_paper ]
        if self.clave_resumen: dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Paper._obtener_clave(self.clave_ref_paper)

    @classmethod
    def _obtener_clave(cls, clave_ref_paper: Clave) -> Clave: 
        return Clave.de_texto(TipoNodo.PAPER, f"{clave_ref_paper}<|>{clave_ref_paper}")

    def obtener_link(self) -> link.Link: 
        return Paper._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link: 
        return link.Paper.gen(clave)

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
