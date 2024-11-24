<%*
    const preguntar = tp.user.preguntar();
	const error = tp.user.error();
    const validar = tp.user.whiteList();
    
    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {

		let proyectos = dv.pages("#proyecto")
			.filter(indice => indice.file.name !== undefined);

		let nuevoProyecto = await preguntar.prompt(
			tp, "Nombre del proyecto: (Apretar ESC para salir)", 
			error.Prompt("No se ingresó un nombre para el proyecto")
		);

		if (!validar.validarNombre(tp, nuevoProyecto) || proyectos.find(proyecto => proyecto.file.name == nuevoProyecto)) 
			throw error.Prompt("Nombre invalido");

		let path = `proyecto práctico/${nuevoProyecto.toLowerCase()}`;

		try {
			await app.vault.createFolder(path);
			await tp.file.move(`${path}/${nuevoProyecto}`);
		} catch (_) {
			throw error.Quit("No se pudo crear y mover el proyecto");
		}

		let dia = tp.file.creation_date("YYYY-MM-DD");
		
		tR += "---\n"; 
		tR += `dia: ${dia}\n`;
		tR += "estado: 'Sin empezar'\n";
		tR += `tags: \n - proyecto/práctico\n - ${path.trim().replaceAll(" ", "-")}\n`;
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
# Propuesta
---
%% Ingresar descripción corta del proyecto %%
<% tp.file.cursor() %>


# Presentar
---




# Notas
---
```dataviewjs
await dv.view("_scripts/dataview/proyectos/mostrarNotas", { proyecto: dv.current() });
```