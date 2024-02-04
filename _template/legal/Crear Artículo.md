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
				.replace("legal/Articulos/", "")
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

	let conjunto = [];
	let grupos = archivo_cabecera.grupos ? archivo_cabecera.grupos : [];
	for (let grupo of grupos) {
		let opt = archivo_cabecera[`opt_${grupo.toLowerCase()}`];
		if (opt === undefined)
			opt = true;
		conjunto.push([grupo, opt]);
	}

	let carpeta = await datos(archivo_cabecera.file.folder, conjunto, archivo_cabecera.predefinidos);
	if (!carpeta) 
		return seleccion;

	let titulo = `Art. ${num_articulo} ${archivo_cabecera.nombre_abreviado}`;
	if (archivo_cabecera.art_con_nombre) {
		let nombre = await tp.system.prompt(`El Art. ${num_articulo} tiene de nombre: `);
		nombre = nombre.replace(",", "");
		titulo += `, ${nombre}`;
	}

	let template = await tp.file.find_tfile("legal/Artículo - Template");
	carpeta = await crearCarpeta(carpeta);
	let nuevo_articulo = await tp.file.create_new(template, titulo, false, carpeta);
	await app.workspace.getLeaf("tab").openFile(nuevo_articulo);

	if (seleccion) {
		return `[[${nuevo_articulo.basename}|${seleccion}]]`;
	}

	async function datos(carpeta, conjunto, predefinidas) {
		if (predefinidas !== undefined && predefinidas !== null) {
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