<%*
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();

	const PREGUNTAR_CARRERA = "carrera";
	const PREGUNTAR_MATERIA = "materia";
	const PREGUNTAR_RESUMEN = "resumen";
    const SALIR = "salir";

	const dv = this.app.plugins.plugins.dataview.api;

    const carpeta = tp.file.folder(true);
	const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {
        if (!dv.page(tp.file.path(true)).tags.find(tag => tag.startsWith("nota"))) {
            throw error.Nada("No es una nota");
        }
        let datos = {
            [PREGUNTAR_CARRERA]: null,
            [PREGUNTAR_MATERIA]: null,
            [PREGUNTAR_RESUMEN]: null,
        };

        let { opciones, valores } = representarDatos(datos);
        let respuesta = opciones[0];
        if (opciones.length > 1) {
			respuesta = await preguntar.suggester(
				tp, valores, opciones, 
				"Completar para poder agregar tags", 
				error.Nada("No se completó los datos necesarios")
			);
        }

        while (respuesta != SALIR) {
            let opcion;
            switch (respuesta) {
                case PREGUNTAR_CARRERA:
                    opcion = await preguntar.suggester(
                        tp, carrera => carrera.file.name,
                        dv.pages("#carrera").sort(carrera => carrera.file.name),
                        "De que carrera se quiere agregar el tag",
                        error.Nada("No se ingresó la carrera a usar")
                    );

                    if (!datos[PREGUNTAR_CARRERA] || opcion.file.name != datos[PREGUNTAR_CARRERA].file.name) {
                        datos[PREGUNTAR_CARRERA] = opcion;
                        datos[PREGUNTAR_MATERIA] = null;
                        datos[PREGUNTAR_RESUMEN] = null;
                    }
                    
                    break;
                case PREGUNTAR_MATERIA:
                    opcion = await preguntar.suggester(
                        tp, materia => materia.file.name,
                        dv.pages(`"${datos[PREGUNTAR_CARRERA].file.folder}" and #materia`)
                            .sort(materia => materia.file.name),
                        "De que materia se quiere agregar el tag",
                        error.Nada("No se ingresó la materia a usar")
                    );
                    if (opcion.equivalencia) opcion = dv.page(opcion.equivalencia.path);

                    if (!datos[PREGUNTAR_MATERIA] || opcion.file.name != datos[PREGUNTAR_MATERIA].file.name) {
                        datos[PREGUNTAR_MATERIA] = opcion;
                        datos[PREGUNTAR_RESUMEN] = null;
                    }
                    break;
                case PREGUNTAR_RESUMEN:
                    let tag = datos[PREGUNTAR_MATERIA].file.folder
                        .replaceAll(",", "").replaceAll(" ", "-");
                    opcion = await preguntar.suggester(
                        tp, tema => {
                            let nombre = tema.file.folder.split("/").pop();
                            if (tema.parte) nombre += ` parte ${tema.parte}`;
                            return nombre;
                        },
                        dv.pages(`#${tag} and #resumen`)
                            .filter(tema => tema.file.folder != carpeta)
                            .sort(tema => tema.capitulo),
                        "De que materia se quiere agregar el tag",
                        error.Nada("No se ingresó la materia a usar")
                    );

                    datos[PREGUNTAR_RESUMEN] = opcion;
                    break;
            }

			let { opciones, valores } = representarDatos(datos);
			respuesta = opciones[0];
            if (opciones.length > 1) {
                respuesta = await preguntar.suggester(
                    tp, valores, opciones,
                    "Completar para poder agregar tags",
                    error.Nada("No se completó los datos necesarios")
                );
            }
        }
        let resumen = datos[PREGUNTAR_RESUMEN];

        await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            let tagsActuales = frontmatter["tags"] ? frontmatter["tags"] : [];
            resumen.tags.filter(tag => tag != "resumen")
                .forEach(tag => tagsActuales.push(tag));

            frontmatter["tags"] = tagsActuales.unique();
        });

        console.log(datos);

    } catch ({ name: nombre, message: mensaje }) {
		const errorNombre = tp.user.error().nombre;

        if ( nombre == errorNombre.nada ) {
            new Notice(mensaje);
        } else {
		    console.log(`${nombre}\n${mensaje}`);
        }
    }

    function representarDatos(datos) {
        let valores = [];
        let opciones = [];

        opciones.push(PREGUNTAR_CARRERA);
        if (!datos[PREGUNTAR_CARRERA]) {
            valores.push("Ingresar la carrera para agregar el tag");
            return { opciones: opciones, valores: valores };
        }
        valores.push(`Elegir otra carrera, previamente tenias ${datos[PREGUNTAR_CARRERA].file.name}`);
        
        opciones.push(PREGUNTAR_MATERIA);
        if (!datos[PREGUNTAR_MATERIA]) {
            valores.push("Ingresar la materia para agregar el tag");
            return { opciones: opciones, valores: valores };
        }
        valores.push(`Elegir otra materia, previamente tenias ${datos[PREGUNTAR_MATERIA].file.name}`);

        opciones.push(PREGUNTAR_RESUMEN);
        if (!datos[PREGUNTAR_RESUMEN]) {
            valores.push("Ingresar el tema para agregar el tag");
            return { opciones: opciones, valores: valores };
        }
        let nombre = datos[PREGUNTAR_RESUMEN].file.folder.split("/").pop();
        if (datos[PREGUNTAR_RESUMEN].parte) nombre += ` parte ${datos[PREGUNTAR_RESUMEN].parte}`;
        valores.push(`Elegir otro tema, previamente tenias ${nombre}`);

        opciones.push(SALIR);
        valores.push("Confirmar edición");
        return { opciones: opciones, valores: valores };
    }
%>