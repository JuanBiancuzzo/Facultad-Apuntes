async function crearSeccionCarrera(tp) {
    const { 
        DIRECTORIOS, TAGS: { facultad: TAGS_FACULTAD },
        DATOS: { ARCHIVO: DATOS_ARCHIVO, MATERIA: DATOS_MATERIA },
    } = tp.user.constantes();

    const seccionCarrera = tp.user.seccionCarrera(tp);
    const seccionMateria = tp.user.seccionMateria(tp);
    const seccionResumen = tp.user.seccionResumenMateria(tp);

    const preguntar = tp.user.preguntar();
    const obtenerTag = tp.user.obtenerTag;
    const error = tp.user.error();


    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();

    let directorioActual = carpeta.join("/");
    const carreras = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`);
    if (carreras.length > 1) {
        return await seccionCarrera.crear();
    }

    const materias = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`);
    if (materias.length > 1 || carreras.length == 1) {
        // Buscamos obtener los tags de las materias, y sacarle el ultimo directorio, 
        // para obtener las carreras involucradas
        let tagsCarreras = materias
            .flatMap(materia => obtenerTag(tp, materia[DATOS_ARCHIVO.tags]))
            .filter(tag => tag.split("/").length > 1)
            .map(tag => "#" + tag.split("/").slice(0, -1).join("/"))
            .distinct();

        let carrerasPorMateria = dv.pages(`(${tagsCarreras.join(" or ")}) and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`);
        if (carreras.length > 0 && carrerasPorMateria.every(carrera => carrera.file.path != carreras.first().file.path)) {
            carrerasPorMateria = [ ...carrerasPorMateria, carreras.first()];
        }

        if (carrerasPorMateria.length == 0) 
            throw error.Quit("De alguna forma hay materias que no llevan a ninguna carrera");

        let carrera = carrerasPorMateria.first();
        if (carrerasPorMateria.length > 1) {
            carrera = await preguntar.suggester(
                tp, carrerasPorMateria.map(carrera => carrera.file.name), carrerasPorMateria,
                "En que carrera queres crear la materia?",
                error.Quit("No se ingreso que carrera se usa para crear la materia")
            )
        }

        return await seccionMateria.crear(carrera);
    }

    let resumenes = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`);
    if (resumenes.length > 0 || materias.length == 1) {
        // Buscamos obtener los tags de los resumenes, y sacarle el ultimo directorio, 
        // para obtener las materias involucradas
        let tagsMateria = resumenes
            .flatMap(resumen => obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]))
            .filter(tag => tag.split("/").length > 1)
            .map(tag => "#" + tag.split("/").slice(0, -1).join("/"))
            .distinct();

        let materiasPorResumen = dv.pages(`(${tagsMateria.join(" or ")}) and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`)
            .filter(materia => !materia[DATOS_MATERIA.equivalencia]);

        if (materias.length > 0 && materiasPorResumen.every(materia => materia.file.path != materias.first().file.path)) {
            materiasPorResumen = [ ...materiasPorResumen, materias.first()];
        }

        if (materiasPorResumen.length == 0) 
            throw error.Quit("De alguna forma hay materias que no llevan a ninguna carrera");

        let materia = materiasPorResumen.first();
        if (materiasPorResumen.length > 1) {
            materia = await preguntar.suggester(
                tp, materiasPorResumen.map(carrera => carrera.file.name), materiasPorResumen,
                "En que materia queres crear el tema de la materia?",
                error.Quit("No se ingreso que materia se usa para crear el resumen")
            )
        }

        return await seccionResumen.crear(materia);
    }

    return await seccionCarrera.crear();
}

async function crearSeccionCurso(tp) {

}

async function crearSeccionInvestigacion(tp) {

}

async function crearSeccionProyecto(tp) {

}
module.exports = (tp) => ({
    carrera: crearSeccionCarrera.bind(null, tp),
    curso: crearSeccionCurso.bind(null, tp),
    investigacion: crearSeccionInvestigacion.bind(null, tp),
    proyecto: crearSeccionProyecto.bind(null, tp),
});