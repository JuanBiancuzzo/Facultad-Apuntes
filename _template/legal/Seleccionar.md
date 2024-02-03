<%*
	const dv = this.app.plugins.plugins["dataview"].api;
	const paginas = dv.pages('"legal/Articulos"')
		.map(pagina => {
			return pagina.file.folder
				.replace("legal/Articulos/", "")
				.split("/")[0];
		});

	const carpetas = [...new Set(paginas)]; 

	let de_donde = await tp.system.suggester(carpeta => carpeta, carpetas);
	if (de_donde === null)
		return "";


	let archivos = dv.pages(`"legal/Articulos/${de_donde}"`);
	let archivo_cabecera = archivos
		.find(pagina => pagina.file.name.startsWith(`${de_donde}, Ley `));	

	if (archivo_cabecera === undefined)
		return "";

	let buscar_articulos = true;
	if (archivo_cabecera.grupos && archivo_cabecera.grupos.length > 0 && false) {
		buscar_articulos = await tp.system.suggester(["Buscar artículos", "Buscar grupos"], [true, false]);
		if (buscar_articulos === null)
			return "";
	}

	if (buscar_articulos) {
		let articulos = archivos
			.filter(pagina => pagina.file.name.startsWith("Art. "))
			.sort(pagina => pagina.num_articulo);
		
		
		let [articulo, seleccion] = await articuloPorSeleccion(articulos);
		if (!articulo)
			articulo = await preguntarPorArticulo(articulos, seleccion);

		if (!articulo)
			return selecionado ? selecionado : "";

		tR += `[[${articulo}]]`;
	} else {
		let grupos = archivo_cabecera.grupos;
	}

	async function articuloPorSeleccion(articulos) {
		let selecionado = await tp.file.selection();
		let link = undefined;
		if (selecionado) {
			let numero = tenerNumeroGrupo(selecionado);
			let articulo = articulos.find(a => a.num_articulo == parseInt(numero, 10));
			if (articulo)
				link = `${articulo.file.name}|${selecionado}`;
			else {
				let mensaje = `No se pudo encontrar el artículo referido a la selección: ${selecionado}`;
				let n = new Notice(mensaje);
			}
				
		}
		return [link, selecionado];
	}

	async function preguntarPorArticulo(articulos, seleccion) {
		let articulo = await tp.system.suggester(articulo => {
			let mostrar = `Art. ${articulo.num_articulo}`;
			if (articulo.art_nombre) 
				mostrar += `, ${articulo.art_nombre}`;
			return mostrar;
		}, articulos, false, "Busca el artículo que estés interesado", 15);

		if (!articulo)
			return undefined;

		let link = `${articulo.file.name}`;
		if (seleccion)
			link += `|${seleccion}`;
		return link;
	}

	function tenerNumeroGrupo(conjunto) {
		let numero = undefined;	
		const nombres_numeros = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
	
		for (let parte of conjunto.split(" ")) {
			parte = parte.toLowerCase();
			if (!nombres_numeros.some(nombre => parte.includes(nombre)) || numero)
				continue;
			if (!numero)
				numero = 0;
			numero += nombres_numeros.findIndex(nombre => {
				return parte.includes(nombre);
			}) + 1;
		}
		
		if (numero) 
			return numero;

		for (let parte of conjunto.replace(".", "").split(" ")) {
			if (isNaN(parseInt(parte, 10)) || numero)
				continue;
			if (!numero)
				numero = 0;
			numero += parseInt(parte, 10);
		}
		
		return (numero) ? numero : 0;
	}
%>