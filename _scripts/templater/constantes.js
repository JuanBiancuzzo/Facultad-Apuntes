const LENGUAJE_C = "c";
const LENGUAJE_PYTHON = "python";
const LENGUAJE_DEFAULT = "default";

module.exports = () => ({
    CARACTERES_INVALIDOS: ['*', '"', '\\', '/', '<', '>', ':', '|', '?'],
    MESES: (mes) => [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ][mes - 1],
    FORMATO_DIA: "YYYY-MM-DD",
    SIMBOLOS: {
        sacar: "⊖",
        agregar: "⊕",
        volver: "↶",
        modificar: "✏️",
        opcional: "(opcional)",
    },
    TEMPLATE: {
        nota: "Nota - Template",
        coleccion: {
            componente: "Componete - Template",
            estructuraDatos: {
                infoGeneral: "Informacion de la estructura - Template",
                editiar: "Editar estructura de datos - Template",
                representarMetodoDv: "Representacion metodo - Template",
            },
            distribucion: "Distribucion - Template",
            documentoLegal: "Documento legal - Template",
            funciones: {
                libreria: "Libreria de funciones - Template",
                modulo: "Modulo de funciones - Template",
            },
            libro: "Libro - Template",
            paper: "Paper - Template",
            programa: "Programa - Template",
            receta: "Receta - Template",
            bloqueMatematica: "Bloque Matematica - Template",
        },
        seccion: "Seccion - Template",
        etapa: "Etapa - Template",
        seccionReferencia: "Seccion referencias - Template",
        referencias: {
            editar: "Editar referencia - Template",
        }
    },
    SECCIONES: {
        referencias: { nivel: 1, texto: "Referencias" },
        resumen: { nivel: 1, texto: "Resumen" },
        definicion: { nivel: 1, texto: "Definición" },
        resumenInvestigacion: { nivel: 2, texto: "Resumen" },
        progreso: { nivel: 1, texto: "Progreso" },
        informacion: { nivel: 1, texto: "Información" },
        operaciones: { nivel: 2, texto: "Operaciones" },
        metodo: { nivel: 3 },
    },
    TAGS: {
        investigacion: {
            self: "investigación",
            indice: "índice",
        },
        curso: {
            self: "cursos",
            curso: "curso",
            resumen: "resumen",
        },
        facultad: {
            self: "facultad",
            carrera: {
                self: "carrera",
                informatica: "ingeniería-en-informática",
                electronica: "ingeniería-electrónica",
                datos: "licenciatura-en-ciencia-de-datos",
                fisica: "licenciatura-en-ciencias-físicas",
                matematica: "licenciatura-en-ciencias-matemáticas",
            },
            materia: "materia",
            resumen: "resumen",
        },
        coleccion: {
            self: "colección",
            representante: "representante",
            funciones: {
                self: "funciones",
                lenguajes: {
                    self: "lenguaje",
                    [LENGUAJE_PYTHON]: "Librerías-de-Python",
                    [LENGUAJE_C]: "Librerías-de-C",
                },
                libreria: "libreria",
                modulo: "modulo",
                funcion: "función",
            },
            bloqueMatematica: {
                self: "bloque-matematica",
                tema: "tema",
                subtema: "subtema",
            },
            estructuraDatos: {
                self: "data-structures",
                estructura: "estructura",
            },
            libros: {
                self: "biblioteca",
                libro: "libro",
            },
        },
        referencias: "referencia",
        proyecto: {
            self: "proyecto",
            investigacion: {
                self: "investigación",
                general: "proyecto-investigación",
            }, 
            practico: {
                self: "práctico",
                general: "proyecto-práctico"
            },
            juego: {
                self: "GDD",
                general: "game-design-documents",
            },
        },
        nota: {
            self: "nota",
            carrera: "facultad",
            investigacion: "investigacion",
            proyecto: "proyecto",
            curso: "curso",
            coleccion: "colección",
        }
    },
    DIRECTORIOS: {
        imagenes: "img",
        temporal: "temp",
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
            estructuraDatos: "data structures",
            distribuciones: "distribuciones",
            documentos: "documentos",
            funciones: {
                self: "funciones",
                [LENGUAJE_PYTHON]: "Lenguaje Python",
                [LENGUAJE_C]: "Lenguaje C",
            },
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
        template: {
            self: "_template",
            referencias: "referencias",
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
    DATOS: {
        CARRERA: {
            estado: "estado",
            tags: "tags",
            planesDeEstudio: "planes",
            tieneCodigoLaMateria: "tieneCodigo",
        },
        MATERIA: {
            infoCuatri: "cuatri",
            referencias: "referencias",
            equivalencia: "equivalencia",
            tags: "tags",
            codigoMateria: "codigo",
            estado: "estado",
            nombre: "nombreMateria",
            nombreReudico: "nombreReducido",
        },
        INVESTIGACION: {
            estado: "estado",
            tags: "tags",
            dia: "dia",
            aliases: "aliases",
            equivalencia: "equivalente",
            referencias: "referencias",
        },
        CURSO: {
            nombre: "nombreCurso",
            dia: "dia",
            etapa: "etapa",
            estado: "estado",
            tags: "tags",
        },
        RESUMEN: {
            numero: "capitulo",
            parte: "parte",
            referencias: "referencias",
            nombre: "nombreResumen",
        },
        PROYECTO: {
            dia: "dia",
            estado: "estado",
            tags: "tags",
        },
        ARCHIVO: {
            etapa: "etapa",
            tags: "tags",
            dia: "dia",
            aliases: "aliases",
            referencias: "referencias",
        },
        PROGRESO: {
            dia: "dia",
            tags: "tags",
        },
        COLECCION: {
            dia: "dia",
            estado: "estado",
            tags: "tags",
        },
        BLOQUES_MATEMATICA: {
            tema: {
                tags: "tags",
                numero: "capitulo",
                nombre: "nombreTema",
                obtenerTitulo: (tema) => `Tema de ${tema}`,
            },
            subtema: {
                tags: "tags",
                numero: "capitulo",
                nombre: "nombreSubtema",
                nota: {
                    self: "nota",
                    numero: "numero",
                    nombre: "nombre",
                    path: "path",
                    pathRelacionado: "pathRelacionado",
                },
                obtenerTitulo: (tema, subtema) => `${subtema} del tema ${tema}`,
            },
        },
        LENGUAJE: {
            lenguajes: {
                python: LENGUAJE_PYTHON,
                c: LENGUAJE_C,
                default: LENGUAJE_DEFAULT,
            },
            [LENGUAJE_C]: {
                nombre: "C",
                multiplesTiposDatos: false,
                parametroValorPorDefecto: false,
                structHerencia: false,
            },
            [LENGUAJE_PYTHON]: {
                nombre: "Python",
                multiplesTiposDatos: true,
                parametroValorPorDefecto: true,
                structHerencia: true,
            },
            [LENGUAJE_DEFAULT]: {
                nombre: "PseudoCodigo",
                multiplesTiposDatos: true,
                parametroValorPorDefecto: true,
                structHerencia: true,
            },
        },
        FUNCIONES: {
            lenguaje: {
                tags: "tags",
                nombre: "nombreLenguaje",
                temaInvestigacion: "temaInvestigacion",
                obtenerTitulo: (lenguaje) => `Librerías del lenguaje de ${lenguaje}`,
            },
            libreria: {
                tags: "tags",
                nombre: "nombreLibreria",
                obtenerTitulo: (lenguaje, libreria) => `Librería ${libreria} de ${lenguaje}`,
            },
            modulo: {
                tags: "tags",
                nombre: "nombreModulo",
                obtenerTitulo: (lenguaje, libreria, modulo) => `Módulo ${modulo} de la librería ${libreria} en ${lenguaje}`,
            },
            funcion: {
                tags: "tags",
                firma: {
                    self: "firma",
                    nombreFuncion: "nombre",
                    descripcion: "descripcion",
                    parametros: "parametros",
                    return: "return",
                },
            },
            parametro: {
                nombreParametro: "nombre",
                tipoDeDato: "type",
                valorPorDefecto: "default",
                descripcion: "descripcion",
            },
            struct: {
                nombreStruct: "nombre",
                descripcion: "descripcion",
                campos: "campos",
                herede: "herencia",
            },
            return: {
                tipoDeDato: "type",
                descripcion: "descripcion",
            },
        },
        ESTRUCTURA_DATOS: {
            nombre: "nombreEstructura",
            estructuras: "estrucutrasRelacionadas",
            metodos: "métodos",
        },
        REFERENCIAS: {
            numReferencia: "numReferencia",
            tipoCita: "tipoCita",
            aliases: "aliases",
            libro: {
                titulo: "tituloObra",
                subtitulo: "subtituloObra",
                autore: {
                    self: "nombreAutores",
                    nombre: "nombre",
                    apellido: "apellido",
                },
                anio: "anio",
                editorial: "editorial",
                edicion: "edicion",
                volumen: "volumen",
                url: "url",
                capitulo: "capitulos",
            },
            capituloLibro: {
                numero: "numeroCapitulo",
                nombre: "nombreCapitulo",
                editore: {
                    self: "editores",
                    nombre: "nombre",
                    apellido: "apellido",
                },
                paginas: {
                    self: "paginas",
                    inicio: "inicio",
                    final: "final",
                },
            },
            curso: {
                profesore: {
                    self: "nombreAutores",
                    nombre: "nombre",
                    apellido: "appelido",
                },
                fecha: "fechaCurso",
                nombre: "nombreCurso",
                pagina: "nombrePagina",
                url: "url",
            },
            temaCurso: {
                nombre: "nombreTema",
                numero: "capitulo",
                numProfesore: "profesores",
                parte: "parte",
                curso: "curso",
            },
            paper: {
                autore: {
                    self: "autores",
                    nombre: "nombre",
                    apellido: "apellido",
                },
                titulo: "tituloInforme",
                subtitulo: "subtituloInforme",
                anio: "anio",
                nombreRevista: "nombreRevista",
                volumenRevista: "volumenRevista",
                paginas: {
                    self: "paginas",
                    inicio: "inicio",
                    final: "final",
                },
                numeroRevista: "numeroInforme",
                editore: {
                    self: "editores",
                    nombre: "nombre",
                    apellido: "apellido",
                },
                url: "url",
                doi: "doi",
            },
            web: {
                autore: {
                    self: "nombreAutores",
                    nombre: "nombre",
                    apellido: "apellido",
                },
                fecha: "fechaPublicacion",
                titulo: "tituloArticulo",
                pagina: "nombrePagina",
                url: "url",
            },
            wiki: {
                nombre: "nombreArticulo",
                fecha: "fecha",
                url: "url",
            },
            youtube: {
                nombreVideo: "nombreVideo",
                nombreCanal: "nombreCanal",
                fecha: "fecha",
                url: "url",
            },
        },
    },
    ETAPAS: {
        sinEmpezar: "sin-empezar",
        empezado: "empezado",
        ampliar: "ampliar",
        terminado: "terminado",
    },
    CREAR: {
        materia: "Materia",
        resumenMateria: "Resumen materia",
        curso: "Curso",
        resumenCurso: "Resumen curso",
        investigacion: "Investigación",
        proyectoPractico: "Proyecto práctico",
        proyectoInvestigacion: "Proyecto Investigación",
        juego: "GDD",
        coleccion: {
            funciones: {
                libreria: "Libreria funciones",
                modulo: "Módulo funciones"
            },
            bloqueMatematica: {
                tema: "Tema bloque matemática",
                subtema: "Subtema bloque matemática",
            },
            estructuraDatos: {
                self: "Estructura de datos",
            }
        },
    },
    BLOQUES_MATEMATICA: {
        bloques: {
            teorema: "teorema",
            observacion: "observacion",
            proposicion: "proposicion",
            corolario: "corolario",
            demostracion: "demostracion",
        },
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
        corolario: {
            callout: "corolario",
            nombre: "Corolario",
            reducido: "cor",
        },
        demostracion: {
            callout: "demostracion",
            nombre: "Demostración",
        }
    },
});