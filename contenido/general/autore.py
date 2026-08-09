import sqlite3 as sql
from dataclasses import dataclass

from contenido.dependencias import TipoNodo
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

from .tablas import TablaAutore as Tabla


@dataclass
class Autore(Dato):
    nombre: str
    apellido: str

    def dependo(self) -> list[Clave]:
        return super().dependo()

    def obtener_clave(self) -> Clave:
        return Autore._obtener_clave(self.nombre, self.apellido)

    @classmethod
    def _obtener_clave(cls, nombre: str, apellido: str) -> Clave:
        return Clave.de_texto(
            TipoNodo.AUTORE, f"{nombre}:-:{apellido}:|:{apellido}:-:{nombre}"
        )

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_autore = Tabla.insertar(cursor, self.nombre, self.apellido)

        except Exception as e:
            loggear(
                LoggerNivel.FATAL, f"Al insertar autore {self.nombre} {self.apellido}"
            )
            raise e

        if id_autore is None:
            mensaje = f"El autore insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_autore, self.obtener_clave())
