/*
    Nota: Hacer la forma que si tiene capitulo, entonces poder citar el libro solo
        o el capitulo especifico
*/
async function citarLibro(tp) {
    const { simple: SIMPLE, multiple: MULTIPLE } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    return {
        "tituloObra": {
            tipo: SIMPLE,
            valor: null,
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
        "nombreAutores": {
            tipo: MULTIPLE,
            valor: [],
            minimo: (valor) => valor.length > 0,
            representarElemento: (autore) => {
                if (autore == null) return "autore";
                let [{nombre: nombre}, {apellido: apellido}] = autore["autore"];
                return `${apellido}, ${nombre}`;
            },
            preguntar: async (tp, i, valor) => {
                let textoNombre = "Nombre del autore";
                let textoApellido = "Apellido del autore";
                if (valor) {
                    let [{nombre: nombre}, {apellido: apellido}] = valor["autore"];
                    textoNombre += `, donde antes era ${nombre}`;
                    textoApellido += `, donde antes era ${apellido}`;
                }
                
                return await preguntar.autore(
                    tp, `${textoNombre}:`, `${textoApellido}:`,
                    error.Quit("No se ingresa el nombre del autore de forma correcta"),
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                )
            }
        },
        "anio": {
            tipo: SIMPLE,
            valor: null,
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
        "editorial": {
            tipo: SIMPLE,
            valor: null,
            minimo: (valor) => valor != null,
            representarElemento: (editorial) => {
                let representacion = "editorial del libro";
                if (editorial) representacion += `: ${editorial}`;
                return representacion;
            },
            preguntar: async (tp, editorial) => await preguntar.simple(
                tp, editorial ? `Modificar la editorial: "${editorial}"` : "Editorial del libro:",
                error.Quit("No se ingresó la editorial del libro")
            )
        },
        "edicion": {
            tipo: SIMPLE,
            valor: null,
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
        "volumen": {
            tipo: SIMPLE,
            valor: null,
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
        "url": {
            tipo: SIMPLE,
            valor: null,
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
        "capitulos": {
            tipo: MULTIPLE,
            valor: [],
            minimo: (_) => true,
            representarElemento: (capituloInfo) => {
                if (capituloInfo == null) return "capítulo";
                return `capítulo ${capituloInfo.capitulo}`;
            },
            preguntar: async (tp, i, capituloInfo) => {
                let numReferencia = capituloInfo 
                    ? capituloInfo.numReferencia 
                    : tp.user.generarNumReferencia();

                let capitulo = await preguntar.numero(
                    tp, capituloInfo 
                        ? `Modificar el capítulo: ${capituloInfo.capitulo}` 
                        : "Número del capítulo:",
                    error.Quit("No se ingresó correctamente el capítulo")
                );

                return {
                    numReferencia: numReferencia + i,
                    capitulo: capitulo
                }
            }
        }
    };
}
/*
    * Capitulo
        * Número (necesario)
        * Nombre del capitulo (si tiene)
        * Editor (si es un libro que es un conjunto de capiulos hechos por distintos autores)
        * Página inicial (si esta, el final también lo tiene que tener)
            * Página final 
*/

function describirLibro(archivo) {
    let autores = [];
    for (let {autore: autore} of archivo.nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores.push(`${nombre} ${apellido}`);
    }

    let resultado = [{
        numReferencia: archivo.numReferencia,
        texto: `${archivo.tituloObra} de ${autores.join(", ")}`
    }];

    if (!archivo.capitulos)
        return resultado;

    for (let { numReferencia, capitulo } of archivo.capitulos) {
        resultado.push({
            numReferencia: numReferencia,
            texto: `${archivo.tituloObra} capítulo ${capitulo} de ${autores.join(", ")}`
        });
    }

    return resultado;
}

module.exports = () => {
    return { 
        citar: citarLibro, 
        describir: describirLibro
    };
}