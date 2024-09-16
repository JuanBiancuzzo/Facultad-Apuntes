<%*
    const dv = app.plugins.plugins["dataview"].api;
    let path = tp.file.path(true);

    let archivo = dv.page(path);
    if (archivo.referencias && archivo.referencias.length > 0) {
        let referenciasActuales = archivo.referencias.map(ref => parseInt(ref, 10));

        try {

            let referencias = dv.pages('#referencia')
                .flatMap(referencia => tp.user.cita().metadata(tp, referencia))
                .filter(ref => referenciasActuales.indexOf(ref.numReferencia) >= 0)
                .sort(ref => parseInt(ref.numReferencia, 10));
            
            let cita = referencias[0].numReferencia;
            if (referencias.length > 1) {
                cita = await tp.system.suggester(
                    referencias.map(ref => tp.user.cita().describir(ref)), 
                    referencias.map(ref => ref.numReferencia),
                    true, "Referenciar cita (si no hay nada que referenciar, apretar ESC)", 10
                );
            }

            tR += `<sup><a href="#ref-${cita}" style="color: inherit; text-decoration: none;">[${cita}]</a></sup> `;

        } catch (e) {
            const mensaje = "Hubo un error al agregar la referencia";
            console.log(e);
            console.log(mensaje);
            new Notice(mensaje);
        }
    } else {
        const mensaje = "No hay referencias para citar";
        console.log(mensaje);
        new Notice(mensaje);
    }    
_%>