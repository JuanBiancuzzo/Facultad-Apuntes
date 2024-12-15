<%* 
	const mantenerOrden = tp.user.mantenerOrden();

	const dv = app.plugins.plugins.dataview.api;
	const tArchivo = tp.file.find_tfile(tp.file.path(true)); 
	const CREAR_TEMA = 1;

	const PREGUNTAR_NOMBRE_TEMATICA = "nombre tematica";
	const SACAR_NOMBRE_TEMATICA = "sacar nombre";
	const PREGUNTAR_SUPERTEMA = "supertema"
	const MODIFICAR_SUPERTEMA = "modificar supertema";
	const ELIMINAR_SUPERTEMA = "eliminar supertema";
	const PREGUNTAR_EQUIVALENTE = "equivalente";
	const MODIFICAR_EQUIVALENTE = "modificar equivalente";
	const ELIMINAR_EQUIVALENTE = "eliminar equivalente";
	const SACAR_EQUIVALENTE = "sacar equivalente";
	const SALIR = "salir";

	let temaEquivalente = null;

	try {

		let datos = await tp.user.crearPreguntas(
			tp, defaultDatos, 
			actualizarDatos, representarDatos, 
			"Completar para poder crear el tema"
		);

		let nombreTema = datos[PREGUNTAR_NOMBRE_TEMATICA];
		let largoSupertema = datos[PREGUNTAR_SUPERTEMA].length;
		let ultimoSupertema = null;
		if (largoSupertema > 0) ultimoSupertema = datos[PREGUNTAR_SUPERTEMA][largoSupertema - 1];
		
		temaEquivalente = null;
		if (datos[PREGUNTAR_EQUIVALENTE].length > 0) {
			let largoTemaEquivalente = datos[PREGUNTAR_EQUIVALENTE].length;
			temaEquivalente = datos[PREGUNTAR_EQUIVALENTE][largoTemaEquivalente - 1];

			let nombreTemaEquivalente = temaEquivalente.file.name;
			if (nombreTemaEquivalente == "Índice") {
				let carpeta = temaEquivalente.file.folder.split("/").pop();
				nombreTemaEquivalente = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
			}

			if (!nombreTema) nombreTema = nombreTemaEquivalente;
		}

		let carpeta = "investigación";
		if (largoSupertema > 0) {
			carpeta = ultimoSupertema.file.folder;
		}

		try {
			if (!temaEquivalente) {
				await app.vault.createFolder(`${carpeta}/${nombreTema}`);
				await tp.file.move(`${carpeta}/${nombreTema}/${nombreTema}`);

			} else {
				await tp.file.move(`${carpeta}/${nombreTema}`);
			}
		} catch (_) {
			throw error.Quit("No se pudo crear y mover el tema");
		}

		let nuevoTag = tp.user.tagPorNombre(`${carpeta}/${nombreTema}`);
		let tagsAAgregar = [ nuevoTag ];
		if (temaEquivalente) {

			if (ultimoSupertema) {
				let tagsDivididos = tp.user.tagPorNombre(ultimoSupertema.file.folder).replace("investigación/", "").split("/");
				let subTags = []
				for (let i in tagsDivididos) {
					subTags.push("investigación/" + tagsDivididos.slice(0, i + 1).join("/"));
				}

				let indicesEquivalentes = dv.pages("#índice")
					.filter(indice => indice.equivalente);
				tagsAAgregar = tagsAAgregar.concat(dv.pages("#índice")
					.filter(indice => subTags.some(tag => tag == tp.user.tagPorNombre(indice.file.folder)))
					.map(indice => indicesEquivalentes.find(equivalente => indice.file.path == equivalente.equivalente.path))
					.filter(equivalente => equivalente)
					.map(equivalente => tp.user.tagPorNombre(`${equivalente.file.folder}/${equivalente.file.name}/${nombreTema}`))
					.values
				);
			}

			let tagTemaEquivalente = tp.user.tagPorNombre(temaEquivalente.file.folder);
			let archivosAModificar = dv.pages(`(#nota or #índice) and #${tagTemaEquivalente}`)
				.map(archivo => app.fileManager.processFrontMatter(tp.file.find_tfile(archivo.file.path), (frontmatter) => {
					let tags = frontmatter["tags"] ? frontmatter["tags"].slice() : [];
					for (let tagAAgregar of tagsAAgregar) {
						tags.filter(tag => tag.startsWith(tagTemaEquivalente))
							.forEach(tag => tags.push(tag.replace(tagTemaEquivalente, tagAAgregar)));
					}
					frontmatter["tags"] = tags;
				}));
			await Promise.all(archivosAModificar);
		}

		let metadata = {
			dia: tp.file.creation_date("YYYY-MM-DD"),
			tag: ["índice", "nota/investigacion"].concat(tagsAAgregar)
		};

		if (temaEquivalente) {
			let nombreTemaEquivalente = temaEquivalente.file.name;
			if (nombreTemaEquivalente == "Índice") {
				let carpeta = temaEquivalente.file.folder.split("/").pop();
				nombreTemaEquivalente = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
			}
			metadata["equivalente"] = `[[${temaEquivalente.file.path}|${nombreTemaEquivalente}]]`;

		} else {
			metadata["estado"] = "Sin empezar";
			metadata["orden"] = mantenerOrden.siguienteValorOrden();
		}
		
		tR += "---\n"; 
		tR += tp.obsidian.stringifyYaml(metadata);
		tR += "---\n";

	} catch ({ name: nombre, message: mensaje }) {
		const errorNombre = error.nombre;
		const eliminar = tp.user.eliminar();

        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);

			default:
				console.log(nombre);
				console.log(mensaje);
        }
	}

	function defaultDatos() {
		return {
			[PREGUNTAR_NOMBRE_TEMATICA]: null,
			[PREGUNTAR_SUPERTEMA]: [],
			[PREGUNTAR_EQUIVALENTE]: [],
		}
	}

	async function actualizarDatos(tp, datos, respuesta) {
		const error = tp.user.error();
		const preguntar = tp.user.preguntar();
		const validar = tp.user.whiteList();

		let salir = false;
		let separados = respuesta.split("-");
		respuesta = separados[0];

		let indice = null;
		if (separados.length > 1) indice = parseInt(separados[1], 10);

		switch (respuesta) {
			case PREGUNTAR_NOMBRE_TEMATICA:
				let posibleNombre = await preguntar.prompt(
					tp, "Nombre del tema", error.Prompt("No se ingresó un tema")
				);

				if (!validar.validarNombre(tp, posibleNombre)) {
					new Notice("El nombre no es valido");
					break;
				}

				let posibleNombreLowerCase = posibleNombre.toLowerCase();
				let eliminarDesde = datos[PREGUNTAR_SUPERTEMA].findIndex(superTema => {
					let nombreArchivo = superTema.file.name.toLowerCase() == posibleNombreLowerCase;
					let nombrePath = superTema.file.folder.split("/").pop().toLowerCase() == posibleNombreLowerCase;

					return nombreArchivo || nombrePath;
				});

				if (eliminarDesde >= 0) {
					datos[PREGUNTAR_SUPERTEMA] = datos[PREGUNTAR_SUPERTEMA].slice(eliminarDesde);
					new Notice("Se sacaron super temas ya que se repetian los nombres");
				}

				datos[PREGUNTAR_NOMBRE_TEMATICA] = posibleNombre;
				break;

			case SACAR_NOMBRE_TEMATICA:
				datos[PREGUNTAR_NOMBRE_TEMATICA] = null;
				break;

			case MODIFICAR_SUPERTEMA:
				if (indice == null) {
					new Notice("Hubo un error al modificar tema, no se mando indice");
					salir = true;
					break;
				}
				datos[PREGUNTAR_SUPERTEMA] = datos[PREGUNTAR_SUPERTEMA].slice(0, indice);

			case PREGUNTAR_SUPERTEMA: // No deberia ser el caso que se pregunte si no hay temas posibles
				let largoSupertemas = datos[PREGUNTAR_SUPERTEMA].length;
				let query = "#índice";
				let profundidad = 2 + largoSupertemas;

				if (largoSupertemas > 0) {
					let ultimoTema = datos[PREGUNTAR_SUPERTEMA][largoSupertemas - 1];
					query += ` and #${tp.user.tagPorNombre(ultimoTema.file.folder)}`;
				}

				let indices = dv.pages(query)
					.filter(tema => {
						let profundidadTema = tema.file.folder.split("/").length;
						return (tema.equivalente)
							? profundidadTema + 1 == profundidad
							: profundidadTema == profundidad;
					})
					.sort(tema => tema.file.name);

				if (indices.length == 0) {
					new Notice("Hubo un error hay más indices de este tema");
					break;
				}

				let superTema = await preguntar.suggester(
					tp, superTema => {
						if (superTema.file.name == "Índice") {
							let carpeta = superTema.file.folder.split("/").pop();
							return `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
						}
						return superTema.file.name;
					}, indices, "Que supertema es este tema?",
					error.Prompt("No se eligió el super tema")
				);

				if (superTema.equivalente) {
					superTema = dv.page(superTema.equivalente.path);
				}

				datos[PREGUNTAR_SUPERTEMA].push(superTema);
				break;

			case ELIMINAR_SUPERTEMA:
				datos[PREGUNTAR_SUPERTEMA].pop();
				break;


			case MODIFICAR_EQUIVALENTE:
				if (indice == null) {
					new Notice("Hubo un error al modificar tema, no se mando indice");
					salir = true;
					break;
				}
				datos[PREGUNTAR_EQUIVALENTE] = datos[PREGUNTAR_EQUIVALENTE].slice(0, indice);

			case PREGUNTAR_EQUIVALENTE:
				let largoTemaEquivalente = datos[PREGUNTAR_EQUIVALENTE].length;
				let profundidadEquivalente = largoTemaEquivalente + 2;
				let queryTemaEquivalente = "#índice";

				if (largoTemaEquivalente > 0) {
					let ultimoTema = datos[PREGUNTAR_EQUIVALENTE][largoTemaEquivalente - 1];
					queryTemaEquivalente += ` and #${tp.user.tagPorNombre(ultimoTema.file.folder)}`;
				}

				let indicesEquivalentes = dv.pages(queryTemaEquivalente)
					.filter(tema => {
						let profundidadTema = tema.file.folder.split("/").length;
						return (tema.equivalente)
							? profundidadTema + 1 == profundidadEquivalente
							: profundidadTema == profundidadEquivalente;
					})
					.sort(tema => tema.file.name);

				if (indicesEquivalentes.length == 0) {
					new Notice("Hubo un error hay más indices de este tema");
					break;
				}

				let temaEquivalente = await preguntar.suggester(
					tp, temaEquivalente => {
						if (temaEquivalente.file.name == "Índice") {
							let carpeta = temaEquivalente.file.folder.split("/").pop();
							return `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
						}
						return temaEquivalente.file.name;
					}, indicesEquivalentes, "Que tema va a ser equivalente?",
					error.Prompt("No se eligió el tema equivalente")
				);
				if (temaEquivalente.equivalente) {
					temaEquivalente = dv.page(temaEquivalente.equivalente.path);
				}

				datos[PREGUNTAR_EQUIVALENTE].push(temaEquivalente);
				break;

			case ELIMINAR_EQUIVALENTE:
				datos[PREGUNTAR_EQUIVALENTE].pop();
				break;

			case SACAR_EQUIVALENTE:
				datos[PREGUNTAR_EQUIVALENTE] = [];
				break;

			case SALIR:
				salir = true;
				break;
		}

		return salir;
	}

	function representarDatos(tp, datos) {
		let valores = [];
		let opciones = [];

		let haySupertemas = datos[PREGUNTAR_SUPERTEMA].length > 0;
		let hayEquivalencia = datos[PREGUNTAR_EQUIVALENTE].length > 0;

		if (!haySupertemas) {
			opciones.push(PREGUNTAR_SUPERTEMA);
			valores.push("Elegir super tema (opcional)");

		} else {
			let largoSupertemas = datos[PREGUNTAR_SUPERTEMA].length;

			for (let [indice, superTema] of datos[PREGUNTAR_SUPERTEMA].entries()) {
				opciones.push(`${MODIFICAR_SUPERTEMA}-${indice}`);
				let nombreSupertema = superTema.file.name;
				if (superTema.file.name == "Índice") {
					let carpeta = superTema.file.folder.split("/").pop();
					nombreSupertema = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
				}
				valores.push(`Modificar super tema: ${nombreSupertema}`);
			}

			let query = "#índice";
			let profundidad = largoSupertemas + 2;
			if (largoSupertemas > 0) {
				let ultimoTema = datos[PREGUNTAR_SUPERTEMA][largoSupertemas - 1];
				query += ` and #${tp.user.tagPorNombre(ultimoTema.file.folder)}`;
			}

			let indices = dv.pages(query)
				.filter(tema => {
					let profundidadTema = tema.file.folder.split("/").length;
					return (tema.equivalente)
						? profundidadTema + 1 == profundidad
						: profundidadTema == profundidad;
				});
			if (indices.length > 0) {
				opciones.push(PREGUNTAR_SUPERTEMA);
				valores.push("Eligir super tema");
			}

			if (largoSupertemas > 0) {
				opciones.push(ELIMINAR_SUPERTEMA);
				let ultimoTema = datos[PREGUNTAR_SUPERTEMA][largoSupertemas - 1];
				let nombreSupertema = ultimoTema.file.name;
				if (ultimoTema.file.name == "Índice") {
					let carpeta = ultimoTema.file.folder.split("/").pop();
					nombreSupertema = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
				}
				valores.push(`Eliminar ${nombreSupertema}`);
			}

		} 
		
		if (!hayEquivalencia) {
			opciones.push(PREGUNTAR_EQUIVALENTE);
			valores.push("Elegir tema equivalente (opcional)");
		} else {
			let largoTemaEquivalente = datos[PREGUNTAR_EQUIVALENTE].length;

			for (let [indice, temaEquivalente] of datos[PREGUNTAR_EQUIVALENTE].entries()) {
				opciones.push(`${MODIFICAR_EQUIVALENTE}-${indice}`);
				let nombreTemaEquivalente = temaEquivalente.file.name;
				if (temaEquivalente.file.name == "Índice") {
					let carpeta = temaEquivalente.file.folder.split("/").pop();
					nombreTemaEquivalente = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
				}
				valores.push(`Modificar tema equivalente: ${nombreTemaEquivalente}`);
			}

			let query = "#índice";
			let profundidad = largoTemaEquivalente + 2;
			if (largoTemaEquivalente > 0) {
				let ultimoTema = datos[PREGUNTAR_EQUIVALENTE][largoTemaEquivalente - 1];
				query += ` and #${tp.user.tagPorNombre(ultimoTema.file.folder)}`;
			}

			let indices = dv.pages(query)
				.filter(tema => {
					let profundidadTema = tema.file.folder.split("/").length;
					return (tema.equivalente)
						? profundidadTema + 1 == profundidad
						: profundidadTema == profundidad;
				});
			if (indices.length > 0) {
				opciones.push(PREGUNTAR_EQUIVALENTE);
				valores.push("Eligir tema equivalente");
			}

			if (largoTemaEquivalente > 0) {
				opciones.push(ELIMINAR_EQUIVALENTE);
				let ultimoTema = datos[PREGUNTAR_EQUIVALENTE][largoTemaEquivalente - 1];
				let nombreTemaEquivalente = ultimoTema.file.name;
				if (ultimoTema.file.name == "Índice") {
					let carpeta = ultimoTema.file.folder.split("/").pop();
					nombreTemaEquivalente = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
				}
				valores.push(`Eliminar ${nombreTemaEquivalente}`);
			}
		}

		opciones.push(PREGUNTAR_NOMBRE_TEMATICA);
		valores.push(datos[PREGUNTAR_NOMBRE_TEMATICA]
			? `Modificar el nombre: ${datos[PREGUNTAR_NOMBRE_TEMATICA]}`
			: "Determinar el nombre del tema"
		);

		if (hayEquivalencia && datos[PREGUNTAR_NOMBRE_TEMATICA] != null) {
			opciones.push(SACAR_NOMBRE_TEMATICA);
			let ultimoTema = datos[PREGUNTAR_EQUIVALENTE][datos[PREGUNTAR_EQUIVALENTE].length - 1];
			let nombreTemaEquivalente = ultimoTema.file.name;
			if (ultimoTema.file.name == "Índice") {
				let carpeta = ultimoTema.file.folder.split("/").pop();
				nombreTemaEquivalente = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
			}
			valores.push(`Sacar el nombre y usar el de ${nombreTemaEquivalente}`);
		}

		if ((hayEquivalencia && datos[PREGUNTAR_EQUIVALENTE][datos[PREGUNTAR_EQUIVALENTE].length - 1].file.name != "Índice") || datos[PREGUNTAR_NOMBRE_TEMATICA] != null) {
			opciones.push(SALIR);
			valores.push("Confirmar datos del tema");
		}

		return { opciones: opciones, valores: valores };
	}
_%>
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
<%*
	if (!temaEquivalente) {
		tR += "# ¿Qué se va a investigar?\n---\n\n\n";
	}

	tR += "## Resumen\n---\n";

	if (temaEquivalente) {
		tR += `![[${temaEquivalente.file.path}#Resumen]]`;
	} else {
		tR += "%% Pendiente... %%";	
	}
%>

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarArchivos", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```