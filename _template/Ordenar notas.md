<%*
    const preguntar = tp.user.preguntar();
    const eliminar = tp.user.eliminar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const SALIR = "salir";

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    let archivosCache = {};
    dv.pages().filter(archivo => archivo.orden).forEach(archivo => archivosCache[archivo.file.path] = 1);
    
    let [ archivoUno, archivoDos ] = conseguirArchivos(archivosCache);
    archivosCache[archivoUno.file.path]++;
    archivosCache[archivoDos.file.path]++;

    let tarea;

    while (true) {
        let respuesta = preguntar.suggester(
            tp, [ archivoUno.file.name, archivoDos.file.name, "Salir" ], 
            [{ mejor: archivoUno, peor: archivoDos }, { mejor: archivoDos, peor: archivoUno }, SALIR],
            "Que archivo es mejor?"
        );

        if (tarea) await tarea;

        let archivosPosibles = conseguirArchivos(archivosCache);
        archivoUno = archivosPosibles[0];
        archivoDos = archivosPosibles[1];

        archivosCache[archivoUno.file.path]++;
        archivosCache[archivoDos.file.path]++;

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

    function conseguirArchivos(archivosCache) {
        let archivos = dv.pages().filter(archivo => archivo.orden).sort(archivo => archivo.orden);
        let indicePrincipal = 0;

        do {
            indicePrincipal = Math.floor(Math.random() * archivos.length);
        } while (1 / archivosCache[archivos[indicePrincipal].file.path] < Math.random());

        let indiceSecundario = (indicePrincipal == 0) ? 1 : indicePrincipal + 1;

        return [ archivos[indicePrincipal], archivos[indiceSecundario] ];
    }
%>