const TITULO_OBRA = "tituloObra";
const SUBTITULO_OBRA = "subtituloObra";
const NOMBRE_AUTORES = "nombreAutores";
const ANIO = "anio";
const EDITORIAL = "editorial";
const EDICION = "edicion";
const VOLUMEN = "volumen";
const URL = "url";
const CAPITULOS = "capitulos";

const AGREGAR_EDITOR = "agregar editor";

const KEYS = [ TITULO_OBRA, SUBTITULO_OBRA, NOMBRE_AUTORES, ANIO, EDITORIAL, EDICION, VOLUMEN, URL, CAPITULOS ];

function valorDefault() {
    return {
        [TITULO_OBRA]: null,
        [SUBTITULO_OBRA]: null,
        [NOMBRE_AUTORES]: [],
        [ANIO]: null,
        [EDITORIAL]: null,
        [EDICION]: null,
        [VOLUMEN]: null,
        [URL]: null,
        [CAPITULOS]: []
    };
}

async function citarLibro(tp, datosIniciales = undefined) {
    const { 
        simple: SIMPLE, 
        multiple: MULTIPLE, 
        resursivo: RECURSIVO,
        ..._extra 
    } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let valoresNeutro = valorDefault();
    if (!datosIniciales) datosIniciales = {};
    for (let key of Object.keys(valoresNeutro)) {
        if ((!(key in datosIniciales)) || !datosIniciales[key]) 
            datosIniciales[key] = valoresNeutro[key];
    }

    return {
        [TITULO_OBRA]: {
            tipo: SIMPLE,
            valor: datosIniciales[TITULO_OBRA],
            minimo: (valor) => valor != null,
            representarElemento: (titulo) => {
                let representacion = "título de la obra";
                if (titulo) representacion += `: ${titulo}`;
                return representacion;
            },
            preguntar: async (tp, titulo) => await preguntar.simple(
                tp, titulo ? `Modificar el título de la obra: "${titulo}"` : "Nombre de la obra:",
                error.Quit("No se ingresó nombre de la obra")
            )
        },
        [SUBTITULO_OBRA]: {
            tipo: SIMPLE,
            valor: datosIniciales[SUBTITULO_OBRA],
            minimo: (_) => true,
            representarElemento: (titulo) => {
                let representacion = "subtítulo de la obra";
                if (titulo) representacion += `: ${titulo}`;
                return representacion;
            },
            preguntar: async (tp, titulo) => await preguntar.simple(
                tp, titulo ? `Modificar el subtítulo de la obra: "${titulo}"` : "Sub nombre de la obra:",
                error.Quit("No se ingresó el subnombre de la obra")
            )
        },
        [NOMBRE_AUTORES]: {
            tipo: MULTIPLE,
            valor: datosIniciales[NOMBRE_AUTORES],
            minimo: (valor) => valor.length > 0,
            representarElemento: (autore) => {
                if (autore == null) return "autore";
                return `${autore.apellido}, ${autore.nombre}`;
            },
            preguntar: async (tp, autore, _seguidorRef) => {
                let textoNombre = "Nombre del autore";
                let textoApellido = "Apellido del autore";
                if (autore) {
                    textoNombre += `, donde antes era ${autore.nombre}`;
                    textoApellido += `, donde antes era ${autore.apellido}`;
                }
                
                return {
                    apellido: await preguntar.simple(
                        tp, `${textoApellido}:`, 
                        error.Quit("No se ingresa el apellido del autore de forma correcta")
                    ),
                    nombre: await preguntar.simple(
                        tp, `${textoNombre}:`, 
                        error.Quit("No se ingresa el nombre del autore de forma correcta")
                    ),
                };
            },
            eliminarUltimo: (listaValores, _seguidorRef) => {
                listaValores.pop();
                return listaValores;
            }
        },
        [ANIO]: {
            tipo: SIMPLE,
            valor: datosIniciales[ANIO],
            minimo: (valor) => valor != null,
            representarElemento: (anio) => {
                let representacion = "año de publicación";
                if (anio) representacion += `: ${anio}`;
                return representacion;
            },
            preguntar: async (tp, anio) => await preguntar.numero(
                tp, anio ? `Modificar año de publicación: ${anio}` : "Año de publicación",
                error.Quit("No se ingresó año de publicación")
            )
        },
        [EDITORIAL]: {
            tipo: SIMPLE,
            valor: datosIniciales[EDITORIAL],
            minimo: (valor) => valor != null,
            representarElemento: (editorial) => {
                let representacion = "editorial del libro";
                if (editorial) representacion += `: ${editorial}`;
                return representacion;
            },
            preguntar: async (tp, editorial) => {
                const dv = app.plugins.plugins.dataview.api;
                const editoriales = dv.pages("#biblioteca/libro")
                    .map(ref => ref.editorial)
                    .distinct();

                let respuesta = await preguntar.suggestor(
                    tp, ["Agregar editorial", ...editoriales], [AGREGAR_EDITOR, ...editoriales],
                    editorial ? `Modificar la editorial: "${editorial}"` : "Editorial del libro:",
                    error.Quit("No se ingresó la editorial del libro")
                );

                if (respuesta == AGREGAR_EDITOR) {
                    respuesta = await preguntar.simple(
                        tp, editorial ? `Modificar la editorial: "${editorial}"` : "Editorial del libro:",
                        error.Quit("No se ingresó la editorial del libro")
                    );
                }

                return respuesta;
            }
        },
        [EDICION]: {
            tipo: SIMPLE,
            valor: datosIniciales[EDICION],
            minimo: (_) => true,
            representarElemento: (edicion) => {
                let representacion = "N° de la edición";
                if (edicion) representacion += `: N° ${edicion}`;
                return representacion;
            },
            preguntar: async (tp, edicion) => await preguntar.numero(
                tp, edicion 
                    ? `Modificar el N° de la edición: "${edicion}"` 
                    : "Ingresar el N° de la edición del libro:",
                error.Quit("No se ingresó el número de la edicion del libro")
            )
        },
        [VOLUMEN]: {
            tipo: SIMPLE,
            valor: datosIniciales[VOLUMEN],
            minimo: (_) => true,
            representarElemento: (volumen) => {
                let representacion = "N° del volumen";
                if (volumen) representacion += `: N° ${volumen}`;
                return representacion;
            },
            preguntar: async (tp, volumen) => await preguntar.numero(
                tp, volumen 
                    ? `Modificar el N° del voluemn: "${volumen}"` 
                    : "Ingresar el N° del volumen del libro:",
                error.Quit("No se ingresó el número del volumen del libro")
            )
        },
        [URL]: {
            tipo: SIMPLE,
            valor: datosIniciales[URL],
            minimo: (_) => true,
            representarElemento: (url) => {
                let representacion = "url";
                if (url) representacion += `: ${url}`;
                return representacion;
            },
            preguntar: async (tp, url) => await preguntar.simple(
                tp, url ? `Modificar el url: "${url}"` : "Ingresar el url del libro:",
                error.Quit("No se ingresó el url del libro")
            )
        },
        [CAPITULOS]: {
            tipo: RECURSIVO,
            valor: datosIniciales[CAPITULOS],
            minimo: (_) => true,
            representarElemento: (capituloInfo) => {
                if (capituloInfo == null) return "capítulo";
                let descripcion = `Capítulo ${capituloInfo.numeroCapitulo}`;
                if (capituloInfo.nombreCapitulo) 
                    descripcion += `: ${capituloInfo.nombreCapitulo}`;
                if (capituloInfo.paginas) 
                    descripcion += `, p${capituloInfo.paginas.inicio}-${capituloInfo.paginas.final}`;
                if (capituloInfo.editores) {
                    let editores = [];
                    for (let editore of capituloInfo.editores) {
                        editores.push(`${editore.nombre} ${editore.apellido}`);
                    }
                    if (editores && editores.length > 0) {
                        descripcion += ` de ${editores.join(", ")}`;
                    }
                }
                return descripcion;
            },
            generarInicio: citarCapitulo,
            eliminarUltimo: (listaValores, seguidorRef) => {
                let ultimo = listaValores.pop();
                seguidorRef.devolverReferencia(ultimo.numReferencia);
                return listaValores;
            }
        }
    };
}

