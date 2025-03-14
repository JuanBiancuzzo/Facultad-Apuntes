
async function generar(tp, seguidorRef) {
    const { REFERENCIAS } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const crearArchivo = tp.user.archivo();

    const referenciasNombre = [
        { nombre: REFERENCIAS.libro,         mensaje: "Citar libro" },
        { nombre: REFERENCIAS.capituloLibro, mensaje: "Citar capitulo de un libro" },
        { nombre: REFERENCIAS.curso,         mensaje: "Citar curso online" },
        { nombre: REFERENCIAS.temaCurso,     mensaje: "Citar el tema de un curso" },
        { nombre: REFERENCIAS.paper,         mensaje: "Citar un paper" },
        { nombre: REFERENCIAS.youtube,       mensaje: "Citar un video de Youtube" },
        { nombre: REFERENCIAS.web,           mensaje: "Citar una página web" },
        { nombre: REFERENCIAS.wikipedia,     mensaje: "Citar una página de wikipedia" },
    ];

    try {
        let tipoCita = await preguntar.suggester(
            tp, referenciasNombre.map(dato => dato.mensaje), referenciasNombre.map(dato => dato.nombre),
            "Que se va a querer referenciar?", error.Prompt("No se ingresó lo que se quiere citar")
        );

        let referenciaCreada = { valor: null };
        let archivoCreado = null;

        switch (tipoCita) {
            case REFERENCIAS.youtube:
            case REFERENCIAS.web:
            case REFERENCIAS.wikipedia:
                archivoCreado = await crearArchivo.crear(tp, () => crearReferencia(tp, tipoCita, seguidorRef, referenciaCreada));
                break;

            case REFERENCIAS.libro:
                archivoCreado = await crearArchivo.crear(tp, () => tp.user.libro(tp).crear(seguidorRef, referenciaCreada));
                break;

            case REFERENCIAS.capituloLibro:
                archivoCreado = await tp.user.capituloLibro(tp).crear(seguidorRef, referenciaCreada);
                break;

            case REFERENCIAS.paper:
                archivoCreado = await crearArchivo.crear(tp, () => tp.user.paper(tp).crear(seguidorRef, referenciaCreada));
                break;

            case REFERENCIAS.curso:
                archivoCreado = await crearArchivo.crear(tp, () => tp.user.curso(tp).crear(seguidorRef, referenciaCreada));
                break;

            case REFERENCIAS.temaCurso:
                archivoCreado = await crearArchivo.crear(tp, () => tp.user.temaCurso(tp).crear(seguidorRef, referenciaCreada));
                break;

            default:
                throw error.Prompt("Hubo un error en la creación de una referencia\n");
        }

        return { archivo: archivoCreado, referencia: referenciaCreada.valor };

    } catch ({ name:nombre, message: mensaje }) {
        console.log(nombre, mensaje);
        new Notice(mensaje);
    }
}

function obtenerClase(tp, tipoCita, datos) {
    const { REFERENCIAS } = tp.user.constantes();

    switch (tipoCita) {
        case REFERENCIAS.libro: return tp.user.libro(tp).clase(null, datos); 
        case REFERENCIAS.capituloLibro: return tp.user.libro(tp).clase(null, datos); 
        case REFERENCIAS.curso: return tp.user.curso(tp).clase(null, datos); 
        case REFERENCIAS.temaCurso: return tp.user.temaCurso(tp).clase(null, datos); 
        case REFERENCIAS.paper: return tp.user.paper(tp).clase(null, datos); 
        case REFERENCIAS.youtube: return tp.user.youtube(tp).clase(null, datos); 
        case REFERENCIAS.web: return tp.user.web(tp).clase(null, datos); 
        case REFERENCIAS.wikipedia: return tp.user.wiki(tp).clase(null, datos); 

        default:
            throw error.Quit(`El tipo de cita ${tipoCita} no existe para crear`);
    }
}

function obtenerReferencias(tp, dv = null) {
    const { TAGS, DATOS: { REFERENCIAS: DATOS_REFERENCIA } } = tp.user.constantes();
	if (!dv) dv = app.plugins.plugins.dataview.api;

    return dv.pages(`#${TAGS.referencias}`)
        .flatMap(archivo => obtenerClase(tp, archivo[DATOS_REFERENCIA.tipoCita], archivo).obtenerReferencias());
}

