async function modificarMateria(tp, dv, carpeta) {
    let archivo = dv.pages(`"${carpeta}" and #materia`)[0];
    let tArchivo = tp.file.find_tfile(archivo.file.path);

    let contenido = await app.vault.read(tArchivo);
    let patronBuscado = "### Apuntes";
    let indexApuntes = contenido.indexOf(patronBuscado);
    let nuevoContenido = `${contenido.slice(0, indexApuntes + patronBuscado.length)} \n---\n`;

    let resumenes = dv.pages(`#${carpeta} and #resumen`) 
        .sort(archivo => archivo.capitulo);

    for (let resumen of resumenes) {
        let nombre = resumen.file.folder.split("/").pop();
        nuevoContenido += `##### ${nombre} \n---\n`;
        nuevoContenido += `> [!summery]- Resumen\n> ![[${resumen.file.path}#Resumen]]\n\n`;

        let tag = resumen.file.folder.replaceAll(" ", "-");
        if (resumen.multiples) tag += `/cap${resumen.capitulo}`;        

        nuevoContenido += dv.pages(`#${tag} and #nota`).map(pagina => {
            return `* [[${pagina.file.path}|${pagina.file.name}]]`;
        }).join("\n");

        nuevoContenido += "\n\n";
    }

    return app.vault.modify(tArchivo, nuevoContenido);
}

async function modificarResumen(tp, dv, carpeta, capitulo) {
    let archivosResumenes = dv.pages(`"${carpeta}" and #resumen`);
    let archivo = archivosResumenes[0];
    if (capitulo) {
        archivo = archivosResumenes.filter(archivo => archivo.capitulo == capitulo)[0];
    }
    let tArchivo = tp.file.find_tfile(archivo.file.path);

    let patronIndice = "### Índice";
    let patronResumen = "### Resumen";
    let contenido = await app.vault.read(tArchivo);
    
    let indexInidce = contenido.indexOf(patronIndice);
    let nuevoContenido = `${contenido.slice(0, indexInidce + patronIndice.length)} \n---\n`;
    
    let indexResumen = contenido.indexOf(patronResumen);
    let contendioResumen = contenido.slice(indexResumen);

    let tag = carpeta.replaceAll(" ", "-");
    nuevoContenido += dv.pages(`#${tag} and #nota`).map(pagina => {
        return `* [[${pagina.file.path}|${pagina.file.name}]]`;
    }).join("\n");

    return app.vault.modify(tArchivo, `${nuevoContenido}\n\n${contendioResumen}`);
}

function conseguir_nombre(unidad) {
    let relative_path = unidad.rows[0].file.folder;
    let spliteado = relative_path.split("/");
    return spliteado[spliteado.length - 1];
}

module.exports = () => {
    return {
        materia: modificarMateria,
        resumen: modificarResumen
    };
};