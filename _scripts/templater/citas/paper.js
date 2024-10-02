const AUTORES = "autores";
const TITULO_INFORME = "tituloInforme";
const ANIO = "anio";
const NUMERO_INFORME = "numeroInforme";
const EDITORES = "editores";
const URL = "url";

const KEYS = [ AUTORES, TITULO_INFORME, ANIO, NUMERO_INFORME, EDITORES, URL ];

function valorDefault() {
    return {
        [AUTORES]: [],
        [TITULO_INFORME]: null,
        [NUMERO_INFORME]: null,
        [ANIO]: null,
        [EDITORES]: [],
        [URL]: null,
    }
}

async function citarPaper(tp, datosIniciales = undefined) {
    const { 
        simple: SIMPLE, 
        multiple: MULTIPLE, 
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
        [AUTORES]: {
            tipo: MULTIPLE,
            valor: datosIniciales[AUTORES],
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
        [TITULO_INFORME]: {
            tipo: SIMPLE,
            valor: datosIniciales[TITULO_INFORME],
            minimo: (valor) => valor != null,
            representarElemento: (titulo) => {
                let representacion = "título del informe";
                if (titulo) representacion += `: ${titulo}`;
                return representacion;
            },
            preguntar: async (tp, titulo) => await preguntar.simple(
                tp, titulo ? `Modificar el título del informe: "${titulo}"` : "Título del informe:",
                error.Quit("No se ingresó el título del informe")
            )
        },
        [NUMERO_INFORME]: {
            tipo: SIMPLE,
            valor: datosIniciales[NUMERO_INFORME],
            minimo: (_) => true,
            representarElemento: (numeroInforme) => {
                let representacion = "número del informe";
                if (numeroInforme) representacion += `: ${numeroInforme}`;
                return representacion;
            },
            preguntar: async (tp, numeroInforme) => await preguntar.numero(
                tp, numeroInforme ? `Modificar número del informe: ${numeroInforme}` : "número del informe",
                error.Quit("No se ingresó número del informe")
            )
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
                tp, url ? `Modificar el url: "${url}"` : "Ingresar el enlace permanente del artículo:",
                error.Quit("No se ingresó el url del artículo")
            )
        }
    };
}

function describirPaper(archivo) {
    let autores = [];
    for (let { nombre, apellido } of archivo.autores) {
        autores.push(`${nombre} ${apellido}`);
    }

    return [{
        numReferencia: archivo.numReferencia,
        texto: `${archivo.tituloInforme} de ${autores.join(", ")}`
    }];
}

module.exports = () => ({ 
    keys: KEYS,
    citar: citarPaper, 
    describir: describirPaper
})