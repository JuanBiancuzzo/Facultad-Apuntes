<%*
	let num_articulo = await tp.system.prompt("Artículo n°: ");

	const CCYCN = 2;
	const CP = 3;
	const CN = 4;
	const valores = [CCYCN, CP, CN];

	let de_donde = await tp.system.suggester(
		[
			"Código Civil y Comercial de la Nación",
			"Código Penal",
			"Constitución Nacional",
		], valores);

	if (!valores.includes(de_donde)) { return; }

	let resultado = [];
	switch (de_donde) {
		case CCYCN: resultado = await datosCCyCN(num_articulo); break;
		case CP: resultado = datosCP(); break;
		default: resultado = await datosCN();
	}

	let titulo = resultado[0];
	titulo = `Art. ${num_articulo} ${titulo}`;

	let carpeta = resultado[1];
	carpeta = `legal/Articulos/${carpeta}`;

	let template = `legal/Artículo ${resultado[2]} - Template`;
	template = await tp.file.find_tfile(template);
	carpeta = await crearCarpeta(carpeta);
	await tp.file.create_new(template, titulo, true, carpeta);

	async function crearCarpeta(carpeta) {
		let existe_carpeta = await tp.file.exists(carpeta);
		if (!existe_carpeta) {
			await this.app.vault.createFolder(carpeta);
		}
		return this.app.vault.getAbstractFileByPath(carpeta);
	}
	
	async function datosCN() {
		let num_ley = await tp.system.prompt("Ley N°: ");
		let titulo = `de la Ley ${num_ley}, de la Constitución Nacional`;
		let carpeta = `Constitución Nacional/Ley ${num_ley}`;
		let template_name = "CN";

		return [titulo, carpeta, template_name];
	}
	
	function datosCP() {
		let titulo = "del Código Penal";
		let carpeta = "Código Penal";
		let template_name = "CP";

		return [titulo, carpeta, template_name];
	}

	async function datosCCyCN(num_articulo) {
		let carpeta = "Código Civil y Comercial de la Nación";
	
		let num_titulo = undefined;

		if (num_articulo >= 1 && num_articulo <= 18) {
			num_titulo = "preliminar";
		} else {
			let grupo = undefined;
			if (num_articulo <= 400) {
				grupo = "Libro Primero, Parte General"; 
			} else if (num_articulo <= 723) {
				grupo = "Libro Segundo, Relaciones de Familia";
			} else if (num_articulo <= 1881) {
				grupo = "Libro Tercero, Derechos Personales";
			} else if (num_articulo <= 2276) {
				grupo = "Libro Cuarto, Derechos Reales";
			} else if (num_articulo <= 2531) {
				grupo = "Libro Quinto, Transmisión de Derechos por causa de muerte";
			} else {
				grupo = "Libro Sexto, Disposiciones comunes a los Derechos personales y reales";
			}
			carpeta += `/${grupo}`;
			num_titulo = await tp.system.prompt("Titulo: ");
		}
		carpeta += `/Título ${num_titulo}`;
	
		let capitulo = await tp.system.prompt("Capitulo: ");	
		carpeta += `/Capítulo ${capitulo}`;
		
		let seccion = await tp.system.prompt("Sección: ");
		if (seccion == "" || seccion == undefined) {
			return datosCarpetaDefinidaDelCCyCN(carpeta, num_articulo);
		}
		carpeta += `/Sección ${seccion}`;

		let paragrafo = await tp.system.prompt("Parágrafo: ");
		if (paragrafo == "" || paragrafo == undefined) {
			return datosCarpetaDefinidaDelCCyCN(carpeta, num_articulo);
		}
		carpeta += `/Parágrafo ${paragrafo}`;

		return datosCarpetaDefinidaDelCCyCN(carpeta, num_articulo);
	}

	async function datosCarpetaDefinidaDelCCyCN(carpeta, num_articulo) {
		let nombre = await tp.system.prompt(`El Art. ${num_articulo} tiene de nombre: `);
		let titulo = "del CC y CN, " + nombre;
		let template_name = "CC y CN";

		return [titulo, carpeta, template_name];
	}
%>