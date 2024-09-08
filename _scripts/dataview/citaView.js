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

function mostrarCita(archivo, num) {
    let tipoCita = archivo.tipoCita;

    let texto = "falta info";
    switch (tipoCita) {
        case "Libro": texto = mostrarCitaLibro(archivo, num); break;
        case "Youtube": texto = mostrarCitaYoutube(archivo); break;
        case "Web": texto = mostrarCitaWeb(archivo); break;
        case "Wikipedia": texto = mostrarCitaWiki(archivo); break;
    }

    const ref = `<p id="ref-${num}" style="margin-right: 0.5em">[${num}]</p>`;
    const divStyle = "display:flex; flex-direction: row;";
    return `<div style="${divStyle}"> ${ref} <p> ${texto} </p> </div>`;
}

exports.mostrarCita = mostrarCita;

function mostrarNombreAutores(autores) {
    let resultado = [];
    for (let {autore: autore} of autores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;

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

/**
    const NUMERO_CAPITULO = "numeroCapitulo";
    const NOMBRE_CAPITULO = "nombreCapitulo";
    const EDITORES = "editores";
    const PAGINAS = "paginas";
 */
function mostrarCitaLibro(archivo, num) {
    const tituloObra = ` <i>${archivo.tituloObra}</i>.`;
    const editorial = ` ${archivo.editorial}.`;
    const nombreAutores = mostrarNombreAutores(archivo.nombreAutores);
    const anio = ` (${archivo.anio}).`;
    const url = archivo.url ? ` ${url}.` : "";

    let datosSeparados = [];
    if (archivo.edicion) datosSeparados.push(`${archivo.edicion} ed.`);
    if (archivo.volumen) datosSeparados.push(`Vol. ${archivo.volumen}.`);
    let datosJuntos = datosSeparados.length > 0 
        ? ` (${datosSeparados.join(", ")}).`
        : "";
    
    const capitulos = archivo.capitulos ? archivo.capitulos : [];
    const capitulo = capitulos.find(({numReferencia, ..._}) => numReferencia == num);

    if (!capitulo) 
        return `${nombreAutores}.${anio}${tituloObra}${datosJuntos}${editorial}${url}`;

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

    return `${nombreAutores}.${anio}${tituloCapitulo}${textoEditores}, ${tituloObra}${datosJuntos}${editorial}${url}`;
}

function mostrarCitaWeb(archivo) {
    const nombreAutores = archivo.nombreAutores;
    const tituloArticulo = archivo.tituloArticulo;
    const nombrePagina = archivo.nombrePagina;
    
    const fecha = archivo.fechaPublicacion.c;
    const dia = fecha.day;
    const mes = MESES[ fecha.month - 1 ];
    const anio = fecha.year;
    
    const url = archivo.url;
    
    let autores = "";
    for (let {autore: autore} of nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;

        if (nombre && apellido) {
            autores += `${apellido}, ${nombre[0]}. `;
        } else if (nombre && !apellido) {
            autores += `${nombre}. `;
        } else {
            autores += `${apellido}. `;
        }
    }

    return `${autores}(${dia} de ${mes} del ${anio}). <i>${tituloArticulo}</i>. ${nombrePagina}. ${url}`;
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