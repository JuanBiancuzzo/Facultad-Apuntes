<%* 
	tR += "---\n";
	
	let carpeta = tp.file.folder(true);
	let cuerpo_legal = carpeta.split("/")[2];
	tR += `cuerpo_legal: ${cuerpo_legal}\n`;
	
	let titulo = tp.file.title;

	let num_articulo = titulo.split(" ")[1];
	tR += `num_articulo: ${parseInt(num_articulo)}\n`;

	let num_ley_original = titulo.split(" ")[5].replace(",", "");
	let num_ley = num_ley_original.replace(".", "").replace("/", ".");
	tR += `num_ley: ${parseInt(num_ley)}\n`;

	let nombre_ley = `Ley ${num_ley_original}, de la Constitución Nacional`;
	let existe_ley = await tp.file.exists(`${carpeta}/${nombre_ley}.md`);
	if (!existe_ley) {
		let template = await tp.file.find_tfile("Ley - Template");
		let carpeta_ley = await this.app.vault.getAbstractFileByPath(carpeta);
		tp.file.create_new(template, nombre_ley, false, carpeta_ley);
	}

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
<% tp.file.cursor() %>