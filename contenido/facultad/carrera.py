import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorInsertar
from contenido.errores.insertar import ErrorIdNoGenerado
from contenido.general.embedding import Embedding
from contenido.general.etapa import Etapa
from contenido.links import facultad as link
from dependencias import Clave, Dato, Nodo

from .plan_de_estudio import PlanDeEstudio
from .tablas import TablaCarrera as Tabla


@dataclass
class Carrera(Dato):
    nombre: str
    estado: str
    tiene_codigo: bool
    etapa: Etapa

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato] | None:
        datos = []
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            return None

        carrera = Carrera(
            archivo.metadata.nombre,
            archivo.extra["estado"],
            archivo.extra["tieneCodigo"],
            etapa,
        )
        datos.append(carrera)
        clave_carrera = carrera.obtener_clave()

        for plan in archivo.extra["planes"]:
            datos.append(PlanDeEstudio(plan, clave_carrera))

        datos.append(Carrera._obtener_link(clave_carrera))
        link_palabra = link.Diccionario.gen_nombre(clave_carrera)
        datos.extend(Embedding.parsear((link_palabra, carrera.nombre)))

        return datos

    def dependo(self) -> list[Clave]:
        return []

    def obtener_clave(self) -> Clave:
        return Carrera._obtener_clave(self.nombre)

    @classmethod
    def _obtener_clave(cls, nombre_carrera) -> Clave:
        return Clave.de_texto(TipoNodo.CARRERA, f"{nombre_carrera}-|-{nombre_carrera}")

    def obtener_link(self) -> link.Link:
        return Carrera._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Carrera.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_carrera = Tabla.insertar(
                cursor, self.nombre, self.estado, self.tiene_codigo, self.etapa.value
            )

        except Exception as err:
            raise ErrorInsertar(f"Al insertar carrera con nombre: {self.nombre}", err)

        if id_carrera is None:
            raise ErrorIdNoGenerado("La carrera insertada no tiene id")

        return Nodo(id_carrera, self.obtener_clave())
