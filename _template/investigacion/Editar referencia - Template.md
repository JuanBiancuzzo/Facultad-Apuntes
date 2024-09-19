<%*
    
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    const dvArchivo = dv.page(tp.file.path(true));
    // Tenemos que determinar si es un libro o un archivo con o sin referencias
    /**
     * Si tiene referencias => archivo
     * Sino
        * Si tiene tipoDato => Libro
        * Sino => archivo
     */

    let tReferencia = tArchivo;
    let referencia = dvArchivo;

    if (dvArchivo.tipoCita != "Libro") {
        let archivosReferencia = dv.pages('#referencia')
            .flatMap(referencia => tp.user.cita().metadata(tp, referencia))
            .sort(ref => ref.numReferencia);


        if (dvArchivo.referencias && dvArchivo.referencias.length > 0) {
            // Archivo con referencias
            archivosReferencia = dvArchivo.referencias
                .map(numReferencia => archivosReferencia[numReferencia - 1]);
        } 
        
        referencia = archivosReferencia[0].archivo;
        if (archivosReferencia.length > 1) {
            referencia = await preguntar.suggester(
                tp, archivosReferencia.map(ref => tp.user.cita().describir(ref)), 
                archivosReferencia.map(ref => ref.archivo),
                "Que referencia se quiere editar", error.Prompt("No se eligió una referencia"), 10
            );
        }

        tReferencia = tp.file.find_tfile(referencia.file.path);
    }

    let keys = tp.user.cita().keys(tp, referencia.tipoCita);

    let datosActuales = {};
    for (let key of keys) {
        datosActuales[key] = referencia.file.frontmatter[key];
    }

    let numReferencia = tp.user.generarNumReferencia(dv);
    let nuevosDatos = await tp.user.cita().editar(tp, referencia.tipoCita, numReferencia, datosActuales);

    
    await app.fileManager.processFrontMatter(tReferencia, (frontmatter) => {
        for (let [ key, value ] of Object.entries(nuevosDatos)) {
            frontmatter[key] = value;
        }
    });
    

_%>