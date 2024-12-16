const NOMBRE_AUTORES = "nombreAutores";
const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";
const FECHA_PUBLICACION = "fechaPublicacion";
const TITULO_ARTICULO = "tituloArticulo";
const NOMBRE_PAGINA = "nombrePagina";
const URL = "url";
const SALIR = "salir";

const DATOS_SIMPLES = [ FECHA_PUBLICACION, TITULO_ARTICULO, NOMBRE_PAGINA, URL ];

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const error = tp.user.error();
    const cte = tp.user.constantes();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case MODIFICAR_AUTOR: 
            indice = separacion[1];
            let { nombre: viejoNombre, apellido: viejoApellido } = datos[NOMBRE_AUTORES][indice];

            let nuevoApellido = await preguntar.simple(
                tp, `Nuevo apellido, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.simple(
                tp, `Nuevo nombre, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[NOMBRE_AUTORES][indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
            break;

        case NOMBRE_AUTORES: 
            datos[NOMBRE_AUTORES].push({
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
            datos[NOMBRE_AUTORES].pop();
            break;

        case FECHA_PUBLICACION: 
            datos[FECHA_PUBLICACION] = await preguntar.fecha(
                tp, datos[FECHA_PUBLICACION] 
                    ? `Nueva fecha de publicación, donde antes era ${describir.fecha(datos[FECHA_PUBLICACION], cte.meses)}` 
                    : "Fecha de publicación de la página", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha de publicación de la página")
            );
            break;

        case TITULO_ARTICULO: 
            datos[TITULO_ARTICULO] = await preguntar.simple(
                tp, datos[TITULO_ARTICULO] 
                    ? `Nuevo título del artículo, donde antes era ${datos[TITULO_ARTICULO]}` 
                    : "Título del artículo",
                error.Quit("No se ingresó nombre del artículo")
            );
            break;

        case NOMBRE_PAGINA: 
            datos[NOMBRE_PAGINA] = await preguntar.simple(
                tp, datos[NOMBRE_PAGINA] 
                    ? `Nuevo nombre de la página, donde antes era ${datos[NOMBRE_PAGINA]}` 
                    : "Nombre de la página",
                error.Quit("No se ingresó nombre de la página")
            );
            break;

        case URL: 
            datos[URL] = await preguntar.simple(
                tp, datos[URL] 
                    ? `Nuevo URL de la página, donde antes era ${datos[URL]}` 
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
    const cte = tp.user.constantes();
    const describir = tp.user.describir();

    let opciones = [];
    let valores = [];

    for (let [indice, autor] of datos[NOMBRE_AUTORES].entries()) {
        let { nombre, apellido } = autor;
        opciones.push(`${MODIFICAR_AUTOR}-${indice}`);
        valores.push(`️ ️✏️ Modificar el autore ${nombre} ${apellido}`);
    }

    let cantidadAutores = datos[NOMBRE_AUTORES].length;
    if (cantidadAutores == 0) {
        opciones.push(NOMBRE_AUTORES);
        valores.push(" ⊕ Nombre del autore");
    } else {
        let { nombre, apellido } = datos[NOMBRE_AUTORES][cantidadAutores - 1];
        opciones.push(ELIMINAR_AUTOR);
        valores.push(` ⊖ Eliminar ${nombre} ${apellido}`);

        opciones.push(NOMBRE_AUTORES);
        valores.push(" ⊕ (opcion) Nombre del autore");
    }

    opciones.push(FECHA_PUBLICACION);
    valores.push(datos[FECHA_PUBLICACION]
        ? `️ ️✏️ Modificar la fecha de publicación, donde era ${describir.fecha(datos[FECHA_PUBLICACION], cte.meses)}`
        : " ⊕ Fecha de publicación"
    );

    opciones.push(TITULO_ARTICULO);
    valores.push(datos[TITULO_ARTICULO]
        ? `️ ️✏️ Modificar el título del artículo, donde era ${datos[TITULO_ARTICULO]}`
        : " ⊕ Título del artículo"
    );

    opciones.push(NOMBRE_PAGINA);
    valores.push(datos[NOMBRE_PAGINA]
        ? `️ ️✏️ Modificar el nombre de la página, donde era ${datos[NOMBRE_PAGINA]}`
        : " ⊕ Nombre de la página"
    );

    opciones.push(URL);
    valores.push(datos[URL]
        ? `️ ️✏️ Modificar el URL, donde era ${datos[URL]}`
        : " ⊕ URL de la página"
    );

    if (datos[NOMBRE_AUTORES].length > 0 && DATOS_SIMPLES.every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

function describirWeb(archivo) {
    let autores = "";
    for (let { nombre, apellido } of archivo.nombreAutores) {
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return [{
        numReferencia: archivo.numReferencia,
        texto: `${archivo.tituloArticulo} de ${autores}, publicado en ${archivo.nombrePagina}`
    }];
}

module.exports = () => ({
    obtenerDefault: () => ({
        [NOMBRE_AUTORES]: [],
        [FECHA_PUBLICACION]: null,
        [TITULO_ARTICULO]: null,
        [NOMBRE_PAGINA]: null,
        [URL]: null
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describirWeb,
});