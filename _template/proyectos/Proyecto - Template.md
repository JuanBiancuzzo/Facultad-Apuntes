<%*
    const preguntar = tp.user.preguntar();
    const validar = tp.user.whiteList();
    
    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {

		let proyectos = dv.pages("#proyecto")
			.filter(indice => indice.file.name !== undefined);

		let nuevoProyecto = await preguntar.prompt(
			tp, "Nombre del proyecto: (Apretar ESC para salir)", "No se ingresó un nombre para el proyecto"
		);

		if (!validar.validarNombre(tp, nuevoProyecto) || proyectos.find(proyecto => proyecto.file.name == nuevoProyecto)) 
			throw new Error("Nombre invalido");

		let path = nuevoProyecto.toLowerCase();

		try {
			await app.vault.createFolder(path);
			await tp.file.move(`${path}/${nuevoProyecto}`);
		} catch (_) {
			throw new Error("No se pudo crear y mover el proyecto");
		}

		let dia = tp.file.creation_date("YYYY-MM-DD");
		
		tR += "---\n"; 
		tR += `dia: ${dia}\n`;
		tR += `tags: \n - proyecto\n - ${path.trim().replaceAll(" ", "-")}\n`;
		tR += "---\n";

	} catch ({ name: _, message: mensaje }) {
		return await tp.user.eliminar().eliminar(tp, tArchivo, mensaje);
	}
_%>
### Descripción
---
Ingresar descripción corta del proyecto


### Presentar
---
