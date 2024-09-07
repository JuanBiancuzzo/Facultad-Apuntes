async function citarWiki(tp) {
    const { simple: SIMPLE, multiple: _ } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const cte = tp.user.constantes();
    const error = tp.user.error();

    return {
        "nombreArticulo": {
            tipo: SIMPLE,
            valor: null,
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
        "fecha": {
            tipo: SIMPLE,
            valor: null,
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
        "url": {
            tipo: SIMPLE,
            valor: null,
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