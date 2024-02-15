<%* 
	tR += "---\n";

	let dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;

	const dv = this.app.plugins.plugins["dataview"].api;
	let seleccion = await tp.file.selection();
	
	let carpeta = await conseguirCarpeta(dv);
	if (!carpeta)
		return await salir(seleccion);

	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await tp.system.prompt("Nombre:");
		if (!titulo) return await salir(seleccion);

		let carpetaAnterior = carpeta.split("/").slice(0, -1);
		let posiblePagina = dv.pages(`"${carpetaAnterior}"`)
			.find(pagina => pagina.file.name == titulo);

		if (posiblePagina) {
			let archivoActivo = app.workspace.getActiveFile();
			let paginaVieja = await tp.file.find_tfile(posiblePagina.file.path);
			let leaf = await app.workspace.getLeaf("tab");
			await app.vault.trash(archivoActivo, true);
			return await leaf.openFile(paginaVieja);
		}
		
		await tp.file.rename(titulo);
	}
	
	let materia = carpeta.split("/")[0];
	tR += `materia: ${materia}\n`;	

	let capitulo = await conseguirCapitulo(dv, carpeta);
	if (!capitulo)
		return await salir(seleccion);
	tR += `capitulo: ${capitulo}\n`;

	async function conseguirCarpeta(dv) {
		let carpeta = tp.file.folder(true);
		let seTieneQueMover = false;

		if (carpeta == "/") {
			carpeta = await preguntarMateria(dv);
			if (!carpeta)
				return undefined;
			seTieneQueMover = true;
		}			
		
		let carpetas = carpeta.split("/");
		if (carpetas.length <= 1) {
			let capitulo = await preguntarCarpeta(dv, carpeta); 
			if (!capitulo)
				return undefined;
			carpeta += `/${capitulo}`;
			seTieneQueMover = true;
		} 

		if (seTieneQueMover) {
			await tp.file.move(`${carpeta}/Untitle`, app.workspace.getActiveFile());
		}

		return carpeta;
	}

	async function preguntarMateria(dv) {
		let carpetasExcluidas = ["", "_template"];
		let archivos = dv.pages()
			.filter(archivo => !carpetasExcluidas.includes(archivo.file.folder));

		let materias = archivos
			.map(archivo => archivo.file.folder.split("/")[0]);
		materias = [... new Set(materias)];
		materias = materias.filter(materia => materia != "_template");
		
		let archivosMateria = archivos
			.filter(archivo => archivo.file.frontmatter && archivo.file.frontmatter.cuatri);
		
		return tp.system.suggester(materia => {
			return archivosMateria
				.find(archivo => archivo.file.folder.includes(materia))
				.file.name;
		}, materias, false, "En que materia estaría este archivo?");
	}

	async function preguntarCarpeta(dv, materia) {
		let carpetas = dv.pages(`"${materia}"`)
			.filter(archivo => archivo.file.frontmatter.capitulo)
			.groupBy(archivo => archivo.file.folder)
			.sort(archivo => parseInt(archivo.rows[0].file.frontmatter.capitulo, 10))
			.map(grupo => {
				let carpeta = grupo.key.split("/")[1];
				let capitulos = grupo.rows.groupBy(archivo => {
					return archivo.file.frontmatter.capitulo;
				}).map(archivo => archivo.rows[0].file.frontmatter.capitulo);
				
				let multiplesCapitulos = capitulos.length > 1;
				capitulos = capitulos.join(", ");
				capitulos = (multiplesCapitulos)
					? `, con capitulos: ${capitulos}`
					: `, con el capitulo: ${capitulos}`;
				return [carpeta, capitulos];
			});
		
		let carpeta = await tp.system.suggester(resultado => {
			let [carpeta, capitulos] = resultado;
			return `${carpeta}${capitulos}`;
		}, carpetas, false, "");
		
		return (carpeta) ? carpeta[0] : undefined;
	}

	async function conseguirCapitulo(dv, carpeta) {
		let carpetas = carpeta.split("/");
		let capitulo = undefined;
		for (let i = carpetas.length - 1; i >= 1; i--) {
			let carpeta_actual = carpetas.slice(0, i + 1).join("/");
			let archivos = dv.pages(`"${carpeta_actual}"`);
			capitulo = reducirACapitulos(archivos);
			
			if (!capitulo)
				continue;
			
			capitulo = await preguntarCapitulo(capitulo);
			if (!capitulo)
				continue;
			break;
		}
	
		if (!capitulo)
			capitulo = await tp.system.prompt("Capitulo: ");
		return capitulo
	}

	async function preguntarCapitulo(capitulos) {
		if (capitulos.length == 1)
			return capitulos[0];
		return tp.system.suggester(capitulo => `Capítulo: ${capitulo}`, capitulos, false, placeholder = "En caso de no estar tu opción, apretar ESC");
	}

	function reducirACapitulos(archivos) {
		if (!archivos || archivos.length == 0)
			return undefined;
		let capitulos = archivos
			.map(archivo => archivo.capitulo)
			.filter(cap => cap)
			.sort(cap => cap);
		return [...new Set(capitulos)];
	}

	async function salir(seleccion) {
		return seleccion;
	}

	tR += "---";
%>
### Definición
---
<% tp.file.cursor() %>