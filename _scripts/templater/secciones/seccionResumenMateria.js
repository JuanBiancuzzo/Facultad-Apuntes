const AGREGAR_TEMA = "Agregar tema";

const SALIR = "salir";

class Resumen {
    constructor(tp, tagID, padre, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { RESUMEN: DATOS_RESUMEN, ARCHIVO: DATOS_ARCHIVO },
        } = tp.user.constantes();
	    const dv = app.plugins.plugins.dataview.api;
    	const obtenerTag = tp.user.obtenerTag;

        this.simbolos = SIMBOLOS;
        this.config = DATOS_RESUMEN;

		let tagsPadre = obtenerTag(tp, padre[DATOS_ARCHIVO.tags])
			.map(tag => `#${tag}`);
    	this.restoResumenes = dv.pages(`(${tagsPadre.join(" or ")}) and #${tagID}`)
			.filter(resumen => resumen[this.config.numero] != representacionPrevia[this.config.numero])
			.sort(resumen => parseInt(resumen[this.config.numero], 10));

        this.nombre = representacionPrevia[this.config.nombre];
        this.numero = representacionPrevia[this.config.numero];
        this.parte = representacionPrevia[this.config.parte]
            ? representacionPrevia[this.config.parte] : 0;
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        switch(respuesta) {
            case this.config.nombre:
                let eleccion = AGREGAR_TEMA;
                if (this.restoResumenes.length > 0) {
                    eleccion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Nuevo tema`, ...this.restoResumenes.map(resumen => this.descripcionDvResumen(resumen)) ],
                        [ AGREGAR_TEMA, ...this.restoResumenes ], "Crear un tema nuevo, o ser parte de algún tema ya existente",
                        generarError.Quit("No se ingresó que hacer con el nombre del tema")
                    );
                }

                if (eleccion == AGREGAR_TEMA) {
                    this.nombre = await generarPreguntas.prompt(
                        "Cual es el nombre del nuevo tema",
                        generarError.Quit("No se ingresó el nombre del tema")
                    );

                    let capitulos = this.restoResumenes
                        .map(resumen => resumen[this.config.numero]);
                    this.numero = capitulos.length > 0 
                        ? capitulos.max() + 1 : 1;
                    this.parte = 0;

                } else {
                    this.nombre = eleccion[this.config.nombre];
                    this.numero = eleccion[this.config.numero] + 1;
                    this.parte = eleccion[this.config.parte] + 1;
                }
                break;

            case this.config.numero:
                // Crear un suggester que pregunte donde colocarlo, si antes o despues de cada capitulo
                // Y que tambien tenga una eleccion para elegir arbitrariamente el numero del capitulos
                this.numero = await generarPreguntas.numero(
                    "Ingresar el número del capítulo del tema",
                    generarError.Quit("No se ingresó el capítulo del tema")
                );
                break;

            case this.config.parte:
                // Crear un suggester que pregunte donde colocarlo, si antes o despues de cada parte
                // Y que tambien tenga una eleccion para elegir arbitrariamente el numero del parte
                this.parte = await generarPreguntas.numero(
                    "Ingresar el número de la parte del tema",
                    generarError.Quit("No se ingresó la parte del tema")
                );
                break;
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre del tema, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del tema`
        )

        if (this.numero || this.tieneParte()) {
            let colisiones = this.buscarColisiones();

            if (this.numero) {
                let descripcion = ` ${this.simbolos.modificar} Modificar el capítulo del tema, donde era ${this.numero}`;
                descripcion += colisiones.filter(({ nuevoNumero }) => nuevoNumero)
                    .map(({ resumen, nuevoNumero }) => `\n\t${this.descripcionDvResumen(resumen)} => Capitulo: ${nuevoNumero}`)
                    .join("");

                opciones.push(this.config.numero);
                valores.push(descripcion);
            }

            if (this.tieneParte()) {
                let descripcion = ` ${this.simbolos.modificar} Modificar la parte del tema, donde era ${this.parte}`;
                descripcion += colisiones.filter(({ nuevaParte }) => nuevaParte)
                    .map(({ resumen, nuevaParte }) => `\n\t${this.descripcionDvResumen(resumen)} => Parte: ${nuevaParte}`)
                    .join("");

                opciones.push(this.config.parte);
                valores.push(descripcion);
            }
        }

        return { opciones, valores };
    }

    esValido() {
        return this.nombre && this.numero;
    }

    generarRepresentacion() {
        let representacion = {
            [this.config.nombre]: this.nombre,
            [this.config.numero]: this.numero,
        };

        if (this.parte > 0) 
            representacion[this.config.parte] = this.parte;

        return representacion;
    }

    tieneParte() {
        return this.parte > 0;
    }

