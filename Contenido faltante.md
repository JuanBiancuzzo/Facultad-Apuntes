Lista de archivos que existen referencias pero no existe el archivo

```dataviewjs
	let archivos = dv.pages('#materia')
		.map(archivoMateria => {
			return archivoMateria.file.path.split("/")[0];
		})
		.flatMap(carpeta => {
			return dv.pages(`"${carpeta}"`);
		})
		.filter(archivo => archivo.file.ext === "md")
		.flatMap(archivo => {
			let carpeta = archivo.file.path.split("/")[0];
			return archivo.file.outlinks.values.map(outlink => {
				return [carpeta, outlink];
			});
		})
		.filter(([_, outlink]) => {
			let ext = outlink.path.split(".");
			ext = ext[ext.length - 1];
			if (ext == "webp" || ext == "png" || ext == "canvas")
				return false;
			return dv.page(outlink.path) === undefined;
		})
		.groupBy(([_, outlink]) => outlink.path)
		.map(archivo => {
			let materias_relacionadas = archivo
				.rows
				.groupBy(grupo => grupo[0])
				.values
				.map(group => group.key);
				
			let cantidad = materias_relacionadas.length;
			
			materias_relacionadas = materias_relacionadas.map(carpeta => {
				return `${carpeta} (${cantidad})`;
			});
			
			return [archivo.key, materias_relacionadas];
		})
		.sort(([_, relacionadas]) => -relacionadas.length);

	dv.table(["Archivo", "Materias relacionados"], archivos)
```

