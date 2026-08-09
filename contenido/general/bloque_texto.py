import sqlite3 as sql
from dataclasses import dataclass

from contenido.archivo import Texto
from contenido.dependencias import TipoNodo
from contenido.errores.insertar import ErrorIdNoGenerado, ErrorInsertar
from dependencias import Clave, Dato, Nodo
from logger import LoggerNivel, loggear

from .tablas import TablaBloqueTexto as Tabla


@dataclass
class BloqueTexto(Dato):
    texto: Texto

    def dependo(self) -> list[Clave]:
        return super().dependo()

    def obtener_clave(self) -> Clave:
        return BloqueTexto._obtener_clave(self.texto)

    @classmethod
    def _obtener_clave(cls, texto: Texto) -> Clave:
        return Clave(TipoNodo.BLOQUE_TEXTO, texto.hash())

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_texto = Tabla.insertar(cursor, self.texto.bjson())

        except Exception as err:
            mensaje = f"Al insertar bloque de texto {self.texto.string()[:20]}"
            raise ErrorInsertar(mensaje, err)

        if id_texto is None:
            raise ErrorIdNoGenerado("El texto insertado no tiene id")

        return Nodo(id_texto, self.obtener_clave())
