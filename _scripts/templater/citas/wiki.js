const NOMBRE_ARTICULO = "nombreArticulo";
const FECHA = "fecha";
const URL = "url";

function valorDefault() {
    return {
        [NOMBRE_ARTICULO]: null,
        [FECHA]: null,
        [URL]: null,
    }
}

async function citarWiki(tp, datosIniciales = undefined) {
    const { simple: SIMPLE, ..._extra } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const cte = tp.user.constantes();
    const error = tp.user.error();

    if (!datosIniciales) datosIniciales = valorDefault();

    return {
        [NOMBRE_ARTICULO]: {
            tipo: SIMPLE,
            valor: datosIniciales[NOMBRE_ARTICULO],
            minimo: (valor) => valor != null,
            representarElemento: (nombreVideo) => {
                let representacion = "nombre del artículo";
                if (nombreVideo) representacion += `: ${nombreVideo}`;
                return representacion;
            },
            preguntar: async (tp, nombreVideo) => await preguntar.simple(
                tp, nombreVideo ? `Modificar el nombre del artículo: "${nombreVideo}"` : "Nombre del artículo:",
                error.Quit("No se ingresa nombre del artículo")
            )
        },
        [FECHA]: {
            tipo: SIMPLE,
            valor: datosIniciales[FECHA],
            minimo: (valor) => valor != null,
            representarElemento: (fecha) => {
                let representacion = "fecha de artículo";
                if (fecha) representacion += `: ${describir.fecha(fecha, cte.meses)}`;
                return representacion;
            },
            preguntar: async (tp, fecha) => await preguntar.fecha(
                tp, fecha 
                    ? `Modificar la fecha "${describir.fecha(fecha, cte.meses)}", que es la publicación del artículo` 
                    : "Fecha del artículo:",
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha del video")
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
                tp, url ? `Modificar el url: "${url}"` : "Ingresar el enlace permanente del artículo:",
                error.Quit("No se ingresó el url del artículo")
            )
        }
    };
}

function describirWiki(archivo) {
    return [{
        numReferencia: archivo.numReferencia,
        texto: `Artículo de wikipedia: ${archivo.nombreArticulo}`
    }];
}

module.exports = () => {
    return { 
        citar: citarWiki, 
        describir: describirWiki
    };
}