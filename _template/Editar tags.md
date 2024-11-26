<%*
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();

	const PREGUNTAR_CARRERA = "carrera";
	const PREGUNTAR_TEMA = "tema";
	const ELIMINAR_TEMA = "eliminar tema";
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
            [PREGUNTAR_TEMA]: [],
            [PREGUNTAR_MATERIA]: null,
            [PREGUNTAR_RESUMEN]: null,
        };

        let { opciones, valores } = representarDatos(datos);
        let [respuesta, ...argumento] = opciones[0].split("-");
        if (opciones.length > 1) {
			[respuesta, ...argumento] = (await preguntar.suggester(
				tp, valores, opciones, 
				"Completar para poder agregar tags", 
				error.Nada("No se completó los datos necesarios")
			)).split("-");
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
                        datos[PREGUNTAR_TEMA] = [];
                    }
                    
                    break;
                case PREGUNTAR_TEMA:
                    let [ indice ] = argumento;
                    if (!indice) indice = datos[PREGUNTAR_TEMA].length;

                    let query = "#índice";
                    if (indice > 0) query += ` and "${datos[PREGUNTAR_TEMA][indice - 1].file.folder}"`;

                    opcion = await preguntar.suggester(
                        tp, nombreTema, dv.pages(query)
                            .filter(tema => tema.file.folder.split("/").length == indice + 2)
                            .sort(nombreTema), 
                        "De que tema investigación se quiere agregar el tag",
                        error.Nada("No se ingresó el tema de investigacion")
                    );

                    datos[PREGUNTAR_TEMA] = datos[PREGUNTAR_TEMA].slice(0, indice);
                    datos[PREGUNTAR_TEMA].push(opcion);

                    if (datos[PREGUNTAR_TEMA].length <= 1) {
                        datos[PREGUNTAR_CARRERA] = null;
                        datos[PREGUNTAR_MATERIA] = null;
                        datos[PREGUNTAR_RESUMEN] = null;
                    } 

                    break;
                case ELIMINAR_TEMA:
                    datos[PREGUNTAR_TEMA].pop();

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
			[respuesta, ...argumento] = opciones[0].split("-");
            if (opciones.length > 1) {
			    [respuesta, ...argumento] = (await preguntar.suggester(
                    tp, valores, opciones,
                    "Completar para poder agregar tags",
                    error.Nada("No se completó los datos necesarios")
                )).split("-");
            }
        }

        let tagsAgregar = [];
        let resumen = datos[PREGUNTAR_RESUMEN];
        if (resumen) {
            tagsAgregar = resumen.tags.filter(tag => tag != "resumen");

        } else {
            let tema = datos[PREGUNTAR_TEMA].pop();
            tagsAgregar.push(tema.file.folder.replaceAll(",", "").replaceAll(" ", "-"));
        }

        await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            let tagsActuales = frontmatter["tags"] ? frontmatter["tags"] : [];
            tagsAgregar.forEach(tag => tagsActuales.push(tag));
            frontmatter["tags"] = tagsActuales.unique();
        });


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

        let carreraInicializado = datos[PREGUNTAR_CARRERA];
        if (!carreraInicializado) {
            opciones.push(PREGUNTAR_CARRERA);
            valores.push("Ingresar la carrera para agregar el tag");
        } 

        let temaInicializado = datos[PREGUNTAR_TEMA].length > 0;
        if (!temaInicializado) {
            opciones.push(PREGUNTAR_TEMA);
            valores.push("Ingresar el tema de investigación para agregar el tag");
        } 

        if (!temaInicializado && !carreraInicializado) {
            return { opciones: opciones, valores: valores };
        }
        
        if (carreraInicializado) {
            opciones.push(PREGUNTAR_CARRERA);
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

        } else {

            for (let i = 0; i < datos[PREGUNTAR_TEMA].length - 1; i++) {
                opciones.push(`${PREGUNTAR_TEMA}-${i}`);
                valores.push(`Elegir otro tema, previamente tenias ${nombreTema(datos[PREGUNTAR_TEMA][i])}`);
            }

            let ultimo = datos[PREGUNTAR_TEMA][datos[PREGUNTAR_TEMA].length - 1];

            let carpetaUltimo = ultimo.file.folder;
            let superCarpetaUltimo = carpetaUltimo.split("/");
            superCarpetaUltimo.pop();
            superCarpetaUltimo = superCarpetaUltimo.join("/");

            let equitemasUltimo = dv.pages(`#índice and "${superCarpetaUltimo}"`);
            if (equitemasUltimo.length <= 2) {
                opciones.push(ELIMINAR_TEMA);
                valores.push(`Eliminar ${nombreTema(ultimo)}`);
            } else {
                let i = datos[PREGUNTAR_TEMA].length - 1;
                opciones.push(`${PREGUNTAR_TEMA}-${i}`);
                valores.push(`Elegir otro tema, previamente tenias ${nombreTema(datos[PREGUNTAR_TEMA][i])}`);
            }

            let subtemasUltimo = dv.pages(`#índice and "${carpetaUltimo}"`);

            if (subtemasUltimo.length > 2) {
                opciones.push(PREGUNTAR_TEMA);
                valores.push(`Agregar subtema de ${nombreTema(ultimo)}`);
            }
        }
        
        opciones.push(SALIR);
        valores.push("Confirmar edición");

        return { opciones: opciones, valores: valores };
    }

    function nombreTema(tema) {
        let nombre = tema.file.folder.split("/").pop();
        return `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`
    }
%>