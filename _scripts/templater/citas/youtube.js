const NOMBRE_VIDEO = "nombreVideo";
const NOMBRE_CANAL = "nombreCanal";
const FECHA = "fecha";
const URL = "url";

function valorDefault() {
    return {
        [NOMBRE_VIDEO]: null,
        [NOMBRE_CANAL]: null,
        [FECHA]: null,
        [URL]: null,
    }
}

async function citarYoutube(tp, datosIniciales = undefined) {
    const { simple: SIMPLE, ..._extra } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const cte = tp.user.constantes();
    const error = tp.user.error();

    if (!datosIniciales) datosIniciales = valorDefault();

    return {
        [NOMBRE_VIDEO]: {
            tipo: SIMPLE,
            valor: datosIniciales[NOMBRE_VIDEO],
            minimo: (valor) => valor != null,
            representarElemento: (nombreVideo) => {
                let representacion = "nombre del video";
                if (nombreVideo) representacion += `: ${nombreVideo}`;
                return representacion;
            },
            preguntar: async (tp, nombreVideo) => await preguntar.simple(
                tp, nombreVideo ? `Modificar el nombre del video: "${nombreVideo}"` : "Nombre del video:",
                error.Quit("No se ingresa nombre del video")
            )
        },
        [NOMBRE_CANAL]: {
            tipo: SIMPLE,
            valor: datosIniciales[NOMBRE_CANAL],
            minimo: (valor) => valor != null,
            representarElemento: (nombreCanal) => {
                let representacion = "nombre del canal";
                if (nombreCanal) representacion += `: ${nombreCanal}`;
                return representacion;
            },
            preguntar: async (tp, nombreCanal) => await preguntar.simple(
                tp, nombreCanal ? `Modificar el nombre del canal: "${nombreCanal}"` : "Nombre del canal de Youtube:",
                error.Quit("No se ingresó nombre del canal")
            )
        },
        [FECHA]: {
            tipo: SIMPLE,
            valor: datosIniciales[FECHA],
            minimo: (valor) => valor != null,
            representarElemento: (fecha) => {
                let representacion = "fecha de video";
                if (fecha) representacion += `: ${describir.fecha(fecha, cte.meses)}`;
                return representacion;
            },
            preguntar: async (tp, fecha) => await preguntar.fecha(
                tp, fecha 
                    ? `Modificar la fecha "${describir.fecha(fecha, cte.meses)}", que es la publicación del video` 
                    : "Fecha del video:",
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha del video")
            )
        },
        [URL]: {
            tipo: SIMPLE,
            valor: null,
            minimo: (valor) => valor != null,
            representarElemento: (url) => {
                let representacion = "url";
                if (url) representacion += `: ${url}`;
                return representacion;
            },
            preguntar: async (tp, url) => await preguntar.simple(
                tp, url ? `Modificar el url: "${url}"` : "Ingresar el url del video de Youtube:",
                error.Quit("No se ingresó el url del video")
            )
        }
    };
}

function describirYoutube(archivo) {
    return [{
        numReferencia: archivo.numReferencia,
        texto: `${archivo.nombreVideo} de ${archivo.nombreCanal}`
    }]
}

module.exports = () => {
    return { 
        citar: citarYoutube, 
        describir: describirYoutube
    };
}