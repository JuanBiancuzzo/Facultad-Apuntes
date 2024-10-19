<%*
    const preguntar = tp.user.preguntar();
    const eliminar = tp.user.eliminar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const SALIR = "salir";

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    
    let archivosPosibles = conseguirArchivos();
    let archivoUno = archivosPosibles[0];
    let archivoDos = archivosPosibles[1];

    let tarea;

    let pendientes = [];
    while (true) {
        let respuesta = preguntar.suggester(
            tp, [ archivoUno.file.name, archivoDos.file.name, "Salir" ], 
            [{ mejor: archivoUno, peor: archivoDos }, { mejor: archivoDos, peor: archivoUno }, SALIR],
            "Que archivo es mejor?"
        );

        if (tarea) await tarea;

        archivosPosibles = conseguirArchivos();
        archivoUno = archivosPosibles[0];
        archivoDos = archivosPosibles[1];

        respuesta = await respuesta;
        if (!respuesta || respuesta == SALIR) break;

        let { mejor, peor } = respuesta;
        if ( parseInt(mejor.orden, 10) > parseInt(peor.orden, 10) ) {
            let nuevoOrdenPeor = mejor.orden;
            let nuevoOrdenMejor = peor.orden;

            let tMejor = tp.file.find_tfile(mejor.file.path);
            let tPeor = tp.file.find_tfile(peor.file.path);

            let tareas = [];
            tareas.push(app.fileManager.processFrontMatter(tMejor, (frontmatter) => {
                frontmatter["orden"] = nuevoOrdenMejor;
            }));

            tareas.push(app.fileManager.processFrontMatter(tPeor, (frontmatter) => {
                frontmatter["orden"] = nuevoOrdenPeor;
            }));

            tarea = Promise.all(tareas).then((_) => console.log(`Cambiaron\n${nuevoOrdenPeor} pasa a ser ${nuevoOrdenMejor}`));
        } else { 
            console.log(`No es necesario de cambiar\n${mejor.orden} < ${peor.orden}`);
        }
    }
    
    return await eliminar.directo(tArchivo);

    function conseguirArchivos() {
        let archivos = dv.pages().filter(archivo => archivo.orden);
        let cantidad = archivos.length;

        let archivoUno = archivos[Math.floor(Math.random() * cantidad)]
        let archivoDos;
        do {
            archivoDos = archivos[Math.floor(Math.random() * cantidad)]
        } while(archivoUno.file.path == archivoDos.file.path);

        return [ archivoUno, archivoDos ];
    }
%>