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
    EVALUACIONES_MATERIA = "EvaluacionesPorMateria"
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
    PAPER = "ReferenciasPaper"

    CURSO_ONLINE = "ReferenciasCursoOnline"
    TEMA = "ReferenciasTema"

class TablasColeccion(StrEnum):
    # Ejercicios
    EJERCICIOS = "Ejercicios"
    GUIAS = "Guias"
    GUIA_EJERCICIOS = "EjercicioPorGuia"
    EVALUACION = "Evaluaciones"
    EVALUACION_EJERCICIOS = "EjercicioPorEvaluacion"

    # Ajedrez
    AJEDREZ = "MovimientosAjedrez"

    # Biblioteca
    LIBRO = "Libros"
    CAPITULO = "CapitulosLibro"

    # Papers
    PAPER = "Papers"

    # Diccionario
    DICCIONARIO = "Diccionario"

class TablasGenerales(StrEnum):
    AUTORES = "Autores"
    BLOQUE_TEXTO = "BloqueDeTexto"
    EDITORIAL = "Editoriales"
    IMAGENES = "Imagenes"

class TablasExtra(StrEnum):
    BIBLIOGRAFIA = "Bibliografia"

