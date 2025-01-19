const MODIFICAR_EDITORES = "modificar editores";
const ELIMINAR_EDITORE = "eliminar editores";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { DATOS: { REFERENCIAS: { capituloLibro: DATOS_CAPITULO } } } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case DATOS_CAPITULO.numero:
            datos[DATOS_CAPITULO.numero] = await preguntar.numero(
                tp, datos[DATOS_CAPITULO.numero] 
                    ? `Nuevo número del capítulo, donde antes era ${datos[DATOS_CAPITULO.numero]}`
                    : "Número del capítulo",
                error.Quit("No se ingresó el número del capítulo")
            );
            break;

        case DATOS_CAPITULO.nombre:
            datos[DATOS_CAPITULO.nombre] = await preguntar.prompt(
                tp, datos[DATOS_CAPITULO.nombre]
                    ? `Nuevo nombre del capítulo, donde antes era ${datos[DATOS_CAPITULO.nombre]}`
                    : "Nombre del capítulo",
                error.Quit("No se ingresó el nombre del capítulo")
            )
            break;

        case MODIFICAR_EDITORES:
            indice = separacion[1];
            let { 
                [DATOS_CAPITULO.editore.nombre]: viejoNombre, 
                [DATOS_CAPITULO.editore.apellido]: viejoApellido 
            } = datos[DATOS_CAPITULO.editore.self][indice];

            let nuevoApellido = await preguntar.prompt(
                tp, `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.prompt(
                tp, `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[DATOS_CAPITULO.editore.self][indice] = { 
                [DATOS_CAPITULO.editore.nombre]: nuevoNombre, 
                [DATOS_CAPITULO.editore.apellido]: nuevoApellido 
            };
            break;

        case DATOS_CAPITULO.editore.self:
            datos[DATOS_CAPITULO.editore.self].push({
                [DATOS_CAPITULO.editore.apellido]: await preguntar.prompt(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                [DATOS_CAPITULO.editore.nombre]: await preguntar.prompt(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_EDITORE:
            datos[DATOS_CAPITULO.editore.self].pop();
            break;

        case DATOS_CAPITULO.paginas.self:
            let paginas = datos[DATOS_CAPITULO.paginas.self];

            let inicioPaginas = await preguntar.numero(
                tp, paginas[DATOS_CAPITULO.paginas.inicio]
                    ? `Nueva página de inicio del capitulo, donde antes era ${paginas[DATOS_CAPITULO.paginas.inicio]}`
                    : "Página de inicio del capitulo",
                error.Quit("No se ingresó el inicio del capitulo")
            );

            if (parseInt(inicioPaginas, 10) < 0) {
                throw error.Quit("El inicio es un valor negativo");
            }

            let finalPaginas = await preguntar.numero(
                tp, paginas[DATOS_CAPITULO.paginas.final]
                    ? `Nueva página final del capitulo, donde antes era ${paginas[DATOS_CAPITULO.paginas.final]}`
                    : "Página final del capitulo",
                error.Quit("No se ingresó el final del capitulo")
            );

            if (parseInt(finalPaginas, 10) < parseInt(inicioPaginas, 10)) {
                throw error.Quit("Termina antes de lo que empieza, la página final es más chica que el inicio");
            }

            datos[DATOS_CAPITULO.paginas.self] = { 
                [DATOS_CAPITULO.paginas.inicio]: inicioPaginas, 
                [DATOS_CAPITULO.paginas.final]: finalPaginas 
            };
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { 
        SIMBOLOS,
        DATOS: { REFERENCIAS: { capituloLibro: DATOS_CAPITULO } },
    } = tp.user.constantes();

    let opciones = [];
    let valores = [];

    opciones.push(DATOS_CAPITULO.numero);
    valores.push(datos[DATOS_CAPITULO.numero]
        ? ` ️${SIMBOLOS.modificar} Modificar el número del capítulo, donde era ${datos[DATOS_CAPITULO.numero]}`
        : ` ${SIMBOLOS.agregar} Número del capítulo`
    );

    opciones.push(DATOS_CAPITULO.nombre);
    valores.push(datos[DATOS_CAPITULO.nombre]
        ? `️ ${SIMBOLOS.modificar} Modificar el nombre del capítulo, donde era ${datos[DATOS_CAPITULO.nombre]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Nombre del capítulo`
    );

    for (let [indice, editore] of datos[DATOS_CAPITULO.editore.self].entries()) {
        let { [DATOS_CAPITULO.editore.nombre]: nombre, [DATOS_CAPITULO.editore.apellido]: apellido } = editore;
        opciones.push(`${MODIFICAR_EDITORES}-${indice}`);
        valores.push(`️️ ${SIMBOLOS.modificar} Modificar el editore ${nombre} ${apellido}`);
    }

    let cantidadEditores = datos[DATOS_CAPITULO.editore.self].length;
    if (cantidadEditores > 0) {
        let { 
            [DATOS_CAPITULO.editore.nombre]: nombre, 
            [DATOS_CAPITULO.editore.apellido]: apellido 
        } = datos[DATOS_CAPITULO.editore.self][cantidadEditores - 1];

        opciones.push(ELIMINAR_EDITORE);
        valores.push(` ${SIMBOLOS.sacar} Eliminar ${nombre} ${apellido}`);
    }
    opciones.push(DATOS_CAPITULO.editore.self);
    valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Nombre del editore`);

    let paginas = datos[DATOS_CAPITULO.paginas.self];
    opciones.push(DATOS_CAPITULO.paginas.self);
    valores.push((paginas[DATOS_CAPITULO.paginas.inicio] && paginas[DATOS_CAPITULO.paginas.final])
        ? ` ${SIMBOLOS.modificar} Modificar las páginas del capítulo, donde era ${paginas[DATOS_CAPITULO.paginas.inicio]} - ${paginas[DATOS_CAPITULO.paginas.final]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Número de páginas del capítulo`
    );

    if (datos[DATOS_CAPITULO.numero]) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { 
        REFERENCIAS: { libro: REF_LIBRO },
        DATOS: { REFERENCIAS: { capituloLibro: DATOS_CAPITULO } },
    } = tp.user.constantes();

    let textoCapitulo = `Capítulo ${datos[DATOS_CAPITULO.numero]}`;
    if (datos[DATOS_CAPITULO.nombre]) textoCapitulo += `: ${datos[DATOS_CAPITULO.nombre]}`;
    if (datos[DATOS_CAPITULO.paginas.self]) {
        let paginas = datos[DATOS_CAPITULO.paginas.self];
        textoCapitulo += ` p. ${paginas[DATOS_CAPITULO.paginas.inicio]}-${paginas[DATOS_CAPITULO.paginas.final]}`;
    }

    let libro = datos[REF_LIBRO];
    textoCapitulo += ` del libro ${tp.user.libro().describir(tp, libro)}`;

    return textoCapitulo;
}

function describirReducido(tp, datos) {
    const { DATOS: { REFERENCIAS: { capituloLibro: DATOS_CAPITULO } } } = tp.user.constantes();

    let textoCapitulo = `Capítulo ${datos[DATOS_CAPITULO.numero]}`;
    if (datos[DATOS_CAPITULO.nombre]) textoCapitulo += `: ${datos[DATOS_CAPITULO.nombre]}`;

    return textoCapitulo;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const {
            DATOS: { REFERENCIAS: { numReferencia: NUM_REFERENCIA, capituloLibro: DATOS_CAPITULO } },
        } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [NUM_REFERENCIA]: TIPOS_DE_DEFAULT.simple,
            [DATOS_CAPITULO.numero]: TIPOS_DE_DEFAULT.simple,
            [DATOS_CAPITULO.nombre]: TIPOS_DE_DEFAULT.simple,
            [DATOS_CAPITULO.editore.self]: crearFuncion(TIPOS_DE_DEFAULT.array, () => {
                return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                    [DATOS_CAPITULO.editore.nombre]: TIPOS_DE_DEFAULT.simple,
                    [DATOS_CAPITULO.editore.apellido]: TIPOS_DE_DEFAULT.simple,
                }));
            }),
            [DATOS_CAPITULO.paginas.self]: crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                [DATOS_CAPITULO.paginas.inicio]: TIPOS_DE_DEFAULT.simple,
                [DATOS_CAPITULO.paginas.final]: TIPOS_DE_DEFAULT.simple,
            })),
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    describirReducido: describirReducido,
});