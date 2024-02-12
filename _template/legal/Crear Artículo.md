<%*
	let num_articulo = await tp.system.prompt("Artículo n°: ");
	if (num_articulo == undefined || num_articulo == "") 
		return;

	const dv = this.app.plugins.plugins["dataview"].api;
	let carpeta_articulos = "legal/Articulos";
	let todos_articulos = dv.pages(`"${carpeta_articulos}"`);
	let seleccion = await tp.file.selection();

	let carpetas = todos_articulos
		.map(pagina => {
			return pagina.file.folder
				.replaceAll("legal/Articulos/", "")
				.split("/")[0];
		});
	carpetas = [...new Set(carpetas)]; 
	let leyes = todos_articulos.filter(articulo => carpetas.some(carpeta => {
		return articulo.file.name.startsWith(`${carpeta}, Ley`);
	}));
	if (!leyes)
		return seleccion;

	let archivo_cabecera = await tp.system.suggester(ley => ley.file.name, leyes);
	if (!archivo_cabecera)
		return seleccion;

	let conjunto = conseguirConjuntos(archivo_cabecera);
	let carpeta = await datos(conjunto, archivo_cabecera, num_articulo);
	if (!carpeta) 
		return seleccion;

	let titulo = `Art. ${num_articulo} ${archivo_cabecera.nombre_abreviado}`;
	if (archivo_cabecera.art_con_nombre) {
		let nombre = await tp.system.prompt(`El Art. ${num_articulo} tiene de nombre: `);
		nombre = nombre.replaceAll(",", "");
		titulo += `, ${nombre}`;
	}

	let template = await tp.file.find_tfile("legal/Artículo - Template");
	carpeta = await crearCarpeta(carpeta);
	let nuevo_articulo = await tp.file.create_new(template, titulo, false, carpeta);
	await app.workspace.getLeaf("tab").openFile(nuevo_articulo);

	function conseguirConjuntos(archivo_cabecera) {
		if (!archivo_cabecera.grupos)
			return [];
		let conjunto = [];
		
		for (let grupo of archivo_cabecera.grupos) {
			let opt = archivo_cabecera[`opt_${grupo.toLowerCase()}`];
			if (opt === undefined)
				opt = true;
			conjunto.push([grupo, opt]);
		}
		
		return conjunto;
	}

	function conseguirArtAnteriorYSiguiente(archivoCabecera, numArt) {
		let articulos = dv.pages(`"${archivoCabecera.file.folder}"`)
			.where(pagina => pagina.file.name.startsWith("Art."));

		let inferiores = articulos.where(art => art.num_articulo < numArt).values;
		if (inferiores.length == 0)
			return null;

		let superiores = articulos.where(art => art.num_articulo > numArt).values;
		if (superiores.length == 0)
			return null;

		let inferior = inferiores
			.reduce((art1, art2) => art1.num_articulo > art2.num_articulo ? art1 : art2);

		let superior = superiores
			.reduce((art1, art2) => art1.num_articulo < art2.num_articulo ? art1 : art2);	
		
		return [inferior, superior];
	}

	async function datos(conjunto, archivo_cabecera, num_articulo) {
		let carpeta = archivo_cabecera.file.folder;
		let predefinidas = archivo_cabecera.predefinidos;

		let avanzado = false;
		let articulos = conseguirArtAnteriorYSiguiente(archivo_cabecera, num_articulo);
		
		if (articulos) {
			let [artAnterior, artSiguiente] = articulos;
			let carpetaPos = 0;

			let carpetaAnterior = artAnterior.file.folder.split("/").slice(3);
			let carpetaSiguiente = artSiguiente.file.folder.split("/").slice(3);

			if (carpetaAnterior.join("/") == carpetaSiguiente.join("/")) {
				carpeta += `/${carpetaAnterior.join("/")}`;
				return carpeta;
			}

			while (true) {
				if (Math.min(carpetaAnterior.length, carpetaSiguiente.length) <= carpetaPos)
					break;
				if (carpetaAnterior[carpetaPos] != carpetaSiguiente[carpetaPos])
					break;

				carpeta += `/${carpetaAnterior[carpetaPos]}`;
				avanzado = true;
				carpetaPos++;
			}

			conjunto = conjunto.slice(carpetaPos);
		}

		if (!avanzado && predefinidas !== undefined && predefinidas !== null) {
			let opcion = await tp.system.suggester(t => t, predefinidas);
			carpeta += `/${opcion}`;
			
			let pos = conjunto
				.findIndex(item => item[0].toLowerCase().includes(obtenerGrupo(opcion)));
			conjunto = conjunto.slice(pos + 1);
		}

		let siguientes = conjunto;
		for (let [nombre, opt] of conjunto) {
			let grupo = await preguntar(`El número/nombre de ${nombre.toLowerCase()} es:`, opt);
			siguientes = siguientes.slice(1);

			if (grupo === "" || grupo === undefined) {
				if (hayOpcionObligatorio(siguientes))
					continue;
				break;
			}

			carpeta += `/${nombre} ${grupo}`;
		}

		return carpeta;
	}

	function hayOpcionObligatorio(conjunto) {
		let hayOpcion = false;
		for (let [_, opt] of conjunto) {
			hayOpcion |= !opt;
		}
		return hayOpcion;
	}

	async function preguntar(prompt, puedeSaltearse) {
		let respuesta = await tp.system.prompt(prompt);
		if (puedeSaltearse)
			return respuesta;
		while (respuesta == "" || respuesta === undefined) {
			respuesta = await tp.system.prompt(`Es obligatoria. ${prompt}`);
		}
		return respuesta;
	}

	async function crearCarpeta(carpeta) {
		let existe_carpeta = await tp.file.exists(carpeta);
		if (!existe_carpeta) {
			await this.app.vault.createFolder(carpeta);
		}
		return this.app.vault.getAbstractFileByPath(carpeta);
	}

	function obtenerGrupo(carpeta) {
		let tokens = carpeta.toLowerCase().trim().split(" ");
		let parte = undefined;
		let hay_numero = false;
		
		for (let token of tokens) {
			if (esNumero(token)) {
				hay_numero = true;
			} else {
				parte = token;
			}
		}
		return hay_numero ? parte : tokens[0];
	}

	function esNumero(token) {
		token = token.trim().toLowerCase();
		const nombres_numeros = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
		if (nombres_numeros.some(nombre => token.includes(nombre))) 
			return true;
		return !isNaN(parseInt(token, 10));
	}
%>