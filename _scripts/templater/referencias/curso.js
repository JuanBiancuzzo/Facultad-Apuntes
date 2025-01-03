const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { salir: SALIR, curso: { 
        NOMBRE_AUTORES, FECHA_CURSO, NOMBRE_CURSO, NOMBRE_PAGINA, URL
    } } = tp.user.constantes().DATOS.REFERENCIAS;
    const TAGS = tp.user.constantes().TAGS;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const validar = tp.user.whiteList();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case MODIFICAR_AUTOR: 
            indice = separacion[1];
            let { nombre: viejoNombre, apellido: viejoApellido } = datos[NOMBRE_AUTORES][indice];

            let nuevoApellido = await preguntar.prompt(
                tp, `Nuevo apellido, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.prompt(
                tp, `Nuevo nombre, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[NOMBRE_AUTORES][indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
            break;

        case NOMBRE_AUTORES: 
            datos[NOMBRE_AUTORES].push({
                apellido: await preguntar.prompt(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                nombre: await preguntar.prompt(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_AUTOR: 
            datos[NOMBRE_AUTORES].pop();
            break;

        case FECHA_CURSO:
            datos[FECHA_CURSO] = await preguntar.numero(
                tp, datos[FECHA_CURSO] 
                    ? `Nuevo año de creación, donde antes era ${datos[FECHA_CURSO]}`
                    : "Año de creación del curso",
                error.Quit("No se ingresó año de creación del curso")
            );
            break;

        case NOMBRE_CURSO:
            let nombreCurso = await preguntar.prompt(
                tp, datos[NOMBRE_CURSO]
                    ? `Nuevo nombre del curso, donde antes era ${datos[NOMBRE_CURSO]}`
                    : "Nombre del curso",
                error.Quit("No se ingresó el nombre del curso")
            );

            const dv = app.plugins.plugins.dataview.api;
            let cursos = dv.pages(`#${TAGS.curso} and -#${TAGS.resumen}`)
                .filter(indice => indice.file.name !== undefined);

            if (!validar.validarNombre(tp, nombreCurso) || cursos.find(curso => curso.file.name == nombreCurso))
                throw error.Quit("Nombre de curso invalido");

            datos[NOMBRE_CURSO] = nombreCurso;
            break;

        case NOMBRE_PAGINA:
            datos[NOMBRE_PAGINA] = await preguntar.prompt(
                tp, datos[NOMBRE_PAGINA]
                    ? `Nuevo nombre de la página del curso, donde antes era ${datos[NOMBRE_PAGINA]}`
                    : "Nombre de la página del curso",
                error.Quit("No se ingresó el nombre de la página del curso")
            );
            break;

        case URL: 
            datos[URL] = await preguntar.prompt(
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
    const { salir: SALIR, curso: { 
        NOMBRE_AUTORES, FECHA_CURSO, NOMBRE_CURSO, NOMBRE_PAGINA, URL
    } } = tp.user.constantes().DATOS.REFERENCIAS;
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
        valores.push(" ⊕ (opcional) Nombre del autore");
    }

    opciones.push(NOMBRE_CURSO);
    valores.push(datos[NOMBRE_CURSO]
        ? `️ ️✏️ Modificar el nombre del curso, donde era ${datos[NOMBRE_CURSO]}`
        : " ⊕ Nombre del curso"
    );

    opciones.push(NOMBRE_PAGINA);
    valores.push(datos[NOMBRE_PAGINA]
        ? `️ ️✏️ Modificar el nombre de la página del curso, donde era ${datos[NOMBRE_PAGINA]}`
        : " ⊕ Nombre de la página del curso"
    );

    opciones.push(FECHA_CURSO);
    valores.push(datos[FECHA_CURSO]
        ? `️ ️✏️ Modificar el año de creación del curso, donde era ${datos[FECHA_CURSO]}`
        : " ⊕ Año de creación del curso"
    );

    opciones.push(URL);
    valores.push(datos[URL]
        ? `️ ️✏️ Modificar el URL, donde era ${datos[URL]}`
        : " ⊕ URL de la página"
    );

    if (datos[NOMBRE_AUTORES].length > 0) {
        opciones.push(TEMAS);
        valores.push(" ⊕ (opcional) Tema del curso");
    }

    if (datos[NOMBRE_AUTORES].length > 0 && [FECHA_CURSO, NOMBRE_CURSO, NOMBRE_PAGINA, URL].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { NOMBRE_AUTORES, NOMBRE_CURSO, NOMBRE_PAGINA } = tp.user.constantes().DATOS.REFERENCIAS.curso;
    let autores = [];
    for (let { nombre, apellido } of datos[NOMBRE_AUTORES]) {
        autores.push(`${apellido}, ${nombre[0]}.`);
    }

    return `${datos[NOMBRE_CURSO]} de ${autores.join(", ")}, publicado en ${datos[NOMBRE_PAGINA]}`;
}

module.exports = () => ({
    obtenerDefault: (tp) => {
        const { NOMBRE_AUTORES, FECHA_CURSO, NOMBRE_CURSO, NOMBRE_PAGINA, URL } = tp.user.constantes().DATOS.REFERENCIAS.curso;
        return {
            [NOMBRE_AUTORES]: [],
            [FECHA_CURSO]: null,
            [NOMBRE_CURSO]: null,
            [NOMBRE_PAGINA]: null,
            [URL]: null,
        }
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});