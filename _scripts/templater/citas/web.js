const NOMBRE_AUTORES = "nombreAutores";
const FECHA_PUBLICACION = "fechaPublicacion";
const TITULO_ARTICULO = "tituloArticulo";
const NOMBRE_PAGINA = "nombrePagina";
const URL = "url";

function valorDefault() {
    return {
        [NOMBRE_AUTORES]: [],
        [FECHA_PUBLICACION]: null,
        [TITULO_ARTICULO]: null,
        [NOMBRE_PAGINA]: null,
        [URL]: null
    };
}

async function citarWeb(tp, datosIniciales = undefined) {
    const { 
        simple: SIMPLE, 
        multiple: MULTIPLE, 
        ..._extra 
    } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const cte = tp.user.constantes();
    const error = tp.user.error();

    if (!datosIniciales) datosIniciales = valorDefault();

    return {
        [NOMBRE_AUTORES]: {
            tipo: MULTIPLE,
            valor: datosIniciales[NOMBRE_AUTORES],
            minimo: (valor) => valor.length > 0,
            representarElemento: (autore) => {
                if (autore == null) return "autore";
                let [{nombre: nombre}, {apellido: apellido}] = autore["autore"];
                return `${apellido}, ${nombre}`;
            },
            preguntar: async (tp, autore, _seguidorRef) => {
                let textoNombre = "Nombre del autore";
                let textoApellido = "Apellido del autore";
                if (autore) {
                    let [{nombre: nombre}, {apellido: apellido}] = autore["autore"];
                    textoNombre += `, donde antes era ${nombre}`;
                    textoApellido += `, donde antes era ${apellido}`;
                }
                
                return await preguntar.autore(
                    tp, `${textoNombre}:`, `${textoApellido}:`,
                    error.Quit("No se ingresa el nombre del autore de forma correcta"),
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                );
            },
            eliminarUltimo: (listaValores, _seguidorRef) => {
                listaValores.pop();
                return listaValores;
            }
        },
        [FECHA_PUBLICACION]: {
            tipo: SIMPLE,
            valor: datosIniciales[FECHA_PUBLICACION],
            minimo: (valor) => valor != null,
            representarElemento: (fecha) => {
                let representacion = "fecha de publicación";
                if (fecha) representacion += `: ${describir.fecha(fecha, cte.meses)}`;
                return representacion;
            },
            preguntar: async (tp, fecha) => await preguntar.fecha(
                tp, fecha 
                    ? `Modificar la fecha "${describir.fecha(fecha, cte.meses)}", que es la publicación de la página` 
                    : "Fecha de publicación de la página:", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha de publicación de la página")
            )
        },
        [TITULO_ARTICULO]: {
            tipo: SIMPLE,
            valor: datosIniciales[TITULO_ARTICULO],
            minimo: (valor) => valor != null,
            representarElemento: (titulo) => {
                let representacion = "título del articulo";
                if (titulo) representacion += `: ${titulo}`;
                return representacion;
            },
            preguntar: async (tp, titulo) => await preguntar.simple(
                tp, titulo ? `Modificar el título del artículo: "${titulo}"` : "Nombre del artículo:",
                error.Quit("No se ingresó nombre del artículo")
            )
        },
        [NOMBRE_PAGINA]: {
            tipo: SIMPLE,
            valor: datosIniciales[NOMBRE_PAGINA],
            minimo: (valor) => valor != null,
            representarElemento: (nombrePagina) => {
                let representacion = "nombre de la página";
                if (nombrePagina) representacion += `: ${nombrePagina}`;
                return representacion;
            },
            preguntar: async (tp, nombrePagina) => await preguntar.simple(
                tp, nombrePagina ? `Modificar el nombre de la página: "${nombrePagina}"` : "Nombre de la página:",
                error.Quit("No se ingresó nombre de la página")
            )
        },
        [URL]: {
            tipo: SIMPLE,
            valor: datosIniciales[URL],
            minimo: (valor) => valor != null,
            representarElemento: (url) => {
                let representacion = "url";
                if (url) representacion += `: ${url}`;
                return representacion;
            },
            preguntar: async (tp, url) => await preguntar.simple(
                tp, url ? `Modificar el url: "${url}"` : "Ingresar el url del artículo:",
                error.Quit("No se ingresó el url de la página")
            )
        }
    };
}

function describirWeb(archivo) {
    let autores = "";
    for (let {autore: autore} of archivo.nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return [{
        numReferencia: archivo.numReferencia,
        texto: `${archivo.tituloArticulo} de ${autores}, publicado en ${archivo.nombrePagina}`
    }];
}

module.exports = () => {
    return { 
        citar: citarWeb, 
        describir: describirWeb
    };
}