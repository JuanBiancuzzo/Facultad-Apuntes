
```dataviewjs
const resumenes = dv.pages('"referencias"')
	.where(pagina => pagina.tipo == "resumen");

const libros = resumenes.groupBy(resumen => [resumen.libro, resumen.autor]);

for (let libro of libros) {
	let [nombre, lista_autores] = libro.key;
	let autores = "sin autores";
	if (lista_autores.length > 0) {
		autores = "";
		for (let autor of lista_autores.slice(0, -1)) {
			autores += autor + ", ";
		}
		autores += lista_autores.slice(-1);
	}
	dv.header(4, nombre);
	dv.span("\t de " + autores);
	dv.el("hr", "");
	dv.list(libro.rows.map(pagina => {
		let capitulo = pagina.capitulo;
		let path = pagina.file.path;

		return "[[" + path + "|" + capitulo + "]]";
	}));
	dv.el("br", "");
}
```
