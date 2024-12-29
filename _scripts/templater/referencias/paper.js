const AUTORES = "autores";
const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";
const TITULO_INFORME = "tituloInforme";
const SUBTITULO_INFORME = "subtituloInforme";
const ANIO = "anio";
const NOMBRE_REVISTA = "nombreRevista";
const VOLUMEN_REVISTA = "volumenRevista";
const PAGINAS = "paginas";
const NUMERO_INFORME = "numeroInforme";
const EDITORES = "editores";
const MODIFICAR_EDITORE = "modificar editore";
const ELIMINAR_EDITORE = "eliminar editore";
const URL = "url";
const DOI = "doi";

const SALIR = "salir";

const DATOS_SIMPLES = [TITULO_INFORME, ANIO, NOMBRE_REVISTA, VOLUMEN_REVISTA, PAGINAS, NUMERO_INFORME];

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case MODIFICAR_AUTOR:
            indice = separacion[1];
            let { nombre: viejoNombre, apellido: viejoApellido } = datos[AUTORES][indice];

            let nuevoApellido = await preguntar.simple(
                tp, `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.simple(
                tp, `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[AUTORES][indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
            break;

        case AUTORES:
            datos[AUTORES].push({
                apellido: await preguntar.simple(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                nombre: await preguntar.simple(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_AUTOR:
            datos[AUTORES].pop();
            break;

        case TITULO_INFORME:
            datos[TITULO_INFORME] = await preguntar.simple(
                tp, datos[TITULO_INFORME] 
                    ? `Nuevo título del paper, donde antes era ${datos[TITULO_INFORME]}` 
                    : "Título del paper",
                error.Quit("No se ingresó nombre del paper")
            );
            break;

        case SUBTITULO_INFORME:
            datos[SUBTITULO_INFORME] = await preguntar.simple(
                tp, datos[SUBTITULO_INFORME] 
                    ? `Nuevo subtítulo del paper, donde antes era ${datos[SUBTITULO_INFORME]}` 
                    : "Subtítulo del paper",
                error.Quit("No se ingresó nombre del paper")
            );
            break;

        case ANIO:
            datos[ANIO] = await preguntar.numero(
                tp, datos[ANIO] 
                    ? `Nuevo año de publicación, donde antes era ${datos[ANIO]}`
                    : "Año de publicación",
                error.Quit("No se ingresó año de publicación")
            );
            break;

        case NOMBRE_REVISTA:
            datos[NOMBRE_REVISTA] = await preguntar.simple(
                tp, datos[NOMBRE_REVISTA] 
                    ? `Nuevo nombre de la revista, donde antes era ${datos[NOMBRE_REVISTA]}` 
                    : "Nombre de la revista en la que se publicó",
                error.Quit("No se ingresó nombre de la revista")
            );
            break;

        case VOLUMEN_REVISTA:
            datos[VOLUMEN_REVISTA] = await preguntar.simple(
                tp, datos[VOLUMEN_REVISTA]
                    ? `Nuevo volumen de la revista, donde antes era ${datos[VOLUMEN_REVISTA]}`
                    : "Volumen de la revista",
                error.Quit("No se ingresó el volumen de la revista")
            );
            break;

        case PAGINAS:
            let inicioPaginas = await preguntar.numero(
                tp, datos[PAGINAS]
                    ? `Nueva página de inicio del paper, donde antes era ${datos[PAGINAS].inicio}`
                    : "Página de inicio del paper",
                error.Quit("No se ingresó el inicio del paper")
            );

            if (parseInt(inicioPaginas, 10) < 0) {
                throw error.Quit("El inicio es un valor negativo");
            }

            let finalPaginas = await preguntar.numero(
                tp, datos[PAGINAS]
                    ? `Nueva página final del paper, donde antes era ${datos[PAGINAS].final}`
                    : "Página final del paper",
                error.Quit("No se ingresó el final del paper")
            );

            if (parseInt(finalPaginas, 10) < parseInt(inicioPaginas, 10)) {
                throw error.Quit("Termina antes de lo que empieza, la página final es más chica que el inicio");
            }

            datos[PAGINAS] = { inicio: inicioPaginas, final: finalPaginas };
            break;

        case NUMERO_INFORME:
            datos[NUMERO_INFORME] = await preguntar.numero(
                tp, datos[NUMERO_INFORME] 
                    ? `Nuevo número (el issue) del informe, donde antes era ${datos[NUMERO_INFORME]}` 
                    : "Número del informe (el issue)",
                error.Quit("No se ingresó número del informe")
            );
            break;

        case MODIFICAR_EDITORE:
            indice = separacion[1];
            let { nombre: viejoNombreEditore, apellido: viejoApellidoEditore } = datos[EDITORES][indice];

            let nuevoApellidoEditore = await preguntar.simple(
                tp, `Nuevo apellido del editore, donde antes era ${viejoApellidoEditore}:`,
                error.Quit("No se ingresa el apellido del editore de forma correcta")
            );

            let nuevoNombreEditore = await preguntar.simple(
                tp, `Nuevo nombre del editore, donde antes era ${viejoNombreEditore}:`,
                error.Quit("No se ingresa el nombre del editore de forma correcta")
            );

            datos[EDITORES][indice] = { nombre: nuevoNombreEditore, apellido: nuevoApellidoEditore };
            break;
        
        case EDITORES:
            datos[EDITORES].push({
                apellido: await preguntar.simple(
                    tp, "Apellido del editore",
                    error.Quit("No se ingresa el apellido del editore de forma correcta")
                ),
                nombre: await preguntar.simple(
                    tp, "Nombre del editore",
                    error.Quit("No se ingresa el nombre del editore de forma correcta")
                ),
            });
            break;
        
        case ELIMINAR_EDITORE:
            datos[EDITORES].pop();
            break;

        case URL:
            datos[URL] = await preguntar.simple(
                tp, datos[URL] 
                    ? `Nuevo URL del paper, donde antes era ${datos[URL]}` 
                    : "URL del paper",
                error.Quit("No se ingresó el url del paper")
            );
            datos[DOI] = null;
            break;

        case DOI:
            datos[DOI] = await preguntar.simple(
                tp, datos[DOI] 
                    ? `Nuevo DOI del paper, donde antes era ${datos[DOI]}` 
                    : "DOI de la página",
                error.Quit("No se ingresó el doi del paper")
            );
            datos[URL] = null;
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    let opciones = [];
    let valores = [];

    for (let [indice, autor] of datos[AUTORES].entries()) {
        let { nombre, apellido } = autor;
        opciones.push(`${MODIFICAR_AUTOR}-${indice}`);
        valores.push(`️ ️✏️ Modificar el autore ${nombre} ${apellido}`);
    }

    let cantidadAutores = datos[AUTORES].length;
    if (cantidadAutores == 0) {
        opciones.push(AUTORES);
        valores.push(" ⊕ Nombre del autore");
    } else {
        let { nombre, apellido } = datos[AUTORES][cantidadAutores - 1];
        opciones.push(ELIMINAR_AUTOR);
        valores.push(` ⊖ Eliminar ${nombre} ${apellido}`);

        opciones.push(AUTORES);
        valores.push(" ⊕ (opcional) Nombre del autore");
    }

    opciones.push(ANIO);
    valores.push(datos[ANIO]
        ? `️ ️✏️ Modificar el año de publicación ${datos[ANIO]}`
        : " ⊕ Año de publicación del paper"
    );

    opciones.push(TITULO_INFORME);
    if (datos[TITULO_INFORME]) {
        valores.push(`️✏️ Modificar el título del paper, donde era ${datos[TITULO_INFORME]}`);

        opciones.push(SUBTITULO_INFORME);
        valores.push(datos[SUBTITULO_INFORME]
            ? ` └-> ✏️ Modificar el subtítulo del paper, donde era ${datos[SUBTITULO_INFORME]}`
            : " └-> ⊕ (opcional) Subtítulo del paper"
        );

    } else {
        valores.push(" ⊕ Título del paper");
    }

    opciones.push(NOMBRE_REVISTA);
    if (datos[NOMBRE_REVISTA]) {
        valores.push(`️✏️ Modificar el nombre de la revista, donde era ${datos[NOMBRE_REVISTA]}`);

        opciones.push(VOLUMEN_REVISTA);
        if (datos[VOLUMEN_REVISTA]) {
            valores.push(` └->️✏️ Modificar el volumen de la revista, donde era ${datos[VOLUMEN_REVISTA]}`);

            opciones.push(NUMERO_INFORME);
            if (datos[NUMERO_INFORME]) {
                valores.push(`     └->️✏️ Modificar el número de la revista, donde era ${datos[NUMERO_INFORME]}`);

                opciones.push(PAGINAS);
                valores.push(datos[PAGINAS]
                    ? `         └-> ✏️ Modificar las páginas del paper, donde era ${datos[PAGINAS].inicio} - ${datos[PAGINAS].final}`
                    : "         └-> ⊕ Número de páginas del paper"
                );

            } else {
                valores.push("     └-> ⊕ Número de la revista");
            }

        } else {
            valores.push(" └-> ⊕ Volumen de la revista");
        }

    } else {
        valores.push(" ⊕ Nombre de la revista");
    }


    for (let [indice, autor] of datos[EDITORES].entries()) {
        let { nombre, apellido } = autor;
        opciones.push(`${MODIFICAR_EDITORE}-${indice}`);
        valores.push(`️ ️✏️ Modificar el editore ${nombre} ${apellido}`);
    }

    let cantidadEditres = datos[EDITORES].length;
    if (cantidadEditres == 0) {
        opciones.push(EDITORES);
        valores.push(" ⊕ (opcional) Nombre del editore");
    } else {
        let { nombre, apellido } = datos[EDITORES][cantidadEditres - 1];
        opciones.push(ELIMINAR_EDITORE);
        valores.push(` ⊖ Eliminar ${nombre} ${apellido}`);

        opciones.push(EDITORES);
        valores.push(" ⊕ (opcional) Nombre del editore");
    }

    opciones.push(URL);
    valores.push(datos[URL]
        ? ` ┌-> ✏️ Modificar el URL del paper, donde era ${datos[URL]}`
        : ` ┌-> ⊕ ${datos[DOI] ? "(opcional) " : ""}URL del paper`
    );

    opciones.push(DOI);
    valores.push(datos[DOI]
        ? ` └-> ✏️ Modificar el DOI del paper, donde era ${datos[DOI]}`
        : ` └-> ⊕ ${datos[URL] ? "(opcional) " : ""}DOI del paper`
    );

    let tieneAutores = datos[AUTORES].length > 0;
    let tieneLink = datos[DOI] || datos[URL];

    if (tieneAutores && tieneLink && DATOS_SIMPLES.every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    let autores = [];
    for (let { nombre, apellido } of datos[AUTORES]) {
        autores.push(`${nombre} ${apellido}`);
    }

    return `${datos[TITULO_INFORME]} de ${autores.join(", ")}`;
}

module.exports = () => ({
    obtenerDefault: () => ({
        [AUTORES]: [],
        [TITULO_INFORME]: null,
        [SUBTITULO_INFORME]: null,
        [NOMBRE_REVISTA]: null,
        [VOLUMEN_REVISTA]: null,
        [NUMERO_INFORME]: null,
        [PAGINAS]: null,
        [ANIO]: null,
        [EDITORES]: [],
        [URL]: null,
        [DOI]: null,
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});