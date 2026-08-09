import sqlite3 as sql
from dataclasses import dataclass

from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar
from dependencias import Clave, Dato, Nodo

from .tablas import TablaCuatrimestre as Tabla


@dataclass
class Cuatrimestre(Dato):
    anio: int
    parte: int

    @classmethod
    def de_texto(cls, representacion: str) -> Cuatrimestre | None:
        secciones = representacion.lower().split("c")
        if len(secciones) != 2:
            return None
        rep_anio, rep_parte = tuple(secciones)
        if len(rep_anio) != 2 or len(rep_parte) != 1:
            return None

        try:
            return Cuatrimestre(
                2000 + int(rep_anio),
                int(rep_parte),
            )
        except:
            return None

    def dependo(self) -> list[Clave]:
        return []

    def obtener_clave(self) -> Clave:
        return Cuatrimestre._obtener_clave(self.anio, self.parte)

    @classmethod
    def _obtener_clave(cls, anio: int, parte: int) -> Clave:
        return Clave.de_texto(TipoNodo.CUATRIMESTRE, f"{anio}C{parte}")

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_cuatri = Tabla.insertar(cursor, self.anio, self.parte)

        except Exception as err:
            mensaje = "Al insertar cuatrimestre de {self.anio}C{self.parte}"
            raise ErrorInsertar(mensaje, err)

        if id_cuatri is None:
            raise ErrorIdNoGenerado("El cuatrimestre insertado no tiene id")

        return Nodo(id_cuatri, self.obtener_clave())
