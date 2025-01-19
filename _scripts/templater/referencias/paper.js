const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";
const MODIFICAR_EDITORE = "modificar editore";
const ELIMINAR_EDITORE = "eliminar editore";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { DATOS: { REFERENCIAS: { paper: DATOS_PAPER } } } = tp.user.constantes();
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
                [DATOS_PAPER.autore.nombre]: viejoNombre, 
                [DATOS_PAPER.autore.apellido]: viejoApellido 
            } = datos[DATOS_PAPER.autore.self][indice];

            let nuevoApellido = await preguntar.prompt(
                tp, `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.prompt(
                tp, `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[DATOS_PAPER.autore.self][indice] = { 
                [DATOS_PAPER.autore.nombre]: nuevoNombre, 
                [DATOS_PAPER.autore.apellido]: nuevoApellido 
            };
            break;

        case DATOS_PAPER.autore.self:
            datos[DATOS_PAPER.autore.self].push({
                [DATOS_PAPER.autore.apellido]: await preguntar.prompt(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                [DATOS_PAPER.autore.nombre]: await preguntar.prompt(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_AUTOR:
            datos[DATOS_PAPER.autore.self].pop();
            break;

        case DATOS_PAPER.titulo:
            datos[DATOS_PAPER.titulo] = await preguntar.prompt(
                tp, datos[DATOS_PAPER.titulo] 
                    ? `Nuevo título del paper, donde antes era ${datos[DATOS_PAPER.titulo]}` 
                    : "Título del paper",
                error.Quit("No se ingresó nombre del paper")
            );
            break;

        case DATOS_PAPER.subtitulo:
            datos[DATOS_PAPER.subtitulo] = await preguntar.prompt(
                tp, datos[DATOS_PAPER.subtitulo] 
                    ? `Nuevo subtítulo del paper, donde antes era ${datos[DATOS_PAPER.subtitulo]}` 
                    : "Subtítulo del paper",
                error.Quit("No se ingresó nombre del paper")
            );
            break;

        case DATOS_PAPER.anio:
            datos[DATOS_PAPER.anio] = await preguntar.numero(
                tp, datos[DATOS_PAPER.anio] 
                    ? `Nuevo año de publicación, donde antes era ${datos[DATOS_PAPER.anio]}`
                    : "Año de publicación",
                error.Quit("No se ingresó año de publicación")
            );
            break;

        case DATOS_PAPER.nombreRevista:
            datos[DATOS_PAPER.nombreRevista] = await preguntar.prompt(
                tp, datos[DATOS_PAPER.nombreRevista] 
                    ? `Nuevo nombre de la revista, donde antes era ${datos[DATOS_PAPER.nombreRevista]}` 
                    : "Nombre de la revista en la que se publicó",
                error.Quit("No se ingresó nombre de la revista")
            );
            break;

        case DATOS_PAPER.volumenRevista:
            datos[DATOS_PAPER.volumenRevista] = await preguntar.prompt(
                tp, datos[DATOS_PAPER.volumenRevista]
                    ? `Nuevo volumen de la revista, donde antes era ${datos[DATOS_PAPER.volumenRevista]}`
                    : "Volumen de la revista",
                error.Quit("No se ingresó el volumen de la revista")
            );
            break;

        case DATOS_PAPER.paginas.self:
            let paginas = datos[DATOS_PAPER.paginas.self];
            let inicioPaginas = await preguntar.numero(
                tp, paginas[DATOS_PAPER.paginas.inicio]
                    ? `Nueva página de inicio del paper, donde antes era ${paginas[DATOS_PAPER.paginas.inicio]}`
                    : "Página de inicio del paper",
                error.Quit("No se ingresó el inicio del paper")
            );

            if (parseInt(inicioPaginas, 10) < 0) {
                throw error.Quit("El inicio es un valor negativo");
            }

            let finalPaginas = await preguntar.numero(
                tp, paginas[DATOS_PAPER.paginas.final]
                    ? `Nueva página final del paper, donde antes era ${paginas[DATOS_PAPER.paginas.final]}`
                    : "Página final del paper",
                error.Quit("No se ingresó el final del paper")
            );

            if (parseInt(finalPaginas, 10) < parseInt(inicioPaginas, 10)) {
                throw error.Quit("Termina antes de lo que empieza, la página final es más chica que el inicio");
            }

            datos[DATOS_PAPER.paginas.self] = { 
                [DATOS_PAPER.paginas.inicio]: inicioPaginas, 
                [DATOS_PAPER.paginas.final]: finalPaginas 
            };
            break;

        case DATOS_PAPER.numeroRevista:
            datos[DATOS_PAPER.numeroRevista] = await preguntar.numero(
                tp, datos[DATOS_PAPER.numeroRevista] 
                    ? `Nuevo número (el issue) del informe, donde antes era ${datos[DATOS_PAPER.numeroRevista]}` 
                    : "Número del informe (el issue)",
                error.Quit("No se ingresó número del informe")
            );
            break;

        case MODIFICAR_EDITORE:
            indice = separacion[1];
            let { 
                [DATOS_PAPER.editore.nombre]: viejoNombreEditore, 
                [DATOS_PAPER.editore.apellido]: viejoApellidoEditore,
            } = datos[DATOS_PAPER.editore.self][indice];

            let nuevoApellidoEditore = await preguntar.prompt(
                tp, `Nuevo apellido del editore, donde antes era ${viejoApellidoEditore}:`,
                error.Quit("No se ingresa el apellido del editore de forma correcta")
            );

            let nuevoNombreEditore = await preguntar.prompt(
                tp, `Nuevo nombre del editore, donde antes era ${viejoNombreEditore}:`,
                error.Quit("No se ingresa el nombre del editore de forma correcta")
            );

            datos[DATOS_PAPER.editore.self][indice] = { 
                [DATOS_PAPER.editore.nombre]: nuevoNombreEditore, 
                [DATOS_PAPER.editore.apellido]: nuevoApellidoEditore,
            };
            break;
        
        case DATOS_PAPER.editore.self:
            datos[DATOS_PAPER.editore.self].push({
                [DATOS_PAPER.editore.apellido]: await preguntar.prompt(
                    tp, "Apellido del editore",
                    error.Quit("No se ingresa el apellido del editore de forma correcta")
                ),
                [DATOS_PAPER.editore.nombre]: await preguntar.prompt(
                    tp, "Nombre del editore",
                    error.Quit("No se ingresa el nombre del editore de forma correcta")
                ),
            });
            break;
        
        case ELIMINAR_EDITORE:
            datos[DATOS_PAPER.editore.self].pop();
            break;

        case DATOS_PAPER.url:
            datos[DATOS_PAPER.url] = await preguntar.prompt(
                tp, datos[DATOS_PAPER.url] 
                    ? `Nuevo URL del paper, donde antes era ${datos[DATOS_PAPER.url]}` 
                    : "URL del paper",
                error.Quit("No se ingresó el url del paper")
            );
            datos[DATOS_PAPER.doi] = null;
            break;

        case DATOS_PAPER.doi:
            datos[DATOS_PAPER.doi] = await preguntar.prompt(
                tp, datos[DATOS_PAPER.doi] 
                    ? `Nuevo DOI del paper, donde antes era ${datos[DATOS_PAPER.doi]}` 
                    : "DOI de la página",
                error.Quit("No se ingresó el doi del paper")
            );
            datos[DATOS_PAPER.url] = null;
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
        DATOS: { REFERENCIAS: { paper: DATOS_PAPER } }
    } = tp.user.constantes();
    let opciones = [];
    let valores = [];

    for (let [indice, autor] of datos[DATOS_PAPER.autore.self].entries()) {
        let { 
            [DATOS_PAPER.autore.nombre]: nombre, 
            [DATOS_PAPER.autore.apellido]: apellido,
        } = autor;
        opciones.push(`${MODIFICAR_AUTOR}-${indice}`);
        valores.push(`️ ️${SIMBOLOS.agregar}️ Modificar el autore ${nombre} ${apellido}`);
    }

    let cantidadAutores = datos[DATOS_PAPER.autore.self].length;
    if (cantidadAutores == 0) {
        opciones.push(DATOS_PAPER.autore.self);
        valores.push(` ${SIMBOLOS.agregar} Nombre del autore`);
    } else {
        let { 
            [DATOS_PAPER.autore.nombre]: nombre, 
            [DATOS_PAPER.autore.apellido]: apellido,
        } = datos[DATOS_PAPER.autore.self][cantidadAutores - 1];
        opciones.push(ELIMINAR_AUTOR);
        valores.push(` ${SIMBOLOS.sacar} Eliminar ${nombre} ${apellido}`);

        opciones.push(DATOS_PAPER.autore.self);
        valores.push(` ${SIMBOLOS.agregar} (opcional) Nombre del autore`);
    }

    opciones.push(DATOS_PAPER.anio);
    valores.push(datos[DATOS_PAPER.anio]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar el año de publicación ${datos[DATOS_PAPER.anio]}`
        : ` ${SIMBOLOS.agregar} Año de publicación del paper`
    );

    opciones.push(DATOS_PAPER.titulo);
    if (datos[DATOS_PAPER.titulo]) {
        valores.push(` ${SIMBOLOS.modificar}️ Modificar el título del paper, donde era ${datos[DATOS_PAPER.titulo]}`);

        opciones.push(DATOS_PAPER.subtitulo);
        valores.push(datos[DATOS_PAPER.subtitulo]
            ? ` └-> ${SIMBOLOS.modificar} Modificar el subtítulo del paper, donde era ${datos[DATOS_PAPER.subtitulo]}`
            : ` └-> ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Subtítulo del paper`
        );

    } else {
        valores.push(` ${SIMBOLOS.agregar} Título del paper`);
    }

    opciones.push(DATOS_PAPER.nombreRevista);
    if (datos[DATOS_PAPER.nombreRevista]) {
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el nombre de la revista, donde era ${datos[DATOS_PAPER.nombreRevista]}`);

        opciones.push(DATOS_PAPER.volumenRevista);
        if (datos[DATOS_PAPER.volumenRevista]) {
            valores.push(` └->️ ${SIMBOLOS.modificar} Modificar el volumen de la revista, donde era ${datos[DATOS_PAPER.volumenRevista]}`);

            opciones.push(DATOS_PAPER.numeroRevista);
            if (datos[DATOS_PAPER.numeroRevista]) {
                valores.push(`     └->️ ${SIMBOLOS.modificar}️ Modificar el número de la revista, donde era ${datos[DATOS_PAPER.numeroRevista]}`);

                let paginas = datos[DATOS_PAPER.paginas.self];
                opciones.push(DATOS_PAPER.paginas.self);
                valores.push((paginas[DATOS_PAPER.paginas.inicio] && paginas[DATOS_PAPER.paginas.final])
                    ? `         └-> ${SIMBOLOS.modificar}️ Modificar las páginas del paper, donde era ${paginas[DATOS_PAPER.paginas.inicio]} - ${paginas[DATOS_PAPER.paginas.final]}`
                    : `         └-> ${SIMBOLOS.agregar} Número de páginas del paper`
                );

            } else {
                valores.push(`     └-> ${SIMBOLOS.agregar} Número de la revista`);
            }

        } else {
            valores.push(` └-> ${SIMBOLOS.agregar} Volumen de la revista`);
        }

    } else {
        valores.push(` ${SIMBOLOS.agregar} Nombre de la revista`);
    }

    for (let [indice, autor] of datos[DATOS_PAPER.editore.self].entries()) {
        let { 
            [DATOS_PAPER.editore.nombre]: nombre, 
            [DATOS_PAPER.editore.apellido]: apellido 
        } = autor;

        opciones.push(`${MODIFICAR_EDITORE}-${indice}`);
        valores.push(`️ ️${SIMBOLOS.modificar} Modificar el editore ${nombre} ${apellido}`);
    }

    let cantidadEditores = datos[DATOS_PAPER.editore.self].length;
    if (cantidadEditores == 0) {
        opciones.push(DATOS_PAPER.editore.self);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Nombre del editore`);
    } else {
        let { 
            [DATOS_PAPER.editore.nombre]: nombre, 
            [DATOS_PAPER.editore.nombre]: apellido 
        } = datos[DATOS_PAPER.editore.self][cantidadEditores - 1];

        opciones.push(ELIMINAR_EDITORE);
        valores.push(` ${SIMBOLOS.sacar} Eliminar ${nombre} ${apellido}`);

        opciones.push(DATOS_PAPER.editore.self);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Nombre del editore`);
    }

    opciones.push(DATOS_PAPER.url);
    valores.push(datos[DATOS_PAPER.url]
        ? ` ┌-> ${SIMBOLOS.modificar}️ Modificar el URL del paper, donde era ${datos[DATOS_PAPER.url]}`
        : ` ┌-> ${SIMBOLOS.agregar} ${datos[DATOS_PAPER.doi] ? `${SIMBOLOS.opcional} ` : ``}URL del paper`
    );

    opciones.push(DATOS_PAPER.doi);
    valores.push(datos[DATOS_PAPER.doi]
        ? ` └-> ️${SIMBOLOS.modificar} Modificar el DOI del paper, donde era ${datos[DATOS_PAPER.doi]}`
        : ` └-> ${SIMBOLOS.agregar} ${datos[DATOS_PAPER.url] ? `${SIMBOLOS.opcional} ` : ""}DOI del paper`
    );

    let tieneAutores = datos[DATOS_PAPER.autore.self].length > 0;
    let tieneLink = datos[DATOS_PAPER.doi] || datos[DATOS_PAPER.url];

    const DATOS_SIMPLES = [
        DATOS_PAPER.titulo, DATOS_PAPER.anio, DATOS_PAPER.nombreRevista, 
        DATOS_PAPER.volumenRevista, DATOS_PAPER.numeroRevista
    ];
    let paginas = datos[DATOS_PAPER.paginas.self];
    if (tieneAutores && tieneLink && DATOS_SIMPLES.every(key => datos[key]) && paginas[DATOS_PAPER.paginas.inicio] && paginas[DATOS_PAPER.paginas.final]) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { DATOS: { REFERENCIAS: { paper: DATOS_PAPER } } } = tp.user.constantes();

    let autores = [];
    for (let { [DATOS_PAPER.autore.nombre]: nombre, [DATOS_PAPER.autore.nombre]: apellido } of datos[DATOS_PAPER.autore.self]) {
        autores.push(`${nombre} ${apellido}`);
    }

    let nombre = datos[DATOS_PAPER.titulo];
    if (datos[DATOS_PAPER.subtitulo]) nombre += `: ${datos[DATOS_PAPER.titulo]}`;

    return `${nombre} de ${autores.join(", ")}`;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { REFERENCIAS: { paper: DATOS_PAPER } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_PAPER.autore.self]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () =>  crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                    [DATOS_PAPER.autore.nombre]: TIPOS_DE_DEFAULT.simple,
                    [DATOS_PAPER.autore.apellido]: TIPOS_DE_DEFAULT.simple,
                })),
            ),
            [DATOS_PAPER.titulo]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PAPER.subtitulo]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PAPER.nombreRevista]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PAPER.volumenRevista]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PAPER.numeroRevista]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PAPER.paginas.self]: crearFuncion(
                TIPOS_DE_DEFAULT.diccionario, 
                () => ({
                    [DATOS_PAPER.paginas.inicio]: TIPOS_DE_DEFAULT.simple,
                    [DATOS_PAPER.paginas.final]: TIPOS_DE_DEFAULT.simple,
                })
            ),
            [DATOS_PAPER.anio]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PAPER.editore.self]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () =>  crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                    [DATOS_PAPER.editore.nombre]: TIPOS_DE_DEFAULT.simple,
                    [DATOS_PAPER.editore.apellido]: TIPOS_DE_DEFAULT.simple,
                })),
            ),
            [DATOS_PAPER.url]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PAPER.doi]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});