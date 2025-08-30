const ELIMINAR_CORRELATIVA = "eliminar correlativa";
const MODIFICAR_CORRELATIVAS = "modificar correlativas";
const SALAR_EQUIVALENCIA = "sacar equivalencia";

const CANTIDAD_MINIMA_CORRELATIVAS = 0;
const MES_INICIO_SEGUNDO_CUATRI = 6;

const SALIR = "salir";

class Materia {
    constructor(tp, carrera, representacionPrevia = {}) {
        const { 
			SIMBOLOS, TAGS: { facultad: TAGS_FACULTAD }, DATOS: { 
				CARRERA: DATOS_CARRERA, MATERIA: DATOS_MATERIA, ARCHIVO: DATOS_ARCHIVO 
			}  
		} = tp.user.constantes();
		const dv = app.plugins.plugins.dataview.api;
    	const obtenerTag = tp.user.obtenerTag;

		this.simbolos = SIMBOLOS;
		this.config = DATOS_MATERIA;

		this.cuatrisPosibles = [];
		let [ mes, anio ] = tp.file.creation_date("MM-YY").split("-").map(num => parseInt(num, 10));
		this.cuatrisPosibles.push(`${anio}C1`);
		if (mes >= MES_INICIO_SEGUNDO_CUATRI)
			this.cuatrisPosibles.push(`${anio}C2`);

		for (anio = tp.file.creation_date("YY") - 1; anio >= 19; anio--) {
			this.cuatrisPosibles.push(`${anio}C1`);
			this.cuatrisPosibles.push(`${anio}C2`);
		}
		this.planesPosibles = carrera[DATOS_CARRERA.planesDeEstudio];

		let tagsCarrera = obtenerTag(tp, carrera[DATOS_ARCHIVO.tags])
			.map(tag => `#${tag}`);

    	this.posiblesMateriasCorrelativas = dv.pages(`(${tagsCarrera.join(" or ")}) and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`)
			.filter(materia => materia[this.config.nombre] != representacionPrevia[this.config.nombre])
			.sort(materia => {
				if (materia[this.config.equivalencia]) 
					materia = dv.page(materia[this.config.equivalencia].path);
				return representacionCuatri(materia[this.config.infoCuatri]);
			});

		this.nombre = representacionPrevia[this.config.nombre];
		this.reducido = representacionPrevia[this.config.nombreReducido];
		this.cuatri = representacionPrevia[this.config.infoCuatri];
		this.plan = representacionPrevia[this.config.plan];
		let correlativasViejas = representacionPrevia[this.config.correlativas]
			? representacionPrevia[this.config.correlativas] : [];
		this.correlativas = [];
		for (let correlativaVieja of correlativasViejas) {
			this.correlativas.push(dv.page(correlativaVieja.path));
		}

		this.equivalencia = representacionPrevia[this.config.equivalencia];

		this.tieneCodigo = carrera[DATOS_CARRERA.tieneCodigoLaMateria];
		this.codigo = carrera[this.config.codigo];

		if (this.planesPosibles.length == 1 && !this.plan) 
			this.plan = this.planesPosibles.first();
    }

	async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
		let [ respuesta, indice ] = respuestaDada.split("-");

