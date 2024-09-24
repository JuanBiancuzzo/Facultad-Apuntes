const { simple, elementos } = input;

if (simple) {
    /* [{
        path,
        nombre,
        largo: true|false, default false
        subnombre, (opcional)
        etapa, (opcional)
        descripcionSimple: true|false, default false
        descripcion, (opcionl)
    }, ...] */
    dv.el("div", `<div class="grilla"> ${elementos.map(item => representarElemento(item)).join("")} </div><br>`);
} else {
    /* {
        titulo,
        items: [],
        extra
    } */
    for (let { titulo, items, ...extras } of elementos) {
        dv.el("div", titulo);
        if ("extra" in extras) 
            dv.paragraph(extras.extra);
        let mostrar = items.map(item => representarElemento(item))
            .join("");
        dv.el("div", `<div class="grilla"> ${mostrar} </div><br>`);
    }
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