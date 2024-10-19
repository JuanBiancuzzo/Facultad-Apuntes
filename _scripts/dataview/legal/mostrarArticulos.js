const { paginaActual } = input;

if (!paginaActual) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

// Devuelve html de como se ve el artículo
const ENUMERACION = "enumeracion";
const TEXTO = "texto";
const NUMERICO = 4;
const ALFANUMERICO = 5;

const styleP = "text-indent: 2em; text-align: justify;";

if (paginaActual.file.tags.some( tag=> tag.includes("legal/documento") )) {
    dv.paragraph(`<h3 style="text-align: center;">${paginaActual.file.name}</h3>`);

} else {
    let tipo = `${paginaActual.tipo}${(paginaActual.num ? ` ${paginaActual.num}` : "")}`;
    let nombre = `${paginaActual.nombre.toUpperCase().charAt(0)}${paginaActual.nombre.slice(1)}`;
    
    let titulo = `<h3 style="margin-bottom: 0;">${tipo}</h3><h4 style="margin-top: 0;">${nombre}</h4>`;
    dv.paragraph(`<div style="text-align: center;">${titulo}</div>`);
}

const carpetaActual = paginaActual.file.folder;
const nivelActual = carpetaActual.split("/").length;

let articulosActual = dv.pages(`"${carpetaActual}" and #legal/articulo`)
    .filter(archivo => archivo.file.folder.split("/").length == nivelActual)
    .sort(articulo => articulo.num + (articulo.isBis ? 0.5 : 0));

for (let articulo of articulosActual){
    let textoHTML = mostrarArticulo(articulo);
    dv.paragraph(`<div style="padding-bottom: 1.5em"> ${textoHTML} </div>`);
}

let articulosMostrados = articulosActual.length;

articulosMostrados += mostrarSecciones(paginaActual);
if (articulosMostrados == 0) {
    dv.paragraph("No tiene artículos")
}

function mostrarSecciones(pagina) {
    const carpeta = pagina.file.folder;
    const nivel = carpeta.split("/").length;

    let subSecciones = dv.pages(`"${carpeta}" and -#legal/articulo`)
        .filter(seccion => seccion.file.folder.split("/").length == nivel + 1)
        .sort(seccion => (!seccion.num) ? 0 : seccion.num);

    if (subSecciones.length == 0) {
        return mostrarArticulos(pagina);
    }

    let articulosMostrados = 0;
    for (let subSeccion of subSecciones) {
    
        let tipo = `${subSeccion.tipo}${(subSeccion.num ? ` ${subSeccion.num}` : "")}`;
        let nombre = `${subSeccion.nombre.toUpperCase().charAt(0)}${subSeccion.nombre.slice(1)}`;
        
        let titulo = crearReferencia(
            subSeccion.file.path, 
            `<h5 style="margin-bottom: 0;">${tipo}</h5><h6 style="margin-top: 0;">${nombre}</h6>`
        );
    
        dv.paragraph(`<div style="text-align: center;">${titulo}</div>`);
        
        articulosMostrados += mostrarSecciones(subSeccion);
    }
    return articulosMostrados;
}

function mostrarArticulos(pagina) {
    const carpeta = pagina.file.folder;
    let articulos = dv.pages(`"${carpeta}" and #legal/articulo`)
        .sort(articulo => articulo.num + (articulo.isBis ? 0.5 : 0));

    for (let articulo of articulos){
        let textoHTML = mostrarArticulo(articulo);
        dv.paragraph(`<div style="padding-bottom: 1.5em"> ${textoHTML} </div>`);
    }

    return articulos.length;
}

function mostrarArticulo(articulo) {
    let titulo = `Artículo ${articulo.num}${articulo.esBis ? " bis" : ""}${(articulo.nombre) ? `, ${articulo.nombre}` : ""}`;
    let referencia = crearReferencia(articulo.file.path, titulo);
    let textoHTML = `<b> ${referencia} </b>`;
    
    let texto = articulo.articulo;
    for (let { tipo, ...data } of texto) {
        textoHTML += (tipo == TEXTO) 
            ? mostrarTexto(data, styleP)
            : mostrarEnumeracion(data);
    }

    return textoHTML;
}

function mostrarTexto(textoData, style = "") {
    return `<p style="${style}"> ${textoData.texto} </p>`;
}

function mostrarEnumeracion(enumeracionData) {
    let olTipo = (enumeracionData.enumeracion == NUMERICO) ? "1" : "a";
    let resultadoHTML = `<ol type="${olTipo}">`;

    for (let { tipo, ...data } of enumeracionData.textos) {
        resultadoHTML += "<li>";
        resultadoHTML += (tipo == TEXTO) 
            ? mostrarTexto(data)
            : mostrarEnumeracion(data);
            resultadoHTML += "</li>";
    }

    return `${resultadoHTML} </ol>`;
}

function crearReferencia(path, texto, style="") {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="${style}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}