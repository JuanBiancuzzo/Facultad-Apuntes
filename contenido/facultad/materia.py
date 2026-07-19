import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos import Archivo, Texto
from archivos.texto import Seccion, split_secciones
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.referencias.referencia import Referencia
from contenido.bibliografia.bibliografia import Bibliografia
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.etapa import Etapa
from contenido.coleccion.guias import Guia

from .carrera import Carrera
from .plan_de_estudio import PlanDeEstudio
from .cuatrimestre import Cuatrimestre
from .tablas import TablaMateria as Tabla, TablaGuiasDeMateria

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
    clave_guias: List[Clave]

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            return None

        cuatrimestre = Cuatrimestre.de_texto(archivo.extra["cuatri"])
        if cuatrimestre is None:
            return None

        clave_carrera = Carrera._obtener_clave(archivo.extra["nombreCarrera"])

        resultado = split_secciones(archivo.contenido, [
            Seccion(1, nombre) 
            for nombre in ["Apuntes", "Resumen", "Guías", "Bibliografía"]
        ])
        resumen = BloqueTexto(Texto(resultado["Resumen"])) if resultado["Resumen"] is not None else None

        datos: List[Dato] = [ cuatrimestre ]

        clave_resumen = None
        if resumen is not None:
            datos.append(resumen)
            clave_resumen = resumen.obtener_clave()

        materia = Materia(
            archivo.extra["nombreMateria"],
            clave_carrera,
            archivo.extra["estado"],
            etapa,
            PlanDeEstudio._obtener_clave(archivo.extra["plan"], clave_carrera),
            archivo.extra.get("codigo", None),
            cuatrimestre.obtener_clave(),
            clave_resumen,
            list(map(lambda num: Guia._obtener_clave(int(num)), archivo.extra.get("guias", []))),
        )
        datos.append(materia)

        clave_materia = materia.obtener_clave()
        for num_referencia in map(lambda num: int(num), archivo.extra.get("referencias", [])):
            clave_referencia = Referencia._obtener_clave(num_referencia)
            datos.append(Bibliografia.materia(clave_materia, clave_referencia))

        return datos

    def dependo(self) -> List[Clave]: 
        dependencias = [
            self.clave_carrera,
            self.clave_plan,
            self.clave_cuatrimestre,
            *self.clave_guias,
        ]
        if self.clave_resumen is not None:
            dependencias.append(self.clave_resumen)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Materia._obtener_clave(self.nombre_materia, self.clave_carrera)

    @classmethod
    def _obtener_clave(cls, nommbre_materia: str, clave_carrera: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.MATERIA, f"{nommbre_materia}<|-{clave_carrera}-|>{nommbre_materia}")

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

        try:
            for clave_guia in self.clave_guias:
                id_guia = dependencias[clave_guia]
                TablaGuiasDeMateria.insertar(cursor, id_materia, id_guia)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar materia con nombre {self.nombre_materia}, error al insertar las guias vinculadas")
            raise e 

        return Nodo(id_materia, self.obtener_clave())