		switch (respuesta) {
			case this.config.nombre:
				this.nombre = await generarPreguntas.prompt(
					"Nombre de la materia", 
					generarError.Quit("No se ingresó nombre de la materia")
				);

				this.reducido = null;
				break;

			case this.config.nombreReducido:
				this.reducido = await generarPreguntas.prompt(
					`Nombre de la materia ${this.nombre} en su forma reducida`, 
					generarError.Quit("No se ingresó el nombre reducido")
				);
				break;

			case this.config.codigo:
				this.codigo = await generarPreguntas.prompt(
					`El código de ${this.nombre} es`, 
					generarError.Quit("No se ingresó el código de la materia")
				);

				this.codigo = this.codigo.replaceAll(".", "");
				break;
			
			case this.config.infoCuatri:
				this.cuatri = await generarPreguntas.suggester(
					this.cuatrisPosibles.map(descripcionCuatri), this.cuatrisPosibles, 
					"En que cuatrimestre se va a cursar esta materia?",
					generarError.Quit("No se ingresó el año en el que se hizo/hace la materia")
				);
				break;
			
			case this.config.plan:
				this.plan = await generarPreguntas.suggester(
					plan => `Plan ${plan}`, this.planesPosibles, 
					"El plan de la materia",
					generarError.Prompt("No se ingresó el plan de la materia")
				);
				break;
			
			case MODIFICAR_CORRELATIVAS:
				this.correlativas.splice(indice, 1);
			
			case this.config.correlativas:
				let correlativasDisponibles = this.posiblesMateriasCorrelativas
					.filter(materia => !this.correlativas.find(correlativa => correlativa[this.config.nombre] == materia[this.config.nombre]));
				
				let correlativaElegido = correlativasDisponibles.first();
				if (correlativasDisponibles.length > 1) {
					correlativaElegido = await generarPreguntas.suggester(
						materia => materia[this.config.nombre], correlativasDisponibles,
						"Que materia es correlativa", generarError.Quit("No se ingresó el plan de la materia")
					);
				}

				this.correlativas.push(correlativaElegido);
				break;
			
			case ELIMINAR_CORRELATIVA:
				this.correlativas.pop();
				break;
		}
	}

	generarPreguntas() {
		let valores = [];
		let opciones = [];

		opciones.push(this.config.nombre);
		if (this.nombre) {
			valores.push(` ${this.simbolos.modificar} Modificar el nombre de la materia, donde era ${this.nombre}`);

			opciones.push(this.config.nombreReducido);
			valores.push(this.reducido
				? ` ${this.simbolos.modificar} Modificar el nombre reducido de ${this.nombre}, donde era ${this.reducido}`
				: ` ${this.simbolos.agregar} Nombre reducido para ${this.nombre}`
			);

		} else {
			valores.push(` ${this.simbolos.agregar} Nombre de la materia`)
		}

		if (this.tieneCodigo) {
			opciones.push(this.config.codigo);
			valores.push(this.codigo 
				? ` ${this.simbolos.modificar} Modificar el código de la materia, donde era ${this.codigo}`
				: ` ${this.simbolos.agregar} Código de la materia`
			);
		}

		opciones.push(this.config.infoCuatri);
		valores.push(this.cuatrisPosibles.includes(this.cuatri)
			? ` ${this.simbolos.modificar} Modificar el cuatri de la materia, donde era ${descripcionCuatri(this.cuatri)}`
			: ` ${this.simbolos.agregar} El cuatri en el que se cursa la materia`
		);

		opciones.push(this.config.plan);
		valores.push(this.planesPosibles.includes(this.plan)
			? ` ${this.simbolos.modificar} Modificar el plan en el que se hace la materia, donde era ${this.plan}`
			: ` ${this.simbolos.agregar} El plan en el que se hace la materia`
		);

		for (let [indice, correlativa] of this.correlativas.entries()) {
			opciones.push(`${MODIFICAR_CORRELATIVAS}-${indice}`);
			valores.push(` ${this.simbolos.modificar} Modificar la correlativa ${correlativa[this.config.nombre]}`);
		}

		if (this.correlativas.length > 0) {
			let ultimaCorrelativa = this.correlativas.last();
			opciones.push(ELIMINAR_CORRELATIVA);
			valores.push(` ${this.simbolos.sacar} Eliminar la correlativa ${ultimaCorrelativa[this.config.nombre]}`);
		}

		console.log(`Hay menos correlativas anotadas que disponibles? ${this.correlativas.length < this.posiblesMateriasCorrelativas.length}`);
		if (this.correlativas.length < this.posiblesMateriasCorrelativas.length) {
			opciones.push(this.config.correlativas);
			valores.push(this.correlativas.lenght < CANTIDAD_MINIMA_CORRELATIVAS
				? ` ${this.simbolos.agregar} Materia correlativa`
				: ` ${this.simbolos.agregar} ${this.simbolos.opcional} Materia correlativa`
			);
		}

		return { opciones: opciones, valores: valores };
	}

	esValido() {
		return this.cuatrisPosibles.includes(this.cuatri)
			&& this.planesPosibles.includes(this.plan)
			&& this.nombre && this.reducido 
			&& this.correlativas.length >= CANTIDAD_MINIMA_CORRELATIVAS
			&& (!this.tieneCodigo || this.codigo);
	}

	generarRepresentacion() {
		return {
			[this.config.nombre]: this.nombre,
			[this.config.nombreReducido]: this.reducido,
			[this.config.infoCuatri]: this.cuatri,
			[this.config.plan]: this.plan,
			[this.config.codigo]: this.codigo,
			[this.config.correlativas]: this.correlativas
				.map(correlativa => `[[${correlativa.file.path}|${correlativa[this.config.nombre]}]]`),
			[this.config.equivalencia]: this.equivalencia,
		}
	}

	descripcion() {
		return this.nombre;
	}
}

