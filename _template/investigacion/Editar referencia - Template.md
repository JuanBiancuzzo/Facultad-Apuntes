<%*
    
    const preguntar = tp.user.preguntar();
	const describir = tp.user.describir();
    const error = tp.user.error();
    const LIBRO = "Libro";

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    const dvArchivo = dv.page(tp.file.path(true));

    let tReferencia = tArchivo;
    let referencia = dvArchivo;

    if (dvArchivo.tipoCita != LIBRO) {
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
    let datosViejos = JSON.parse(JSON.stringify(datosActuales));

    let numReferencia = tp.user.generarNumReferencia(dv);
    let datosNuevos = await tp.user.cita().editar(tp, referencia.tipoCita, numReferencia, datosActuales);

    if (dvArchivo.tipoCita == LIBRO) {
        let nuevoAliases = dvArchivo.aliases ? dvArchivo.aliases : [];
        let capitulosViejos = nombresCapitulos(datosViejos);

        nuevoAliases = nuevoAliases.filter(alias => !capitulosViejos.contains(alias));
        nombresCapitulos(datosNuevos).forEach(cap => nuevoAliases.push(cap));

        datosNuevos["aliases"] = nuevoAliases;
    }
    
    await app.fileManager.processFrontMatter(tReferencia, (frontmatter) => {
        for (let [ key, value ] of Object.entries(datosNuevos)) {
            frontmatter[key] = value;
        }
    });

    if (dvArchivo.tipoCita == LIBRO) {
        let contenido = await app.vault.read(tArchivo);

        let indicePosicion = contenido.indexOf("# Referencias");
        if (indicePosicion < 0) indicePosicion = contenido.length;

        let headers = [];

        let capitulosViejos = datosViejos.capitulos ? datosViejos.capitulos : dv.array([]);
        capitulosViejos = capitulosViejos.sort((infoCapituloA, infoCapituloB)  => parseInt(infoCapituloA.numeroCapitulo, 10) - parseInt(infoCapituloB.numeroCapitulo, 10));

        console.log(capitulosViejos);
        for (let infoCapitulo of capitulosViejos) {
            let indice = contenido.indexOf(`## ${describir.capitulo(infoCapitulo)}`);
            console.log(indice);

            if (indice >= 0) {
                headers.push({
                    cap: parseInt(infoCapitulo.numeroCapitulo, 10),
                    indice: indice
                });
            }
        }

        let capitulosNuevos = datosNuevos.capitulos ? datosNuevos.capitulos : dv.array([]);
        capitulosNuevos = capitulosNuevos.sort((infoCapituloA, infoCapituloB)  => parseInt(infoCapituloB.numeroCapitulo, 10) - parseInt(infoCapituloA.numeroCapitulo, 10));
        console.log(capitulosNuevos);

        for (let infoCapitulo of capitulosNuevos) {
            let ultimo = headers.last();
            let texto = `## ${describir.capitulo(infoCapitulo)}\n---\n`;

            while (ultimo && ultimo.cap > parseInt(infoCapitulo.numeroCapitulo, 10)) {
                headers.pop();
                ultimo = headers.last();
            }

            let indiceInicio = ultimo ? ultimo.indice : indicePosicion;
            let indiceFinal = indiceInicio;

            if (ultimo && ultimo.cap == parseInt(infoCapitulo.numeroCapitulo, 10)) {
                let finalTitulo = "\n---\n"
                indiceFinal += contenido.slice(indiceInicio).indexOf(finalTitulo) + finalTitulo.length;

            } else { 
                texto += "\n\n";
            }


            if (ultimo && ultimo.cap < parseInt(infoCapitulo.numeroCapitulo, 10)) {
                indiceInicio = indicePosicion;
                indiceFinal = indiceInicio;
            }
            
            contenido = `${contenido.slice(0, indiceInicio)}${texto}${contenido.slice(indiceFinal)}`;
            indicePosicion = indiceInicio;
        }

        await app.vault.modify(tArchivo, contenido);
    }
    
    function nombresCapitulos(datos) {
        let resultado = [];
        if (!datos.capitulos) return resultado;

		let autores = datos.nombreAutores.map(({ nombre, apellido }) => `${nombre} ${apellido}`);
		let subTitulo = datos.subtituloObra 
            ? `, ${datos.subtituloObra.charAt(0).toLowerCase()}${datos.subtituloObra.slice(1)}`
            : "";
        let volumen = (datos.volumen) ? ` (vol. ${datos.volumen})` : "";
        let nombreArchivo = `${datos.tituloObra}${subTitulo}${volumen} de ${autores.join(", ")}`;

        let capitulos = datos.capitulos.sort((infoCapituloA, infoCapituloB)  => parseInt(infoCapituloA.numeroCapitulo, 10) - parseInt(infoCapituloB.numeroCapitulo, 10));
        for (let infoCapitulo of capitulos) {
			let descripcion = describir.capitulo(infoCapitulo);
			resultado.push(`${nombreArchivo}, ${descripcion}#${descripcion}`);
        }

        return resultado;
    }

_%>