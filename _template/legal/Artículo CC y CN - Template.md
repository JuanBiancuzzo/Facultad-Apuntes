<%* 
	tR += "---\n";

	let carpeta = tp.file.folder(true);
	let carpetas = carpeta.split("/");

	let cuerpo_legal = carpetas[2];
	tR += `cuerpo_legal: ${cuerpo_legal}\n`;

	let titulo = tp.file.title;
	let num_articulo = titulo.split(" ")[1];
	tR += `num_articulo: ${parseInt(num_articulo)}\n`;

	let art_nombre = titulo.split(",")[1].trim();
	tR += `art_nombre: ${art_nombre}\n`;

	let articulo = await tp.system.prompt(`Artículo N°${num_articulo} enuncia: `);
	tR += `art: "${articulo}"\n`;

	let num_inciso = await tp.system.prompt("Cantidadad de incisos: ");
	tR += "incisos: \n"
	let incisos = [];
	for (let i = 0; i < num_inciso; i++) {
		let inciso = await tp.system.prompt(`Inciso N°${i + 1}: `);
		incisos[i] = inciso;
		tR += ` - "${inciso}" \n`;
	}
	
	let carpeta_relativa = `legal/Articulos/${cuerpo_legal}`;
	let posicion = 3;
	const partes = ["Libro", "Título", "Capítulo", "Sección", "Parágrafo"];
	let nombre_acumulado = "";
	let grupos = [];

	for (let i in partes) {
		let nombre_carpeta = carpetas[posicion];
		let parte = partes[i];
		if (posicion >= carpetas.length) {
			break;	
		}

		if (!nombre_carpeta.startsWith(parte)) {
			continue;	
		}
		
		carpeta_relativa += `/${nombre_carpeta}`;
		
		await crearSiNoExiste(carpeta_relativa, nombre_acumulado + nombre_carpeta, `${parte} legal - Template`);
		posicion += 1;

		let categoria = parte.toLowerCase();
		let valor = nombre_carpeta.replace(parte, "").trim();
		let grupo = valor;
		if (nombre_carpeta.startsWith("Libro")) {
			valor = nombre_carpeta.split(",")[0].trim();
			nombre_acumulado += `${nombre_carpeta.split(",")[0].trim()}, `;	
			grupo = valor.split(" ")[1];
		} else {
			nombre_acumulado += `${nombre_carpeta}, `;
		}

		grupos.push([grupo, parte]);
		tR += `${categoria}: "${valor}"\n`;
	}

	async function crearSiNoExiste(carpeta, nombre, template_name) {
		const archivo_buscado = app.vault.getMarkdownFiles()
			.filter(archivo => archivo.path.includes(carpeta))
			.find(archivo => archivo.name.includes(nombre));
		if (archivo_buscado != undefined) {
			return;	
		}

		let template = await tp.file.find_tfile(`legal/${template_name}`);
		carpeta = await this.app.vault.getAbstractFileByPath(carpeta);
		await tp.file.create_new(template, nombre, false, carpeta);
	}

	grupos = grupos.filter(grupo => grupo[0] != undefined)
				  .map(grupo => [`${grupo[1]} ${grupo[0]}`, grupo[1]]);

	let listado = app.vault.getMarkdownFiles().filter(archivo => {
		return archivo.path.startsWith("legal/Articulos/Código Civil y Comercial de la Nación"); 
	}).filter(archivo => {
		if (archivo.basename.startsWith("Art.")) {
			return false;
		}

		let enCamino = grupos.length > 0;
		let any = false;
		for (let [grupo, nombre] of grupos) {			
			if (archivo.basename.includes(nombre)) {
				let hay_igual = archivo.basename.includes(grupo);
				enCamino &= hay_igual;
				any |= hay_igual;
			}	
		}
		return enCamino && any;
	});
	
	tR += "listado:\n";

	let links = listado.map(archivo => {
		let grupoActual = grupos[0][0];
		for (let [grupo, nombre] of grupos) {
			if (!archivo.basename.includes(grupo)) {
				return `[[${archivo.basename}|${grupoActual}]]`;
			} else {
				grupoActual = grupo;
			}
		}
		return `[[${archivo.basename}|${grupoActual}]]`;
	});

	for (let link of links) {
		tR += ` - "${link}"\n`;
	}
	tR += "---";
%>

### Artículo
---
<%*
	tR += `"${articulo}"\n\n`;
	for (let i = 0; i < incisos.length; i++) {
		tR += `#### Inciso N°${i + 1}\n---\n`;
		tR += `"${incisos[i]}"\n\n`;
	}
%>
### Interpretación
---
