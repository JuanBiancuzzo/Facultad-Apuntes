<%*
    const dv = app.plugins.plugins.dataview.api;

	let [titulo, cap] = tp.file.title.split("-").map(texto => texto.trim());   
	let tareaRename = tp.file.rename(titulo);

    tR += "---\n";
    tR += `capitulo: ${cap}\n`;
    tR += "tags: \n - resumen\n";
    tR += "---\n";

	await tareaRename;
_%>