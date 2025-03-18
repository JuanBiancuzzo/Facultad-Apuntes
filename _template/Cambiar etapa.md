<%* 
    const { ETAPAS, DATAVIEW, SIMBOLOS, DATOS: { ARCHIVO: DATOS_ARCHIVO } } = tp.user.constantes();
	const dv = app.plugins.plugins.dataview.api;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const pathActual = tp.file.path(true);
    const tArchivo = tp.file.find_tfile(pathActual);
    const dvArchivo = dv.page(pathActual);

    let etapa = dvArchivo[DATOS_ARCHIVO.etapa];
    try {
        let nuevaEtapa = await preguntar.suggester(
            tp, (opcionEtapa) => ` ${opcionEtapa == etapa ? SIMBOLOS.confirmar : SIMBOLOS.elegir} ${opcionEtapa}`,
            Object.values(ETAPAS), "Elegir que etapa se va a usar",
            error.Quit("No se ingresó que etapa se va a usar")
        );

        if (nuevaEtapa != etapa) {
            await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
                frontmatter[DATOS_ARCHIVO.etapa] = nuevaEtapa;
            });

            if (!etapa) {
                let contenido = await app.vault.read(tArchivo);
                let contenidoExtra = `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DATAVIEW.etapa}", { etapa: dv.current()?.etapa });\n\`\`\``;

                if (contenido.slice(0, 3) == "---") {
                    let index = contenido.slice(3).indexOf("---") + 7; // 3 del ---, 4 del ---\n
                    contenido = `${contenido.slice(0, index)}${contenidoExtra}\n${contenido.slice(index)}`;
                } else {
                    contenido = `${contenidoExtra}\n${contenido}`;
                }

                await app.vault.modify(tArchivo, contenido);
            }
        }

        new Notice(`Se cambio correctamente la etapa a ${nuevaEtapa}`);

    } catch ({ name: _name, message }) {
        console.log(message);
        new Notice(message);
    }
_%>