    tieneParteDv(representacion = {}) {
        if (!representacion[this.config.parte]) {
            return false;
        }

        let parte = parseInt(representacion[this.config.parte], 10);
        return !Number.isNaN(parte) && parte > 0;
    }

    descripcionDvResumen(representacion = {}) {
        let nombreResumen = representacion[this.config.nombre];
        if (this.tieneParteDv(representacion)) 
            nombreResumen += ` Parte ${representacion[this.config.parte]}`;
        return nombreResumen;
    }

    nombreArchivo() {
        let nombreResumen = "Resumen";
        if (this.tieneParte()) 
            nombreResumen += ` Parte ${this.parte}`;
        return nombreResumen;
    }

    // Vamos a suponer que solo existe, como maximo, un conflicto y que 
    // este se puede propagar
    buscarColisiones() {
        let colisiones = [];

        let resumenEnConcflicto = this.restoResumenes.find(resumen => resumen[this.config.numero] == this.numero);
        while (resumenEnConcflicto) {
            let infoConflicto = { 
                resumen: resumenEnConcflicto, 
                nuevoNumero: parseInt(resumenEnConcflicto[this.config.numero], 10) + 1,
            };
            colisiones.push(infoConflicto);

            resumenEnConcflicto = this.restoResumenes.find(resumen => resumen[this.config.numero] == infoConflicto.nuevoNumero);
        }

        let resumenesDelParte = this.restoResumenes
            .filter(resumen => resumen[this.config.nombre] == this.nombre);

        resumenEnConcflicto = resumenesDelParte.find(resumen => !resumen[this.config.parte]);
        if (resumenEnConcflicto) {
            let infoConflicto = { 
                resumen: resumenEnConcflicto, 
                nuevaParte: this.parte == 1 ? 2 : 1,
            };
            colisiones.push(infoConflicto);

        } else {
            resumenEnConcflicto = resumenesDelParte.find(resumen => resumen[this.config.parte] == this.parte);

            while (resumenEnConcflicto) {
                let infoConflicto = {
                    resumen: resumenEnConcflicto,
                    nuevaParte: parseInt(resumenEnConcflicto[this.config.parte]) + 1,
                };
                colisiones.push(infoConflicto);

                resumenEnConcflicto = resumenesDelParte.find(resumen => resumen[this.config.parte] == infoConflicto.nuevaParte);
            }
        }

        return colisiones;
    }
}


