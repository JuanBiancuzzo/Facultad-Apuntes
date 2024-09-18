---
cuatri: 22C2
estado: Terminado
plan: "1986"
codigo: "6109"
tags:
  - materia
---
# Apuntes 
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarMateria", { materia: dv.current() });
```
# Distribuciones
---
Se tiene $3$ tipos de distribuciones

```dataviewjs
const datos = [
	{ nombre: "Discretas", tag: "distribucion/discreta" },
	{ nombre: "Continuas", tag: "distribucion/continua" },
	{ nombre: "Multivariables", tag: "distribucion/multivariada" },
];

for (let { nombre, tag } of datos) {
	dv.header(4, nombre);
	dv.el("hr", "");
	let mostrar = dv.pages(`#${tag}`)
	    .map(archivo => {
	        let nombre = archivo.file.name;
	        let path = archivo.file.path;
	        
	        return `<li> ${crearReferencia(path, nombre)} </li>`;
	    });

    dv.el("ul", mostrar);
    dv.el("br", "");
}

function crearReferencia(path, texto, style="") {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="${style}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}
```