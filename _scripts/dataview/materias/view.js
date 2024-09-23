function nombreCuatrimestre(cuatrimestre) {
	let [anio, cuatri] = cuatrimestre.split("C");
	cuatri += (parseInt(cuatri) == 1) ? "er" : "do";
	return cuatri + " cuatrimestre del 20" + anio;
}

function nombreMateria(materia) {
	return materia.file.name.replace(`(${materia.codigo})`, "").trim();
}

let materias = dv.pages("#materia")
    .map(materia => ({ 
        path: materia.file.path, 
        nombre: nombreMateria(materia), 
        etapa: materia.etapa, 
        codigo: materia.codigo, 
        plan: materia.plan, 
        descripcion: materia.estado, 
        cuatri: materia.cuatri 
    }))
    .sort(({ nombre, ..._ }) => nombre)
    .map(({ path, nombre, etapa, codigo, plan, descripcion, cuatri }) => {
        let infoMateria = `<div class="referencias"> Plan ${plan} - ${codigo} </div>`;

        let color = "#";
        switch (etapa) {
            case "empezado": color += "e9973f"; break;
            case "ampliar": color += "53dfdd"; break;
            case "terminado": color += "3fb764"; break;
            default: color += "0963c7";
        }
        textoEtapa = `<div class="etapa"> ${obtenerEtapa(color)} </div>`;

        let textoNombre = `<div class="nombre"> ${crearReferencia(path, nombre)} ${infoMateria} </div>`;
        let titulo = `<div class="titulo"> ${textoNombre} ${textoEtapa} </div>`;

        return {
            cuatri: cuatri,
            representacion: `<div class="nota"> ${titulo} <span style="display: flex; padding-right: 3em;"> ${descripcion} </span> </div>`,
        };
    })
    .groupBy(({ representacion, cuatri }) => cuatri)
    .sort(cuatrimestre => {
		let [anio, cuatri] = cuatrimestre.key.split("C");
		anio = parseInt(anio);
		cuatri = parseInt(cuatri) - 1;
		return anio + 0.5 * cuatri;
	}, 'desc');

for (let { key, rows } of materias) {
    dv.header(2, nombreCuatrimestre(key));
    dv.el("hr", "");
    dv.el(
        "div", `<div class="grilla"> ${rows.map(({ representacion, cuatri }) => representacion).join("")} </div> <br>`,
        { attr: { style: "padding-top: 1em;" } }
    );
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link ref" target="_blank" rel="noopener"> ${texto} </a>`;
}

function obtenerEtapa(color) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-72 -72 33.874 44.279"><g stroke-width="1.6" stroke="currentColor" fill="currentColor" stroke-miterlimit="10"><path d="M-64.803-71.47v42.68L-52-41.596l12.803 12.804V-71.47" fill="none" stroke="#dadada"></path><path d="M-60.535-69.336v30.728L-52-47.57l8.962 8.962v-30.728Z" stroke="none" fill="${color}"></path></g></svg>`;
}