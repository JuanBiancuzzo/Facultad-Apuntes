import sqlite3 as sql
from fastembed import TextEmbedding
from dataclasses import dataclass
from typing import Dict, List, ClassVar

from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.archivo import Texto
from .link import Link
from .tablas import TablaEmbedding as Tabla

MODELO = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

@dataclass
class Embedding(Dato):
    modelo: ClassVar[TextEmbedding] = TextEmbedding(MODELO)

    embedding: bytes
    clave_link: Clave

    @classmethod
    def de_texto(cls, tabla: str, clave_dato: Clave, texto: Texto, info: bytes | None = None) -> List[Dato]:
        link = Link.parsear(tabla, clave_dato, info)
        clave_link = link.obtener_clave()

        datos = [ link ]
        for embedding in cls.modelo.embed(texto.chunks()):
            datos.append(Embedding(embedding.tobytes(), clave_link))
        return datos

    @classmethod
    def de_string(cls, tabla: str, clave_dato: Clave, string: str, info: bytes | None = None) -> List[Dato]:
        link = Link.parsear(tabla, clave_dato, info)
        clave_link = link.obtener_clave()

        datos = [ link ]
        embedding = list(cls.modelo.embed(string))[0]
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