const NUM_REFERENCIA = "numReferencia";
const NUMERO_CAPITULO = "numeroCapitulo";
const NOMBRE_CAPITULO = "nombreCapitulo";
const EDITORES = "editores";
const PAGINAS = "paginas";

function valorDefaultCapitulo() {
    return {
        [NUM_REFERENCIA]: null,
        [NUMERO_CAPITULO]: null,
        [NOMBRE_CAPITULO]: null,
        [EDITORES]: [],
        [PAGINAS]: null,
    }
}

async function citarCapitulo(tp, datosIniciales = undefined) {
    const { 
        simple: SIMPLE, 
        multiple: MULTIPLE, 
        automatico: AUTOMATICO, 
        ..._extra 
    } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let valoresNeutro = valorDefaultCapitulo();
    if (!datosIniciales) datosIniciales = {};
    for (let key of Object.keys(valoresNeutro)) {
        if ((!(key in datosIniciales)) || !datosIniciales[key]) 
            datosIniciales[key] = valoresNeutro[key];
    }

    return {
        [NUM_REFERENCIA]: {
            tipo: AUTOMATICO,
            valor: datosIniciales[NUM_REFERENCIA],
            minimo: (_) => true,
            asignar: async (tp, numReferencia, seguidorRef) => {
                return (numReferencia) 
                    ? numReferencia 
                    : seguidorRef.conseguirReferencia();
            }
        },
        [NUMERO_CAPITULO]: {
            tipo: SIMPLE,
            valor: datosIniciales[NUMERO_CAPITULO],
            minimo: (valor) => valor != null,
            representarElemento: (numCapitulo) => {
                let representacion = "número del capítulo";
                if (numCapitulo) representacion += `: ${numCapitulo}`;
                return representacion;
            },
            preguntar: async (tp, numCapitulo) => await preguntar.simple(
                tp, numCapitulo 
                    ? `Modificar el número de capítulo: "${numCapitulo}"` 
                    : "Número del capítulo:",
                error.Quit("No se ingresó el número del capítulo")
            )
        },
        [NOMBRE_CAPITULO]: {
            tipo: SIMPLE,
            valor: datosIniciales[NOMBRE_CAPITULO],
            minimo: (_) => true,
            representarElemento: (nombreCapitulo) => {
                let representacion = "nombre del capítulo";
                if (nombreCapitulo) representacion += `: ${nombreCapitulo}`;
                return representacion;
            },
            preguntar: async (tp, nombreCapitulo) => await preguntar.simple(
                tp, nombreCapitulo 
                    ? `Modificar el nombre de capítulo: "${nombreCapitulo}"` 
                    : "Nombre del capítulo:",
                error.Quit("No se ingresó el nombre del capítulo")
            )
        },
        [EDITORES]: {
            tipo: MULTIPLE,
            valor: datosIniciales[EDITORES],
            minimo: (_) => true,
            representarElemento: (editore) => {
                if (editore == null) return "editore";
                return `${editore.apellido}, ${editore.nombre}`;
            },
            preguntar: async (tp, editore, _seguidorRef) => {
                let textoNombre = "Nombre del editore";
                let textoApellido = "Apellido del editore";
                if (editore) {
                    textoNombre += `, donde antes era ${editore.nombre}`;
                    textoApellido += `, donde antes era ${editore.apellido}`;
                }

                return {
                    apellido: await preguntar.simple(
                        tp, `${textoApellido}:`, 
                        error.Quit("No se ingresa el apellido del editore de forma correcta")
                    ),
                    nombre: await preguntar.simple(
                        tp, `${textoNombre}:`, 
                        error.Quit("No se ingresa el nombre del editore de forma correcta")
                    ),
                };
            },
            eliminarUltimo: (listaValores, _seguidorRef) => {
                listaValores.pop();
                return listaValores;
            }
        },
        [PAGINAS]: {
            tipo: SIMPLE,
            valor: datosIniciales[PAGINAS],
            minimo: (_) => true,
            representarElemento: (paginas) => {
                let representacion = "páginas del capitulo";
                if (paginas) representacion += `: ${paginas.inicio}-${paginas.final}`;
                return representacion;
            },
            preguntar: async (tp, paginas) => {
                let inicio = await preguntar.numero(
                    tp, paginas 
                        ? `Modificar la página de inicio del capítulo: "${paginas.inicio}"` 
                        : "Página de inicio del capítulo:",
                    error.Quit("No se ingresó el inicio del capítulo")
                );
                if (inicio < 0)
                    throw error.Quit("Se ingresó una página negativa como inicio del capítulo");
                
                let final = await preguntar.numero(
                    tp, paginas 
                        ? `Modificar la página final del capítulo: "${paginas.final}"` 
                        : "Página final del capítulo:",
                    error.Quit("No se ingresó el final del capítulo")
                );

                if (parseInt(final, 10) < parseInt(inicio, 10))
                    throw error.Quit(`Se ingresó una página final del capítulo menor al inicio\ninicio: ${inicio}, final: ${final}`);
                
                return { inicio: inicio, final: final };
            }
        },
    }
}

function describirLibro(archivo) {
    let autores = [];
    for (let { nombre, apellido } of archivo.nombreAutores) {
        autores.push(`${nombre} ${apellido}`);
    }

    let resultado = [{
        numReferencia: archivo.numReferencia,
        texto: `${archivo.tituloObra} de ${autores.join(", ")}`
    }];

    if (!archivo.capitulos)
        return resultado;

    for (let infoCapitulo of archivo.capitulos) {
        let { numReferencia, numeroCapitulo, nombreCapitulo, ..._extra } = infoCapitulo;
        resultado.push({
            numReferencia: numReferencia,
            texto: `${archivo.tituloObra} capítulo ${numeroCapitulo}${nombreCapitulo ? ` "${nombreCapitulo}",` : ""} de ${autores.join(", ")}`
        });
    }

    return resultado;
}

module.exports = () => {
    return { 
        keys: KEYS,
        citar: citarLibro, 
        describir: describirLibro,
    };
}