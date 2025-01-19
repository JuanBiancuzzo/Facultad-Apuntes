/**
 * @param {() => { metadata: Object, carpeta: string, titulo: string, texto: string }} obtenerInformacion es una función que da la información necesaria para crear el archivo
 * @returns {TFile} Se devuelve el archivo creado
 */
async function crearArchivo(tp, obtenerInformacion) {
    let { metadata, carpeta, titulo, texto } = await obtenerInformacion();
    try { await app.vault.createFolder(carpeta); } catch {}

    return await app.vault.create(
        `${carpeta}/${titulo}.md`, 
        textoDeArchivos(tp, metadata, texto),
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
    crear: crearArchivo,
    texto: textoDeArchivos,
});