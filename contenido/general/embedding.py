import sqlite3 as sql
from fastembed import TextEmbedding
from dataclasses import dataclass
from typing import ClassVar, Iterable, Dict, List, Tuple

from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .link import Link
from .tablas import TablaEmbedding as Tabla

MODELO = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

@dataclass
class Embedding(Dato):
    modelo: ClassVar[TextEmbedding] = TextEmbedding(MODELO)

    embedding: bytes
    clave_link: Clave

    @classmethod
    def parsear(cls, *pares: Tuple[ Link | Clave, str ]) -> List[Dato]:
        claves: Iterable[Clave] = (
            link if type(link) is Clave else link.obtener_clave()
            for link, _ in pares
        )
        textos: Iterable[str] = ( texto for _, texto in pares )

        datos = []
        for clave_link, embedding in zip(claves, cls.modelo.embed(textos)):
            datos.append(Embedding(embedding.tobytes(), clave_link))
        return datos

    def __str__(self) -> str:
        emb = "".join(map(lambda f: f"{f}", self.embedding[:5]))
        return f"Embedding(Clave={self.clave_link}, Embedding={emb}...)"

    def dependo(self) -> List[Clave]: 
        return [ self.clave_link ]

    def obtener_clave(self) -> Clave: 
        return Clave.de_texto(TipoNodo.EMBEDDING, "".join(map(lambda f: f"{f}", self.embedding)))

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try: 
            Tabla.insertar(
                cursor, 
                self.embedding,
                dependencias[self.clave_link],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar embedding: {self}")
            raise e 

