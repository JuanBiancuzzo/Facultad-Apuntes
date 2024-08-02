async function citarYoutube(tp) {
    const error = tp.user.error();
    let tR = "";  

    tR += await tp.user.preguntar().simple(
        tp, 
        "nombreVideo",
        "Nombre del video:",
        error.Quit("No se ingresa nombre del video")
    )

    tR += await tp.user.preguntar().simple(
        tp, 
        "nombreCanal",
        "Nombre del canal de Youtube:",
        error.Quit("No se ingresó nombre del canal")
    )

    tR += await tp.user.preguntar().fecha(
        tp, 
        "fecha",
        "Fecha del video:", 
        error.Quit("No se ingresó un formato de fecha válido"), 
        error.Quit("No se ingresó la fecha del video")
    )

    tR += await tp.user.preguntar().simple(
        tp, 
        "url",
        "Ingresar el url del video de Youtube:",
        error.Quit("No se ingresó el url del video")
    )

    return tR;
}

function describirYoutube(archivo) {
    return `${archivo.nombreVideo} de ${archivo.nombreCanal}`;
}

module.exports = () => {
    return { 
        citar: citarYoutube, 
        describir: describirYoutube
    };
}