<%*
	let [titulo, capitulo] = tp.file.title.split("-");	
	await tp.file.rename(titulo);

	let multiples = titulo.includes("Parte");
	capitulo = parseInt(capitulo, 10);
	console.log(titulo);
	
	let tag = tp.file.folder(true).replaceAll(" ", "-");
	if (multiples) tag += `/cap${capitulo}`;

    tR += "---\n";
    tR += `capitulo: ${capitulo}\n`;
    tR += `tags: \n - ${tag}\n - resumen\n`;
    if (multiples) tR += "multiples: true\n";
    tR += "---\n";
_%>
### Índice
---
<%*
	const dv = app.plugins.plugins.dataview.api;
	let materias = dv.pages(`#${tag} and #nota`);
	for (let materia of materias) {
		tR += ` * [[${materia.file.path}|${materia.file.name}]]\n`;
	}
	tR += "\n";
_%>

### Resumen
---
Pendiente...