function descripcionCuatri(cuatri) {
	let [anio, numCuatri] = cuatri.toLowerCase().split("c")
		.map(num => parseInt(num, 10));
	numCuatri = numCuatri == 1 ? "Primer cuatrimestre" : "Segundo cuatrimestre";
	return `${numCuatri} del 20${anio}`;
}

function representacionCuatri(cuatri) {
	let [ anio, numCuatri ] = cuatri.toLowerCase().split("c").map(num => parseInt(num, 10));
	return 10 * anio + numCuatri;
}

async function crearMateria(tp, carrera) {
    const { 
        SECCIONES, ETAPAS, DATAVIEW: { referencia: DV_REF, carrera: DV_CARRERA, ...DATAVIEW },
		DATOS: { ARCHIVO: DATOS_ARCHIVO, MATERIA: DATOS_MATERIA, CARRERA: DATOS_CARRERA }, 
		TAGS: { facultad: TAGS_FACULTAD }, 
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const tagPorNombre = tp.user.tagPorNombre;
    const obtenerTag = tp.user.obtenerTag;

    let materia = new Materia(tp, carrera);
    await preguntar.formulario(tp, materia, "Ingresar la información de la materia");

	let nombreMateria = materia.nombre
	if (materia.tieneCodigo) nombreMateria += ` (${materia.codigo})`;

    let texto = `${"#".repeat(SECCIONES.apuntes.nivel)} ${SECCIONES.apuntes.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DV_CARRERA.apuntes}", { archivo: dv.current() });\n\`\`\`\n\n`;

    texto += `${"#".repeat(SECCIONES.bibliografia.nivel)} ${SECCIONES.bibliografia.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DV_REF.archivo}", { archivo: dv.current() });\n\`\`\`\n`;

    return {
        metadata: {
			[DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
			[DATOS_MATERIA.estado]: "Sin empezar",
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`,
				...obtenerTag(tp, carrera[DATOS_ARCHIVO.tags])
					.map(tag => `${tag}/${tagPorNombre(materia.reducido)}`),
            ],
			"nombreCarrera": carrera[DATOS_CARRERA.nombre],
            ...materia.generarRepresentacion(),
        },
        carpeta: `${carrera.file.folder}/${materia.reducido}`,
        titulo: nombreMateria,
        texto: texto,
    };
}

module.exports = (tp) => ({
    clase: (carrera, representacionPrevia = {}) => new Materia(tp, carrera, representacionPrevia),
    crear: crearMateria.bind(null, tp),
	representacionNumericaCuatri: representacionCuatri,
	descripcionCuatri: descripcionCuatri,
});

/*
	const FIELD_OBLIGATORIOS = [PREGUNTAR_CARRERA, PREGUNTAR_NOMBRE_MATERIA, PREGUNTAR_PLANES];
	const FIELD_OBLIGATORIOS_SIN_EQUIVALENCIA = [PREGUNTAR_NOMBRE_REDUCIDO, PREGUNTAR_ANIO, PREGUNTAR_CUATRI];


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


		tR += "---\n";
		tR += tp.obsidian.stringifyYaml(metadata);
		tR += "---\n";

		let carpeta = datos[PREGUNTAR_CARRERA].file.folder;
		if (!datos[PREGUNTAR_EQUIVALENCIA]) {
			carpeta += `/${datos[PREGUNTAR_NOMBRE_REDUCIDO]}`;
			await app.vault.createFolder(carpeta);
		}		

		let nombre = datos[PREGUNTAR_CARRERA].tieneCodigo 
			? `${datos[PREGUNTAR_NOMBRE_MATERIA]} (${datos[PREGUNTAR_CODIGO]})` 
			: datos[PREGUNTAR_NOMBRE_MATERIA];

		await app.vault.rename(tArchivo, `${carpeta}/${nombre}.md`);

		if (datos[PREGUNTAR_EQUIVALENCIA]) {
			let equivalencia = datos[PREGUNTAR_EQUIVALENCIA];
			let tagEquivalencia = equivalencia.file.folder.replaceAll(" ", "-").replaceAll(",", "");

			let tareas = dv.pages(`#${tagEquivalencia} and #resumen`)
				.map(resumen => {
					let tResumen = tp.file.find_tfile(resumen.file.path);
    				let nuevaTag = `${carpeta}/${resumen.file.folder.split("/").slice(1).join("/")}`
						.replaceAll(" ", "-").replaceAll(",", "");
					if (resumen.parte) nuevaTag += `/${resumen.parte}`

					return app.fileManager.processFrontMatter(tResumen, (frontmatter) => {
						frontmatter["tags"].push(nuevaTag);
					});
				});
			await Promise.all(tareas);

			tareas = dv.pages(`#${tagEquivalencia} and #resumen`)
				.flatMap(resumen => {
					let tagRepresentante = resumen.file.folder.replaceAll(" ", "-").replaceAll(",", "");
    				let nuevoTag = `${carpeta}/${resumen.file.folder.split("/").slice(1).join("/")}`
						.replaceAll(" ", "-").replaceAll(",", "");
					if (resumen.parte) {
						tagRepresentante += `/${resumen.parte}`
						nuevoTag += `/${resumen.parte}`
					}

					return dv.pages(`#${tagRepresentante} and -#resumen`)
						.map(archivo => ({ archivo: archivo, nuevoTag: nuevoTag }));
				}).map(({archivo, nuevoTag}) => {
					let tArchivo = tp.file.find_tfile(archivo.file.path);
					return app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
						frontmatter["tags"].push(nuevoTag);
					});
				});
			await Promise.all(tareas);
		}

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
	}

	async function preguntarMateriaEquivalente(dv, carreraActual) {
		const carreras = dv.pages("#carrera")
			.filter(carrera => carrera.file.path != carreraActual.file.path)
			.sort(carrera => carrera.file.name);

		let equivalencia = null;
		let respuesta;

		do {
			let carrera = await preguntar.suggester(
				tp, [...carreras.file.name, "Salir"],
				[...carreras, SALIR], "De que carrera es la materia?",
				error.Prompt("No se eligió la carrera para la materia equivalente")
			);

			if (carrera == SALIR) break;

			let tag = carrera.tags.find(tag => tag.startsWith("carrera"))
                .replace("carrera", "materia");
			const materias = dv.pages(`#${tag}`);

			respuesta = await preguntar.suggester(
				tp, [...materias.file.name, "Volver"],
				[...materias, SALIR], "Que materia sería la equivalente?",
				error.Prompt("No se eligió la materia")
			);

			if (respuesta != SALIR) {
				equivalencia = respuesta.equivalencia
					? dv.page(respuesta.equivalencia.path)
					: respuesta;
			}

		} while (respuesta == SALIR);

		return equivalencia;	
	}
_%>
# Apuntes
---
```dataviewjs
	await dv.view("_scripts/dataview/mostrarContenido", { materia: dv.current() });
```

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```
*/