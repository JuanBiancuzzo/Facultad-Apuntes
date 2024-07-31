<%* 
	const preguntar = tp.user.preguntar();
	const validar = tp.user.whiteList();

	const dv = app.plugins.plugins.dataview.api;
	const tArchivo = tp.file.find_tfile(tp.file.path(true)); 
	const CREAR_TEMA = 1;

	try {

		let indices = dv.pages("#índice")
			.filter(indice => indice.file.name !== undefined);

		let nuevoTema = await preguntar.prompt(
			tp, "Temática: (Apretar ESC para salir)", "No se ingresó un tema"
		);

		if (!validar.validarNombre(tp, nuevoTema)) 
			throw new Error("Nombre invalido");
		
		let descripcion = tp.user.describirTemas(indices);
		let eleccion = await preguntar.suggester(
			tp, ["⊕ Crear un nuevo tema", ...descripcion.map(desc => desc.descripcion)], 
			[CREAR_TEMA, ...descripcion.map(desc => desc.archivo)], 
			"Crear un nuevo tema o elegir de que tema va a ser subtema",
			"No se eligió como definir el tema"
		);

		let path = (eleccion === CREAR_TEMA) ? nuevoTema : `${eleccion.file.folder}/${nuevoTema}`;

		try {
			await app.vault.createFolder(path);
			await tp.file.move(`${path}/Índice`);
		} catch (_) {
			throw new Error("No se pudo crear y mover el tema");
		}

		let dia = tp.file.creation_date("YYYY-MM-DD");
		
		tR += "---\n"; 
		tR += `dia: ${dia}\n`;
		tR += `tags: \n - índice\n - ${path.replaceAll(" ", "-")}\n`;
		tR += "---\n";

	} catch ({ name: _, message: mensaje }) {
		return await tp.user.eliminar().eliminar(tp, tArchivo, mensaje);
	}
_%>
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
<% tp.file.cursor() %>


#### Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarArchivos", { indice: dv.current() });
```


### Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/biblioIndice', { indice: dv.current() });
```