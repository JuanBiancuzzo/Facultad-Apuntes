async function modificarMateria(dv, archivo) {
    let contenido = await app.vault.read(archivo.tp);
    let materia = archivo.dv.file.path.split("/")[0];

    let patronBuscado = "### Apuntes"
    let indexApuntes = contenido.indexOf(patronBuscado);

    let nuevoContenido = `${contenido.slice(0, indexApuntes + patronBuscado.length)} \n---\n`;

    let temas = dv.pages(`#${materia} and #nota`)
        .flatMap(archivo => archivo.tags)
        .filter(tag => tag.includes(materia))
        .distinct(tag => tag);

    for (let tema of temas) {
        let archivos = dv.pages("")
    }

    let unidades = dv.pages(`"${materia}" and #nota`)
        .where(pagina => pagina.capitulo)
        .groupBy(pagina => parseInt(pagina.capitulo, 10))
        .sort(capitulo => parseInt(capitulo.rows[0].capitulo, 10));
        
    for (let unidad of unidades) {	
        nuevoContenido += `##### ${conseguir_nombre(unidad)} (${unidad.rows.length})\n`;
        nuevoContenido += "---\n";	
        nuevoContenido += (unidad.rows.file).map(pagina => {
            return `* [[${pagina.path}|${pagina.name}]]`;
        }).join("\n");
        nuevoContenido += "\n\n";
    }
    return app.vault.modify(archivoMateria, nuevoContenido);
}

function conseguir_nombre(unidad) {
    let relative_path = unidad.rows[0].file.folder;
    let spliteado = relative_path.split("/");
    return spliteado[spliteado.length - 1];
}

module.exports = () => {
    return {
        modificarMateria: modificarMateria
    };
};