import sqlite3 as sql

from typing import Iterable, Dict, List, Tuple
from dataclasses import dataclass

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.archivo import Archivo
from contenido.general.guias import GuiaPorDato as GuiasDeCapitulo
from contenido.general.embedding import Embedding
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.etapa import Etapa
from contenido.coleccion.guias import Guia
from contenido.referencias.libro import ReferenciaLibro
from contenido.referencias.capitulo import ReferenciaCapitulo
from contenido.links import coleccion as link
from .libro import Libro
from .tablas import TablaCapitulo as Tabla

@dataclass
class Capitulo(Dato):
    etapa: Etapa

    clave_resumen: Clave | None
    clave_libro: Clave
    clave_ref_capitulo: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"La etapa de un capitulo del libro {archivo.metadata.nombre} no es valida {archivo.extra["etapa"]}"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        clave_ref_libro = ReferenciaLibro._obtener_clave(archivo.extra["numReferencia"])
        clave_libro = Libro._obtener_clave(clave_ref_libro)

        datos = []

        info_capitulos = archivo.extra.get("capitulos", [])
        if info_capitulos is None: info_capitulos = []

        for extra_capitulo in info_capitulos:
            bloque_resumen: BloqueTexto | None = None

            capitulo = Capitulo(
                etapa, 
                bloque_resumen.obtener_clave() if bloque_resumen else None, 
                clave_libro, 
                ReferenciaCapitulo._obtener_clave(extra_capitulo["numReferencia"]),
            )
            datos.append(capitulo)

            clave_capitulo = capitulo.obtener_clave()
            for num_guia in map(lambda num: int(num), extra_capitulo.get("guias", [])):
                clave_guia = Guia._obtener_clave(num_guia)
                datos.append(GuiasDeCapitulo.capitulo_libro(clave_capitulo, clave_guia))

            # Link con embbedings
            datos.append(capitulo._obtener_link(clave_capitulo))

            if "nombreCapitulo" in extra_capitulo:
                nombre = ReferenciaCapitulo.nombre_representativo(archivo, extra_capitulo)
                clave_nommbre = link.Capitulo.gen_nombre(clave_capitulo)
                datos.extend(Embedding.parsear((clave_nommbre, nombre)))

            if bloque_resumen is not None:
                pares: Iterable[Tuple[link.Link, str]] = (
                    ( link.Capitulo.gen_resumen(clave_capitulo, id), texto )
                    for id, texto in bloque_resumen.texto.chunks()
                )
                datos.extend(( link for link, _ in pares ))
                datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> List[Clave]: 
        dependencias = [self.clave_libro, self.clave_ref_capitulo ]
        if self.clave_resumen: dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Capitulo._obtener_clave(self.clave_libro, self.clave_ref_capitulo)

    @classmethod
    def _obtener_clave(cls, clave_libro: Clave, clave_ref_capitulo: Clave) -> Clave: 
        return Clave.de_texto(TipoNodo.CAPITULO, f"{clave_libro}<:>{clave_ref_capitulo}")

    def obtener_link(self) -> link.Link: 
        return Capitulo._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link: 
        return link.Capitulo.gen(clave)

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

        return Nodo(id_capitulo, self.obtener_clave())
