<%* 
	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await tp.system.prompt("Nombre:");
		if (!titulo)
			return "";
		await tp.file.rename(titulo);
	}
	tR += "---\n";

	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;

	let carpeta = tp.file.folder(true);
	let materia = carpeta.split("/")[0];
	tR += `materia: ${materia}\n`;
	
	const dv = this.app.plugins.plugins["dataview"].api;

	let carpetas = carpeta.split("/");
	let capitulo = undefined;
	for (let i = carpetas.length - 1; i >= 1; i--) {
		let carpeta_actual = carpetas.slice(0, i + 1).join("/");
		let archivos = dv.pages(`"${carpeta_actual}"`);
		capitulo = conseguirCapitulo(archivos);
		
		if (!capitulo)
			continue;
		
		capitulo = await preguntarCapitulo(capitulo);
		if (!capitulo)
			continue;
		break;
	}

	if (!capitulo)
		capitulo = await tp.system.prompt("Capitulo: ");
	
	tR += `capitulo: ${capitulo}\n`;

	async function preguntarCapitulo(capitulos) {
		if (capitulos.length == 1)
			return capitulos[0];
		return tp.system.suggester(capitulo => `Capítulo: ${capitulo}`, capitulos, false, placeholder = "En caso de no estar tu opción, apretar ESC");
	}

	function conseguirCapitulo(archivos) {
		if (!archivos || archivos.length == 0)
			return undefined;
		let capitulos = archivos
			.map(archivo => archivo.capitulo)
			.filter(cap => cap)
			.sort(cap => cap);
		return [...new Set(capitulos)];
	}

	tR += "---";
%>
### Definición
---
