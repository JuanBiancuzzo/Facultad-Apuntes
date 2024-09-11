<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	
	const describir = tp.user.describir();
	const fs = require('fs');

	const SIZE = Object.freeze({
		SMALL: "S",
		MEDIUM: "M",
		LARGE: "L",
	});
	
	const KEY = Object.freeze({
		ISBN: "isbn",
		OCLC: "oclc",
		LCCN: "lccn",
		OLID: "olid",
	});

	const KEY_ARRAY = [ KEY.ISBN, KEY.OCLC, KEY.LCCN, KEY.OLID ];

	const EXT = "jpg";

	class KeyValueCover {
		constructor(datos) {
			if (!datos) throw Error("Es undefiend los datos");
			if (datos.length <= 0) throw Error("Existe pero no hay datos");

			this.paresKeyValue = [];
			for (let dato of datos) {
				for (let key of KEY_ARRAY) {
					if (!(key in dato)) continue;

					dato[key].forEach(value => this.paresKeyValue.push({ 
						key: key,
						value: value
					}));
				}
			}
			this.posicion = 0;
		}

		siguiente() {
			if (this.paresKeyValue.length <= 0 || this.vacio()) return [ undefined, undefined ];

			let { key, value } = this.paresKeyValue[this.posicion];
			this.posicion++;

			return [ key, value ];
		}

		vacio() {
			return this.paresKeyValue.length <= this.posicion;
		}
	}

	let tipoCita = "Libro";
	let numReferencia = tp.user.generarNumReferencia();
	
	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

	let infoLibro = {};
	try {
        infoLibro = await tp.user.cita().citar(tp, tipoCita, numReferencia + 1);

		let autores = [];
		for (let autore of infoLibro.nombreAutores) {
			autores.push(`${autore.nombre} ${autore.apellido}`);
		}
		
        await tp.file.rename(`${infoLibro.tituloObra} de ${autores.join(", ")}`);

		tR += tp.obsidian.stringifyYaml(infoLibro);
	} catch ({ name: nombre, message: mensaje }) {
		const eliminar = tp.user.eliminar();
		const errorNombre = tp.user.error().nombre;

		console.log(nombre);
		console.log(mensaje);

        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
        }
	}

	tR += `cover: false\n`;

	let aliases = (infoLibro.capitulos ? infoLibro.capitulos : [])
		.map(infoCapitulo => describir.capitulo(infoLibro, infoCapitulo));
	tR += `aliases: ${tp.obsidian.stringifyYaml(aliases)}`;

	tR += `tags: \n - referencia/${tipoCita.toLowerCase()}\n - Biblioteca\n - nota/investigacion\n`;
	tR += "---";

	async function dataLibroAPI(titulo, autore) {
		titulo = titulo.replaceAll(" ", "-");
		autore = `${autore.nombre}+${autore.apellido}`.replaceAll(" ", "-");

		let respuesta = await fetch(`https://openlibrary.org/search.json?title=${titulo}&author=${autore}`);
		let data = await respuesta.json();
		return data.docs;
	}

	async function guardarImagen(generador, nombreImagen, size) {
		let path = app.vault.adapter.basePath + `\\libros\\covers\\${nombreImagen}`;
		let respuesta;

		do {
			let [ key, value ] = generador.siguiente();
			if (!key || !value)
				break;

			let url = `https://covers.openlibrary.org/b/${key}/${value}-${size}.${EXT}`;
			respuesta = await fetch(url);

		} while(!respuesta.ok || !generador.vacio());

		if (generador.vacio())
			return false;

		console.log(respuesta);
		
		let blob = await respuesta.blob();
		let contenido = await blob.text();
		
		await fs.writeFile(path, contenido, function (err) {
			if (err) throw err;
			console.log('Saved!');
		});
		
		return nombreImagen;
	}
%>
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
### Resumen
---
<% tp.file.cursor() %>

<%*
	tR += (infoLibro.capitulos ? infoLibro.capitulos : [])
		.map(infoCapitulo => describir.capitulo(infoLibro, infoCapitulo))
		.map(string => `#### ${string}\n---\n\n\n`)
		.join("\n");
%> <%*


	// https://covers.openlibrary.org/b/isbn/9781473211513-M.jpg 9781473211513
	// https://openlibrary.org/search.json?q=the+lord+of+the+rings
	// https://openlibrary.org/search.json?title=the+way+of+kings&author=brandon+sanderson

	try {
		let datos = await dataLibroAPI(infoLibro.tituloObra, infoLibro.nombreAutores[0]);
		console.log(datos);
		if (!datos)
			throw Error("No hay datos");

		let autores = [];
		for (let autore of infoLibro.nombreAutores) {
			autores.push(`${autore.nombre} ${autore.apellido}`);
		}
		let nombreImagen = `${infoLibro.tituloObra} de ${autores.join(", ")}.${EXT}`;

		let generador = new KeyValueCover(datos);
		let cover = await guardarImagen(generador, nombreImagen, SIZE.MEDIUM);		
		console.log(cover);
		
	} catch(e) {
		console.log(e);
	}
%>
