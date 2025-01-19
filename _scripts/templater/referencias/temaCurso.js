const MODIFICAR_PROFESOR = "modificar profesor";
const ELIMINAR_PROFESOR_AT = "eliminar profesor en posicion";
const ELIMINAR_PROFESOR = "eliminar profesor";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, curso) {
    const { 
        SIMBOLOS, TAGS: { curso: TAGS_CURSO },
        DATOS: { REFERENCIAS: { curso: DATOS_CURSO, temaCurso: DATOS_TEMA } },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const validar = tp.user.whiteList();

    const nombreProfesores = curso[DATOS_CURSO.profesore.self];
    const otrosTemas = obtenerTemasCurso(tp, curso);

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    if (nombreProfesores.length == 1 && datos[DATOS_TEMA.numProfesore].length == 0) {
        datos[DATOS_TEMA.numProfesore].push(0);
    }

    datos[DATOS_TEMA.curso] = `[[${curso.file.path}|${curso.file.name}]]`;

    switch (respuesta) {
        case DATOS_TEMA.nombre:
            let eleccion = AGREGAR_TEMA;
            let nombreTema;
            if (otrosTemas.length > 0) {
                eleccion = await  preguntar.suggester(
                    tp, [" ⊕ Agregar nuevo tema", ...otrosTemas.map(tema => {
                        return (tema.parte > 0) ? `${tema.nombreTema} parte ${tema.parte}` : tema.nombreTema;
                    })],
                    [AGREGAR_TEMA, ...otrosTemas.map(tema => ({parte: tema.parte, nombre: tema.nombreTema}))],
                    "Que es lo que quiere hacer?",
                    error.Prompt("No se eligió donde crear el tema")
                );
            }

            if (eleccion == AGREGAR_TEMA) {
                nombreTema = await preguntar.prompt(
                    tp, datos[DATOS_TEMA.nombre]
                    ? `Nuevo nombre del tema, donde antes era ${datos[DATOS_TEMA.nombre]}`
                    : "Nombre del tema",
                    error.Quit("No se ingresó el nombre del tema")
                );

                if (!validar.validarNombre(tp, nombreTema))
                    throw error.Quit("Nombre de tema es invalido");
            } else {
                nombreTema = eleccion.nombre;
                datos[DATOS_TEMA.parte] = eleccion.parte;
            }

            datos[DATOS_TEMA.nombre] = nombreTema;
            break;

        case DATOS_TEMA.numero:
            let numero = await preguntar.numero(
                tp, datos[DATOS_TEMA.numero]
                    ? `Nuevo número de tema, donde antes era ${datos[DATOS_TEMA.numero]}`
                    : "Número de tema",
                error.Quit("No se ingresó el número del tema")
            );

            datos[DATOS_TEMA.numero] = parseInt(numero, 10);
            break;

        case MODIFICAR_PROFESOR:
            indice = separacion[1];

        case DATOS_TEMA.numProfesore:
            let profesoresElegidos = datos[DATOS_TEMA.numProfesore];
            if (indice) profesoresElegidos.remove(datos[DATOS_TEMA.numProfesore][indice]);

            let profesoresDisponibles = [...nombreProfesores.keys()]
                .sort()
                .filter((indice) => profesoresElegidos.indexOf(indice) < 0);

            let indiceProfesor = profesoresDisponibles[0];

            if (profesoresDisponibles.length > 1) {
                indiceProfesor = await preguntar.suggester(
                    tp, (indice) => {
                        let { 
                            [DATOS_CURSO.profesore.nombre]: nombre, 
                            [DATOS_CURSO.profesore.apellido]: apellido 
                        } = nombreProfesores[indice];
                        return `${nombre} ${apellido}`;
                    }, profesoresDisponibles, "Que profesor da este tema",
                    error.Quit("No se eligió el profesor de este curso")
                );
            }

            if (indice) {
                datos[DATOS_TEMA.numProfesore][indice] = indiceProfesor;
            } else {
                datos[DATOS_TEMA.numProfesore].push(indiceProfesor);
            }
            break;

        case ELIMINAR_PROFESOR_AT:
            indice = separacion[1];
            datos[DATOS_TEMA.numProfesore].remove(datos[DATOS_TEMA.numProfesore][indice]);
            break;

        case ELIMINAR_PROFESOR:
            datos[DATOS_TEMA.numProfesore].pop();
            break;

        case SALIR:
            salir = true; 
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, curso) {
    const { 
        SIMBOLOS, TAGS: { curso: TAGS_CURSO }, 
        DATOS: { REFERENCIAS: { curso: DATOS_CURSO, temaCurso: DATOS_TEMA } } 
    } = tp.user.constantes();
    let opciones = [];
    let valores = [];

    const nombreProfesores = curso[DATOS_CURSO.profesore.self];
    const otrosTemas = obtenerTemasCurso(tp, curso);

    opciones.push(DATOS_TEMA.numero);
    if (datos[DATOS_TEMA.numero]) {
        if (otrosTemas.length == 0) {
            valores.push(`️ ${SIMBOLOS.modificar}️ Modificar el número del tema, donde era ${datos[DATOS_TEMA.numero]}`);
        } else {
            let anterior, siguiente;
            for (let i = 0; i < otrosTemas.length; i++) {
                if (otrosTemas[i][DATOS_TEMA.numero] < datos[DATOS_TEMA.numero]) {
                    anterior = otrosTemas[i];

                } else if (otrosTemas[i][DATOS_TEMA.numero] == datos[DATOS_TEMA.numero]) {
                    siguiente = otrosTemas[i];

                } else if (!siguiente && otrosTemas[i][DATOS_TEMA.numero] > datos[DATOS_TEMA.numero]) {
                    siguiente = otrosTemas[i];

                }
            }

            let texto = (anterior) 
                ? `antes de ${anterior[DATOS_TEMA.nombre]} => `
                : "donde era ";
            texto += `${datos[DATOS_TEMA.numero]}`;
            if (siguiente) {
                texto += ` => ${siguiente[DATOS_TEMA.nombre]}`;
            }

            valores.push(`️ ${SIMBOLOS.modificar}️ Modificar el número del tema, ${texto}`);
        }

    } else {
        valores.push(` ${SIMBOLOS.agregar} Número del tema`);
    }

    // Mostrar si es parte °N
    opciones.push(DATOS_TEMA.nombre);
    valores.push(datos[DATOS_TEMA.nombre]
        ? `️ ${SIMBOLOS.modificar}️ Modificar el nombre del tema, donde era ${datos[DATOS_TEMA.nombre]}`
        : ` ${SIMBOLOS.agregar} Nombre del tema`
    );

    let cantidadProfesores = nombreProfesores.length;
    let cantidadProfesoresElegidos = datos[DATOS_TEMA.numProfesore].length;

    if (cantidadProfesores == 1) {
        let { 
            [DATOS_CURSO.profesore.nombre]: nombre,
            [DATOS_CURSO.profesore.apellido]: apellido 
        } = nombreProfesores[0];

        opciones.push(`${ELIMINAR_PROFESOR_AT}-0`);
        valores.push(` ${SIMBOLOS.sacar} Eliminar profesore ${nombre} ${apellido}`);

    } else if (cantidadProfesores == cantidadProfesoresElegidos) {
        for (let indice of datos[DATOS_TEMA.numProfesore]) {
            let { 
                [DATOS_CURSO.profesore.nombre]: nombre, 
                [DATOS_CURSO.profesore.apellido]: apellido 
            } = nombreProfesores[indice];

            opciones.push(`${ELIMINAR_PROFESOR_AT}-${indice}`);
            valores.push(` ${SIMBOLOS.sacar} Eliminar profesore ${nombre} ${apellido}`);
        }

    } else {
        
        for (let [indice, indiceProfesor] of datos[DATOS_TEMA.numProfesore].entries()) {
            let { 
                [DATOS_CURSO.profesore.nombre]: nombre, 
                [DATOS_CURSO.profesore.apellido]: apellido 
            } = nombreProfesores[indiceProfesor];

            opciones.push(`${MODIFICAR_PROFESOR}-${indice}`);
            valores.push(`️ ${SIMBOLOS.modificar}️ Modificar el profesore ${nombre} ${apellido}`);
        }

        if (cantidadProfesoresElegidos == 0) {
            opciones.push(PROFESORES);
            valores.push(` ${SIMBOLOS.agregar} Profesore del tema`);

        } else {
            let ultimoIndiceProfesor = datos[DATOS_TEMA.numProfesore][cantidadProfesoresElegidos - 1];
            let { 
                [DATOS_CURSO.profesore.nombre]: nombre, 
                [DATOS_CURSO.profesore.apellido]: apellido 
            } = nombreProfesores[ultimoIndiceProfesor];

            opciones.push(ELIMINAR_PROFESOR);
            valores.push(` ${SIMBOLOS.sacar} Eliminar profesore ${nombre} ${apellido}`);

            opciones.push(DATOS_TEMA.numProfesore);
            valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Profesore del tema`);
        }

    }

    if (datos[DATOS_TEMA.numProfesore].length > 0 && [DATOS_TEMA.numero, DATOS_TEMA.nombre].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function obtenerTemasCurso(tp, curso) {
    const { TAGS: { curso: TAGS_CURSO }, DATOS: { REFERENCIAS: { curso: DATOS_CURSO } } } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    let tagsCurso = tp.user.obtenerTag(tp, curso[DATOS_CURSO.tags])
        .map(tag => `#${tag}`);
    return dv.pages(`(${tagsCurso.join(" or ")}) and #${TAGS_CURSO.self}/${TAGS_CURSO.resumen}`);
}

function describir(tp, datos) {
    const { DATOS: { REFERENCIAS: { curso: DATOS_CURSO, temaCurso: DATOS_TEMA } } } = tp.user.constantes();

    const dv = app.plugins.plugins.dataview.api;
    const curso = dv.page(datos[DATOS_TEMA.curso].path);

    let autores = [];
    for (let numProfesor of datos[DATOS_TEMA.numProfesore]) {
        let { 
            [DATOS_CURSO.profesore.nombre]: nombre, 
            [DATOS_CURSO.profesore.apellido]: apellido 
        } = curso[DATOS_CURSO.profesore.self][numProfesor];
        autores.push(`${apellido}, ${nombre[0]}.`);
    }

    let nombre = `N°${datos[DATOS_TEMA.numero]}: ${datos[DATOS_TEMA.nombre]}`;
    if (datos[DATOS_TEMA.parte]) {
        nombre += ` parte ${datos[DATOS_TEMA.parte]}`;
    }

    return `${nombre} dado por ${autores.join(", ")}. ${curso[DATOS_CURSO.nombre]} publicado en ${curso[DATOS_CURSO.pagina]}`;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { REFERENCIAS: { temaCurso: DATOS_TEMA } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_TEMA.nombre]: TIPOS_DE_DEFAULT.simple,
            [DATOS_TEMA.numero]: TIPOS_DE_DEFAULT.simple,
            [DATOS_TEMA.numProfesor]: TIPOS_DE_DEFAULT.array,
            [DATOS_TEMA.parte]: crearFuncion(TIPOS_DE_DEFAULT.simple, () => 0),
            [DATOS_TEMA.curso]: TIPOS_DE_DEFAULT.simple,
        }))
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});