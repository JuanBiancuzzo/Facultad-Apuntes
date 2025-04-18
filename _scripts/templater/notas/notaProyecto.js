class NotaProyecto {
    constructor(tp, representacionPrevia = null) {}
}

async function crearNotaProyecto(tp) {
    const { 
        MESES, FORMATO_DIA, DIRECTORIOS, SECCIONES, TAGS, 
        DATOS: { PROGRESO: DATOS_PROGRESO, PROYECTO: DATOS_PROYECTO },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();
    carpeta = carpeta.join("/");

    let proyectos = dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}`);
    let proyecto;
    switch (proyectos.length) {
        case 0: throw error.Quit("No hay proyectos en este directorio");
        case 1: 
            proyecto = proyectos.first();
            break;
        default: 
            proyecto = await preguntar.suggester(
                tp, (proyecto) => proyecto.file.name, proyectos,
                "En que proyecto se quiere ingresar la nota",
                error.Quit("No se ingresó en que proyecto se tiene que ingresar")
            )
            break;
    }

    let tagsDeterminantes = proyecto[DATOS_PROYECTO.tags] ? proyecto[DATOS_PROYECTO.tags] : [];
    tagsDeterminantes = dv.array(tagsDeterminantes)
        .filter(tag => tag.startsWith(TAGS.proyecto.self))
        .map(tag => tag.replace(`${TAGS.proyecto.self}/`, ""));

    let tagProyecto;
    switch (tagsDeterminantes.first()) {
        case TAGS.proyecto.practico.self:
            tagProyecto = TAGS.proyecto.practico.general;
            break;
        case TAGS.proyecto.investigacion.self:
            tagProyecto = TAGS.proyecto.investigacion.general;
            break;
        case TAGS.proyecto.juego.self:
            tagProyecto = TAGS.proyecto.juego.general;
            break;
    }

    let fecha = tp.file.creation_date(FORMATO_DIA);
    let [ anio, mes, dia ] = fecha.split("-").map(num => parseInt(num, 10));
    dia = (dia <= 3) ? ["1ro", "2do", "3ro"][dia - 1] : dia;

    let nuevoNombre = `Nota del ${dia} de ${MESES(mes)} del ${anio}`;
    let posibleArchivoIgual = tp.file.find_tfile(`${proyecto.file.folder}/${nuevoNombre}`);
    if (posibleArchivoIgual) {
        await abrirArchivoAgregandoTags(tp, posibleArchivoIgual);
        throw error.Quit(ERROR_EXISTE_ARCHIVO);
    }

    let texto = `${"#".repeat(SECCIONES.progreso.nivel)} ${SECCIONES.progreso.texto}\n---\n`;
    texto += "<% tp.file.cursor() %>\n\n";

    return {
        metadata: {
            [DATOS_PROGRESO.dia]: fecha,
            [DATOS_PROGRESO.tags]: [
                `${tagProyecto}/${tp.user.tagPorNombre(proyecto.file.name)}`,
                `${TAGS.nota.self}/${TAGS.nota.proyecto}`,
            ],
        },
        carpeta: proyecto.file.folder,
        titulo: nuevoNombre,
        texto: texto,
    };
}

async function editarNotaProyecto(tp, archivo) {}

module.exports = () => ({
    clase: (tp, representacionPrevia = null) => new NotaProyecto(tp, representacionPrevia),
    crear: crearNotaProyecto,
    editar: editarNotaProyecto,
})