import sqlite3 as sql
from typing import dict, iterable, list, tuple

from contenido.archivo import Archivo, Seccion, Texto
from contenido.coleccion.evaluacion import Evaluacion
from contenido.coleccion.guias import Guia
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from contenido.general.bibliografia import Bibliografia
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.embedding import Embedding
from contenido.general.etapa import Etapa
from contenido.general.evaluaciones import EvaluacionPorDato as EvaluacionesDeMateria
from contenido.general.guias import GuiaPorDato as GuiasDeMateria
from contenido.links import facultad as link
from contenido.referencias.referencia import Referencia
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

from .carrera import Carrera
from .cuatrimestre import Cuatrimestre
from .plan_de_estudio import PlanDeEstudio
from .tablas import TablaMateria as Tabla


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
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"La etapa de la materia {archivo.extra['nombreMateria']} no es valida {archivo.extra['etapa']}"
            raise ErrorParseo(mensaje)

        cuatrimestre = Cuatrimestre.de_texto(archivo.extra["cuatri"])
        if cuatrimestre is None:
            mensaje = f"El cuatrimestre de la materia {archivo.extra['nombreMateria']} no es valida {archivo.extra['cuatri']}"
            raise ErrorParseo(mensaje)

        nombre_carrera = archivo.extra["nombreCarrera"]
        clave_carrera = Carrera._obtener_clave(nombre_carrera)

        resultado = archivo.contenido.split_secciones(
            [
                Seccion(1, nombre)
                for nombre in [
                    "Apuntes",
                    "Resumen",
                    "Guías",
                    "Evaluacion",
                    "Bibliografía",
                ]
            ]
        )
        bloque_resumen = None
        if resultado["Resumen"]:
            texto = Texto(resultado["Resumen"])
            bloque_resumen = None if texto.vacio() else BloqueTexto(texto)

        datos: list[Dato] = [cuatrimestre]

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

        for num_referencia in (
            int(num) for num in archivo.extra.get("referencias", [])
        ):
            clave_referencia = Referencia._obtener_clave(num_referencia)
            datos.append(Bibliografia.materia(clave_materia, clave_referencia))

        for num_guia in (int(num) for num in archivo.extra.get("guias", [])):
            clave_guia = Guia._obtener_clave(num_guia)
            datos.append(GuiasDeMateria.materia(clave_materia, clave_guia))

        for num_evaluacion in (
            int(num) for num in archivo.extra.get("evaluaciones", [])
        ):
            clave_evaluacion = Evaluacion._obtener_clave(num_evaluacion)
            datos.append(EvaluacionesDeMateria.materia(clave_materia, clave_evaluacion))

        nombre = f"{materia.nombre_materia} de {nombre_carrera}"
        clave_nommbre = link.Materia.gen_nombre(clave_materia)
        datos.extend(Embedding.parsear((clave_nommbre, nombre)))

        if bloque_resumen is not None:
            pares: iterable[tuple[link.Link, str]] = (
                (link.Materia.gen_resumen(clave_materia, id), texto)
                for id, texto in bloque_resumen.texto.chunks()
            )
            datos.extend((link for link, _ in pares))
            datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> list[Clave]:
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
        return Clave.de_texto(
            TipoNodo.MATERIA, f"{nommbre_materia}<|-{clave_carrera}-|>{nommbre_materia}"
        )

    def obtener_link(self) -> link.Link:
        return Materia._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Materia.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_resumen = (
                dependencias[self.clave_resumen]
                if self.clave_resumen is not None
                else None
            )
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

        except Exception as err:
            raise ErrorInsertar(f"Al insertar materia, con {self.nombre_materia}", err)

        if id_materia is None:
            raise ErrorIdNoGenerado("La materia insertada no tiene id")

        return Nodo(id_materia, self.obtener_clave())
