const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

const referencias = input;

dv.el("div", referencias.map(({ archivo, num }) => mostrarCita(archivo, num)).join(""));

function mostrarCita(archivo, num) {
    let tipoCita = archivo.tipoCita;

    let texto = "falta info";
    switch (tipoCita) {
        case "Libro": texto = mostrarCitaLibro(archivo, num); break;
        case "Youtube": texto = mostrarCitaYoutube(archivo); break;
        case "Web": texto = mostrarCitaWeb(archivo); break;
        case "Wikipedia": texto = mostrarCitaWiki(archivo); break;
        case "Paper": texto = mostrarCitaPaper(archivo); break;
    }

    return `<div style="display: flex; flex-direction: row;">
        <p id="ref-${num}" style="margin-right: 0.5em"> [${num}] </p>
        <p> ${texto} </p>
    </div>`;
}

function mostrarNombreAutores(autores) {
    let resultado = [];
    for (let { nombre, apellido } of autores) {
        if (nombre && apellido) {
            resultado.push(`${apellido}, ${nombre[0]}`);
        } else if (nombre && !apellido) {
            resultado.push(nombre);
        } else {
            resultado.push(apellido);
        }
    }

    return resultado.join(". ");
}

function mostrarCitaPaper(archivo) {
    let autores = archivo.autores
        .map(({ nombre, apellido }) => `${apellido}, ${nombre.charAt(0)}`);
    let editores = (archivo.editores ? archivo.editores : [])
        .filter(({ nombre, apellido }) => archivo.autores.findIndex(({ nombreAutore, apellidoAutore }) => nombre == nombreAutore && apellido == apellidoAutore) < 0)
        .map(({ nombre, apellido }) => `${apellido}, ${nombre.charAt(0)}`);

    const numInforme = archivo.numeroInforme 
        ? ` (Informe n°${archivo.numeroInforme})` 
        : "";
    const url = archivo.url ? ` ${archivo.url}.` : "";
    
    return `${autores.join(", ")} (${archivo.anio}) <i>${archivo.tituloInforme}</i>${numInforme}. ${editores.join(", ")}${url}`;
}

function mostrarCitaLibro(archivo, num) {
    const tituloObra = ` <i>${archivo.tituloObra}${archivo.subtituloObra ? ": " + archivo.subtituloObra: ""}</i>.`;
    const editorial = ` ${archivo.editorial}.`;
    const nombreAutores = mostrarNombreAutores(archivo.nombreAutores);
    const anio = ` (${archivo.anio}).`;
    const url = archivo.url ? ` ${archivo.url}.` : "";

    let datosSeparados = [];
    if (archivo.edicion) datosSeparados.push(`${archivo.edicion} ed.`);
    if (archivo.volumen) datosSeparados.push(`Vol. ${archivo.volumen}`);
    let datosJuntos = datosSeparados.length > 0 
        ? ` (${datosSeparados.join(", ")}).`
        : "";
    
    const capitulos = archivo.capitulos ? archivo.capitulos : [];
    const capitulo = capitulos.find(({numReferencia, ..._}) => numReferencia == num);

    if (!capitulo) 
        return `${nombreAutores}. ${anio}${tituloObra}${datosJuntos}${editorial}${url}`;

    if (capitulo.paginas) datosSeparados.push(`pp. ${capitulo.paginas.inicio}-${capitulo.paginas.final}`);
    datosJuntos = datosSeparados.length > 0 
        ? ` (${datosSeparados.join(", ")}).`
        : "";

    const numeroCapitulo = `Capitulo ${capitulo.numeroCapitulo}`;
    const nombreCapitulo = capitulo.nombreCapitulo ? ` ${capitulo.nombreCapitulo}` : "";
    const tituloCapitulo = `${numeroCapitulo}${nombreCapitulo}`;
    
    const editores = capitulo.editores ? capitulo.editores : [];
    const textoEditores = editores.length > 0 
        ? ` en ${mostrarNombreAutores(editores)} (Ed.)`
        : "";

    return `${nombreAutores}. ${anio}${tituloCapitulo}${textoEditores}, ${tituloObra}${datosJuntos}${editorial}${url}`;
}

function mostrarCitaWeb(archivo) {
    const nombreAutores = mostrarNombreAutores(archivo.nombreAutores);
    const tituloArticulo = archivo.tituloArticulo;
    const nombrePagina = archivo.nombrePagina;
    
    const fecha = archivo.fechaPublicacion.c;
    const dia = fecha.day;
    const mes = MESES[ fecha.month - 1 ];
    const anio = fecha.year;
    
    const url = archivo.url;

    return `${nombreAutores}. (${dia} de ${mes} del ${anio}). <i>${tituloArticulo}</i>. ${nombrePagina}. ${url}`;
}

function mostrarCitaWiki(archivo) {
    const nombreArticulo = archivo.nombreArticulo;

    const dia = archivo.fecha.c.day;
    const mes = MESES[ archivo.fecha.c.month - 1 ];
    const anio = archivo.fecha.c.year;
    
    const url = archivo.url;

    return `${nombreArticulo}. (${dia} de ${mes} del ${anio}). En <i> Wikipedia </i>. ${url}`;
}

function mostrarCitaYoutube(archivo) {
    const nombreCanal = archivo.nombreCanal;
    const nombreVideo = archivo.nombreVideo;
    
    const dia = archivo.fecha.c.day;
    const mes = MESES[ archivo.fecha.c.month - 1 ];
    const anio = archivo.fecha.c.year;
    
    const url = archivo.url;

    return `${nombreCanal} (${dia} de ${mes} del ${anio}). <i> ${nombreVideo} </i>. [Archivo de video]. Youtube. ${url}`;
}