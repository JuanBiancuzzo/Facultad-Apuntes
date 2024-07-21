<%*
	const dv = app.plugins.plugins.dataview.api;

	let temas = dv.pages("#materia")
		.flatMap(materia => {
			let nombreMateria = materia.file.folder.replaceAll(" ", "-");
			return dv.pages(`"${materia.file.folder}" and #nota`)
		        .flatMap(archivo => archivo.tags.map(tag => {
					return { archivo: archivo, tag: tag, cap: archivo.capitulo };
				}))
		        .filter(({archivo, tag, cap}) => tag.includes(nombreMateria))
		        .groupBy(({archivo, tag, cap}) => tag)
		        .map(({key, rows}) => {
			        return {
				        carpeta: rows[0].archivo.file.folder,
				        cap: rows[0].cap
			        };
		        });
		})
		.groupBy(({ carpeta, cap }) => carpeta)
		.flatMap(({ key, rows }) => {
			let resultado = [];
			rows = rows.sort(({ carpeta, cap }) => cap);
			
			if (rows.length == 1) {
				resultado.push({
					titulo: "Resumen",
					carpeta: rows[0].carpeta,
					cap: rows[0].cap,
				});
			} else if (rows.length > 1) {
				let suma = 1;
				for (let { carpeta, cap } of rows) {
					resultado.push({
						titulo: `Resumen Parte ${aNumRomano(suma++)}`,
						carpeta: carpeta,
						cap, cap
					})
				}
			}
			
			return resultado;
		});

	let tareas = [];
	let tTemplate = app.vault.getAbstractFileByPath("Resumen - Template");
	for (let { titulo, carpeta, cap } of temas) {
		titulo = `${carpeta}/${titulo} - ${cap}`;
		carpeta = app.vault.getAbstractFileByPath(carpeta);
		
		let tarea = tp.file.create_new(
			tTemplate, titulo, false, carpeta
		);
		tareas.push(tarea);
	}
	await Promise.all(tarea).then((_) => console.log("Terminado"));

	return;

	function aNumRomano(num) {
		switch (num) {
			case 1: return "I";
			case 2: return "II";
			case 3: return "III";
			case 4: return "IV";
		}
	}
%>

