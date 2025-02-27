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
            console.log("Hola 2");
            const { 
                libro: { CAPITULOS }, capituloLibro: { NUMERO_CAPITULO },
            } = DATOS_REFERENCIA;
            const { referencias: seccionReferencias } = SECCIONES;

            console.log("Hola 3");
            let capitulosViejos = referenciaEditar[CAPITULOS];
            let capitulosNuevos = datosNuevos[CAPITULOS];
            let descripcionCapituloLibro = tp.user.capituloLibro().describirReducido;

            console.log("Hola 4");
            let aliases = archivoReferencia[DATOS_REFERENCIA.aliases];

            let nombreLibro = tp.user.libro().describir(tp, referenciaEditar);
            console.log("Hola 5");
            for (let capitulo of capitulosViejos) {
                let descripcion = descripcionCapituloLibro(tp, capitulo);
                aliases.remove(`${nombreLibro}, ${descripcion}#${descripcion}`);
            }

            nombreLibro = tp.user.libro().describir(tp, datosNuevos);
            for (let capitulo of capitulosNuevos) {
                let descripcion = descripcionCapituloLibro(tp, capitulo);
                aliases.push(`${nombreLibro}, ${descripcion}#${descripcion}`);
            }

            await app.fileManager.processFrontMatter(tArchivoReferencia, (frontmatter) => {
                frontmatter[DATOS_REFERENCIA.aliases] = aliases;
            });

            let contenido = await app.vault.read(tArchivoReferencia);
            let reemplazo = [];

            for (let capituloNuevo of capitulosNuevos) {
                let numCapitulo = parseInt(capituloNuevo[NUMERO_CAPITULO], 10);
                let capituloViejo = capitulosViejos
                    .find(capitulo => parseInt(capitulo[NUMERO_CAPITULO], 10) == numCapitulo);

                let indice;
                if (capituloViejo) {
                    let descripcionCapViejo = descripcionCapituloLibro(tp, capituloViejo);
                    indice = contenido.search(new RegExp(`#+\\s+${descripcionCapViejo}\\s*\n`))
                }

                reemplazo.push({
                    numCapitulo: numCapitulo,
                    capituloNuevo: capituloNuevo,
                    indiceCapituloViejo: indice,
                });
            }

            reemplazo = reemplazo.sort((a, b) => b.numCapitulo - a.numCapitulo);

            let ultimoIndice = contenido.search(new RegExp(`\n${"#".repeat(seccionReferencias.nivel)} ${seccionReferencias.texto}`));
            if (ultimoIndice < 0) contenido.length;

            contenido = contenido.split("");

            for (let { capituloNuevo, indiceCapituloViejo } of reemplazo) {
                let descripcionCapNuevo = tp.user.capituloLibro().describirReducido(tp, capituloNuevo);

                if (indiceCapituloViejo < 0) { 
                    indiceCapituloViejo = ultimoIndice;
                    contenido.splice(indiceCapituloViejo, 1, `## ${descripcionCapNuevo}\n---\n\n\n`);

                } else {
                    let contenidoParcial = contenido.slice(indiceCapituloViejo);
                    let cantidadBorrar = contenidoParcial.indexOf("\n");

                    contenido.splice(indiceCapituloViejo, cantidadBorrar, `## ${descripcionCapNuevo}`);
                }

                ultimoIndice = indiceCapituloViejo - 1;
            }

            await app.vault.modify(tArchivoReferencia, contenido.join(""));

            break;
    }
_%>