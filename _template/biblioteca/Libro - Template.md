<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	
	const describir = tp.user.describir();
	const mantenerOrden = tp.user.mantenerOrden();
	const CARACTERES_INVALIDOS = tp.user.constantes().caracteresInvalidos;
	const fs = require('fs');

	const SIZE = Object.freeze({
		SMALL: "S",
		MEDIUM: "M",
		LARGE: "L",
	});

	const EXT = "jpg";


	const tipoCita = "Libro";
	let numReferencia = tp.user.generarNumReferencia();
	
	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

    let infoLibro = await tp.user.cita().citar(tp, tipoCita, numReferencia + 1);

	let autores = [];
	for (let autore of infoLibro.nombreAutores) {
		autores.push(`${autore.nombre} ${autore.apellido}`);
	}
		
	let subTitulo = "";
	if (infoLibro.subtituloObra) {
		subTitulo = `, ${infoLibro.subtituloObra.charAt(0).toLowerCase()}${infoLibro.subtituloObra.slice(1)}`;
	}
	let volumen = (infoLibro.volumen) ? ` (vol. ${infoLibro.volumen})` : "";
	let nombreArchivo = `${infoLibro.tituloObra}${subTitulo}${volumen} de ${autores.join(", ")}`;

	let intercambios = [[":", ","], ['"', "'"], ["<", "("], [">", ")"], ["?", ""]]
	for (let [caracterInvalido, caracterValido] of intercambios) {
		nombreArchivo = nombreArchivo.replaceAll(caracterInvalido, caracterValido);
	}
	CARACTERES_INVALIDOS.forEach(caracterInvalido => nombreArchivo = nombreArchivo.replaceAll(caracterInvalido, ","));

      
      await tp.file.move(`biblioteca/libros/${nombreArchivo}`);

	tR += tp.obsidian.stringifyYaml(infoLibro);

	let datos = await dataLibroAPI(infoLibro.tituloObra, infoLibro.nombreAutores[0]);
	let generador = generadorKeyValueCover(datos);

	let nombreImagen = `${nombreArchivo}.${EXT}`;
	let cover = await guardarImagen(generador, nombreImagen, SIZE.MEDIUM);	


	if (!cover) cover = "";
	tR += `cover: ${cover}\n`;
	let aliases = (infoLibro.capitulos ? infoLibro.capitulos : [])
		.map(infoCapitulo => {
			let descripcion = describir.capitulo(infoCapitulo);
			return `${nombreArchivo}, ${descripcion}#${descripcion}`;
		});
	tR += tp.obsidian.stringifyYaml({ aliases: aliases });
	tR += `orden: ${mantenerOrden.siguienteValorOrden()}\n`;

	tR += `tags: \n - referencia/${tipoCita.toLowerCase()}\n - biblioteca/libro\n - nota/investigacion\n`;
	tR += "---";

	async function dataLibroAPI(titulo, autore) {
		titulo = titulo.replaceAll(" ", "-").toLowerCase();
		autore = `${autore.nombre}+${autore.apellido}`.replaceAll(" ", "-").toLowerCase();

		let respuesta = await fetch(`https://openlibrary.org/search.json?title=${titulo}&author=${autore}`);
		let data = await respuesta.json();
		return data.docs;
	}

	function* generadorKeyValueCover(datos) {
		if (!datos || datos.length <= 0) datos = [];
		const KEY_ARRAY = [ "isbn", "oclc", "lccn", "olid" ];

		for (let dato of datos) {
			for (let key of KEY_ARRAY) {
				if (!(key in dato)) continue;

				for (let value of dato[key]) {
					yield { key: key, value: value };
				}
			}
		}
	}

	async function guardarImagen(generador, nombreImagen, size) {
		new Notice("Buscando portada...");
		let respuesta;		

		for (let { key, value } of generador) {
			url = `https://covers.openlibrary.org/b/${key}/${value}-${size}.${EXT}`;
			respuesta = await fetch(url);

			if (respuesta.ok)
				break;
		}

		if (!generador.next().value) {
			new Notice("No se pudo encontrar protada para este libro");
			return "";
		}

		const path = app.vault.adapter.basePath + `\\biblioteca\\libros\\covers\\${nombreImagen}`;
		const fileStream = fs.createWriteStream(path);		
		const writableStream = new WritableStream({
			write(chunk) {
				fileStream.write(chunk);
			},
			close() {
				fileStream.end();
				new Notice("Descarga completada");
			},
			abort(err) {
				new Notice("Hubo un error en la descarga");
				console.error('Error downloading the image: ', err.message);
			}
		});
		
		new Notice("Descargando portada...");
		await respuesta.body.pipeTo(writableStream);
		return nombreImagen;
	}
%>
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```
<% tp.file.cursor() %>

<%*
	tR += (infoLibro.capitulos ? infoLibro.capitulos : [])
		.map(infoCapitulo => describir.capitulo(infoCapitulo))
		.map(cap => `## ${cap}\n---\n\n\n`)
		.join("\n");
%> 