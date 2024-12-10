<%* 
	const preguntar = tp.user.preguntar();
	const mantenerOrden = tp.user.mantenerOrden();
	const error = tp.user.error();
	const validar = tp.user.whiteList();

	const dv = app.plugins.plugins.dataview.api;
	const tArchivo = tp.file.find_tfile(tp.file.path(true)); 
	const CREAR_TEMA = 1;

	const PREGUNTAR_NOMBRE_TEMATICA = "nombre_tematica";
	const PREGUNTAR_SUPERTEMA = "supertema"
	const MODIFICAR_SUPERTEMA = "modificar supertema";
	const ELIMINAR_SUPERTEMA = "eliminar supertema";
	const PREGUNTAR_EQUIVALENTE = "equivalente";
	const MODIFICAR_EQUIVALENTE = "modificar equivalente";
	const ELIMINAR_EQUIVALENTE = "eliminar equivalente";
	const SACAR_EQUIVALENTE = "sacar equivalente";
	const SALIR = "salir";

	try {

		let datos = {
			[PREGUNTAR_NOMBRE_TEMATICA]: null,
			[PREGUNTAR_SUPERTEMA]: [],
			[PREGUNTAR_EQUIVALENTE]: [],
		};

		let { opciones, valores } = representarDatos(datos);
		let respuesta = opciones[0];
		if (opciones.length > 1) {
			respuesta = await preguntar.suggester(
				tp, valores, opciones,
				"Completar para poder crear el tema",
				error.Prompt("No se completó los datos necesarios")
			);
		}

		while (respuesta != SALIR) {
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

				case PREGUNTAR_SUPERTEMA: // No deberia ser el caso que se pregunte si no hay temas posibles
					let largoSupertemas = datos[PREGUNTAR_SUPERTEMA].length;
					let query = "#índice";
					let filtrarTemas = (tema) => tema.file.folder.split("/").length == 2;

					if (largoSupertemas > 0) {
						let ultimoTema = datos[PREGUNTAR_SUPERTEMA][largoSupertemas - 1];
						let profundidad = ultimoTema.file.folder.split("/").length
						query += ` and #${tp.user.tagPorNombre(ultimoTema.file.folder)}`;
						filtrarTemas = (tema) => {
							if (tema.equivalente) {

							} else {
								return tema.file.folder.split("/").length == profundidad + 1;
							}
						};
					}

					let indices = dv.pages(query)
						.filter(filtrarTemas)
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

					datos[PREGUNTAR_SUPERTEMA].push(superTema);
					break;

				case MODIFICAR_SUPERTEMA: 
					if (indice == null) {
						new Notice("Hubo un error al modificar tema, no se mando indice");
						break;
					}
					datos[PREGUNTAR_SUPERTEMA] = datos[PREGUNTAR_SUPERTEMA].slice(0, indice);

					respuesta = PREGUNTAR_SUPERTEMA;
					continue;

				case ELIMINAR_SUPERTEMA: 
					datos[PREGUNTAR_SUPERTEMA].pop();
					break;

				case PREGUNTAR_EQUIVALENTE: break;
				case SACAR_EQUIVALENTE: break;
			}


			let { opciones, valores } = representarDatos(datos);
			respuesta = opciones[0];
			if (opciones.length > 1) {
				respuesta = await preguntar.suggester(
					tp, valores, opciones,
					"Completar para poder crear el tema",
					error.Prompt("No se completó los datos necesarios")
				);
			}
		}

		let nombreTema = datos[PREGUNTAR_NOMBRE_TEMATICA];
		let largoSupertemas = datos[PREGUNTAR_SUPERTEMA].length;
		let carpeta = `investigación/${nombreTema}`;
		if (largoSupertemas > 0) {
			carpeta = `${datos[PREGUNTAR_SUPERTEMA][largoSupertemas - 1].file.folder}/${nombreTema}`;
		}

		try {
			await app.vault.createFolder(carpeta);
			await tp.file.move(`${carpeta}/${nombreTema}`);
		} catch (_) {
			throw error.Quit("No se pudo crear y mover el tema");
		}
		
		tR += "---\n"; 
		tR += tp.obsidian.stringifyYaml({
			dia: tp.file.creation_date("YYYY-MM-DD"),
			estado: "Sin empezar",
			orden: mantenerOrden.siguienteValorOrden(),
			tag: [ "índice", tp.user.tagPorNombre(carpeta), "nota/investigacion" ]
		});
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

	function representarDatos(datos) {
		let valores = [];
		let opciones = [];

		let haySupertemas = datos[PREGUNTAR_SUPERTEMA].length > 0;
		let hayEquivalencia = datos[PREGUNTAR_EQUIVALENTE].length > 0;

		if (!haySupertemas && !hayEquivalencia) {
			opciones.push(PREGUNTAR_SUPERTEMA);
			valores.push("Elegir super tema (opcional)");

			opciones.push(PREGUNTAR_EQUIVALENTE);
			valores.push("Elegir tema equivalente (opcional)");

		} else if (haySupertemas) {
			let largoSupertemas = datos[PREGUNTAR_SUPERTEMA].length;

			for (let [indice, superTema] of datos[PREGUNTAR_SUPERTEMA].entries()) {
				opciones.push(`${MODIFICAR_SUPERTEMA}-${indice}`);
				let nombreSupertema = superTema.file.name;
				if (superTema.file.name == "Índice") {
					let carpeta = superTema.file.folder.split("/").pop();
					nombreSupertema = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
				}
				valores.push(`Modificar ${nombreSupertema}`);
			}

			let query = "#índice";
			let filtrarTemas = (tema) => tema.file.folder.split("/").length == 2;
			if (largoSupertemas > 0) {
				let ultimoTema = datos[PREGUNTAR_SUPERTEMA][largoSupertemas - 1];
				let profundidad = ultimoTema.file.folder.split("/").length
				query += ` and #${tp.user.tagPorNombre(ultimoTema.file.folder)}`;
				filtrarTemas = (tema) => {
					if (tema.equivalente) {

					} else {
						return tema.file.folder.split("/").length == profundidad + 1;
					}
				};
			}

			let indices = dv.pages(query).filter(filtrarTemas);

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

		} else if (hayEquivalencia) {

		}

		if (!hayEquivalencia) {
			opciones.push(PREGUNTAR_NOMBRE_TEMATICA);
			valores.push(datos[PREGUNTAR_NOMBRE_TEMATICA]
				? `Modificar el nombre: ${datos[PREGUNTAR_NOMBRE_TEMATICA]}`
				: "Determinar el nombre del tema"
			);
		}

		if (hayEquivalencia || datos[PREGUNTAR_NOMBRE_TEMATICA] != null) {
			opciones.push(SALIR);
			valores.push("Confirmar datos del tema");
		}

		return { opciones: opciones, valores: valores };
	}
_%>
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
<% tp.file.cursor() %>

## Resumen
---
Pendiente...


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