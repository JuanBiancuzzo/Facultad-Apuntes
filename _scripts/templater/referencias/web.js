const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { DATOS: { REFERENCIAS: { web: DATOS_WEB } } } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case MODIFICAR_AUTOR: 
            indice = separacion[1];
            let { 
                [DATOS_WEB.autore.nombre]: viejoNombre, 
                [DATOS_WEB.autore.apellido]: viejoApellido 
            } = datos[DATOS_WEB.autore.self][indice];

            let nuevoApellido = await preguntar.prompt(
                tp, `Nuevo apellido, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.prompt(
                tp, `Nuevo nombre, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[DATOS_WEB.autore.self][indice] = { 
                [DATOS_WEB.autore.nombre]: nuevoNombre, 
                [DATOS_WEB.autore.apellido]: nuevoApellido 
            };
            break;

        case DATOS_WEB.autore.self: 
            datos[DATOS_WEB.autore.self].push({
                [DATOS_WEB.autore.apellido]: await preguntar.prompt(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                [DATOS_WEB.autore.nombre]: await preguntar.prompt(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_AUTOR: 
            datos[DATOS_WEB.autore.self].pop();
            break;

        case DATOS_WEB.fecha: 
            datos[DATOS_WEB.fecha] = await preguntar.fecha(
                tp, datos[DATOS_WEB.fecha] 
                    ? `Nueva fecha de publicación, donde antes era ${describir.fecha(tp, datos[DATOS_WEB.fecha])}` 
                    : "Fecha de publicación de la página", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha de publicación de la página")
            );
            break;

        case DATOS_WEB.titulo: 
            datos[DATOS_WEB.titulo] = await preguntar.prompt(
                tp, datos[DATOS_WEB.titulo] 
                    ? `Nuevo título del artículo, donde antes era ${datos[DATOS_WEB.titulo]}` 
                    : "Título del artículo",
                error.Quit("No se ingresó nombre del artículo")
            );
            break;

        case DATOS_WEB.pagina: 
            datos[DATOS_WEB.pagina] = await preguntar.prompt(
                tp, datos[DATOS_WEB.pagina] 
                    ? `Nuevo nombre de la página, donde antes era ${datos[DATOS_WEB.pagina]}` 
                    : "Nombre de la página",
                error.Quit("No se ingresó nombre de la página")
            );
            break;

        case DATOS_WEB.url: 
            datos[DATOS_WEB.url] = await preguntar.prompt(
                tp, datos[DATOS_WEB.url] 
                    ? `Nuevo URL de la página, donde antes era ${datos[DATOS_WEB.url]}` 
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
    const { SIMBOLOS, DATOS: { REFERENCIAS: { web: DATOS_WEB } } } = tp.user.constantes();
    const describir = tp.user.describir();

    let opciones = [];
    let valores = [];

    for (let [indice, autor] of datos[DATOS_WEB.autore.self].entries()) {
        let { 
            [DATOS_WEB.autore.nombre]: nombre, 
            [DATOS_WEB.autore.apellido]: apellido 
        } = autor;

        opciones.push(`${MODIFICAR_AUTOR}-${indice}`);
        valores.push(`️ ️️${SIMBOLOS.modificar} Modificar el autore ${nombre} ${apellido}`);
    }

    let cantidadAutores = datos[DATOS_WEB.autore.self].length;
    if (cantidadAutores == 0) {
        opciones.push(DATOS_WEB.autore.self);
        valores.push(` ${SIMBOLOS.agregar} Nombre del autore`);
    } else {
        let { 
            [DATOS_WEB.autore.nombre]: nombre, 
            [DATOS_WEB.autore.apellido]: apellido 
        } = datos[DATOS_WEB.autore.self][cantidadAutores - 1];
        opciones.push(ELIMINAR_AUTOR);
        valores.push(` ${SIMBOLOS.sacar} Eliminar ${nombre} ${apellido}`);

        opciones.push(DATOS_WEB.autore.self);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Nombre del autore`);
    }

    opciones.push(DATOS_WEB.fecha);
    valores.push(datos[DATOS_WEB.fecha]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar la fecha de publicación, donde era ${describir.fecha(tp, datos[DATOS_WEB.fecha])}`
        : ` ${SIMBOLOS.agregar} Fecha de publicación`
    );

    opciones.push(DATOS_WEB.titulo);
    valores.push(datos[DATOS_WEB.titulo]
        ? `️ ️${SIMBOLOS.modificar} Modificar el título del artículo, donde era ${datos[DATOS_WEB.titulo]}`
        : ` ${SIMBOLOS.agregar} Título del artículo`
    );

    opciones.push(DATOS_WEB.pagina);
    valores.push(datos[DATOS_WEB.pagina]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar el nombre de la página, donde era ${datos[DATOS_WEB.pagina]}`
        : ` ${SIMBOLOS.agregar} Nombre de la página`
    );

    opciones.push(DATOS_WEB.url);
    valores.push(datos[DATOS_WEB.url]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar el URL, donde era ${datos[DATOS_WEB.url]}`
        : ` ${SIMBOLOS.agregar} URL de la página`
    );

    const DATOS_SIMPLES = [ DATOS_WEB.fecha, DATOS_WEB.titulo, DATOS_WEB.pagina, DATOS_WEB.url ];
    if (datos[DATOS_WEB.autore.self].length > 0 && DATOS_SIMPLES.every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { DATOS: { REFERENCIAS: { web: DATOS_WEB } } } = tp.user.constantes();

    let autores = [];
    for (let { [DATOS_WEB.autore.nombre]: nombre, [DATOS_WEB.autore.apellido]: apellido } of datos[DATOS_WEB.autore.self]) {
        autores.push(`${apellido}, ${nombre[0]}.`);
    }

    return `${datos[DATOS_WEB.titulo]} de ${autores.join(", ")}, publicado en ${datos[DATOS_WEB.pagina]}`;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { REFERENCIAS: { web: DATOS_WEB } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_WEB.autore.self]: crearFuncion(TIPOS_DE_DEFAULT.array, () => {
                return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                    [DATOS_WEB.autore.nombre]: TIPOS_DE_DEFAULT.simple,
                    [DATOS_WEB.autore.apellido]: TIPOS_DE_DEFAULT.simple,
                }));
            }),
            [DATOS_WEB.fecha]: TIPOS_DE_DEFAULT.simple,
            [DATOS_WEB.titulo]: TIPOS_DE_DEFAULT.simple,
            [DATOS_WEB.pagina]: TIPOS_DE_DEFAULT.simple,
            [DATOS_WEB.url]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});