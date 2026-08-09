import sqlite3 as sql
from collections.abc import Iterable
from dataclasses import dataclass
from typing import ClassVar

from fastembed import TextEmbedding

from contenido.dependencias import TipoNodo
from contenido.errores import ErrorInsertar
from dependencias import Clave, Dato
from logger import LoggerNivel, loggear

from .link import Link
from .tablas import TablaEmbedding as Tabla

MODELO = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"


@dataclass
class Embedding(Dato):
    modelo: ClassVar[TextEmbedding] = TextEmbedding(MODELO)

    embedding: bytes
    clave_link: Clave

    @classmethod
    def parsear(cls, *pares: tuple[Link | Clave, str]) -> list[Dato]:
        claves: Iterable[Clave] = (
            link if type(link) is Clave else link.obtener_clave() for link, _ in pares
        )
        textos: Iterable[str] = (texto for _, texto in pares)

        datos = []
        for clave_link, embedding in zip(claves, cls.modelo.embed(textos)):
            datos.append(Embedding(embedding.tobytes(), clave_link))
        return datos

    def __str__(self) -> str:
        emb = "".join(f.__str__() for f in self.embedding[:5])
        return f"Embedding(Clave={self.clave_link}, Embedding={emb}...)"

    def dependo(self) -> list[Clave]:
        return [self.clave_link]

    def obtener_clave(self) -> Clave:
        return Clave.de_texto(
            TipoNodo.EMBEDDING, "".join(f.__str__() for f in self.embedding)
        )

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> None:
        try:
            Tabla.insertar(
                cursor,
                self.embedding,
                dependencias[self.clave_link],
            )

        except Exception as err:
            raise ErrorInsertar(f"Al insertar embedding: {self}", err)
