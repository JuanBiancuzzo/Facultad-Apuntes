<%* 
    const { ETAPAS, SIMBOLOS, DATOS: { ARCHIVO: DATOS_ARCHIVO } } = tp.user.constantes();
	const dv = app.plugins.plugins.dataview.api;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const pathActual = tp.file.path(true);
    const tArchivo = tp.file.find_tfile(pathActual);
    const dvArchivo = dv.page(pathActual);

    let etapa = dvArchivo[DATOS_ARCHIVO.etapa];
    try {
        if (!etapa || !Object.values(ETAPAS).includes(etapa)) {
            throw Error("No se tiene una etapa para modificar");
        }

        let nuevaEtapa = await preguntar.suggester(
            tp, (opcionEtapa) => ` ${opcionEtapa == etapa ? SIMBOLOS.confirmar : SIMBOLOS.elegir} ${opcionEtapa}`,
            Object.values(ETAPAS), "Elegir que etapa se va a usar",
            error.Quit("No se ingresó que etapa se va a usar")
        );

        if (nuevaEtapa != etapa) {
            await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
                frontmatter[DATOS_ARCHIVO.etapa] = nuevaEtapa;
            });
        }

        new Notice(`Se cambio correctamente la etapa a ${nuevaEtapa}`);

    } catch ({ name: _name, message }) {
        console.log(message);
        new Notice(message);
    }
_%>