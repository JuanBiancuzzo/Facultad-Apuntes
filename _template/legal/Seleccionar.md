<%*
	const dv = this.app.plugins.plugins["dataview"].api;

	let carpeta_articulos = "legal/Articulos";
	let todos_articulos = dv.pages(`"${carpeta_articulos}"`);
	let seleccion = await tp.file.selection();

	let leyes = dv.pages("#cabezera_articulos");
	if (!leyes)
		return seleccion;

	let archivo_cabecera = await tp.system.suggester(ley => ley.file.name, leyes);
	if (!archivo_cabecera)
		return seleccion;

	let archivos = dv.pages(`"${archivo_cabecera.file.folder}"`);
	let buscar_articulos = true;
	if (archivo_cabecera.grupos && archivo_cabecera.grupos.length > 0 && false) {
		buscar_articulos = await tp.system.suggester(["Buscar artículos", "Buscar grupos"], [true, false]);
		if (buscar_articulos === null)
			return seleccion;
	}

	if (buscar_articulos) {
		let articulos = archivos
			.filter(pagina => pagina.file.name.startsWith("Art. "))
			.sort(pagina => pagina.num_articulo);
		
		
		let articulo = await articuloPorSeleccion(articulos, seleccion);
		if (!articulo)
			articulo = await preguntarPorArticulo(articulos, seleccion);

		if (!articulo)
			return seleccion ? seleccion : "";

		tR += `[[${articulo}]]`;
	} else {
		let grupos = archivo_cabecera.grupos;
	}

	async function articuloPorSeleccion(articulos, seleccion) {
		let link = undefined;
		if (seleccion) {
			let numero = tenerNumeroGrupo(seleccion);
			let articulo = articulos.find(a => a.num_articulo == parseInt(numero, 10));
			if (articulo)
				link = `${articulo.file.name}|${seleccion}`;
			else {
				let mensaje = `No se pudo encontrar el artículo referido a la selección: ${seleccion}`;
				new Notice(mensaje);
			}
				
		}
		return link;
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

		for (let parte of conjunto.replaceAll(".", "").split(" ")) {
			if (isNaN(parseInt(parte, 10)) || numero)
				continue;
			if (!numero)
				numero = 0;
			numero += parseInt(parte, 10);
		}
		
		return (numero) ? numero : 0;
	}
%>