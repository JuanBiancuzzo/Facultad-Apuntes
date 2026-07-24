import sqlite3 as sql
from fastembed import TextEmbedding
from dataclasses import dataclass
from typing import Dict, List, ClassVar

from dependencias import Dato, Clave
from archivos import Texto
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaEmbedding as Tabla

MODELO = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

@dataclass
class Embbeding(Dato):
    modelo: ClassVar[TextEmbedding] = TextEmbedding(MODELO)

    tabla: str
    clave_dato: Clave
    embbeding: bytes

    @classmethod
    def de_texto(cls, tabla: str, clave_dato: Clave, texto: Texto) -> List[Embbeding]:
        embbedings = []
        for embbeding in cls.modelo.embed(texto.chunks()):
            embbedings.append(Embbeding(tabla, clave_dato, embbeding.tobytes()))
        return embbedings

    @classmethod
    def de_string(cls, tabla: str, clave_dato: Clave, string: str) -> Embbeding:
        embbeding = next(cls.modelo.embed(string))
        return Embbeding(tabla, clave_dato, embbeding.tobytes())

    def __str__(self) -> str:
        emb = "".join(map(lambda f: f"{f}", self.embbeding[:5]))
        return f"Embedding(Tabla={self.tabla}, Clave={self.clave_dato}, Embbeding={emb}...)"

    def dependo(self) -> List[Clave]: 
        return [ self.clave_dato ]

    def obtener_clave(self) -> Clave: 
        return Clave.de_texto(TipoNodo.EMBEDDING, "".join(map(lambda f: f"{f}", self.embbeding)))

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try: 
            Tabla.insertar(
                cursor, 
                self.embbeding,
                self.tabla,
                dependencias[self.clave_dato],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar embbeding en la tabla {self.tabla}")
            raise e 

