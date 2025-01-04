const MODIFICAR_PROFESOR = "modificar profesor";
const ELIMINAR_PROFESOR_AT = "eliminar profesor en posicion";
const ELIMINAR_PROFESOR = "eliminar profesor";

async function actualizarDatos(tp, datos, respuesta, curso) {
    const { salir: SALIR, temaCurso: { 
        NOMBRE_TEMA, NUMERO_TEMA, PROFESORES, PARTE_TEMA, CURSO
    } } = tp.user.constantes().DATOS.REFERENCIAS;
    const TAGS = tp.user.constantes().TAGS;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const validar = tp.user.whiteList();

    const nombreProfesores = curso[NOMBRE_AUTORES];

    const dv = app.plugins.plugins.dataview.api;
    let tagsCurso = tp.user.obtenerTag(tp, curso.tags);
    tagsCurso.push(TAGS.resumen);
    const otrosTemas = dv.pages(tagsCurso.map(tag => `#${tag}`).join(" and "));

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    if (nombreProfesores.length == 1 && datos[PROFESORES].length == 0) {
        datos[PROFESORES].push(0);
    }

    datos[CURSO] = `[[${curso.file.path}|${curso.file.name}]]`;

    switch (respuesta) {
        case NOMBRE_TEMA:
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
                    tp, datos[NOMBRE_TEMA]
                    ? `Nuevo nombre del tema, donde antes era ${datos[NOMBRE_TEMA]}`
                    : "Nombre del tema",
                    error.Quit("No se ingresó el nombre del tema")
                );

                if (!validar.validarNombre(tp, nombreTema))
                    throw error.Quit("Nombre de tema es invalido");
            } else {
                nombreTema = eleccion.nombre;
                datos[PARTE_TEMA] = eleccion.parte;
            }

            datos[NOMBRE_TEMA] = nombreTema;
            break;

        case NUMERO_TEMA:
            let numero = await preguntar.numero(
                tp, datos[NUMERO_TEMA]
                    ? `Nuevo número de tema, donde antes era ${datos[NUMERO_TEMA]}`
                    : "Número de tema",
                error.Quit("No se ingresó el número del tema")
            );

            datos[NUMERO_TEMA] = parseInt(numero, 10);
            break;

        case MODIFICAR_PROFESOR:
            indice = separacion[1];

        case PROFESORES:
            let profesoresElegidos = datos[PROFESORES];
            if (indice) profesoresElegidos.remove(datos[PROFESORES][indice]);

            let profesoresDisponibles = [...nombreProfesores.keys()]
                .sort()
                .filter((indice) => profesoresElegidos.indexOf(indice) < 0);

            let indiceProfesor = profesoresDisponibles[0];

            if (profesoresDisponibles.length > 1) {
                indiceProfesor = await preguntar.suggester(
                    tp, (indice) => {
                        let { nombre, apellido } = nombreProfesores[indice];
                        return `${nombre} ${apellido}`;
                    }, profesoresDisponibles, "Que profesor da este tema",
                    error.Quit("No se eligió el profesor de este curso")
                );
            }

            if (indice) {
                datos[PROFESORES][indice] = indiceProfesor;
            } else {
                datos[PROFESORES].push(indiceProfesor);
            }
            break;

        case ELIMINAR_PROFESOR_AT:
            indice = separacion[1];
            datos[PROFESORES].remove(datos[PROFESORES][indice]);
            break;

        case ELIMINAR_PROFESOR:
            datos[PROFESORES].pop();
            break;

        case SALIR:
            salir = true; 
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, curso) {
    const { salir: SALIR, temaCurso: { 
        NOMBRE_TEMA, NUMERO_TEMA, PROFESORES
    } } = tp.user.constantes().DATOS.REFERENCIAS;
    const TAGS = tp.user.constantes().TAGS;
    let opciones = [];
    let valores = [];

    const nombreProfesores = curso[NOMBRE_AUTORES];

    const dv = app.plugins.plugins.dataview.api;
    let tagsCurso = tp.user.obtenerTag(tp, curso.tags);
    tagsCurso.push(TAGS.resumen);
    const otrosTemas = dv.pages(tagsCurso.map(tag => `#${tag}`).join(" and "));

    opciones.push(NUMERO_TEMA);
    if (datos[NUMERO_TEMA]) {
        if (otrosTemas.length == 0) {
            valores.push(`️ ️✏️ Modificar el número del tema, donde era ${datos[NUMERO_TEMA]}`);
        } else {
            let anterior, siguiente;
            for (let i = 0; i < otrosTemas.length; i++) {
                if (otrosTemas[i][NUMERO_TEMA] < datos[NUMERO_TEMA]) {
                    anterior = otrosTemas[i];

                } else if (otrosTemas[i][NUMERO_TEMA] == datos[NUMERO_TEMA]) {
                    siguiente = otrosTemas[i];

                } else if (!siguiente && otrosTemas[i][NUMERO_TEMA] > datos[NUMERO_TEMA]) {
                    siguiente = otrosTemas[i];

                }
            }

            let texto = (anterior) 
                ? `antes de ${anterior[NOMBRE_TEMA]} => `
                : "donde era ";
            texto += `${datos[NUMERO_TEMA]}`;
            if (siguiente) {
                texto += ` => ${siguiente[NOMBRE_TEMA]}`;
            }

            valores.push(`️ ️✏️ Modificar el número del tema, ${texto}`);
        }

    } else {
        valores.push(" ⊕ Número del tema");
    }

    // Mostrar si es parte °N
    opciones.push(NOMBRE_TEMA);
    valores.push(datos[NOMBRE_TEMA]
        ? `️ ️✏️ Modificar el nombre del tema, donde era ${datos[NOMBRE_TEMA]}`
        : " ⊕ Nombre del tema"
    );

    let cantidadProfesores = nombreProfesores.length;
    let cantidadProfesoresElegidos = datos[PROFESORES].length;

    if (cantidadProfesores == 1) {
        let { nombre, apellido } = nombreProfesores[0];

        opciones.push(`${ELIMINAR_PROFESOR_AT}-0`);
        valores.push(` ⊖ Eliminar profesore ${nombre} ${apellido}`);

    } else if (cantidadProfesores == cantidadProfesoresElegidos) {
        for (let indice of datos[PROFESORES]) {
            let { nombre, apellido } = nombreProfesores[indice];

            opciones.push(`${ELIMINAR_PROFESOR_AT}-${indice}`);
            valores.push(` ⊖ Eliminar profesore ${nombre} ${apellido}`);
        }

    } else {
        
        for (let [indice, indiceProfesor] of datos[PROFESORES].entries()) {
            let { nombre, apellido } = nombreProfesores[indiceProfesor];
            opciones.push(`${MODIFICAR_PROFESOR}-${indice}`);
            valores.push(`️ ️✏️ Modificar el profesore ${nombre} ${apellido}`);
        }

        if (cantidadProfesoresElegidos == 0) {
            opciones.push(PROFESORES);
            valores.push(" ⊕ Profesore del tema");

        } else {
            let ultimoIndiceProfesor = datos[PROFESORES][cantidadProfesoresElegidos - 1];
            let { nombre, apellido } = nombreProfesores[ultimoIndiceProfesor];

            opciones.push(ELIMINAR_PROFESOR);
            valores.push(` ⊖ Eliminar profesore ${nombre} ${apellido}`);

            opciones.push(PROFESORES);
            valores.push(" ⊕ (opcional) Profesore del tema");
        }

    }

    if (datos[PROFESORES].length > 0 && [NUMERO_TEMA, NOMBRE_TEMA].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { 
        curso: { NOMBRE_AUTORES, NOMBRE_CURSO, NOMBRE_PAGINA },
        temaCurso: { NOMBRE_TEMA, NUMERO_TEMA, PROFESORES, CURSO, PARTE_TEMA },
    } = tp.user.constantes().DATOS.REFERENCIAS;

    const dv = app.plugins.plugins.dataview.api;
    const curso = dv.page(datos[CURSO].path);

    let autores = [];
    for (let numProfesor of datos[PROFESORES]) {
        let { nombre, apellido } = curso[NOMBRE_AUTORES][numProfesor];
        autores.push(`${apellido}, ${nombre[0]}.`);
    }

    let nombre = `N°${datos[NUMERO_TEMA]}: ${datos[NOMBRE_TEMA]}`;
    if (datos[PARTE_TEMA]) {
        nombre += ` parte ${datos[PARTE_TEMA]}`;
    }

    return `${nombre} dado por ${autores.join(", ")}. ${curso[NOMBRE_CURSO]} publicado en ${curso[NOMBRE_PAGINA]}`;
}

module.exports = () => ({
    obtenerDefault: (tp) => {
        const { 
            NOMBRE_TEMA, NUMERO_TEMA, PROFESORES, PARTE_TEMA, CURSO 
        } = tp.user.constantes().DATOS.REFERENCIAS.temaCurso;
        return {
            [NOMBRE_TEMA]: null,
            [NUMERO_TEMA]: null,
            [PARTE_TEMA]: 0,
            [PROFESORES]: [],
            [CURSO]: null,
        }
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});