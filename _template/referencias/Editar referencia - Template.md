<%*
    const preguntar = tp.user.preguntar(); 
    const referencia = tp.user.referencia();
    const error = tp.user.error();
    const { TAGS, SECCIONES, REFERENCIAS, DATOS: { 
        ARCHIVO: DATOS_ARCHIVOS, REFERENCIAS: DATOS_REFERENCIA 
    } } = tp.user.constantes();
    const TipoArchivo = {
        REFERENCIA: "ref",
        ARCHIVO_REFERENCIA: "archivos",
        TODAS_REFERENCIAS: "todos",
    };
    const dv = app.plugins.plugins.dataview.api;

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    const dvArchivo = dv.page(tp.file.path(true));

    let tipoArchivo = TipoArchivo.TODAS_REFERENCIAS;
    if (dvArchivo[DATOS_REFERENCIA.tipoCita]) {
        tipoArchivo = TipoArchivo.REFERENCIA;
    } else if (dvArchivo[DATOS_ARCHIVOS.referencias] && dvArchivo[DATOS_ARCHIVOS.referencias].length > 0) {
        tipoArchivo = TipoArchivo.ARCHIVO_REFERENCIA;
    }

    let referencias = referencia.obtenerReferencias(tp)
        .sort(ref => ref[DATOS_REFERENCIA.numReferencia], direction = "desc");
    switch (tipoArchivo) {
        case TipoArchivo.REFERENCIA:
            switch (dvArchivo[DATOS_REFERENCIA.tipoCita]) {
                case REFERENCIAS.libro:
                    let numReferencia = dvArchivo[DATOS_REFERENCIA.numReferencia];
                    referencias = referencias
                        .filter(ref => ref[DATOS_REFERENCIA.numReferencia] == numReferencia);
                    break;
            }
            break;

        case TipoArchivo.ARCHIVO_REFERENCIA:
            let referenciasArhcivos = dvArchivo[DATOS_ARCHIVOS.referencias]
                .map(num => parseInt(num, 10));
            referencias = referencias
                .filter(ref => referenciasArhcivos.includes(ref[DATOS_REFERENCIA.numReferencia]));
            break;
    }

    let referenciaEditar = referencias.first();
    if (referencias.length > 1) {
        referenciaEditar = await preguntar.suggester(
            tp, (datos) => referencia.describir(tp, datos), referencias,
            "Que referencia se quiere editar?",
            error.Prompt("No se ingresó que referencia editar")
        );
    }

    let seguidorRef = tp.user.seguidorReferencias(tp).new(dv);
    let datosNuevos = await referencia.editar(
        tp,
        referenciaEditar[DATOS_REFERENCIA.tipoCita], 
        seguidorRef, 
        referenciaEditar
    );
    console.log("Hola -2");

    let archivoReferencia = referencia.archivoReferencia(tp, referenciaEditar[DATOS_REFERENCIA.numReferencia]);
    console.log("Hola -1");
    let tArchivoReferencia = tp.file.find_tfile(archivoReferencia.file.path);
    console.log("Hola 0");

    await app.fileManager.processFrontMatter(tArchivoReferencia, (frontmatter) => {
        for (let [key, value] of Object.entries(datosNuevos)) {
            frontmatter[key] = value;
        }
    });

    console.log("Hola 1");

    switch (archivoReferencia[DATOS_REFERENCIA.tipoCita]) {
        case REFERENCIAS.libro:

            break;
    }
_%>