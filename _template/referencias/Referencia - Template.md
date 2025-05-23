<%*
    const { ETAPAS, TEMPLATE, DIRECTORIOS, SIMBOLOS, TAGS, DATOS: { 
        ARCHIVO: DATOS_ARCHIVOS, REFERENCIAS: DATOS_REFERENCIA 
    } } = tp.user.constantes();
    const CREAR = "crear";

    const referencias = tp.user.referencia();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;
    
    const TEXTO_REFERENCIA = await tp.file.include(`[[${TEMPLATE.seccionReferencia}]]`);
    const TEXTO_ETAPA = await tp.file.include(`[[${TEMPLATE.etapa}]]`);

    let archivo = dv.page(tp.file.path(true));
    let tArchivo = tp.file.find_tfile(tp.file.path(true));

    let referenciasArchivo = archivo[DATOS_ARCHIVOS.referencias] 
        ? archivo[DATOS_ARCHIVOS.referencias].map(num => parseInt(num, 10))
        : [];

    let maximo = 0;
    let referenciasTotal = referencias.obtenerReferencias(tp, dv);
    referenciasTotal.forEach(referencia => maximo = Math.max(maximo, parseInt(referencia[DATOS_REFERENCIA.numReferencia], 10)));
    referenciasTotal = referenciasTotal.sort(referencia => {
            let existe = referenciasArchivo.includes(referencia[DATOS_REFERENCIA.numReferencia]);
            let valor = parseInt(referencia[DATOS_REFERENCIA.numReferencia], 10);

            return existe ? valor : valor - maximo;
        }, "desc");

    let opciones = [ ` ${SIMBOLOS.agregar} Crear referencia` ];
    let valores = [ CREAR ];

    for (let referencia of referenciasTotal) {
        let existe = referenciasArchivo.includes(referencia.obtenerNumReferencia());

        opciones.push(` ${existe ? SIMBOLOS.sacar : SIMBOLOS.elegir } ${referencia.describir()}`);
        valores.push(referencia);
    }

    try {
        let respuesta = await preguntar.suggester(
            tp, opciones, valores, "Que se quiere hacer?",
            error.Prompt("No se eligió que hacer"), 1 + referenciasArchivo.length + 10
        );

        let nuevasReferencias = referenciasArchivo.slice();

        if (respuesta == CREAR) {
            // Se quiere crear
            let seguidorRef = tp.user.seguidorReferencias(tp).new(dv);
            let { referencia: nuevaReferencia } = await referencias.generar(tp, seguidorRef);
            nuevasReferencias.push(nuevaReferencia.obtenerNumReferencia());

        } else if (referenciasArchivo.includes(respuesta)) {
            // Se quiere eliminar
            nuevasReferencias.remove(respuesta.obtenerNumReferencia());

        } else {
            // Se quiere agregar
            nuevasReferencias.push(respuesta.obtenerNumReferencia());
        }

        await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            frontmatter[DATOS_ARCHIVOS.referencias] = nuevasReferencias.map(numRef => numRef.toString());
        });

        const tagsAIgnorar = [ TAGS.materia, TAGS.resumenCurso, TAGS.resumenMateria, TAGS.investigacion, TAGS.curso ];
        if (!archivo[DATOS_ARCHIVOS.tags].some(tag => tagsAIgnorar.findIndex(tagIgnorar => tag.startsWith(tagIgnorar)) >= 0)) {
            await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
                if (!frontmatter[DATOS_ARCHIVOS.etapa]) {
                    frontmatter[DATOS_ARCHIVOS.etapa] = ETAPAS.sinEmpezar;
                }
            });

            let nuevoContenido = await app.vault.read(tArchivo);
            let hayReferencias = nuevasReferencias.length > 0;
            let indiceReferencias = incluye(nuevoContenido, TEXTO_REFERENCIA);
            let hayTopicoReferencias = indiceReferencias > 0;

            if (hayReferencias && !hayTopicoReferencias) {
                // Agregar el topico
                nuevoContenido = `${nuevoContenido}\n\n\n${TEXTO_REFERENCIA}`;

            } else if (!hayReferencias && hayTopicoReferencias) {
                // Sacar el topico
                nuevoContenido = nuevoContenido.slice(0, indiceReferencias - `\n\n${TEXTO_REFERENCIA}`.length);

            }

            if (hayReferencias) {
                let hayEtapa = incluye(nuevoContenido, TEXTO_ETAPA) > 0;
                if (!hayEtapa) {
                    if (nuevoContenido.slice(0, 3) == "---") {
                        let index = nuevoContenido.slice(3).indexOf("---") + 7; // 3 del ---, 4 del ---\n
                        nuevoContenido = `${nuevoContenido.slice(0, index)}${TEXTO_ETAPA}\n${nuevoContenido.slice(index)}`;
                    } else {
                        nuevoContenido = `${TEXTO_ETAPA}\n${nuevoContenido}`;
                    }
                }
            }

            await app.vault.modify(tArchivo, nuevoContenido);
        }

        app.commands.executeCommandById('dataview:dataview-rebuild-current-view');

    } catch ({ name: nombre, message: mensaje }) {
        console.log(mensaje);
        new Notice(mensaje);
    }

_%>