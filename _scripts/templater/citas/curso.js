const NOMBRE_AUTORES = "nombreAutores";
const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";
const FECHA_CURSO = "fechaCurso";
const NOMBRE_CURSO = "nombreCurso";
const NOMBRE_PAGINA = "nombrePagina";
const TEMAS = "temas";
const MODIFICAR_TEMA = "modificar tema";
const ELIMINAR_TEMA = "eliminar tema";
const URL = "url";

const NOMBRE_TEMA = "nombreTema";
const NUMERO_TEMA = "capitulo";
const PROFESORES = "profesores";
const MODIFICAR_PROFESOR = "modificar profesor";
const ELIMINAR_PROFESOR_AT = "eliminar profesor en posicion";
const ELIMINAR_PROFESOR = "eliminar profesor";
const NUM_REFERENCIA = "numReferencia";
const PARTE_TEMA = "parte";

const AGREGAR_TEMA = "agregar_tema";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
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

        case FECHA_CURSO:
            datos[FECHA_CURSO] = await preguntar.numero(
                tp, datos[FECHA_CURSO] 
                    ? `Nuevo año de creación, donde antes era ${datos[FECHA_CURSO]}`
                    : "Año de creación del curso",
                error.Quit("No se ingresó año de creación del curso")
            );
            break;

        case NOMBRE_CURSO:
            let nombreCurso = await preguntar.simple(
                tp, datos[NOMBRE_CURSO]
                    ? `Nuevo nombre del curso, donde antes era ${datos[NOMBRE_CURSO]}`
                    : "Nombre del curso",
                error.Quit("No se ingresó el nombre del curso")
            );

            const dv = app.plugins.plugins.dataview.api;
            let cursos = dv.pages("#proyecto/curso")
                .filter(indice => indice.file.name !== undefined);

            if (!validar.validarNombre(tp, nombreCurso) || cursos.find(curso => curso.file.name == nombreCurso))
                throw error.Quit("Nombre de curso invalido");

            datos[NOMBRE_CURSO] = nombreCurso;
            break;

        case NOMBRE_PAGINA:
            datos[NOMBRE_PAGINA] = await preguntar.simple(
                tp, datos[NOMBRE_PAGINA]
                    ? `Nuevo nombre de la página del curso, donde antes era ${datos[NOMBRE_PAGINA]}`
                    : "Nombre de la página del curso",
                error.Quit("No se ingresó el nombre de la página del curso")
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

        case MODIFICAR_TEMA:
            indice = separacion[1];

        case TEMAS:
            let temaPrevio;
            if (indice) {
                temaPrevio = datos[TEMAS][indice];
            } else {
                let numReferencia = seguidorRef.conseguirReferencia();
                temaPrevio = { [NUM_REFERENCIA]: numReferencia };
            }

            let tema = await tp.user.crearPreguntas(
                tp, obtenerDefaultTema, 
                (tp, tema, respuestaDada) => actualizarDatosTema(tp, tema, respuestaDada, datos[NOMBRE_AUTORES], datos[TEMAS]),
                (tp, datosTema) => generarPreguntasTema(tp, datosTema, datos[NOMBRE_AUTORES], datos[TEMAS]), 
                "Completar para poder ingresar un tema", temaPrevio
            );
            
            // Actualizar otros temas
            let temasPosiblesMismoNum = [];
            let temasPosiblesMismaParte = [];
            for (let i = 0; i < datos[TEMAS].length; i++) {
                if (indice && indice == i) continue;

                if (datos[TEMAS][i][NUMERO_TEMA] >= tema[NUMERO_TEMA]) {
                    temasPosiblesMismoNum.push(i);
                }

                if (datos[TEMAS][i][NOMBRE_TEMA] == tema[NOMBRE_TEMA]) {
                    temasPosiblesMismaParte.push(i);
                }
            }

            if (temasPosiblesMismoNum.length > 0) {
                temasPosiblesMismoNum = temasPosiblesMismoNum
                    .sort((a, b) => datos[TEMAS][a][NUMERO_TEMA] - datos[TEMAS][b][NUMERO_TEMA]);
                let numeroModificar = tema[NUMERO_TEMA];

                for (let i = 0; i < temasPosiblesMismoNum.length; i++) {
                    if (datos[TEMAS][temasPosiblesMismoNum[i]][NUMERO_TEMA] != numeroModificar) {
                        break;
                    }

                    datos[TEMAS][temasPosiblesMismoNum[i]][NUMERO_TEMA] = numeroModificar + 1;
                    numeroModificar++;
                }
            }

            if (temasPosiblesMismaParte.length > 0) {
                for (let i = 0; i < temasPosiblesMismaParte.length; i++) {
                    i = temasPosiblesMismaParte[i];
                    if (datos[TEMAS][i][PARTE_TEMA] == 0) {
                        datos[TEMAS][i][PARTE_TEMA] = 1;
                    }
                }
                if (tema[PARTE_TEMA] == 0) {
                    tema[PARTE_TEMA] = 1;
                }

                temasPosiblesMismaParte = temasPosiblesMismaParte
                    .sort((a, b) => datos[TEMAS][a][NUMERO_TEMA] - datos[TEMAS][b][NUMERO_TEMA]);
                let numeroModificar = tema[PARTE_TEMA];
                let modificado = false;

                for (let i = 0; i < temasPosiblesMismaParte.length; i++) {
                    i = temasPosiblesMismaParte[i];
                    if (datos[TEMAS][i][NUMERO_TEMA] < tema[NUMERO_TEMA]) {
                        continue;
                    }
                    modificado = true;

                    if (datos[TEMAS][i][PARTE_TEMA] != numeroModificar) {
                        break;
                    }

                    datos[TEMAS][i][PARTE_TEMA] = numeroModificar + 1;
                    numeroModificar++;
                }

                if (!modificado) {
                    tema[PARTE_TEMA] = numeroModificar + 1;
                }
            }

            if (indice) {
                datos[TEMAS][indice] = tema;
            } else {
                datos[TEMAS].push(tema);
            }

            datos[TEMAS] = datos[TEMAS].sort((a, b) => parseInt(a.capitulo, 10) - parseInt(b.capitulo, 10));
            break;

        case ELIMINAR_TEMA:
            let ultimoTema = datos[TEMA].pop();
            seguidorRef.devolverReferencia(ultimoTema[NUM_REFERENCIA]);
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

    for (let [indice, tema] of datos[TEMAS].entries()) {
        let { capitulo, nombreTema, parte, profesores } = tema;
        let textoProfesores = profesores
            .map(num => {
                let { nombre, apellido} = datos[NOMBRE_AUTORES][num];
                return `${nombre} ${apellido}`;
            }).join(", ");
        let textoParte = parte > 0 ? `parte ${parte} ` : "";

        opciones.push(`${MODIFICAR_TEMA}-${indice}`);
        valores.push(`️ ️✏️ Modificar el tema ${capitulo}: ${nombreTema} ${textoParte}dado por ${textoProfesores}`);
    }

    let cantidadTemas = datos[TEMAS].length;
    if (cantidadTemas > 0) {
        let { capitulo, nombreTema, parte, profesores } = datos[TEMAS][cantidadTemas - 1];
        let textoProfesores = profesores
            .map(num => {
                let { nombre, apellido} = datos[NOMBRE_AUTORES][num];
                return `${nombre} ${apellido}`;
            }).join(", ");
        let textoParte = parte > 0 ? `parte ${parte} ` : "";

        opciones.push(ELIMINAR_TEMA);
        valores.push(` ⊖ Eliminar el tema ${capitulo}: ${nombreTema} ${textoParte}dado por ${textoProfesores}`);
    }

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

function obtenerDefaultTema() {
    return {
        [NOMBRE_TEMA]: null,
        [NUMERO_TEMA]: null,
        [NUM_REFERENCIA]: null,
        [PARTE_TEMA]: 0,
        [PROFESORES]: [],
    };
}

async function actualizarDatosTema(tp, datos, respuesta, nombreProfesores, otrosTemas) {
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const validar = tp.user.whiteList();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    if (nombreProfesores.length == 1 && datos[PROFESORES].length == 0) {
        datos[PROFESORES].push(0);
    }

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
                nombreTema = await preguntar.simple(
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

function generarPreguntasTema(tp, datos, nombreProfesores, otrosTemas) {
    let opciones = [];
    let valores = [];

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

function describirCurso(archivo) {
    let autores = "";
    for (let { nombre, apellido } of archivo.nombreAutores) {
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return [{
        numReferencia: archivo.numReferencia,
        texto: `${archivo.nombreCurso} de ${autores}, publicado en ${archivo.nombrePagina}`
    }];
}

module.exports = () => ({
    obtenerDefault: () => ({
        [NOMBRE_AUTORES]: [],
        [FECHA_CURSO]: null,
        [NOMBRE_CURSO]: null,
        [NOMBRE_PAGINA]: null,
        [URL]: null,
        [TEMAS]: [],
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describirCurso,
    temaCurso: {
        obtenerDefault: obtenerDefaultTema,
        actualizarDatos: actualizarDatosTema,
        generarPreguntas: generarPreguntasTema,
    },
});