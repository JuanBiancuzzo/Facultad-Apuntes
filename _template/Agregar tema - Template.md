<%*
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();
	const CARRERA_PRINCIPAL = tp.user.constantes().carreraPrincipal;

	const dv = this.app.plugins.plugins.dataview.api;

	const AGREGAR_TEMA = "agregar_tema";

	let tArchivo = tp.file.find_tfile(tp.file.path(true));
	// Nos quedamos con la carpeta que sería la materia
	let carpeta = tp.file.folder(true);
	if (carpeta[0] == "/") carpeta = carpeta.slice(1);
	carpeta = carpeta.split("/");
	
	let carrera = dv.pages("#carrera").find(carrera => carrera.file.folder == carpeta[0]);
	if (!carrera) carrera = dv.page(CARRERA_PRINCIPAL);

	carpeta = `${carrera.file.folder}/${carpeta.filter(dir => dir != carrera.file.folder)[0]}`;
	let tagCarrera = carrera.tags[0].replace("carrera/", "");

	try {
		let materias = dv.pages(`"${carpeta}" and #materia/${tagCarrera}`);
		let materia;

		switch (materias.length) {
			case 0: throw error.Quit("No se puede elegir una materia");
			case 1: materia = materias[0]; break;
			default:
				materia = await preguntar.suggester(
					tp, materia => materia.file.name, 
					materias, 
					"Que materia se va a agregar el tema?",
					error.Prompt("No se eligió una materia")
				);
				
				break;
		}

		let resumenes = dv.pages(`"${materia.file.folder}" and #resumen`)
			.sort(resumen => resumen.capitulo);
		let nombreResumenes = resumenes.map(resumen => {
			let carpetaResumen = resumen.file.folder.split("/")
				.filter((dir => dir != carrera.file.folder))[1];
			let repre = `En ${carpetaResumen}`;
			if (resumen.parte) 
				repre += `, Parte ${resumen.parte}`;
			return repre;
		});
		
		let eleccion = AGREGAR_TEMA;
		if (resumenes.length > 0) {
			eleccion = await preguntar.suggester(
				tp, [" ⊕ Agregar nuevo tema",  ...nombreResumenes ],
				[ AGREGAR_TEMA, ...resumenes ],
				"Que es lo que quiere hacer?",
				error.Prompt("No se eligió donde crear el tema")
			);
		}

		let multiples = false;
		let nuevaCarpeta;
		if (eleccion == AGREGAR_TEMA) {
			let nombre = await preguntar.prompt(
				tp, "Nombre del nuevo tema:",
				error.Prompt("No se ingresó el nombre del tema")
			);

			eleccion = resumenes.find(resumen => {
				let carpetaResumen = resumen.file.folder.split("/")
					.filter((dir => dir != carrera.file.folder))[1];
				return carpetaResumen == nombre;
			});
			nuevaCarpeta = `${materia.file.folder}/${nombre}`;
		} 

		if (eleccion) {
			multiples = true;
			nuevaCarpeta = eleccion.file.folder;
			let tResumen = tp.file.find_tfile(eleccion.file.path);
			await app.fileManager.processFrontMatter(tResumen, (frontmatter) => {
				frontmatter["parte"] = 1;
			});
		}

		resumenes = dv.pages(`"${materia.file.folder}" and #resumen`)
			.sort(resumen => resumen.capitulo);

		let capitulo = 1;
		let parte = 1;
		if (resumenes.length > 0) {
			// Preguntamos orden => obtenemos el número del capitulo
			let antes = `Antes de ${nombreResumenes[0]}`;
			let nuevaPos = await preguntar.suggester(
				tp, [ antes, ...nombreResumenes.map(nombre => `Después de ${nombre}`)],
				[0, ...resumenes.map(resumen => resumen.capitulo)]
			)
			capitulo = nuevaPos + 1;

			// Con el capitulo, podemos reordenar
			let actualizar = [];
			for (let resumen of resumenes) {
				if (resumen.capitulo < capitulo) {
					if (multiples && nuevaCarpeta == resumen.file.folder) {
						let parteResumen = resumen.parte ? resumen.parte : 1;
						actualizar.push({ resumen: resumen, nuevoCapitulo: resumen.capitulo, nuevaParte: parteResumen });
						parte = parteResumen + 1;
					}
					continue;
				}

				let info = { resumen: resumen, nuevoCapitulo: resumen.capitulo + 1 };
				if (multiples && nuevaCarpeta == resumen.file.folder) {
					info["nuevaParte"] = (resumen.parte ? resumen.parte : 1) + 1;
				} else {
					info["nuevaParte"] = resumen.parte;
				}
				actualizar.push(info);
			}

			for (let { resumen, nuevoCapitulo, nuevaParte } of actualizar) {
				let tResumen = tp.file.find_tfile(resumen.file.path);

				let tagPrevio = resumen.tags.find(tag => tag != "resumen");

				let nuevoTag = crearTag(resumen.file.folder);
				if (resumen.parte !== nuevaParte) {
					nuevoTag += `/${nuevaParte}`;
				}

				let actualizarCapitulo = resumen.capitulo !== nuevoCapitulo;
				let actualizarParte = resumen.parte !== nuevaParte;

				let tArchivos = dv.pages(`#${tagPrevio} and #nota`)
					.map(archivo => tp.file.find_tfile(archivo.file.path));

				let tareas = [];
				let tarea = app.fileManager.processFrontMatter(tResumen, (frontmatter) => {
					if (actualizarCapitulo) {
						frontmatter["capitulo"] = nuevoCapitulo;
					}

					if (actualizarParte) {
						frontmatter["parte"] = nuevaParte;
						frontmatter["tags"] = [ nuevoTag, "resumen" ];
					}						
				});
				tareas.push(tarea);

				for (let tArchivoMod of tArchivos) {
					tarea = app.fileManager.processFrontMatter(tArchivoMod, (frontmatter) => {
						if (actualizarParte) {
							frontmatter["tags"].remove(tagPrevio);
							frontmatter["tags"].push(nuevoTag);
						}
					});
					tareas.push(tarea);
				}
				await Promise.all(tareas);

				if (actualizarParte) {
					let nuevoTitulo = `Resumen Parte ${nuevaParte}`;
					await app.vault.rename(tResumen, `${nuevaCarpeta}/${nuevoTitulo}.md`);
				}
			}
		}

		let tag = crearTag(nuevaCarpeta);
		if (multiples) tag += `/${parte}`;

		tR += "---\n";
		tR += `capitulo: ${capitulo}\n`;
		tR += `tags: \n - ${tag}\n - resumen\n`;
		if (multiples) {
			tR += `parte: ${parte}\n`;
		}
		tR += "---\n";

		if (!multiples) {
			await app.vault.createFolder(nuevaCarpeta);
		}

		let titulo = "Resumen";
		if (multiples) {
			titulo += ` Parte ${parte}`;
		}
		await app.vault.rename(tArchivo, `${nuevaCarpeta}/${titulo}.md`);
		
	} catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();
		const errorNombre = error.nombre;

        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
        }

		console.log(nombre, mensaje);
    }

	function crearTag(folderPath) {
		return folderPath.replaceAll(",", "").replaceAll(" ", "-");
	}
_%>
# Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarResumen", { resumen: dv.current() });
```

# Resumen
---
%% Pendiente... %%
<% tp.file.cursor() %>

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/bibliografiaMateria", { materia: dv.current() });
```