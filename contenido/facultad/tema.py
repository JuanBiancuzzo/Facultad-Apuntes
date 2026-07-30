import sqlite3 as sql

from typing import Iterable, Dict, List, Tuple
from dataclasses import dataclass

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.archivo import Archivo, Texto, Seccion
from contenido.extra.bibliografia import Bibliografia
from contenido.general.embedding import Embedding
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.etapa import Etapa
from contenido.referencias.referencia import Referencia
from contenido.links import facultad as link

from .carrera import Carrera
from .materia import Materia
from .tablas import TablaTema as Tabla

@dataclass
class Tema(Dato):
    nombre_tema: str
    clave_materia: Clave
    etapa: Etapa 
    capitulo: int
    parte: int | None
    clave_resumen: Clave | None

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        etapa = Etapa.de_texto(archivo.extra.get("etapa", ""))
        if etapa is None: etapa = Etapa.SIN_EMPEZAR

        try: 
            info_tema = archivo.extra["infoTemaMateria"]
            nombre_materia = info_tema["materia"]
            nombre_carrera = info_tema["carrera"]

            clave_materia = Materia._obtener_clave(
                nombre_materia, Carrera._obtener_clave(nombre_carrera),
            )

        except:
            mensaje = f"Tema mal echo: {archivo.metadata.nombre}"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        resultado = archivo.contenido.split_secciones([
            Seccion(1, nombre) 
            for nombre in ["Índice", "Resumen", "Bibliografía"]
        ])
        bloque_resumen = None
        if resultado["Resumen"]:
            texto = resultado["Resumen"]
            bloque_resumen = None if texto.vacio() else BloqueTexto(texto)

        datos: List[Dato] = []

        clave_resumen = None
        if bloque_resumen is not None:
            datos.append(bloque_resumen)
            clave_resumen = bloque_resumen.obtener_clave()

        try:
            parte = int(archivo.extra["parte"])
        except:
            parte = None

        try:
            tema = Tema(
                archivo.extra["nombreResumen"],
                clave_materia,
                etapa,
                int(archivo.extra["capitulo"]),
                parte,
                clave_resumen,
            )
            datos.append(tema)

        except:
            mensaje = f"Error al parsear Tema de carrera: {archivo.extra["nombreResumen"]}"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        clave_tema = tema.obtener_clave()
        datos.append(Tema._obtener_link(clave_tema))

        for num_referencia in map(lambda num: int(num), archivo.extra.get("referencias", [])):
            clave_referencia = Referencia._obtener_clave(num_referencia)
            datos.append(Bibliografia.tema_facultad(clave_tema, clave_referencia))

        nombre = f"{tema.nombre_tema} N°{tema.capitulo} de la materia {nombre_materia} de la carrera {nombre_carrera}"
        clave_nommbre = link.Tema.gen_nombre(clave_materia)
        datos.extend(Embedding.parsear((clave_nommbre, nombre)))

        if bloque_resumen is not None:
            pares: Iterable[Tuple[link.Link, str]] = (
                ( link.Tema.gen_resumen(clave_materia, id), texto )
                for id, texto in bloque_resumen.texto.chunks()
            )
            datos.extend(( link for link, _ in pares ))
            datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> List[Clave]: 
        dependencias = [ self.clave_materia ]
        if self.clave_resumen is not None:
            dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Tema._obtener_clave(self.nombre_tema, self.clave_materia, self.parte)

    @classmethod
    def _obtener_clave(cls, nommbre_tema: str, clave_materia: Clave, parte: int | None) -> Clave:
        return Clave.de_texto(TipoNodo.MATERIA, f"{nommbre_tema}<|-{clave_materia}-|>{nommbre_tema}:{parte}")

    def obtener_link(self) -> link.Link: 
        return Tema._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link: 
        return link.Tema.gen(clave)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_resumen = dependencias[self.clave_resumen] if self.clave_resumen is not None else None
            id_tema = Tabla.insertar(
                cursor,
                self.nombre_tema,
                self.etapa.value,
                self.capitulo,
                self.parte,
                id_resumen,
                dependencias[self.clave_materia],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar un tema de una materia, con nombre: {self.nombre_tema}")
            raise e 

        if id_tema is None:
            mensaje = f"El tema de una materia insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_tema, self.obtener_clave())
