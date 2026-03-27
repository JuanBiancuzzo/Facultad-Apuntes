async function crearEjercicio(tp, dv) {
    const { 
        FORMATO_DIA, ETAPAS, REFERENCIAS, SECCIONES, DATOS: {
            ARCHIVO: DATOS_ARCHIVO, EJERCICIOS: DATOS_EJERCICIOS,
        }, TAGS: {
            nota: TAGS_NOTA,
            coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION },
        }, 
        DIRECTORIOS: { coleccion: { ejercicios: DIR_EJERCICIOS, ...DIR_COLECCION } }, 
    } = tp.user.constantes();

    let numeroEjercicio = 1;
    let numEjercicios = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`)
        .map(archivo => archivo[this.config.numero])
        .sort(numero => numero);
            
    for (let numero of numEjercicios) {
        if (numeroEjercicio == numero) {
            numeroEjercicio++;
        } else {
            break;
        }
    }

    let texto = SECCIONES.seccion(SECCIONES.enunciado);
    texto += "\n---\n\n"

    texto += "\n\n" + SECCIONES.seccion(SECCIONES.resolucion);
    texto += "\n---\n\n"

    texto += "\n\n" + SECCIONES.seccion(SECCIONES.resultado);
    texto += "\n---\n\n"

    return {
        metadata: {
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`,
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
            ],
            [DATOS_EJERCICIOS.numero]: numeroEjercicio,
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_EJERCICIOS}`,
        titulo: `Ejercicio N°${numeroEjercicio}`,
        texto: texto,
    }
}

module.exports = (tp, dv) => ({
    crearEjercicio: crearEjercicio.bind(null, tp, dv),
});