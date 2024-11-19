const { libro, capitulos } = input;

if (!capitulos || capitulos.lenght == 0)
    return;

let tieneNombres = capitulos.every(cap => cap.nombreCapitulo);
let lista = tieneNombres ? "ol" : "li";

let infoCapitulos = capitulos.map(capitulo => {
    let titulo = tieneNombres ? "" : `Capítulo ${capitulo.numeroCapitulo}`;

    titulo += capitulo.nombreCapitulo
        ? capitulo.nombreCapitulo
        : `: ${capitulo.nombreCapitulo}`;

    let path = `${libro.file.path}#${describirCapitulo(capitulo)}`;

    let paginas = "";
    if (capitulo.paginas) {
        let paginaInicio = parseInt(capitulo.paginas.inicio, 10);
        let paginaFinal = parseInt(capitulo.paginas.final, 10);

        let ordenInicio = `${paginaInicio}`.length;
        let ordenFinal = `${paginaFinal}`.length;

        let diferenciaOrden = ordenFinal - ordenInicio;

        paginas = `${[...Array(diferenciaOrden)].map(_ => "0").join("")}${paginaInicio} - ${paginaFinal}`;
    }

    let editores = "";
    if (capitulo.editores && capitulo.editores.lenght > 0) {
        let editores = [];
		for (let editore of capitulo.editores) {
			editores.push(`${editore.nombre} ${editore.apellido}`);
		}
		
		editores = `<span style="padding-left: 1em; font-size: 0.9rem;"> ${editores.join(", ")} </span>`;
    }

    return `<li value="${capitulo.numeroCapitulo}"> 
        <a ${referenciaTags(path)}>
            <div style="display: flex; justify-content: space-between;">
                <span> ${titulo} </span> <span style="width: 6em; text-align: center;"> ${paginas} </span> 
            </div>
            ${editores}
        </a>
    </li>`;
});

dv.el("div", `<h3> Índice </h3> <${lista}> ${infoCapitulos.join("")} </${lista}>`);

function referenciaTags(path) {
    return `data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="text-decoration: none; color: var(--h2-color)" \
        class="internal-link" target="_blank" rel="noopener"`;
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