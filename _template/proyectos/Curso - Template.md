<%*
    const preguntar = tp.user.preguntar();
	const error = tp.user.error();
    const validar = tp.user.whiteList();
    
    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {

		let proyectos = dv.pages("#proyecto")
			.filter(indice => indice.file.name !== undefined);

		let nuevoCurso = await preguntar.prompt(
			tp, "Nombre del curso", 
			error.Prompt("No se ingresó un nombre para el curso")
		);

		if (!validar.validarNombre(tp, nuevoCurso) || proyectos.find(proyecto => proyecto.file.name == nuevoCurso)) 
			throw error.Prompt("Nombre invalido");

		let path = `cursos/${nuevoCurso.toLowerCase()}`;

		try {
			await app.vault.createFolder(path);
			await tp.file.move(`${path}/${nuevoCurso}`);
		} catch (_) {
			throw error.Quit("No se pudo crear y mover el curso");
		}
		
		tR += "---\n"; 
        tR += tp.obsidian.stringifyYaml({
            dia: tp.file.creation_date("YYYY-MM-DD"),
            etapa: "sin-empezar",
            estado: "Sin empezar",
            tags: ["proyecto/curso", path.trim().replaceAll(",", "").replaceAll(" ", "-")]
        });
		tR += "---\n";

	} catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();
        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
        }
    }

_%>
# Descripción
---
%% Descripción del curso %%


## Resumen
---
%% Pendiente... %%


## Archivos
---
```dataviewjs
    await dv.view("_scripts/dataview/proyectos/mostrarArchivosCurso", { curso: dv.current() });
```

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```