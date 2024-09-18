---
cuatri: 24C1
codigo: "9111"
plan: 2009
estado: Falta terminar los últimos capítulos
tags:
  - materia
---
# Apuntes 
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarMateria", { materia: dv.current() });
```
# Documentos
---
Se tiene varios documentos utilizados a lo largo de la ecursada, estos siendo
```dataviewjs
let mostrar = dv.pages(`#legal/documento`)
	.sort(documento => -dv.pages(`"${documento.file.folder}"`).length)
	.map(archivo => {
		let nombre = archivo.file.name;
		let path = archivo.file.path;
		
		return `<li> ${crearReferencia(path, nombre)} </li>`;
	});

dv.el("ul", mostrar);

function crearReferencia(path, texto, style="") {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="${style}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}
```