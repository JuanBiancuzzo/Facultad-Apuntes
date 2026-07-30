import sqlite3 as sql

from typing import Iterable, Dict, List, Tuple
from dataclasses import dataclass

from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.archivo import Archivo, Texto, Seccion
from contenido.referencias.referencia import Referencia
from contenido.general.bibliografia import Bibliografia
from contenido.general.guias import GuiaPorDato as GuiasDeMateria
from contenido.general.evaluaciones import EvaluacionPorDato as EvaluacionesDeMateria
from contenido.general.embedding import Embedding
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.etapa import Etapa
from contenido.coleccion.guias import Guia
from contenido.coleccion.evaluacion import Evaluacion
from contenido.links import facultad as link

from .carrera import Carrera
from .plan_de_estudio import PlanDeEstudio
from .cuatrimestre import Cuatrimestre
from .tablas import TablaMateria as Tabla

@dataclass
class Materia(Dato):
    nombre_materia: str
    clave_carrera: Clave
    estado: str
    etapa: Etapa 
    clave_plan: Clave
    codigo: str | None

    clave_cuatrimestre: Clave
    clave_resumen: Clave | None

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"La etapa de la materia {archivo.extra["nombreMateria"]} no es valida {archivo.extra["etapa"]}"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        cuatrimestre = Cuatrimestre.de_texto(archivo.extra["cuatri"])
        if cuatrimestre is None:
            mensaje = f"El cuatrimestre de la materia {archivo.extra["nombreMateria"]} no es valida {archivo.extra["cuatri"]}"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        nombre_carrera = archivo.extra["nombreCarrera"]
        clave_carrera = Carrera._obtener_clave(nombre_carrera)

        resultado = archivo.contenido.split_secciones([
            Seccion(1, nombre) 
            for nombre in ["Apuntes", "Resumen", "Guías", "Evaluacion", "Bibliografía"]
        ])
        bloque_resumen = None
        if resultado["Resumen"]:
            texto = Texto(resultado["Resumen"])
            bloque_resumen = None if texto.vacio() else BloqueTexto(texto)

        datos: List[Dato] = [ cuatrimestre ]

        clave_resumen = None
        if bloque_resumen is not None:
            datos.append(bloque_resumen)
            clave_resumen = bloque_resumen.obtener_clave()

        materia = Materia(
            archivo.extra["nombreMateria"],
            clave_carrera,
            archivo.extra["estado"],
            etapa,
            PlanDeEstudio._obtener_clave(archivo.extra["plan"], clave_carrera),
            archivo.extra.get("codigo", None),
            cuatrimestre.obtener_clave(),
            clave_resumen,
        )
        datos.append(materia)

        clave_materia = materia.obtener_clave()
        datos.append(Materia._obtener_link(clave_materia))

        for num_referencia in map(lambda num: int(num), archivo.extra.get("referencias", [])):
            clave_referencia = Referencia._obtener_clave(num_referencia)
            datos.append(Bibliografia.materia(clave_materia, clave_referencia))

        for num_guia in map(lambda num: int(num), archivo.extra.get("guias", [])):
            clave_guia = Guia._obtener_clave(num_guia)
            datos.append(GuiasDeMateria.materia(clave_materia, clave_guia))

        for num_evaluacion in map(lambda num: int(num), archivo.extra.get("evaluaciones", [])):
            clave_evaluacion = Evaluacion._obtener_clave(num_evaluacion)
            datos.append(EvaluacionesDeMateria.materia(clave_materia, clave_evaluacion))

        nombre = f"{materia.nombre_materia} de {nombre_carrera}"
        clave_nommbre = link.Materia.gen_nombre(clave_materia)
        datos.extend(Embedding.parsear((clave_nommbre, nombre)))

        if bloque_resumen is not None:
            pares: Iterable[Tuple[link.Link, str]] = (
                ( link.Materia.gen_resumen(clave_materia, id), texto )
                for id, texto in bloque_resumen.texto.chunks()
            )
            datos.extend(( link for link, _ in pares ))
            datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> List[Clave]: 
        dependencias = [
            self.clave_carrera,
            self.clave_plan,
            self.clave_cuatrimestre,
        ]
        if self.clave_resumen is not None:
            dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Materia._obtener_clave(self.nombre_materia, self.clave_carrera)

    @classmethod
    def _obtener_clave(cls, nommbre_materia: str, clave_carrera: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.MATERIA, f"{nommbre_materia}<|-{clave_carrera}-|>{nommbre_materia}")

    def obtener_link(self) -> link.Link: 
        return Materia._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link: 
        return link.Materia.gen(clave)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_resumen = dependencias[self.clave_resumen] if self.clave_resumen is not None else None
            id_materia = Tabla.insertar(
                cursor,
                self.nombre_materia,
                self.estado,
                self.etapa.value,
                self.codigo,
                id_resumen,
                dependencias[self.clave_plan],
                dependencias[self.clave_carrera],
                dependencias[self.clave_cuatrimestre],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar materia, con {self.nombre_materia}")
            raise e 

        if id_materia is None:
            mensaje = f"La materia insertada no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_materia, self.obtener_clave())
