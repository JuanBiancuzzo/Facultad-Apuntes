<%*
    const herramientas = tp.user.herramientas();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const describir = tp.user.describir().legal;
    const cte = tp.user.constantes();
    const mostrarTexto = tp.user.mostrarTexto();

    const dv = app.plugins.plugins.dataview.api;

    const AGREGAR_TEXTO = "AGREGAR_TEXTO";
    const AGREGAR_ENUMERACION = "AGREGAR_ENUMERACION";
    const SALIR = "SALIR";

    const EDITAR = 1;
    const ELIMINAR = 2;
    
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    const documentos = dv.pages(`"${cte.pathArticulos}" and #legal/documento`);

    let documento = await preguntar.suggester(
        tp, (doc) => describir.documento(doc), documentos,
        "En que documento se encuentra",
        error.Quit("No se eligió un documento")
    );
        
    let subSecciones = seccionesSiguientes(documento)
        .sort(sec => sec.num);
    let grupos = documento.grupos ? documento.grupos : [];
    
    let path = [ { tipo: "archivo", archivo: documento } ];

    while (grupos.length > 0 || subSecciones > 0) {
        let opciones = [
            ...subSecciones.map(sec => describir.seccion(sec)), 
            ...grupos.map(grupo => ` ⊕ Agregar ${grupo}`),
            " ↶ En esta sección"
        ];
        let valores = [...subSecciones, ...grupos, SALIR];

        let accion = await preguntar.suggester(
            tp, opciones, valores,
            "Elegir o crear una sección",
            "No se eligió una sección"
        );

        let tipoSeccion;
        if (accion == SALIR) {
            break;

        } else if (grupos.includes(accion)) {
            // Se crea una seccion
            tipoSeccion = accion;
            let nuevaSeccion = await preguntar.legal.seccion(tp, tipoSeccion);
            path.push(nuevaSeccion);

            subSecciones = [];

        } else {
            // Se eligió una sección
            let seccionSiguiente = accion;
            tipoSeccion = seccionSiguiente.tipo;
            path.push( { tipo: "archivo", archivo: seccionSiguiente } );

            subSecciones = seccionesSiguientes(seccionSiguiente);    
        }

        let indexSeccion = grupos.indexOf(tipoSeccion);
        grupos = grupos.slice(indexSeccion + 1);
    }

    let numero = parseInt(await preguntar.prompt(
        tp, "Cuál es el número del artículo?", 
        "No se ingresó el número del artículo"
    ), 10);

    let posiblesArchivosConflictivos = dv.pages(`"${documento.file.folder}" and #legal/articulo`)
        .filter(articulo => articulo.num == numero && !articulo.esBis);

    let esBis = false;
    if (posiblesArchivosConflictivos.length > 0) {
        esBis = await preguntar.suggester(
            tp, ["Es bis", "No es bis"], [true, false],
            `El artículo ${numero} es bis?`,
            "No se ingresó la forma de determinar si es bis o no"
        );

        if (!esBis) {
            throw error.Quit("Ya existe un artículo así");
        }
    }

    if (!numero || numero < 0)
        throw error.Prompt("No se ingresó el número del artículo correcto");

    let nombre;
    if (documento.artConNombre) {
        nombre = await preguntar.prompt(
            tp, "Cuál es el nombre del artículo?",
            error.Prompt("No se agregó el nombre del artículo")
        );
    }

    let texto = await mostrarTexto.preguntar(tp);

    // Crear archivos necesarios, y guardarlos en el path
    let carpetaActual = cte.pathArticulos;
    let tipoPrevio = null;

    for (let [index, { tipo, ...datos }] of path.entries()) {
        if (tipo == "archivo") {
            carpetaActual = `${datos.archivo.file.folder}/`;
            tipoPrevio = datos.archivo.file.tags
                .find(tag => tag.startsWith("#legal"))
                .replace("#legal/", "");
            continue;
        }

        let { nombre: nombreSeccion, numero: numeroSeccion } = datos;
        
        let nuevoNombre = `${tipo} - ${nombreSeccion} - ${numeroSeccion} - ${tipoPrevio}`;
        carpetaActual += `${tipo} ${numeroSeccion}`;

        let template = tp.file.find_tfile("Seccion - Template");
        let tCarpeta = await app.vault.createFolder(carpetaActual);

        let tArchivo = await tp.file.create_new(template, nuevoNombre, false, tCarpeta);
        let archivo = dv.page(tArchivo.path);

        path[index] = { tipo: "archivo", archivo: archivo };
        tipoPrevio = tipo;
        carpetaActual += "/";
    }

    // Agregar metadata
    tR += "---\n";
    tR += `num: ${numero}\n`;
    if (nombre) {
        tR += `nombre: ${nombre}\n`;
    }
    if (esBis) {
        tR += `esBis: ${esBis}\n`;
    }

    tR += `articulo: \n${mostrarTexto.metadata(texto)}\n`;

    let previo = path.pop().archivo;
    tR += `previo: "[[${previo.file.path}|${previo.file.name}]]"\n`;

    tR += "tags: \n - legal/articulo\n";
    tR += "---\n";;

    // Mover el archivo
    // Mover a la carpeta del previo
    // Cambiar nombre de forma acorde
    let nuevoNombre = `Art. ${numero}${esBis ? " bis" : ""} ${documento.abreviacion}${(nombre) ? `, ${nombre}` : ""}.md`;
    await app.vault.rename(tArchivo, `${previo.file.folder}/${nuevoNombre}`);

    function seccionesSiguientes(archivo) {
        const carpeta = archivo.file.folder;
        const nivel = carpeta.split("/").length;
    
        return subSecciones = dv.pages(`"${carpeta}" and -#legal/articulo`)
            .filter(seccion => seccion.file.folder.split("/").length == nivel + 1);
    }

_%>
# Artículo
---
<%*
    // Mostrar texto
    tR += mostrarTexto.mostrar(tp, texto);
_%>


# Interpretación
---
