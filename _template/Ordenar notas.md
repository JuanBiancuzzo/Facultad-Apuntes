<%*
    const preguntar = tp.user.preguntar();
    const eliminar = tp.user.eliminar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const SALIR = "salir";

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    let archivos = dv.pages()
        .filter(archivo => archivo.orden);
    let cantidad = archivos.length;
    
    let archivosPosibles = conseguirArchivos(archivos, cantidad);
    let archivoUno = archivosPosibles[0];
    let archivoDos = archivosPosibles[1];

    let pendientes = [];
    while (true) {
        let respuesta = preguntar.suggester(
            tp, [ archivoUno.file.name, archivoDos.file.name, "Salir" ], 
            [{ mejor: archivoUno, peor: archivoDos }, { mejor: archivoDos, peor: archivoUno }, SALIR],
            "Que archivo es mejor?"
        );

        archivosPosibles = conseguirArchivos(archivos, cantidad);
        archivoUno = archivosPosibles[0];
        archivoDos = archivosPosibles[1];

        respuesta = await respuesta;
        if (!respuesta || respuesta == SALIR) break;

        let { mejor, peor } = respuesta;
        if ( mejor.orden < peor.orden ) {
            let nuevoOrdenPeor = mejor.orden;
            let nuevoOrdenMejor = peor.orden;

            let tMejor = tp.file.find_tfile(mejor.file.path);
            let tPeor = tp.file.find_tfile(peor.file.path);

            await app.fileManager.processFrontMatter(tMejor, (frontmatter) => {
                frontmatter["orden"] = nuevoOrdenMejor;
            });
            await app.fileManager.processFrontMatter(tPeor, (frontmatter) => {
                frontmatter["orden"] = nuevoOrdenPeor;
            });
        }
    }
    
    return await eliminar.directo(tArchivo);

    function conseguirArchivos(archivos, cantidad) {
        let archivoUno = archivos[Math.floor(Math.random() * cantidad)]
        let archivoDos;
        do {
            archivoDos = archivos[Math.floor(Math.random() * cantidad)]
        } while(archivoUno.file.path == archivoDos.file.path);

        return [ archivoUno, archivoDos ];
    }
%>