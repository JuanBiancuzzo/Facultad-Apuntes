<%* 
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();

	const PREGUNTAR_CARRERA = "carrera";
	const PREGUNTAR_NOMBRE_MATERIA = "nombre_materia";
	const PREGUNTAR_NOMBRE_REDUCIDO = "nombre_reducido";
	const PREGUNTAR_CODIGO = "codigo";
	const PREGUNTAR_ANIO = "anio";
	const PREGUNTAR_CUATRI = "cuatri";
	const PREGUNTAR_PLANES = "plan";
	const PREGUNTAR_CORRELATIVAS = "correlativas";
	const ELIMINAR_CORRELATIVA = "eliminar correlativa";
	const MODIFICAR_CORRELATIVAS = "modificar correlativas";
	const SALIR = "salir";

	const FIELD_OBLIGATORIOS = [PREGUNTAR_CARRERA, PREGUNTAR_NOMBRE_MATERIA, PREGUNTAR_NOMBRE_REDUCIDO, PREGUNTAR_ANIO, PREGUNTAR_CUATRI, PREGUNTAR_PLANES];

	const dv = this.app.plugins.plugins.dataview.api;

	const tArchivo = tp.file.find_tfile(tp.file.path(true));

	try {

		let anios = [];
		for (let anio = tp.file.creation_date("YY"); anio >= 19; anio--) {
			anios.push(anio);
		}

		let datos = {
			[PREGUNTAR_CARRERA]: null,
			[PREGUNTAR_NOMBRE_MATERIA]: null,
			[PREGUNTAR_NOMBRE_REDUCIDO]: null,
			[PREGUNTAR_CODIGO]: null,
			[PREGUNTAR_ANIO]: null,
			[PREGUNTAR_CUATRI]: null,
			[PREGUNTAR_PLANES]: null,
			[PREGUNTAR_CORRELATIVAS]: [],
		};

		let { opciones, valores } = representarDatos(datos);
		let respuesta = opciones[0];
		if (opciones.length > 1) {
			respuesta = await preguntar.suggester(
				tp, valores, opciones, 
				"Completar para poder crear una materia", 
				error.Prompt("No se completó los datos necesarios")
			);
		}

		while (respuesta != SALIR) {
			if (respuesta == PREGUNTAR_CARRERA) { // Hacer que sea la única opción al principio
				datos[PREGUNTAR_CARRERA] = await preguntar.suggester(
					tp, carrera => carrera.file.name, 
					dv.pages("#carrera"), "De que carrera es la materia?",
					error.Prompt("No se ingresó la carrera que se usa")
				);

				// Reiniciamos planes y correlativas ya que son puramente exclusivas de la carrera
				datos[PREGUNTAR_PLANES] = null;
				datos[PREGUNTAR_CORRELATIVAS] = [];

				// Si la carrera elegida no tiene codigos, entonces reiniciamos el código
				if (!datos[PREGUNTAR_CARRERA].tieneCodigo) {
					datos[PREGUNTAR_CODIGO] = null;
				}

			} else if (respuesta == PREGUNTAR_NOMBRE_MATERIA) { 
				datos[PREGUNTAR_NOMBRE_MATERIA] = await preguntar.prompt(
					tp, "Materia:", 
					error.Prompt("No se ingresó nombre de la materia")
				);

				datos[PREGUNTAR_NOMBRE_REDUCIDO] = null;

			} else if (respuesta == PREGUNTAR_NOMBRE_REDUCIDO) { // Si no esta el nombre de la materia no preguntar
				datos[PREGUNTAR_NOMBRE_REDUCIDO] = await preguntar.prompt(
					tp, `Nombre de la materia ${datos[PREGUNTAR_NOMBRE_MATERIA]} reducido:`, 
					error.Prompt("No se ingresó el nombre reducido")
				);

			} else if (respuesta == PREGUNTAR_CODIGO) { // No poner si la carrera dice que no tienen código
				datos[PREGUNTAR_CODIGO] = await preguntar.prompt(
					tp, `El código de ${datos[PREGUNTAR_NOMBRE_MATERIA]} es:`, 
					error.Prompt("No se ingresó el código de la materia")
				);

			} else if (respuesta == PREGUNTAR_ANIO) { // Agregar info si se ingresó el cuatri
				datos[PREGUNTAR_ANIO] = await preguntar.suggester(
					tp, terminacion => `Año 20${terminacion}`, 
					anios, "En que año se esta cursando esta materia",
					error.Prompt("No se ingresó el año en el que se hizo/hace la materia")
				);

			} else if (respuesta == PREGUNTAR_CUATRI) { // Agregar info si se ingresó el año
				datos[PREGUNTAR_CUATRI] = await preguntar.suggester(
					tp, ["Primer cuatrimestre", "Segundo cuatrimestre"], ["C1", "C2"]
				);

			} else if (respuesta == PREGUNTAR_PLANES) { // Optener info de la carrera, si solo hay uno, no agregar como opcion
				let planes = datos[PREGUNTAR_CARRERA].planes;
				datos[PREGUNTAR_PLANES] = await preguntar.suggester(
					tp, plan => `Plan ${plan}`, 
					planes, "Cuál es el plan de la materia",
					error.Prompt("No se ingresó el plan de la materia")
				);

			} else if (respuesta == PREGUNTAR_CORRELATIVAS) { // Si no hay materias todavia no agregarlas
				let tagCarrera = datos[PREGUNTAR_CARRERA].tags[0].replace("carrera/", "");
				let materias = dv.pages(`#materia/${tagCarrera}`)
					.filter(materia => datos[PREGUNTAR_CORRELATIVAS].findIndex(correlativa => materia.file.path == correlativa.file.path) < 0)
					.sort(materia => 10 * parseInt(materia.cuatri.slice(0, 2), 10) + parseInt(materia.cuatri[3], 10) );

				let correlativa = await preguntar.suggester(
					tp, materia => materia.codigo 
						? materia.file.name.replace(`(${materia.codigo})`, "").trim()
						: materia.file.name, 
					materias, "Que materias son las correlativas",
					error.Prompt("No se ingresó el plan de la materia")
				);

				datos[PREGUNTAR_CORRELATIVAS].push(correlativa);

			} else if (respuesta.split("-")[0].trim() == MODIFICAR_CORRELATIVAS) { // Solo mostrar si hay correlativas 
				let indice = parseInt(respuesta.split("-")[1], 10);
				datos[PREGUNTAR_CORRELATIVAS].splice(indice, 1);

				respuesta = PREGUNTAR_CORRELATIVAS;
				continue;

			} else if (respuesta == ELIMINAR_CORRELATIVA) { // Solo mostrar si hay un elemento en las correlativas
				datos[PREGUNTAR_CORRELATIVAS].pop();

			} else {
				console.log("no se llegó a ninguna pregunta");
			}
			

			if (datos[PREGUNTAR_CARRERA] && datos[PREGUNTAR_CARRERA].planes.length <= 1) {
				datos[PREGUNTAR_PLANES] = datos[PREGUNTAR_CARRERA].planes[0];
			}


			let { opciones, valores } = representarDatos(datos);
			respuesta = opciones[0];
			if (opciones.length > 1) {
				respuesta = await preguntar.suggester(
					tp, valores, opciones, 
					"Completar para poder crear una materia", 
					error.Prompt("No se completó los datos necesarios")
				);
			}
		}


		tR += "---\n";
		tR += `cuatri: ${datos[PREGUNTAR_ANIO]}${datos[PREGUNTAR_CUATRI]}\n`;
		if (datos[PREGUNTAR_CODIGO]) tR += `codigo: ${datos[PREGUNTAR_CODIGO]}\n`;
		tR += `plan: ${datos[PREGUNTAR_PLANES]}\n`;
		tR += "etapa: sin-empezar\n";
		tR += `estado: Sin empezar\n`;
		tR += `tags: materia/${datos[PREGUNTAR_CARRERA].file.name.toLowerCase().replaceAll(" ", "-")}\n`;
		tR += tp.obsidian.stringifyYaml({ correlativas: datos[PREGUNTAR_CORRELATIVAS].map(correlativa => {
			let nombre = correlativa.codigo 
				? correlativa.file.name.replace(`(${correlativa.codigo})`, "").trim()
				: correlativa.file.name;
			return `[[${correlativa.file.path}|${nombre}]]`;
		}) });
		tR += "---\n";

		let carpeta = `${datos[PREGUNTAR_CARRERA].file.folder}/${datos[PREGUNTAR_NOMBRE_REDUCIDO]}`;
		let nombre = datos[PREGUNTAR_CARRERA].tieneCodigo 
			? `${datos[PREGUNTAR_NOMBRE_MATERIA]} (${datos[PREGUNTAR_CODIGO]})` 
			: datos[PREGUNTAR_NOMBRE_MATERIA];

		await app.vault.createFolder(carpeta);
		await app.vault.rename(tArchivo, `${carpeta}/${nombre}.md`);

	} catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();
		const errorNombre = tp.user.error().nombre;

		console.log(`${nombre}\n${mensaje}`);

        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
        }
    }

	function representarDatos(datos) {
		let valores = [];
		let opciones = [];

		opciones.push(PREGUNTAR_CARRERA);
		if (datos[PREGUNTAR_CARRERA]) {
			valores.push(`Elegir otra carrera, previamente tenias ${datos[PREGUNTAR_CARRERA].file.name}`);

		} else {
			valores.push("Ingresar la carrera de la cual es esta materia");

			return { opciones: opciones, valores: valores };
		}

		opciones.push(PREGUNTAR_NOMBRE_MATERIA);
		if (datos[PREGUNTAR_NOMBRE_MATERIA]) {
			valores.push(`Modificar el nombre (${datos[PREGUNTAR_NOMBRE_MATERIA]}) de la materia`);

			valores.push(datos[PREGUNTAR_NOMBRE_REDUCIDO] 
				? `Modificar el nombre reducido (${datos[PREGUNTAR_NOMBRE_REDUCIDO]}) de ${datos[PREGUNTAR_NOMBRE_MATERIA]}`
				: `Ingresar un nombre reducido para ${datos[PREGUNTAR_NOMBRE_MATERIA]}`
			);
			opciones.push(PREGUNTAR_NOMBRE_REDUCIDO);
		} else {
			valores.push("Ingresar el nombre de la materia");
		}

		if (datos[PREGUNTAR_CARRERA].tieneCodigo) {
			valores.push(datos[PREGUNTAR_CODIGO] 
				? `Modificar el código (${datos[PREGUNTAR_CODIGO]}) de la materia`
				: "Ingresar el código de la materia"
			);
			opciones.push(PREGUNTAR_CODIGO);
		}

		opciones.push(PREGUNTAR_ANIO);
		if (datos[PREGUNTAR_ANIO] && datos[PREGUNTAR_CUATRI]) {
			let infoCuatri = datos[PREGUNTAR_CUATRI] == "C1" ? "primer" : "segundo";
			valores.push(`Modificar el año (20${datos[PREGUNTAR_ANIO]} ${infoCuatri} cuatrimestres) en la que se cursó/se esta cursando la materia`)

		} else if (datos[PREGUNTAR_ANIO] && !datos[PREGUNTAR_CUATRI]) {
			valores.push(`Modificar el año (20${datos[PREGUNTAR_ANIO]}) en la que se cursó/se esta cursando la materia`);

		} else {
			valores.push("Ingresar el año que se cursó/se esta cursando la materia");
		}

		opciones.push(PREGUNTAR_CUATRI);
		if (datos[PREGUNTAR_CUATRI]) {
			let infoCuatri = datos[PREGUNTAR_CUATRI] == "C1" ? "primer" : "segundo";
			valores.push(datos[PREGUNTAR_ANIO]
				? `Modificar el cuatrimestre (${datos[PREGUNTAR_ANIO]}${datos[PREGUNTAR_CUATRI]}) en la que se cursó/se esta cursando la materia`
				: `Modificar el cuatrimestre (${infoCuatri} cuatrimestre) en la que se cursó/se esta cursando la materia`
			);
		} else {
			valores.push(datos[PREGUNTAR_ANIO]
				? `Ingresar el cuatrimestre del 20${datos[PREGUNTAR_ANIO]} en la que se cursó/se esta cursando la materia`
				: "Ingresar el cuatrimestre en la que se cursó/se esta cursando la materia"
			);
		}

		let planes = datos[PREGUNTAR_CARRERA].planes;
		if (planes.length > 1) {
			valores.push(datos[PREGUNTAR_PLANES]
				? `Modificar el plan (${datos[PREGUNTAR_PLANES]}) de la materia`
				: "Ingresar que plan de la materia"
			);
			opciones.push(PREGUNTAR_PLANES);
		}

		let tagCarrera = datos[PREGUNTAR_CARRERA].tags[0].replace("carrera/", "");
		let materias = dv.pages(`#materia/${tagCarrera}`)
			.filter(materia => datos[PREGUNTAR_CORRELATIVAS].findIndex(correlativa => materia.file.path == correlativa.file.path) < 0)
		
		for (let [indice, correlativa] of datos[PREGUNTAR_CORRELATIVAS].entries()) {
			let nombre = correlativa.codigo 
				? correlativa.file.name.replace(`(${correlativa.codigo})`, "").trim()
				: correlativa.file.name;
			valores.push(`Modificar la correlativa: ${nombre}`);
			opciones.push(`${MODIFICAR_CORRELATIVAS}-${indice}`);
		}

		if (materias.length > 0) {
			valores.push("Agregar una materia correlativa");
			opciones.push(PREGUNTAR_CORRELATIVAS);
		}

		if (datos[PREGUNTAR_CORRELATIVAS].length > 0) {
			let correlativa = datos[PREGUNTAR_CORRELATIVAS][datos[PREGUNTAR_CORRELATIVAS].length - 1];
			let nombre = correlativa.codigo 
				? correlativa.file.name.replace(`(${correlativa.codigo})`, "").trim()
				: correlativa.file.name;
			valores.push(`Sacar la correlativa: ${nombre}`);
			opciones.push(ELIMINAR_CORRELATIVA);
		}

		let obligatorios = dv.array(FIELD_OBLIGATORIOS);
		if (datos[PREGUNTAR_CARRERA].tieneCodigo) obligatorios = obligatorios.concat(dv.array([PREGUNTAR_CODIGO]));

		if (obligatorios.every(key => datos[key])) {
        	valores.push(" ↶ Dejar de editar");
			opciones.push(SALIR);
		}

		return { opciones: opciones, valores: valores };
	}
_%>
# Apuntes
---
```dataviewjs
	await dv.view("_scripts/dataview/mostrarMateria", { materia: dv.current() });
```