package tablas

type Tablas string

const (
    // TablasFacultad 
    // - Carrera
    TF_CARRERAS = "Carreras"
    TF_PLANES_DE_ESTUDIO = "PlanesDeEstudio"

    // - Materias
    TF_MATERIAS = "Materias"
    // - MATERIAS_EQ = "MateriasEquivalentes"
    TF_CUATRI = "Cuatrimestres"
    TF_CORRELATIVAS = "CorrelativasDeMaterias"

    // - Tema
    TF_TEMA = "TemasCarrera"

    // TablasReferencias 
    TR_REFERENCIAS = "Referencias"
    TR_AUTORES_REFERENCIAS = "AutoresParaReferencias"

    TR_WEB = "ReferenciasWebsite"
    TR_WIKIPEDIA = "ReferenciasWikipedia"
    TR_YOUTUBE = "ReferenciasYoutube"
    TR_DICCIONARIO = "ReferenciasDiccionarioOnline"

    TR_LIBRO = "ReferenciasLibro"
    TR_CAPITULOS = "ReferenciasCapituloLibro"
    TR_PAPER = "ReferenciasPaper"

    TR_CURSO_ONLINE = "ReferenciasCursoOnline"
    TR_TEMA = "ReferenciasTema"

    // TablasColeccion 
    TC_COLECCION = "Colecciones"

    // - Ejercicios
    TC_EJERCICIOS = "Ejercicios"
    TC_GUIAS = "Guias"
    TC_GUIA_EJERCICIOS = "EjercicioPorGuia"
    TC_EVALUACION = "Evaluaciones"
    TC_EVALUACION_EJERCICIOS = "EjercicioPorEvaluacion"

    // - Ajedrez
    TC_AJEDREZ = "MovimientosAjedrez"

    // - Biblioteca
    TC_LIBRO = "Libros"
    TC_CAPITULO = "CapitulosLibro"

    // - Papers
    TC_PAPER = "Papers"

    // - Diccionario
    TC_DICCIONARIO = "Diccionario"

    // - Cursos
    TC_CURSO = "Cursos"

    // TablasGenerales 
    TG_AUTORES = "Autores"
    TG_EMBEDDING = "Embeddings"
    TG_BLOQUE_TEXTO = "BloqueDeTexto"
    TG_EDITORIAL = "Editoriales"
    TG_IMAGENES = "Imagenes"

    // TablasExtra 
    TE_BIBLIOGRAFIA = "Bibliografia"
    TE_GUIAS = "GuiasPorElemento"
    TE_EVALUACIONES = "EvaluacionesPorElemento"
)
