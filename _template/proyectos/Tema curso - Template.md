<%*
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();

	const NOMBRE_TEMA = "nombreTema";
	const NUMERO_TEMA = "capitulo";
	const NUM_REFERENCIA = "numReferencia";
	const PARTE_TEMA = "parte";
	const tipoCita = "CursoTema";

	const dv = this.app.plugins.plugins.dataview.api;

	let tArchivo = tp.file.find_tfile(tp.file.path(true));
	// Nos quedamos con la carpeta que sería la materia
	let carpetaFinal = tp.file.folder(true);
	let carpeta = carpetaFinal;
	if (carpeta[0] == "/") carpeta = carpeta.slice(1);
	carpeta = carpeta.split("/");

	try {
		let infoTemaCurso = {};
		let tags = ["resumen/curso"];

		let separacion = tp.file.title.split(" - ");
		if (separacion.length >= 6) {
			// Viene de crear un curso
			let [numReferencia, numeroTema, nombreCurso, nombreTema, parte, ...numProfesores] = separacion;
			infoTemaCurso = {
				nombreTema: nombreTema.trim(),
				capitulo: parseInt(numeroTema.trim(), 10),
				numReferencia: parseInt(numReferencia.trim(), 10),
				profesores: numProfesores.map(num => parseInt(num.trim(), 10)),
			};

			infoTemaCurso[PARTE_TEMA] = parseInt(parte.trim(), 10);
			carpetaFinal = `cursos/${nombreCurso}/${nombreTema}`;

			infoTemaCurso["tipoCita"] = tipoCita;
			tags.push(`referencia/${tipoCita.toLocaleLowerCase()}`);

		} else {
			let indice = 1;
			let cursos = dv.pages(`"${carpeta.slice(0, indice).join("/")}" and #proyecto/curso`);
			while (cursos.length > 0 && indice < carpeta.length) {
				indice++;
				cursos = dv.pages(`"${carpeta.slice(0, indice).join("/")}" and #proyecto/curso`);
			}
			if (cursos.length == 0) cursos = dv.pages(`"${carpeta.slice(0, indice - 1).join("/")}" and #proyecto/curso`);

			let curso;
			switch (cursos.length) {
				case 0: throw error.Quit("No se puede elegir un curso");
				case 1: curso = cursos[0]; break;
				default:
					curso = await preguntar.suggester(
						tp, curso => curso.file.name,
						cursos,
						"Que curso se va a agregar el tema?",
						error.Prompt("No se eligió un curso")
					);

					break;
			}

			if (curso.tags.some(tag => tag.includes("referencia"))) {
				infoTemaCurso["tipoCita"] = tipoCita;
				tags.push(`referencia/${tipoCita.toLocaleLowerCase()}`);
			}

			let profesores = curso.nombreAutores;
			let resumenes = dv.pages(`"${curso.file.folder}" and #resumen/curso`)
				.sort(resumen => resumen.capitulo);

			let temaCurso = tp.user.curso().temaCurso;
    		infoTemaCurso = await tp.user.crearPreguntas(
				tp, temaCurso.obtenerDefault,
				(tp, datos, respuesta) => temaCurso.actualizarDatos(tp, datos, respuesta, profesores, resumenes),
				(tp, datos) => temaCurso.generarPreguntas(tp, datos, profesores, resumenes),
				"Completar para crear tema del curso"
			);

			carpetaFinal = `${curso.file.folder}/${infoTemaCurso[NOMBRE_TEMA]}`;

			let modificarArchivos = {};
            let temasPosiblesMismoNum = [];
            let temasPosiblesMismaParte = [];
            for (let i = 0; i < resumenes.length; i++) {
                if (resumenes[i][NUMERO_TEMA] >= infoTemaCurso[NUMERO_TEMA]) {
                    temasPosiblesMismoNum.push(i);
                }

                if (resumenes[i][NOMBRE_TEMA] == infoTemaCurso[NOMBRE_TEMA]) {
                    temasPosiblesMismaParte.push(i);
                }
            }

            if (temasPosiblesMismoNum.length > 0) {
                temasPosiblesMismoNum = temasPosiblesMismoNum
                    .sort((a, b) => resumenes[a][NUMERO_TEMA] - resumenes[b][NUMERO_TEMA]);
                let numeroModificar = infoTemaCurso[NUMERO_TEMA];

                for (let i = 0; i < temasPosiblesMismoNum.length; i++) {
                    if (resumenes[temasPosiblesMismoNum[i]][NUMERO_TEMA] != numeroModificar) {
                        break;
                    }

					modificarArchivos[resumenes[i].file.path] = {
						[NUMERO_TEMA]: numeroModificar + 1,
						[PARTE_TEMA]: resumenes[i][PARTE_TEMA],
					};
                    numeroModificar++;
                }
            }

            if (temasPosiblesMismaParte.length > 0) {
                for (let i = 0; i < temasPosiblesMismaParte.length; i++) {
                    i = temasPosiblesMismaParte[i];
                    if (!resumenes[PARTE_TEMA] || resumenes[PARTE_TEMA] == 0) {
						// Cambiar a actualizar
						modificarArchivos[resumenes[i].file.path] = {
							[NUMERO_TEMA]: resumenes[i].file.path in modificarArchivos 
								? modificarArchivos[resumenes[i].file.path][NUMERO_TEMA]
								: resumenes[i][NUMERO_TEMA],
							[PARTE_TEMA]: 1,
						};
                    }
                }

				if (infoTemaCurso[NUMERO_TEMA] == 0) {
					infoTemaCurso[NUMERO_TEMA] = 1;
				}

                temasPosiblesMismaParte = temasPosiblesMismaParte
                    .sort((a, b) => resumenes[a][NUMERO_TEMA] - resumenes[b][NUMERO_TEMA]);

                let numeroModificar = infoTemaCurso[PARTE_TEMA];
				let modificado = false;
                for (let i = 0; i < temasPosiblesMismaParte.length; i++) {
                    i = temasPosiblesMismaParte[i];
                    if (resumenes[i][NUMERO_TEMA] <= infoTemaCurso[NUMERO_TEMA]) {
                        continue;
                    }
					modificado = true;

                    if (resumenes[i][PARTE_TEMA] != numeroModificar) {
                        break;
                    }

					// Cambiar a actualizar
					modificarArchivos[resumenes[i].file.path] = {
						[NUMERO_TEMA]: resumenes[i].file.path in modificarArchivos
							? modificarArchivos[resumenes[i].file.path][NUMERO_TEMA]
							: resumenes[i][NUMERO_TEMA],
						[PARTE_TEMA]: numeroModificar + 1,
					};
                    numeroModificar++;
                }

				if (!modificado) {
					infoTemaCurso = numeroModificar + 1;
				}
            }

			let nuevosNombres = [];
			for (let [key, value] of Object.entries(modificarArchivos)) {
				let archivoModificar = dv.page(key);
				let tArchivoModificar = tp.file.find_tfile(key);

				let { nuevoNumeroTema, nuevaParte } = value;
				if (archivoModificar[PARTE_TEMA] == nuevaParte) {
					await app.fileManager.processFrontMatter(tArchivoModificar, (frontmatter) => {
						frontmatter[NUMERO_TEMA] = nuevoNumeroTema;
					});
				} else {
					await app.fileManager.processFrontMatter(tArchivoModificar, (frontmatter) => {
						frontmatter[NUMERO_TEMA] = nuevoNumeroTema;
						frontmatter[PARTE_TEMA] = nuevaParte;
						// Actualizar tags
					});
					
					let nuevoTitulo = `Resumen Parte ${nuevaParte}`;
					await app.fileManager.renameFile(tArchivoModificar, `${archivoModificar.file.folder}/temp-${nuevosNombres.length}.md`);

					nuevosNombres.push({
						nombreViejo: `${archivoModificar.file.folder}/temp-${nuevosNombres.length}.md`,
						nuevoNombre: `${archivoModificar.file.folder}/${nuevoTitulo}.md`
					});
				}
			}

			for (let { nombreViejo, nuevoNombre } of nuevosNombres) {
				let tArchivoModificar = tp.file.find_tfile(nombreViejo);
				await app.fileManager.renameFile(tArchivoModificar, nuevoNombre);
			}
		}

		tags.push(tp.user.tagPorNombre(infoTemaCurso[PARTE_TEMA] > 0 
			? `${carpetaFinal}/${infoTemaCurso[PARTE_TEMA]}` 
			: carpetaFinal
		));

		tR += "---\n";
		tR += tp.obsidian.stringifyYaml({
			...infoTemaCurso,
			tags: tags,				
		});	
		tR += "---\n";

		try {
			await app.vault.createFolder(carpetaFinal);
		} catch {}

		let titulo = "Resumen";
		if (infoTemaCurso[PARTE_TEMA] > 0) {
			titulo += ` Parte ${infoTemaCurso[PARTE_TEMA]}`;
		}
		console.log(titulo);
		await app.vault.rename(tArchivo, `${carpetaFinal}/${titulo}.md`);
		
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


# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/bibliografiaMateria", { materia: dv.current() });
```