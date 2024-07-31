## Carpetas
---
Lista de todas las carpetas siendo investigadas, con todos los links que usan. Cualquier cosa ver el [[README|read me]].

```dataviewjs
const indices = dv.pages('#índice')
	.sort(archivo => archivo.file.folder.split("/").pop());
const referencias = dv.pages('"_referencias"');

let citaView = require(app.vault.adapter.basePath + "/_scripts/dataview/citaView.js");

for (let indice of indices) {
	let paginas = dv.pages(`"${indice.file.folder}" and -#índice`)
        .filter(pagina => pagina.file.folder == indice.file.folder)
        .filter(pagina => pagina.referencias);

	let referenciasTema = paginas
        .flatMap(pagina => pagina.referencias)
        .map(ref => parseInt(ref, 10))
        .sort(ref => ref)
        .values;

	if (referenciasTema.length == 0)
		continue;

	let nombre = indice.file.folder.split("/").pop();
	nombre = `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`;
	
	dv.header(5, `${nombre} [[${indice.file.path}|?]]`);
	dv.el("hr", "");

	let resultado = "";
    for (let numRef of referenciasTema) {
	    let referencia = referencias.find(ref => ref.numReferencia == numRef);
	    if (!referencia) {
		    console.log(numRef);
		    continue;
	    }
        resultado += citaView.mostrarCita(referencia);
    }

	dv.el("div", resultado);
}
```
