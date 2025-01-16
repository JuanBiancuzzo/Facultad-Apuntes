/**
 * @param {*} tp Objeto representante del plugin Templater
 * @param {string} tipo Un string caracteristico del proceso que se quiere hacer 
 * @param {array|undefined} argumentos Todos los argumentos que se quiera pasar al subproceso especifico
 * @returns {{ metadata: Object, carpeta: string, titulo: string, texto: string }} Se devuelve un diccionario con la metadata del archivo y el texto del archivo en sí
 */
async function procesar(tp, tipo, argumentos) {
    const error = tp.user.error();
    const { CREAR_SECCION: SECCIONES } = tp.user.constantes();

    switch (tipo) {
        case SECCIONES.materia: 
            return;
        case SECCIONES.resumenMateria: 
            return;
        case SECCIONES.curso: 
            return;
        case SECCIONES.resumenCurso: 
            return;
        case SECCIONES.investigacion: 
            return;
        case SECCIONES.proyectoPractico: 
            return;
        case SECCIONES.proyectoInvestigacion: 
            return;
        case SECCIONES.juego: 
            return;

        // Colecciones
        //      Funciones
        case SECCIONES.coleccion.funciones.libreria: 
            return;
        case SECCIONES.coleccion.funciones.modulo: 
            return;
        //      Bloque matemática
        case SECCIONES.coleccion.bloqueMatematica.tema: 
            return;
        case SECCIONES.coleccion.bloqueMatematica.subtema: 
            return;
    }

    throw error.Quit("No existe ese proceso");
}

/**
 * @param {*} tp Objeto representante del plugin Templater
 * @param {string} tipo Un string caracteristico del proceso que se quiere hacer 
 * @param {array|undefined} argumentos Todos los argumentos que se quiera pasar al subproceso especifico
 * @param {boolean} abierto Si es true el archivo creado se vuelve el archivo activo
 * @returns {TFile} Se devuelve el archivo creado
 */
async function crearSeccion(tp, tipo, argumentos = [], abierto = false) {
    const { DIRECTORIOS, TEMPLATE } = tp.user.constantes();

    let nombre = tipo;
    if (argumentos && argumentos.length > 0) {
        nombre += ` - ${argumentos.join(" - ")}`;
    }

    return await tp.file.create_new(
        tp.file.find_tfile(TEMPLATE.seccion),
        nombre, abierto, 
        app.vault.getAbstractFileByPath(DIRECTORIOS.temporal)
    );
}

/**
 * @param {*} tp Objeto representante del plugin Templater
 * @param {Object} metadata Los datos de metadata del archivo
 * @param {string} texto Texto adicional del archivo
 * @returns {string} Es el texto completo del archivo
 */
function textoDeArchivos(tp, metadata = {}, texto = "") {
    return `---\n${tp.obsidian.stringifyYaml(metadata)}---\n${texto}`;
}

module.exports = () => ({
    procesar: procesar,
    crear: crearSeccion,
    textoDeArchivos: textoDeArchivos,
});