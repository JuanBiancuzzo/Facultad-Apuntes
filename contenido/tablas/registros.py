from sqlite3 import Connection as Conn, Cursor
from abc import ABC, abstractmethod
from typing import Dict, Any
from enum import StrEnum

type Tablas = TablasFacultad | TablasReferencias | TablasColeccion | TablasExtra | TablasGenerales

class TablasFacultad(StrEnum):
    # Carrera
    CARRERAS = "Carreras"
    PLANES_DE_ESTUDIO = "PlanesDeEstudio"

    # Materias
    MATERIAS = "Materias"
    MATERIAS_EQ = "MateriasEquivalentes"
    CUATRI = "Cuatrimestres"
    GUIAS_MATERIA = "GuiasPorMateria"
    CORRELATIVAS = "CorrelativasDeMaterias"

    # Tema
    TEMA = "TemasCarrera"

class TablasReferencias(StrEnum):
    REFERENCIAS = "Referencias"
    AUTORES_REFERENCIAS = "AutoresParaReferencias"

    WEB = "ReferenciasWebsite"
    WIKIPEDIA = "ReferenciasWikipedia"
    YOUTUBE = "ReferenciasYoutube"
    DICCIONARIO = "ReferenciasDiccionarioOnline"

    LIBRO = "ReferenciasLibro"
    CAPITULOS = "ReferenciasCapituloLibro"

class TablasColeccion(StrEnum):
    # Ejercicios
    EJERCICIOS = "Ejercicios"
    GUIAS = "Guias"
    GUIA_EJERCICIOS = "EjercicioPorGuia"

    # Ajedrez
    AJEDREZ = "MovimientosAjedrez"

    # Biblioteca
    LIBRO = "Libros"
    CAPITULO = "CapitulosLibro"

    # Diccionario
    DICCIONARIO = "Diccionario"

class TablasGenerales(StrEnum):
    AUTORES = "Autores"
    BLOQUE_TEXTO = "BloqueDeTexto"
    EDITORIAL = "Editoriales"

class TablasExtra(StrEnum):
    BIBLIOGRAFIA = "Bibliografia"

class Tabla(ABC):
    nombre: Tablas

    @abstractmethod
    def crear(self, conn: Conn) -> None: 
        """ Crear tablas """

    @classmethod
    def _insertar(cls, cursor: Cursor, valores: Dict[str, Any]) -> int | None:
        cursor.execute(f"""
            INSERT INTO {cls.nombre} ({", ".join(valores.keys())})
            VALUES ({", ".join("?" for _ in valores)})
        """, tuple(valores.values()))
        return cursor.lastrowid