async function crearResumen(tp, materia) {
    const { 
        SECCIONES, DATAVIEW: { referencia: DV_REF, carrera: DV_CARRERA, ...DATAVIEW },
		DATOS: { ARCHIVO: DATOS_ARCHIVO, MATERIA: DATOS_MATERIA, RESUMEN: DATOS_RESUMEN }, 
        TAGS: { facultad: TAGS_FACULTAD }, 
    } = tp.user.constantes();
	const dv = app.plugins.plugins.dataview.api;
    const preguntar = tp.user.preguntar();
    const tagPorNombre = tp.user.tagPorNombre;
    const obtenerTag = tp.user.obtenerTag;

    let resumen = new Resumen(tp, `${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`, materia);
    await preguntar.formulario(tp, resumen, "Ingresar la información del tema de la materia");

    let texto = `${"#".repeat(SECCIONES.indice.nivel)} ${SECCIONES.indice.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DV_CARRERA.apuntes}", { archivo: dv.current() });\n\`\`\`\n\n`;

    texto += `${"#".repeat(SECCIONES.resumen.nivel)} ${SECCIONES.resumen.texto}\n---\n%% Pendiente %%\n\n`;

    texto += `${"#".repeat(SECCIONES.bibliografia.nivel)} ${SECCIONES.bibliografia.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DV_REF.acumulada}", { archivo: dv.current() });\n\`\`\`\n`;

    // Conseguir todas las materias que tengan como equivalente a esta materia y conseguir sus tags
    let tagsMaterias = dv.pages(`#${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`)
        .filter(cualquierMateria => cualquierMateria[DATOS_MATERIA.correlativas])
        .filter(materiaEquivalente => materia.file.path == materiaEquivalente[DATOS_MATERIA.correlativas].path)
        .map(materiaEquivalente => obtenerTag(tp, materiaEquivalente[DATOS_ARCHIVO.tags]));

    tagsMaterias = [ ...tagsMaterias, ...obtenerTag(tp, materia[DATOS_ARCHIVO.tags]) ];

    // Identificar y modificar en el caso de que sea necesario, algun otro resumen que haya conflicto con los datos actuales
    let conflictos = resumen.buscarColisiones()
        .sort(({ nuevoNumero, nuevaParte }) => nuevoNumero ? parseInt(nuevoNumero, 10) : -parseInt(nuevaParte, 10));
    
    let cambiarNombre = [];
    for (let { resumen: resumenEnConflicto, nuevoNumero, nuevaParte } of conflictos) {
        let tResumen = tp.file.find_tfile(resumenEnConflicto.file.path);

        if (nuevoNumero) {
            await app.fileManager.processFrontMatter(tResumen, (frontmatter) => {
                frontmatter[DATOS_RESUMEN.numero] = nuevoNumero;
            });
        }

        if (nuevaParte) {
            await app.fileManager.processFrontMatter(tResumen, (frontmatter) => {
                frontmatter[DATOS_RESUMEN.parte] = nuevaParte;

                let tagsNuevos = obtenerTag(tp, resumenEnConflicto[DATOS_ARCHIVO.tags])
                    .map(tag => {
                        let viejaParte = resumenEnConflicto[DATOS_RESUMEN.parte];
                        if (viejaParte && parseInt(viejaParte, 10) > 0) {
                            // Anteriormente era una parte
                            let { index } = [...tag.matchAll(`/${viejaParte}`)].last();
                            return { tagViejo: tag, tagNuevo: tag.slice(0, index) + `/${nuevaParte}` };

                        } else {
                            // Antes no era una parte
                            return { tagViejo: tag, tagNuevo: `${tag}/${nuevaParte}` };
                        }
                    });

                frontmatter[DATOS_ARCHIVO.tags] = resumenEnConflicto[DATOS_ARCHIVO.tags]
                    .map(tag => {
                        let infoTag = tagsNuevos.find(({ tagViejo }) => tag == tagViejo)
                        return infoTag ? infoTag.tagNuevo : tag;
                    });
            });

            tResumen = await tp.file.move(`${resumenEnConflicto.file.folder}/Temp Parte ${nuevaParte}`, tResumen);
            cambiarNombre.push({ tResumen, path: `${resumenEnConflicto.file.folder}/Resumen Parte ${nuevaParte}` });
        }
    } 

    console.log(cambiarNombre);
    await Promise.all(cambiarNombre.map(({ tResumen, path }) => tp.file.move(path, tResumen)));

    return {
        metadata: {
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`,
				...tagsMaterias.map(tag => {
                    let subTagParte = "";
                    if (resumen.tieneParte()) 
                        subTagParte = `/${resumen.parte}`;
                    return `${tag}/${tagPorNombre(resumen.nombre)}${subTagParte}`;
                }),
            ],
            ...resumen.generarRepresentacion(),
        },
        carpeta: `${materia.file.folder}/${resumen.nombre}`,
        titulo: resumen.nombreArchivo(),
        texto: texto,
    };
}

module.exports = (tp) => ({
    clase: (materia, representacionPrevia = {}) => new Resumen(tp, materia, representacionPrevia),
    crear: crearResumen.bind(null, tp),
});

/**

		
		let eleccion = AGREGAR_TEMA;
		if (resumenes.length > 0) {
			eleccion = await preguntar.suggester(
				tp, [" ⊕ Agregar nuevo tema",  ...nombreResumenes ],
				[ AGREGAR_TEMA, ...resumenes ],
				"Que es lo que quiere hacer?",
				error.Prompt("No se eligió donde crear el tema")
			);
		}

		let multiples = false;
		let nuevaCarpeta;
		if (eleccion == AGREGAR_TEMA) {
			let nombre = await preguntar.prompt(
				tp, "Nombre del nuevo tema:",
				error.Prompt("No se ingresó el nombre del tema")
			);

			eleccion = resumenes.find(resumen => {
				let carpetaResumen = resumen.file.folder.split("/")
					.filter((dir => dir != carrera.file.folder))[1];
				return carpetaResumen == nombre;
			});
			nuevaCarpeta = `${materia.file.folder}/${nombre}`;
		} 

		if (eleccion) {
			multiples = true;
			nuevaCarpeta = eleccion.file.folder;
			let tResumen = tp.file.find_tfile(eleccion.file.path);
			await app.fileManager.processFrontMatter(tResumen, (frontmatter) => {
				frontmatter["parte"] = 1;
			});
		}

		resumenes = dv.pages(`"${materia.file.folder}" and #resumen`)
			.sort(resumen => resumen.capitulo);

		let capitulo = 1;
		let parte = 1;
		if (resumenes.length > 0) {
			// Preguntamos orden => obtenemos el número del capitulo
			let antes = `Antes de ${nombreResumenes[0]}`;
			let nuevaPos = await preguntar.suggester(
				tp, [ antes, ...nombreResumenes.map(nombre => `Después de ${nombre}`)],
				[0, ...resumenes.map(resumen => resumen.capitulo)]
			)
			capitulo = nuevaPos + 1;

			// Con el capitulo, podemos reordenar
			let actualizar = [];
			for (let resumen of resumenes) {
				if (resumen.capitulo < capitulo) {
					if (multiples && nuevaCarpeta == resumen.file.folder) {
						let parteResumen = resumen.parte ? resumen.parte : 1;
						actualizar.push({ resumen: resumen, nuevoCapitulo: resumen.capitulo, nuevaParte: parteResumen });
						parte = parteResumen + 1;
					}
					continue;
				}

				let info = { resumen: resumen, nuevoCapitulo: resumen.capitulo + 1 };
				if (multiples && nuevaCarpeta == resumen.file.folder) {
					info["nuevaParte"] = (resumen.parte ? resumen.parte : 1) + 1;
				} else {
					info["nuevaParte"] = resumen.parte;
				}
				actualizar.push(info);
			}

			for (let { resumen, nuevoCapitulo, nuevaParte } of actualizar) {
				let tResumen = tp.file.find_tfile(resumen.file.path);

				let tagPrevio = resumen.tags.find(tag => tag != "resumen" && tag.startsWith(tagCarrera));
				let previosTags = [tagPrevio];
				equivalencias.forEach(equivalencia => {
					let tagCarreraEquivalencia = crearTag(equivalencia.file.folder);
					let tagEquivalencia = tagPrevio.replace(tagCarrera, tagCarreraEquivalencia);
					previosTags.push(tagEquivalencia);
				});

				let nuevoTag = crearTag(resumen.file.folder);
				let nuevosTags = [nuevoTag];
				equivalencias.forEach(equivalencia => {
					let tagCarreraEquivalencia = crearTag(equivalencia.file.folder);
					let tagEquivalencia = nuevoTag.replace(tagCarrera, tagCarreraEquivalencia);
					nuevosTags.push(tagEquivalencia);
				});
				if (resumen.parte !== nuevaParte) {
					nuevosTags = nuevosTags.map(tag => `${tag}/${nuevaParte}`);
				}

				let actualizarCapitulo = resumen.capitulo !== nuevoCapitulo;
				let actualizarParte = resumen.parte !== nuevaParte;

				let tArchivos = dv.pages(`#${tagPrevio} and #nota`)
					.map(archivo => tp.file.find_tfile(archivo.file.path));

				let tareas = [];
				let tarea = app.fileManager.processFrontMatter(tResumen, (frontmatter) => {
					if (actualizarCapitulo) {
						frontmatter["capitulo"] = nuevoCapitulo;
					}

					if (actualizarParte) {
						frontmatter["parte"] = nuevaParte;
						frontmatter["tags"] = [ ...nuevosTags, "resumen" ];
					}						
				});
				tareas.push(tarea);

				for (let tArchivoMod of tArchivos) {
					tarea = app.fileManager.processFrontMatter(tArchivoMod, (frontmatter) => {
						if (actualizarParte) {
							previosTags.forEach(tag => frontmatter["tags"].remove(tag));
							nuevosTags.forEach(tag => frontmatter["tags"].push(tag));
						}
					});
					tareas.push(tarea);
				}
				await Promise.all(tareas);

				if (actualizarParte) {
					let nuevoTitulo = `Resumen Parte ${nuevaParte}`;
					await app.vault.rename(tResumen, `${nuevaCarpeta}/${nuevoTitulo}.md`);
				}
			}
		}

		// Cambiar esto para tener en cuenta las equivalencias
		let tag = crearTag(nuevaCarpeta);
		let tags = [tag];
		equivalencias.forEach(equivalencia => {
			let tagCarreraEquivalencia = crearTag(equivalencia.file.folder);
			let tagEquivalencia = tag.replace(tagCarrera, tagCarreraEquivalencia);
			tags.push(tagEquivalencia);
		});

		tR += "---\n";
		tR += tp.obsidian.stringifyYaml({
			capitulo: capitulo,
			tags: [...tags.map(tag => multiples ? `${tag}/${parte}` : tag), "resumen"]
		});
		if (multiples) tR += `parte: ${parte}\n`;
		tR += "---\n";

		if (!multiples) {
			await app.vault.createFolder(nuevaCarpeta);
		}

		let titulo = "Resumen";
		if (multiples) {
			titulo += ` Parte ${parte}`;
		}
		await app.vault.rename(tArchivo, `${nuevaCarpeta}/${titulo}.md`);
		
	} catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();
		const errorNombre = error.nombre;

        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
        }

		console.log(nombre, mensaje);
    }

	function crearTag(folderPath) {
		return folderPath.replaceAll(",", "").replaceAll(" ", "-");
	}
_%>
# Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarResumen", { resumen: dv.current() });
```

# Resumen
---
%% Pendiente... %%
<% tp.file.cursor() %>

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/bibliografiaMateria", { materia: dv.current() });
```
 */