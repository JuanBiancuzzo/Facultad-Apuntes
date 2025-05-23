const LENGUAJE_C = "C";
const LENGUAJE_PYTHON = "Python";
const LENGUAJE_RUST = "Rust";
const LENGUAJE_DEFAULT = "default";

module.exports = () => ({
    CARACTERES_INVALIDOS: ['*', '"', '\\', '/', '<', '>', ':', '|', '?'],
    MESES: (mes) => [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ][mes - 1],
    FORMATO_DIA: "YYYY-MM-DD",
    SIMBOLOS: {
        sacar: "⊖",
        agregar: "⊕",
        volver: "↶",
        confirmar: "✓",
        elegir: "↶",
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
    DATAVIEW: {
        self: "_scripts/dataview",
        etapa: "notas/etapa",
        coleccion: {
            bloqueMatematica: {
                tema: "coleccion/bloqueMatematica/tema",
                subtema: "coleccion/bloqueMatematica/subtema",
            },
            libro: {
                biblioteca: "coleccion/libro/biblioteca",
                capitulo: "coleccion/libro/capitulos"
            },
            distribuciones: {
                completo: "coleccion/distribuciones/mostrarDistribuciones",
                distribuciones: "coleccion/distribuciones/distribuciones",
                relaciones: "coleccion/distribuciones/relaciones",
                relacion: "coleccion/distribuciones/relacion"
            },
            componentes: {
                componentes: "coleccion/componentes/componentes",
                actuadores: "coleccion/componentes/actuadores",
                micros: "coleccion/componentes/micros",
                placas: "coleccion/componentes/placas",
                sensores: "coleccion/componentes/sensores",
                integrados: "coleccion/componentes/integrados",
            },
        },
        referencia: {
            archivo: "referencia/referenciasArchivo",
            acumulada: "referencia/referenciasAcumuladas",
        },
        carrera: {
            mapa: "carrera/mapa",
            carrera: "carrera/carreras",
            materias: "carrera/materias",
            apuntes: "contenido/listaAcumulada",
        },
    },
    SECCIONES: {
        seccion: (sec) => `${"#".repeat(sec.nivel)} ${sec.texto}`,
        seccionNombre: (sec, nombre) => `${"#".repeat(sec.nivel)} ${nombre}`,
        relaciones: { nivel: 1, texto: "Relaciones" },
        notacion: { nivel: 3, texto: "Notación" },
        apuntes: { nivel: 1, texto: "Apuntes" },
        indice: { nivel: 1, texto: "Índice" },
        bibliografia: { nivel: 1, texto: "Bibliografía" },
        mapa: { nivel: 1, texto: "Mapa" },
        materias: { nivel: 1, texto: "Materias" },
        referencias: { nivel: 1, texto: "Referencias" },
        resumen: { nivel: 1, texto: "Resumen" },
        definicion: { nivel: 1, texto: "Definición" },
        resumenInvestigacion: { nivel: 2, texto: "Resumen" },
        progreso: { nivel: 1, texto: "Progreso" },
        informacion: { nivel: 1, texto: "Información" },
        operaciones: { nivel: 2, texto: "Operaciones" },
        metodo: { nivel: 3 },
        capitulo: { nivel: 2 },
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
            carrera: "carrera",
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
                    [LENGUAJE_RUST]: "Librerías-de-Rust",
                    [LENGUAJE_DEFAULT]: "Librerías-de-Pseudocódigo",
                },
                libreria: "libreria",
                modulo: "modulo",
                estructura: "estructura",
                tipoDeDato: "tipo-de-dato",
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
            papers: {
                self: "archive",
                paper: "paper",
            },
            distribuciones: {
                self: "distribuciones",
                distribucion: "distribución",
                discreta: "discreta",
                continua: "continua",
                multi: "multivariada",
                relacion: "relación",
            },
            componentes: {
                self: "componentes",
                componente: "componente",
                actuador: "actuador",
                micro: "microprocesador",
                placa: "pladaDeDesarrollo",
                sensor: "sensor",
                integrado: "circuitosIntegrado",
            },
            recetas: {
                self: "recetas",
                receta: "receta",
            }
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
            componentes: {
                self: "componentes",
                actuadores: "actuadores",
                micros: "microprocesadores",
                placas: "placas de desarrollo",
                sensores: "sensores",
                integrados: "circuitos integrados",
            },
            bloquesMatematica: "teoremas, proposiciones y observaciones",
            estructuraDatos: "data structures",
            distribuciones: {
                self: "distribuciones",
                discreto: "discreta",
                continua: "continua",
                multi: "multivariada",
                relaciones: "relaciones",
            },
            documentos: "documentos",
            librerias: {
                self: "librerias",
                [LENGUAJE_PYTHON]: "Lenguaje Python",
                [LENGUAJE_C]: "Lenguaje C",
                [LENGUAJE_RUST]: "Lenguaje Rust",
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
        diccionario: "DiccionarioOnline",
    },
    DATOS: {
        CARRERA: {
            estado: "estado",
            tags: "tags",
            nombre: "nombreCarrera",
            planesDeEstudio: "planes",
            tieneCodigoLaMateria: "tieneCodigo",
        },
        MATERIA: {
            infoCuatri: "cuatri",
            equivalencia: "equivalencia",
            codigo: "codigo",
            estado: "estado",
            nombre: "nombreMateria",
            nombreReducido: "nombreReducido",
            plan: "plan",
            correlativas: "correlativas",
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
            nombre: "nombreResumen",
            bibliografia: "referencias",
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
        NOTA: {
            etapa: "etapa",
            referencias: "referencias",
            nombrePrincipal: "nombre",
            seudonimos: "aliases",
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
        DISTRIBUCION: {
            nombre: "nombreDistribucion",
            tipo: {
                self: "tipoDistribucion",
                discreta: "discreta", 
                continua: "continua", 
                multi: "multivariada", 
            },
        },
        RELACION_DISTRIBUCION: {
            relacionadas: "distribucionesRelacionadas",
            tipo: {
                self: "tipoRelacionDistribucion",
                relacion: "relacion"
            }
        },
        COMPONENTES: {
            nombre: "nombreComponete",
            tipo: {
                self: "tipoComponente",
                actuador: "actuador",
                micro: "microprocesador",
                placa: "pladaDeDesarrollo",
                sensor: "sensor",
                integrado: "circuitosIntegrados",
            }
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
                Python: LENGUAJE_PYTHON,
                C: LENGUAJE_C,
                Rust: LENGUAJE_RUST,
                default: LENGUAJE_DEFAULT,
            },
            [LENGUAJE_C]: {
                nombre: "C",
                parametro: {
                    valorPorDefecto: false,
                },
                return: {
                    opcional: false,
                },
                tipoDeDato: {
                    multiples: false,
                },
                clase: {
                    tieneClase: false,
                },
                struct: {
                    tieneStruct: false,
                    herencia: false,
                    variableEstaticas: false,
                },
                generico: {
                    tieneGenericos: false,
                },
                interfaz: {
                    tieneInterfaces: false,
                },
                tupla: {
                    tieneTupla: false,
                },
                enum: {
                    tieneEnum: true,
                },
                array: {
                    tieneArray: true,
                    conCantidad: true,
                },
                referencia: {
                    tieneReferencia: true,
                },
            },
            [LENGUAJE_PYTHON]: {
                nombre: "Python",
                parametro: {
                    valorPorDefecto: true,
                },
                return: {
                    opcional: true,
                },
                tipoDeDato: {
                    multiples: true,
                },
                clase: {
                    tieneClase: true,
                    herencia: false,
                    variableEstaticas: true,
                },
                struct: {
                    tieneStruct: false,
                },
                generico: {
                    tieneGenericos: false,
                },
                interfaz: {
                    tieneInterfaces: false,
                },
                tupla: {
                    tieneTupla: true,
                },
                enum: {
                    tieneEnum: false,
                },
                array: {
                    tieneArray: true,
                    conCantidad: false,
                },
                referencia: {
                    tieneReferencia: false,
                },
            },
            [LENGUAJE_RUST]: {
                nombre: "Rust",
                parametro: {
                    valorPorDefecto: false,
                },
                return: {
                    opcional: true,
                },
                tipoDeDato: {
                    multiples: false,
                },
                clase: {
                    tieneClase: false,
                },
                struct: {
                    tieneStruct: true,
                    herencia: false, 
                    variableEstaticas: false,
                },
                generico: {
                    tieneGenericos: true,
                },
                interfaz: {
                    tieneInterfaces: true,
                },
                tupla: {
                    tieneTupla: true,
                },
                enum: {
                    tieneEnum: true,
                },
                array: {
                    tieneArray: true,
                    conCantidad: true,
                },
                referencia: {
                    tieneReferencia: true,
                },
            },
            [LENGUAJE_DEFAULT]: {
                nombre: "PseudoCodigo",
                parametro: {
                    valorPorDefecto: true,
                },
                return: {
                    opcional: true,
                },
                tipoDeDato: {
                    multiples: false,
                },
                clase: {
                    tieneClase: true,
                    herencia: true,
                    variableEstaticas: false,
                },
                struct: {
                    tieneStruct: true,
                    herencia: true,
                    variableEstaticas: false,
                },
                generico: {
                    tieneGenericos: true,
                },
                interfaz: {
                    tieneInterfaces: true,
                },
                tupla: {
                    tieneTupla: true,
                },
                enum: {
                    tieneEnum: true,
                },
                array: {
                    tieneArray: true,
                    conCantidad: true,
                },
                referencia: {
                    tieneReferencia: true,
                },
            },
        },
        FUNCIONES: {
            lenguaje: {
                nombre: "nombreLenguaje",
                tiposPrimitivos: "tiposDeDatosPrimitivos",
                temaInvestigacion: "temaInvestigacion",
            },
            libreria: {
                nombre: "nombreLibreria",
                dependencias: "dependencias",
            },
            modulo: {
                nombre: "nombreModulo",
            },
            funcion: {
                nombreFuncion: "nombre",
                descripcion: "descripcion",
                parametros: "parametros",
                return: "return",
                genericos: "genericos",
            },
            parametro: {
                nombreParametro: "nombre",
                descripcion: "descripcion",
                valorPorDefecto: "default",
                tipoDeDato: "type",
            },
            clase: {
                nombre: "nombre",
                descripcion: "descripcion",
                campos: "campos",
                metodos: "metodos",
                variablesEstaticas: "variablesEstaticas",
                herede: "herencia",
                genericos: "genericos",
            },
            struct: {
                nombre: "nombre",
                descripcion: "descripcion",
                campos: "campos",
                variablesEstaticas: "variablesEstaticas",
                herede: "herencia",
                genericos: "genericos",
            },
            interfaz: {
                nombre: "nombre",
                metodos: "metodos",
                genericos: "genericos",
            },
            generico: {
                nombre: "nombre",
                interfaces: "interfaces",
                uso: "uso",
            },
            enum: {
                nombre: "nombre",
                parametros: "parametro",
                genericos: "genericos",
            },
            array: {
                tipoDeDato: "type",
                cantidad: "cantidad",
            },
            return: {
                tipoDeDato: "type",
                descripcion: "descripcion",
            },
            tipoDeDato: {
                id: "id",
                valor: "valor",
                tipo: {
                    self: "type",
                    primitivo: "Primitivo",
                    tupla: "Tupla",
                    array: "Array",
                    clase: "Class",
                    struct: "Struct",
                    interfaz: "Interfaz",
                    generico: "Generico",
                    enum: "Enum",
                    referencia: "Referencia",
                    union: "Union",
                    funcion: "Función",
                    lenguaje: "Lenguaje",
                    libreria: "Libreria", 
                    modulo: "Modulo",
                    proxy: "Proxeado",
                },
            },
            proxy: {
                id: "id",
                tipo: "tipoObjeto",
                objeto: "idObjeto",
                genericos: "genericos"
            },
            manejador: {
                id: "id",
                tipo: "type",
                valor: "valor",
                apariciones: "apariciones",
                previo: "previo",
            },
        },
        ESTRUCTURA_DATOS: {
            nombre: "nombreEstructura",
            idEstructura: "idEstructura",
            datosTiposDeDatos: "tiposDeDatos",
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
            diccionario: {
                editorial: "editorial",
                palabra: "palabraBuscada",
                nombre: "nombreDiccionario",
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
    BLOQUES_MATEMATICA: {
        bloques: {
            teorema: "teorema",
            defincion: "definicion",
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
        definicion: {
            callout: "definicion",
            nombre: "Definición",
            reducido: "def",
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
    CREAR: {
        carrera: "Carrera",
        curso: "Curso",
        investigacion: "Investigacion",
        proyecto: "Proyecto",
    }
});