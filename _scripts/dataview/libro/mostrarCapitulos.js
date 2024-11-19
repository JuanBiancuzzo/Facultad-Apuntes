const { libro, capitulos } = input;

if (!capitulos || capitulos.lenght == 0)
    return;

let tieneNombres = capitulos.every(cap => cap.nombreCapitulo);
let lista = tieneNombres ? "ol" : "li";

let infoCapitulos = capitulos.map(capitulo => {
    let titulo = `Capítulo ${capitulo.numeroCapitulo}`;

    if (tieneNombres) {
        if (capitulo.nombreCapitulo) titulo = capitulo.nombreCapitulo;
    } else {
        if (capitulo.nombreCapitulo) titulo += `: ${capitulo.nombreCapitulo}`;
    }

    let referencia = crearReferencia(`${libro.file.path}#${describirCapitulo(capitulo)}`, titulo);

    return `<li value="${capitulo.numeroCapitulo}"> ${referencia} </li>`
});

dv.el("div", `<h3> Indice </h3> <${lista}> ${infoCapitulos.join("")} </${lista}>`);

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="text-decoration: none; color: var(--h2-color)" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}

function describirCapitulo(infoCapitulo) {
    let descripcion = `Capítulo ${infoCapitulo.numeroCapitulo}`;
    if (infoCapitulo.nombreCapitulo) 
        descripcion += `: ${infoCapitulo.nombreCapitulo}`;
    if (infoCapitulo.editores && infoCapitulo.editores.length > 0) {
        let editores = [];
		for (let editore of infoCapitulo.editores) {
			editores.push(`${editore.nombre} ${editore.apellido}`);
		}
		
		descripcion += ` de ${editores.join(", ")}`;
    }

    return descripcion;
}