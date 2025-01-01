module.exports = () => ({
    CARACTERES_INVALIDOS: ['*', '"', '\\', '/', '<', '>', ':', '|', '?'],
    MESES: (mes) => [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ][mes - 1],
    TEMPLATE: {
        nota: "Nota - Template",
        seccion: "Seccion - Template",
    },
    TAGS: {
        investigacion: "índice",
        carrera: "carrera",
        materia: "materia",
        resumen: "resumen",
        curso: "cursos",
        coleccion: "colección",
        referencias: "referencia",
        bloqueMatematica: {
            self: "bloque-matematica",
            tema: "tema",
            subtema: "subtema",
        },
        proyecto: {
            self: "proyecto",
            investigacion: "investigación",
            practico: "práctico",
            juego: "GDC",
        },
        nota: {
            self: "nota",
            carrera: "facultad",
            investigacion: "investigacion",
            proyecto: "proyecto",
            curso: "curso",
        }
    },
    DIRECTORIOS: {
        referencias: "_referencias",
        investigacion: "investigación",
        curso: "cursos",
        proyectoPractico: "proyecto práctico",
        proyectoInvestigacion: "proyecto investigación",
        GDD: "game design documents",
        coleccion: {
            self: "colección",
            componentes: "componentes",
            bloquesMatematica: "teoremas, proposiciones y observaciones",
            dataStructures: "data structures",
            distribuciones: "distribuciones",
            documentos: "documentos",
            funciones: "funciones",
            libros: "libros",
            papers: "papers",
            programas: "programas",
            recetas: "recetas",
        },
        carrera: {
            informatica: "ingeniería en informática",
            electronica: "ingeniería electrónica",
            datos: "licenciatura en ciencia de datos",
            fisica: "licenciatura en ciencias físicas",
            matematica: "licenciatura en ciencias matemáticas",
        },
    },
    REFERENCIAS: {
        libro: "Libro",
        capituloLibro: "CapituloLibro",
        curso: "Curso",
        temaCurso: "CursoTema",
        paper: "Paper",
        youtube: "Youtube",
        web: "Web",
        wikipedia: "Wikipedia",
    },
    DATOS_REFERENCIA: {
        numReferencia: "numReferencia",
        tipoCita: "tipoCita",
    },
    DATOS_ARCHIVOS: {
        referencias: "referencias",
        etapa: "etapa",
        tags: "tags",
        dia: "dia",
    },
    ETAPAS: {
        sinEmpezar: "sin-empezar",
        empezado: "empezado",
        ampliar: "ampliar",
        terminado: "terminado",
    },
    NOMBRE_SECCIONES: {
        facultad: "Facultad",
        curso: "Curso",
        investigacion: "Investigación",
        proyectoPractico: "Proyecto Práctico",
        proyectoInvestigacion: "Proyecto Investigación",
        GDD: "GDD",
    },
    BLOQUES_MATEMATICA: {
        teorema: {
            callout: "teorema",
            nombre: "Teorema",
            reducido: "teo",
        },
        observacion: {
            callout: "observacion",
            nombre: "Observación",
            reducido: "obs",
        },
        proposicion: {
            callout: "proposicion",
            nombre: "Proposición",
            reducido: "prop",
        },
        template: {
            tema: "Bloque Matematica Tema - Template",
            subtema: "Bloque Matematica Subtema - Template",
        },
    },
    DATOS_BLOQUES_MATEMATICA: {
        tema: {
            tags: "tags",
            numero: "capitulo",
        },
        subtema: {
            tags: "tags",
            numero: "capitulo",
            nota: {
                self: "nota",
                numero: "numero",
                nombre: "nombre",
                path: "path",
            },
        },
    }
});