function archivoReferencia(tp, numReferenciaBuscado) {
    const { TAGS, DATOS: { REFERENCIAS: DATOS_REFERENCIA } } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    return dv.pages(`#${TAGS.referencias}`)
        .flatMap(archivo => obtenerClase(tp, archivo[DATOS_REFERENCIA.tipoCita], archivo)
            .map(referencia => ({ archivo: archivo, referencia: referencia }))
        )
        .find(({ referencia }) => referencia.obtenerNumReferencia() == numReferenciaBuscado)
        .archivo;
}

async function crearReferencia(tp, tipoCita, seguidorRef, referenciaCreada) {
    const { 
        FORMATO_DIA, TAGS, DIRECTORIOS, REFERENCIAS,
        DATOS: { ARCHIVO: DATOS_ARCHIVOS, REFERENCIAS: DATOS_REFERENCIAS } 
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let referencia;
    switch (tipoCita) {
        case REFERENCIAS.youtube: referencia = tp.user.youtube(tp).clase(seguidorRef); break;
        case REFERENCIAS.web: referencia = tp.user.web(tp).clase(seguidorRef); break;
        case REFERENCIAS.wikipedia: referencia = tp.user.wiki(tp).clase(seguidorRef); break;

        default: throw error.Quit("No debería haber llegado acá en crearReferencia");
    }

    await preguntar.formulario(tp, referencia, "Completar la referencia");
    referenciaCreada.valor = referencia;

    return {
        metadata: {
            [DATOS_ARCHIVOS.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_REFERENCIAS.tipoCita]: tipoCita,
            [DATOS_ARCHIVOS.tags]: [ `${TAGS.referencias}/${tp.user.tagPorNombre(tipoCita.toLowerCase())}` ],
            ...referencia.generarRepresentacion(),
        },
        carpeta: DIRECTORIOS.referencias,
        titulo: `${referencia.obtenerNumReferencia()} - ${tipoCita}`,
        texto: "",
    };
}

module.exports = () => ({
    generar: generar,
    obtenerReferencias: obtenerReferencias,
    archivoReferencia: archivoReferencia,
    crear: crearReferencia,
});
/* Paper
@ -1,60 +0,0 @@
<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	
	const describir = tp.user.describir();
	const mantenerOrden = tp.user.mantenerOrden();
	const CARACTERES_INVALIDOS = tp.user.constantes().caracteresInvalidos;
	const AGREGADO = " y otros";
	const MAX_NOMBRE = 252;

	const tipoCita = "Paper";
    let seguidorRef = tp.user.seguidorReferencias(tp).new();
	let numReferencia = seguidorRef.conseguirReferencia();
	
	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

    let infoPaper = await tp.user.cita().citar(tp, tipoCita, seguidorRef);

	let autores = [];
	let exceso = false;
	for (let autore of infoPaper.autores.slice(0, -1)) {
		let nuevoAutore = `${infoPaper.tituloInforme} de ${autore.nombre} ${autore.apellido}`;
		if (`${infoPaper.tituloInforme} de ${[...autores, nuevoAutore].join(", ")}`.length + AGREGADO.length <= MAX_NOMBRE)
			autores.push(`${autore.nombre} ${autore.apellido}`);
		else 
			exceso = true;

	}
	let autore = infoPaper.autores[infoPaper.autores.length - 1];
	let nuevoAutore = `${autore.nombre} ${autore.apellido}`;
	if (`${infoPaper.tituloInforme} de ${[...autores, nuevoAutore].join(", ")}`.length <= MAX_NOMBRE)
		autores.push(nuevoAutore);
	else 
		exceso = true;
		
	let nombreArchivo = `${infoPaper.tituloInforme} de ${autores.join(", ")}${exceso ? AGREGADO : ""}`;

	nombreArchivo = nombreArchivo.replaceAll(":", ",");
	nombreArchivo = nombreArchivo.replaceAll('"', "'");
	CARACTERES_INVALIDOS.forEach(caracterInvalido => nombreArchivo = nombreArchivo.replaceAll(caracterInvalido, ""));

      await tp.file.move(`biblioteca/papers/${nombreArchivo}`);

	tR += tp.obsidian.stringifyYaml(infoPaper);

	tR += `orden: ${mantenerOrden.siguienteValorOrden()}\n`;
	tR += `tags: \n - referencia/${tipoCita.toLowerCase()}\n - biblioteca/paper\n - nota/investigacion\n`;
	tR += "---";

%>
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
<% tp.file.cursor() %> 
 */

/* Curso
@ -1,120 +0,0 @@
<%*
    const preguntar = tp.user.preguntar();
	const error = tp.user.error();
    const validar = tp.user.whiteList();
    
    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));
	const tipoCita = "Curso";

    try {
		let cursos = dv.pages("#proyecto/curso")
			.filter(indice => indice.file.name !== undefined);

		let esOnline = true;
		let nombreCurso = null;
		let numReferencia;
		let tags = ["proyecto/curso"];

		let separacion = tp.file.title.split(" - ");
		if (separacion.length == 2 && separacion[1].includes(tipoCita)) {
			numReferencia = parseInt(separacion[0].trim(), 10);

		} else {
			nombreCurso = await preguntar.prompt(
				tp, "Nombre del curso",
				error.Prompt("No se ingresó un nombre para el curso")
			);

			if (!validar.validarNombre(tp, nombreCurso) || cursos.find(curso => curso.file.name == nombreCurso))
				throw error.Prompt("Nombre invalido");

			esOnline = await preguntar.suggester(
				tp, [" ⊖ No es un curso online", " ⊕ Es un curso online"], [false, true],
				"Este curso es online?", error.Prompt("No se eligió si el curso es online o no")
			);
		}

		let infoCurso = {};
		let temasCurso = [];

		if (esOnline) {
			let seguidorRef = tp.user.seguidorReferencias(tp).new();
			tags.push(`referencia/${tipoCita.toLowerCase()}`);

			if (!numReferencia) {
				numReferencia = seguidorRef.conseguirReferencia();
			}

    		infoCurso = await tp.user.cita().editar(tp, tipoCita, seguidorRef, { nombreCurso: nombreCurso });
			infoCurso["numReferencia"] = numReferencia;
			infoCurso["tipoCita"] = tipoCita;

			temasCurso = infoCurso["temas"];
			nombreCurso = infoCurso["nombreCurso"];
			delete infoCurso["temas"];
		}

		let path = `cursos/${nombreCurso.toLowerCase()}`;
		tags.push(tp.user.tagPorNombre(path));

		try {
			await app.vault.createFolder(path);
		} catch {}

		try {
			await tp.file.move(`${path}/${nombreCurso}`);
		} catch (_) {
			throw error.Quit("No se pudo mover el curso");
		}

		let template = tp.file.find_tfile("Tema curso - Template");
		for (let { nombreTema, capitulo, profesores, numReferencia: numReferenciaTema, parte } of temasCurso) {
			let nombreArchivo = `${numReferenciaTema} - ${capitulo} - ${infoCurso.nombreCurso} - ${nombreTema} - ${parte} - ${profesores.join(" - ")}`;

			let carpeta = app.vault.getAbstractFileByPath("temp");
			await tp.file.create_new(template, nombreArchivo, false, carpeta);
		}
		
		tR += "---\n"; 
        tR += tp.obsidian.stringifyYaml({
            dia: tp.file.creation_date("YYYY-MM-DD"),
            etapa: "sin-empezar",
            estado: "Sin empezar",
			...infoCurso,
            tags: tags,
        });
		tR += "---\n";

	} catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();
		const errorNombre = error.nombre;

        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
			
			default:
				console.log(`${nombre}: ${mensaje}`);
        }
    }

_%>
# Descripción
---
%% Descripción del curso %%

## Archivos
---
```dataviewjs
	await dv.view("_scripts/dataview/mostrarContenido", { materia: dv.current() });
```

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
``` 
 */

/* Tema cursos
@ -1,257 +0,0 @@
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

		let separacion = tp.file.title.split("-");
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
			carpetaFinal = `cursos/${nombreCurso.trim().toLocaleLowerCase()}/${nombreTema.trim()}`;

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

			let seguidorRef = tp.user.seguidorReferencias(tp).new();
			let numReferencia = seguidorRef.conseguirReferencia();
			infoTemaCurso[NUM_REFERENCIA] = numReferencia;

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
		await app.fileManager.renameFile(tArchivo, `${carpetaFinal}/${titulo}.md`);
		
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
 */