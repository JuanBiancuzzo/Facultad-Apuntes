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
			let seguidorRef = tp.user.seguidorReferencias().new();
			tags.push(`referencias/${tipoCita.toLowerCase()}`);

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
	await dv.view("_scripts/dataview/mostrarMateria", { materia: dv.current() });
```

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```