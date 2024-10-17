Lista de archivos que existen referencias pero no existe el archivo

```dataviewjs
	let archivos = dv.pages('#materia')
		.map(archivoMateria => archivoMateria.file.path.split("/")[0])
		.flatMap(carpeta => dv.pages(`"${carpeta}"`))
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
				.groupBy(([carpeta, _]) => carpeta)
				.map(grupo => [grupo.key, grupo.rows.length]);

			let nombres = materias_relacionadas
				.slice() // Hacemos una copia
				.sort(([_, largo]) => -largo)
				.map(([carpeta, largo]) => {
					return `${carpeta} (${largo})`;
				});

			let cantidad = materias_relacionadas
				.map(([_, largo]) => largo)
				.values
				.reduce((acum, actual) => acum + actual, 0);

			return [archivo.key, nombres, cantidad];
		})
		.sort(([_, _1, cantidad]) => -cantidad);

	dv.table(
		["Archivo", "Materias relacionados"], 
		archivos.map(([archivo, materias_relacionadas, _]) => {
			return [archivo, materias_relacionadas];
		})
	);
```

