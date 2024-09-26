let indices = ordenarTemas(dv.pages("#índice"))
    .sort(({ tema, ..._ }) => tema)
    .map(infoIndice => conseguirEtapa(infoIndice));

dv.el("div", `<div class="grilla"> ${mostrarIndices(indices)} </div>`);

function conseguirEtapa(indice) {
    let etapasConsideradas = [];

    if (indice.subTemas && indice.subTemas.length > 0) {        
        indice.subTemas = indice.subTemas
            .map(infoIndice => conseguirEtapa(infoIndice));
        indice.subTemas.forEach(subTema => etapasConsideradas.push(subTema.etapa));
    }

    let tagRepresentante = indice.archivo.file.folder.trim()
        .split(" ")
        .filter(token => token.trim() != "-" && token.trim() != "")
        .join("-");
    
    dv.pages(`#${tagRepresentante} and -#índice`)
        .filter(archivo => archivo.file.folder == indice.archivo.file.folder && archivo.etapa)
        .forEach(archivo => etapasConsideradas.push(archivo.etapa));
    
    let etapaFinal = "sin-empezar";
    if (etapasConsideradas.length > 0) {
        if (etapasConsideradas.some(etapa => etapa != "sin-empezar")) {
            etapaFinal = "empezado";
        } else if (etapasConsideradas.every(etapa => etapa == "ampliar")) {
            etapaFinal = "ampliar";
        } else if (etapasConsideradas.every(etapa => etapa == "terminado")) {
            etapaFinal = "terminado";
        }
    }

    return {
        etapa: etapaFinal,
        ...indice
    }
}

function mostrarIndices(indices) {
    if (indices.length == 0) 
        return "";
    
    let resultado = "";
    for (let { archivo, nivel, etapa, subTemas, tema, ..._ } of indices) {


        let elemento = {
            path: archivo.file.path,
            nombre: tema,
            largo: false,
            etapa: etapa,
            descripcionSimple: true,
            descripcion: archivo.estado
        };

        if (subTemas && subTemas.length > 0) {
            resultado += `<details class="bloque-largo"> 
                <summary> ${representarElemento(elemento)} </summary>
                <div class="grilla">
                    ${mostrarIndices(subTemas.values)}
                </div>
            </details>`;
        } else {
            elemento["largo"] = false;
            resultado += representarElemento(elemento);
        }
    }
    
    return resultado;    
}

function ordenarTemas(indices) {
    let temas = indices
        .map(archivo => {
            let carpeta = archivo.file.folder.split("/");
            let nivel = carpeta.length - 1;

            let tema = carpeta.pop();
            tema = `${tema.charAt(0).toUpperCase()}${tema.slice(1)}`;

            let superTema = carpeta.pop();
            if (superTema)
                superTema = `${superTema.charAt(0).toUpperCase()}${superTema.slice(1)}`;

            return { 
                archivo: archivo, 
                nivel: nivel, 
                tema: tema, 
                superTema: superTema,
                subTemas: undefined
            }
        })
        .groupBy(data => data.nivel)
        .sort(grupo => grupo.key)
        .map(grupo => grupo.rows)
        .values;

    for (let i = temas.length - 1; i > 0; i--) {
        let archivosNivelI = temas[i];
        let archivosNivelIAnterior = temas[i - 1];

        let superTemas = archivosNivelI.groupBy(data => data.superTema);

        for (let archivoNivelIAnterior of archivosNivelIAnterior) {
            archivoNivelIAnterior.subTemas = superTemas.find(data => data.key === archivoNivelIAnterior.tema)?.rows;
        }
    }

    return temas[0];
}

function representarElemento(elemento) {
    let clase = elemento.largo ? "nota-larga" : "nota"

    return `<div class="${clase}">
        <div class="encabezado">
            <div class="titulo"> 
                ${crearReferencia(elemento.path, elemento.nombre)}
                ${ "subnombre" in elemento ? `<span class="subnombre"> ${elemento.subnombre} </span>` : "" }
            </div>
            ${ "etapa" in elemento ? `<div class="etapa"> ${obtenerEtapa(elemento.etapa)} </div>` : "" }
        </div>
        ${
            elemento.descripcionSimple 
                ? `<span class="descripcion"> ${ elemento.descripcion } </span>` 
                : `<div class="lista"> ${ elemento.descripcion.map(item => `<span class="item"> ${item} </span>`).join("") } </div>`
        }
    </div>`;
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link nombre" target="_blank" rel="noopener"> ${texto} </a>`;
}

function obtenerEtapa(etapa) {
    let color = "#";
    switch (etapa) {
        case "empezado": color += "e9973f"; break;
        case "ampliar": color += "53dfdd"; break;
        case "terminado": color += "3fb764"; break;
        default: color += "0963c7";
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-72 -72 33.874 44.279"><g stroke-width="1.6" stroke="currentColor" fill="currentColor" stroke-miterlimit="10"><path d="M-64.803-71.47v42.68L-52-41.596l12.803 12.804V-71.47" fill="none" stroke="#dadada"></path><path d="M-60.535-69.336v30.728L-52-47.57l8.962 8.962v-30.728Z" stroke="none" fill="${color}"></path></g></svg>`;
}