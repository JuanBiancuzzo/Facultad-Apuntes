const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const {  
        CARACTERES_INVALIDOS, TAGS: { curso: TAGS_CURSO }, 
        DATOS: { REFERENCIAS: { curso: DATOS_CURSO }, CURSO: DATOS_ARCHIVO_CURSO },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case MODIFICAR_AUTOR: 
            indice = separacion[1];
            let { 
                [DATOS_CURSO.profesore.nombre]: viejoNombre, 
                [DATOS_CURSO.profesore.apellido]: viejoApellido,
            } = datos[DATOS_CURSO.profesore.self][indice];

            let nuevoApellido = await preguntar.prompt(
                tp, `Nuevo apellido, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del profesore de forma correcta")
            );

            let nuevoNombre = await preguntar.prompt(
                tp, `Nuevo nombre, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del profesore de forma correcta")
            );

            datos[DATOS_CURSO.profesore.self][indice] = { 
                [DATOS_CURSO.profesore.nombre]: nuevoNombre, 
                [DATOS_CURSO.profesore.apellido]: nuevoApellido ,
            };
            break;

        case DATOS_CURSO.profesore.self: 
            datos[DATOS_CURSO.profesore.self].push({
                [DATOS_CURSO.profesore.apellido]: await preguntar.prompt(
                    tp, "Apellido del profesore",
                    error.Quit("No se ingresa el apellido del profesore de forma correcta")
                ),
                [DATOS_CURSO.profesore.nombre]: await preguntar.prompt(
                    tp, "Nombre del profesore",
                    error.Quit("No se ingresa el nombre del profesore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_AUTOR: 
            datos[DATOS_CURSO.profesore.self].pop();
            break;

        case DATOS_CURSO.fecha:
            datos[DATOS_CURSO.fecha] = await preguntar.numero(
                tp, datos[DATOS_CURSO.fecha] 
                    ? `Nuevo año de creación, donde antes era ${datos[DATOS_CURSO.fecha]}`
                    : "Año de creación del curso",
                error.Quit("No se ingresó año de creación del curso")
            );
            break;

        case DATOS_CURSO.nombre:
            let nombreCurso = await preguntar.prompt(
                tp, datos[DATOS_CURSO.nombre]
                    ? `Nuevo nombre del curso, donde antes era ${datos[DATOS_CURSO.nombre]}`
                    : "Nombre del curso",
                error.Quit("No se ingresó el nombre del curso")
            );

            const dv = app.plugins.plugins.dataview.api;
            let cursoExistente = dv.pages(`#${TAGS_CURSO.self}/${TAGS_CURSO.curso}`)
                .find(curso => curso[DATOS_ARCHIVO_CURSO.nombre] == nombreCurso);

            if (cursoExistente || CARACTERES_INVALIDOS.some(caracterInvalido => nombreCurso.includes(caracterInvalido)))
                throw error.Quit("Nombre de curso invalido");

            datos[DATOS_CURSO.nombre] = nombreCurso;
            break;

        case DATOS_CURSO.pagina:
            datos[DATOS_CURSO.pagina] = await preguntar.prompt(
                tp, datos[DATOS_CURSO.pagina]
                    ? `Nuevo nombre de la página del curso, donde antes era ${datos[DATOS_CURSO.pagina]}`
                    : "Nombre de la página del curso",
                error.Quit("No se ingresó el nombre de la página del curso")
            );
            break;

        case DATOS_CURSO.url: 
            datos[DATOS_CURSO.url] = await preguntar.prompt(
                tp, datos[DATOS_CURSO.url] 
                    ? `Nuevo URL de la página, donde antes era ${datos[DATOS_CURSO.url]}` 
                    : "URL de la página",
                error.Quit("No se ingresó el url de la página")
            );
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { SIMBOLOS, DATOS: { REFERENCIAS: { curso: DATOS_CURSO } } } = tp.user.constantes();
    let opciones = [];
    let valores = [];

    for (let [indice, profesore] of datos[DATOS_CURSO.profesore.self].entries()) {
        let { [DATOS_CURSO.profesore.nombre]:nombre, [DATOS_CURSO.profesore.apellido]:apellido } = profesore;
        opciones.push(`${MODIFICAR_AUTOR}-${indice}`);
        valores.push(`️ ️${SIMBOLOS.modificar}️ Modificar el profesore ${nombre} ${apellido}`);
    }

    let cantidadAutores = datos[DATOS_CURSO.profesore.self].length;
    if (cantidadAutores == 0) {
        opciones.push(DATOS_CURSO.profesore.self);
        valores.push(` ${SIMBOLOS.agregar} Nombre del profesore`);

    } else {
        let { 
            [DATOS_CURSO.profesore.nombre]:nombre, 
            [DATOS_CURSO.profesore.apellido]:apellido 
        } = datos[DATOS_CURSO.profesore.self][cantidadAutores - 1];

        opciones.push(ELIMINAR_AUTOR);
        valores.push(` ${SIMBOLOS.sacar} Eliminar ${nombre} ${apellido}`);

        opciones.push(DATOS_CURSO.profesore.self);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Nombre del profesore`);
    }

    opciones.push(DATOS_CURSO.nombre);
    valores.push(datos[DATOS_CURSO.nombre]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar el nombre del curso, donde era ${datos[DATOS_CURSO.nombre]}`
        : ` ${SIMBOLOS.agregar} Nombre del curso`
    );

    opciones.push(DATOS_CURSO.pagina);
    valores.push(datos[DATOS_CURSO.pagina]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar el nombre de la página del curso, donde era ${datos[DATOS_CURSO.pagina]}`
        : ` ${SIMBOLOS.agregar} Nombre de la página del curso`
    );

    opciones.push(DATOS_CURSO.fecha);
    valores.push(datos[DATOS_CURSO.fecha]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar el año de creación del curso, donde era ${datos[DATOS_CURSO.fecha]}`
        : ` ${SIMBOLOS.agregar} Año de creación del curso`
    );

    opciones.push(DATOS_CURSO.url);
    valores.push(datos[DATOS_CURSO.url]
        ? `️ ️${SIMBOLOS.modificar} Modificar el URL, donde era ${datos[DATOS_CURSO.url]}`
        : ` ${SIMBOLOS.agregar} URL de la página`
    );

    let DATOS_SIMPLES = [DATOS_CURSO.fecha, DATOS_CURSO.nombre, DATOS_CURSO.pagina, DATOS_CURSO.url];
    if (datos[DATOS_CURSO.profesore.self].length > 0 && DATOS_SIMPLES.every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { DATOS: { REFERENCIAS: { curso: DATOS_CURSO } } } = tp.user.constantes();
    let autores = [];
    for (let { [DATOS_CURSO.profesore.nombre]: nombre, [DATOS_CURSO.profesore.apellido]: apellido } of datos[DATOS_CURSO.profesore.self]) {
        autores.push(`${apellido}, ${nombre[0]}.`);
    }

    return `${datos[DATOS_CURSO.nombre]} de ${autores.join(", ")}, publicado en ${datos[DATOS_CURSO.pagina]}`;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { REFERENCIAS: { curso: DATOS_CURSO } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_CURSO.profesore.self]: crearFuncion(TIPOS_DE_DEFAULT.array, () => {
                return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                    [DATOS_CURSO.profesore.nombre]: TIPOS_DE_DEFAULT.simple,
                    [DATOS_CURSO.profesore.apellido]: TIPOS_DE_DEFAULT.simple,
                }));
            }),
            [DATOS_CURSO.fecha]: TIPOS_DE_DEFAULT.simple,
            [DATOS_CURSO.nombre]: TIPOS_DE_DEFAULT.simple,
            [DATOS_CURSO.pagina]: TIPOS_DE_DEFAULT.simple,
            [DATOS_CURSO.url]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});