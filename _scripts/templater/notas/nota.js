function archivoDeNotaIgual(tp, tArchivo, titulo) {
    let posibleArchivo = tp.file.find_tfile(titulo);

    return posibleArchivo && posibleArchivo.stat.ctime != tArchivo.stat.ctime
        ? posibleArchivo
        : null; 
}

async function abrirArchivoAgregandoTags(tp, tArchivo, tagsAAgregar = []) {
    const { DATOS: { ARCHIVO: DATOS_ARCHIVO } } = tp.user.constantes();

    let path = `${tArchivo.parent.path}/${tArchivo.basename}.md`;
    let leafAUsar;

    app.workspace.iterateRootLeaves((leaf) => {
        let tArchivoActual = leaf.view.file;
        if (!tArchivoActual)
            return;

        if (tArchivoActual.path == path)
            leafAUsar = leaf;
    });

    if (!leafAUsar) leafAUsar = await app.workspace.getLeaf("tab");
    await leafAUsar.openFile(tArchivo);

    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        let tags = frontmatter[DATOS_ARCHIVO.tags] ? frontmatter[DATOS_ARCHIVO.tags] : [];
        frontmatter[DATOS_ARCHIVO.tags] = tags.concat(tagsAAgregar).unique();
    });
}

function incluye(referencia, posibleIncluido) {
    referencia = referencia.split("\n").map(l => l.trim());
    posibleIncluido = posibleIncluido.split("\n").map(l => l.trim());

    let empezo = false;
    let contador = 0;

    for (let linea of referencia) {
        let lineaIgual = linea == posibleIncluido[contador];

        if (!empezo && lineaIgual) {
            empezo = true;
            contador++;
        } else if (empezo && lineaIgual) {
            contador++;
            if (contador >= posibleIncluido.length) {
                return contador;
            }
        } else if (empezo && !lineaIgual) {
            empezo = false;
            contador = 0;
        }
    }

    return -1;
}

async function algo() {
}

module.exports = () => ({
    abrirArchivoAgregandoTags,
    archivoDeNotaIgual,
    incluye,
});