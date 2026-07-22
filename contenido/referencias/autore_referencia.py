import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass
from enum import StrEnum

from dependencias import Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from .tablas import TablaReferenciaAutore as Tabla

class TipoAutoreReferencia(StrEnum):
    WEBSITE = "Web"
    LIBRO = "Libro"
    CAPITULO = "CapituloLibro"
    PAPER_AUTORE = "PaperAutore"
    PAPER_EDITORE = "PaperEditore"
    CURSO_ONLINE = "CursoOnline"
    TEMA = "Tema"

    def crear(self, clave_referencia: Clave, clave_autore: Clave) -> AutoreReferencia:
        return AutoreReferencia(self, clave_referencia, clave_autore)

@dataclass
class AutoreReferencia(Dato):
    tipo: TipoAutoreReferencia
    clave_referencia: Clave
    clave_autore: Clave

    @classmethod
    def website(cls, clave_website: Clave, clave_autore: Clave) -> AutoreReferencia:
        return TipoAutoreReferencia.WEBSITE.crear(clave_website, clave_autore)

    @classmethod
    def libro(cls, clave_libro: Clave, clave_autore: Clave) -> AutoreReferencia:
        return TipoAutoreReferencia.LIBRO.crear(clave_libro, clave_autore)

    @classmethod
    def capitulo(cls, clave_capitulo: Clave, clave_autore: Clave) -> AutoreReferencia:
        return TipoAutoreReferencia.CAPITULO.crear(clave_capitulo, clave_autore)

    @classmethod
    def paper_autore(cls, clave_paper: Clave, clave_autore: Clave) -> AutoreReferencia:
        return TipoAutoreReferencia.PAPER_AUTORE.crear(clave_paper, clave_autore)

    @classmethod
    def paper_editore(cls, clave_paper: Clave, clave_autore: Clave) -> AutoreReferencia:
        return TipoAutoreReferencia.PAPER_EDITORE.crear(clave_paper, clave_autore)

    @classmethod
    def curso_online(cls, clave_curso: Clave, clave_autore: Clave) -> AutoreReferencia:
        return TipoAutoreReferencia.CURSO_ONLINE.crear(clave_curso, clave_autore)

    @classmethod
    def tema(cls, clave_tema: Clave, clave_autore: Clave) -> AutoreReferencia:
        return TipoAutoreReferencia.TEMA.crear(clave_tema, clave_autore)


    def dependo(self) -> List[Clave]: 
        return [ self.clave_referencia, self.clave_autore ]

    def obtener_clave(self) -> Clave: 
        return AutoreReferencia._obtener_clave(self.tipo, self.clave_referencia, self.clave_autore)

    @classmethod
    def _obtener_clave(cls, tipo: TipoAutoreReferencia, clave_referencia: Clave,  clave_autore: Clave) -> Clave:
        return Clave.de_texto(TipoNodo.AUTORES_REFERENCIA, f"{tipo}->{clave_referencia}-{clave_autore}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> None:
        try: 
            id_referencia = dependencias[self.clave_referencia]
            id_autore = dependencias[self.clave_autore]
            Tabla.insertar(cursor, self.tipo, id_referencia, id_autore)

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar autore de referencia: {self.tipo} -> {self.clave_referencia} y {self.clave_autore}")
            raise e
