<%*
	tR += "---\n";
	const dv = this.app.plugins.plugins["dataview"].api;
	
	let numArticulo = await tp.system.prompt("Artículo n°: ");
	if (!numArticulo) 
		return await salir("No se ingreso un número para el artículo");

	let leyes = dv.pages("#legal/cabezera_articulos");
	if (!leyes)
		return salir("No hay archivo que represente a los artículos, crear una ley o documento");

	let archivoCabecera = await tp.system.suggester(ley => ley.file.name, leyes);
	if (!archivoCabecera)
		return salir("No se eligió ley o documento");

	let cuerpoLegal = archivoCabecera.ley;
	if (!cuerpoLegal) cuerpoLegal = archivoCabecera.documento;
	
	tR += `cuerpo_legal: ${cuerpoLegal}\n`;
	tR += `num_articulo: ${numArticulo}\n`;

	let conjunto = conseguirConjuntos(archivoCabecera);
	let carpeta = await datos(conjunto, archivoCabecera, numArticulo);
	if (!carpeta) 
		return seleccion;

	let titulo = `Art. ${numArticulo} ${archivoCabecera.nombre_abreviado}`;
	if (archivoCabecera.art_con_nombre) {
		let nombre = await tp.system.prompt(`El Art. ${numArticulo} tiene de nombre: `);
		nombre = nombre.replaceAll(",", "");
		titulo += `, ${nombre}`;
		tR += `art_nombre: ${nombre}\n`;
	}

	try {
		await this.app.vault.createFolder(carpeta);
	} catch {}

	try {
		await tp.file.move(`${carpeta}/${titulo}`);
	} catch {
		// abrir el articulo ya existente
		return salir("El artículo ya existe");
	}

	let articulo = await tp.system.prompt(`Artículo N°${numArticulo} enuncia: `);
	tR += `art: "${articulo}"\n`;

	let numInciso = await tp.system.prompt("Cantidadad de incisos: ");
	tR += "incisos: \n"
	let incisos = [];
	for (let i = 0; i < numInciso; i++) {
		let inciso = await tp.system.prompt(`Inciso N°${i + 1}: `);
		incisos[i] = inciso;
		tR += ` - "${inciso}" \n`;
	}

	let contArticulo = undefined;
	if (incisos.length > 0) {
		contArticulo = await tp.system.prompt("Continuación del artículo: ");
		if (!contArticulo) {
			tR += `cont_art: ${contArticulo}\n`;
		}
	}

	let grupos = carpeta.split("/").slice(3).map(categoriaConValor => [
		obtenerGrupo(categoriaConValor),
		obtenerNumero(categoriaConValor)
	]);
	
	for (let [categoria, valor] of grupos) {
		tR += `${categoria.toLowerCase()}: ${valor}\n`;
	}

	tR += await tp.file.include("[[Crear Grupos]]");

	tR += await tp.file.include("[[Listado archivo - Template]]");
	
	tR += "---";	

	function conseguirConjuntos(archivoCabecera) {
		if (!archivoCabecera.grupos)
			return [];

		return archivoCabecera.grupos.map(grupo => {
			let opt = archivoCabecera[`opt_${grupo.toLowerCase()}`];
			if (!opt) opt = true;
			return [grupo, opt];
		});
	}

	function conseguirArtAnteriorYSiguiente(archivoCabecera, numArt) {
		let articulos = dv.pages(`"${archivoCabecera.file.folder}"`)
			.where(pagina => pagina.file.name.startsWith("Art."));

		let inferiores = articulos.where(art => art.numArticulo < numArt).values;
		if (inferiores.length == 0)
			return null;

		let superiores = articulos.where(art => art.numArticulo > numArt).values;
		if (superiores.length == 0)
			return null;

		let inferior = inferiores
			.reduce((art1, art2) => art1.numArticulo > art2.numArticulo ? art1 : art2);

		let superior = superiores
			.reduce((art1, art2) => art1.numArticulo < art2.numArticulo ? art1 : art2);	
		
		return [inferior, superior];
	}

	async function datos(conjunto, archivoCabecera, numArticulo) {
		let carpeta = archivoCabecera.file.folder;
		let predefinidas = archivoCabecera.predefinidos;

		let avanzado = false;
		let articulos = conseguirArtAnteriorYSiguiente(archivoCabecera, numArticulo);
		
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

		if (!avanzado && predefinidas) {
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
		while (!respuesta) {
			respuesta = await tp.system.prompt(`Es obligatoria. ${prompt}`);
		}
		return respuesta;
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

	function obtenerNumero(conjunto) {
		let numero = undefined;	
		const nombres_numeros = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
	
		for (let parte of conjunto.split(" ")) {
			parte = parte.toLowerCase();
			if (!nombres_numeros.some(nombre => parte.includes(nombre)))
				continue;
			if (numero === undefined)
				numero = 0;
			numero += nombres_numeros.findIndex(nombre => {
				return parte.includes(nombre);
			}) + 1;
		}
		if (numero !== undefined) 
			return numero;

		for (let parte of conjunto.replaceAll(".", "").split(" ")) {
			if (isNaN(parseInt(parte, 10)))
				continue;
			if (numero === undefined)
				numero = 0;
			numero += parseInt(parte, 10);
		}
		
		return (numero === undefined) ? 0 : numero;
	}

	async function salir(mensaje) {
		let archivoActivo = app.workspace.getActiveFile();
		if (mensaje) new Notice(mensaje);
		await app.vault.trash(archivoActivo, true);
	}
%>
### Artículo
---
<%*
	tR += `"${articulo}"\n\n`;
	for (let i = 0; i < incisos.length; i++) {
		tR += `#### Inciso N°${i + 1}\n---\n`;
		tR += `"${incisos[i]}"\n\n`;
	}
	if (contArticulo != undefined && contArticulo != "") {
		tR += `#### Sigue el artículo\n---\n`;
		tR += `"${contArticulo}"\n\n`;
	}
%>
### Interpretación
---
