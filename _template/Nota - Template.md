<%*
    const pertenece = tp.user.whiteList();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let tPadre = tArchivo.parent;

	if (!tPadre || tPadre.isRoot()) {
		return;
	}

    let path = `${tPadre.path}/${tArchivo.basename}`;
	
	try {
        let posiblesInfoNota = [];

        if (pertenece.archivoFacultad(path)) {
            if (pertenece.articuloLegal(tp, path)) 
                posiblesInfoNota.push({
                    descripcion: "Ingresar artículo legal",
                    template: "legal/Artículo - Template"
                });
            else 
                posiblesInfoNota.push({
                    descripcion: "Ingresar definición",
                    template: "Definición - Template"
                });
        }

        if (pertenece.archivoInvestigacion(path))
            posiblesInfoNota.push({
                descripcion: "Ingresar nota de investigación",
                template: "Nota investigacion - Template"
            });
        
        if (pertenece.archivoProyectoPractico(path) || pertenece.archivoProyectoInvestigacion(path) || pertenece.archivoProyectoJuego(path))
            posiblesInfoNota.push({
                descripcion: "Ingresar nota de proyecto",
                template: "Nota proyecto - Template"
            });
        
        let esLibro = pertenece.archivoLibro(path);
        let esPaper = pertenece.archivoPaper(path);
        let esRFC = false;
        let esPatente = false;

        let enBiblioteca = pertenece.archivoBiblioteca(path) && [ esLibro, esPaper, esRFC, esPatente ].every(b => !b);
        
        if (esLibro || enBiblioteca) posiblesInfoNota.push({ descripcion: "Citar un libro", template: "Libro - Template" });
        
        if (esPaper || enBiblioteca) posiblesInfoNota.push({ descripcion: "Citar un paper", template: "Paper - Template" });

        if (esRFC || enBiblioteca) posiblesInfoNota.push({ descripcion: "Citar un RFC", template: "" });
        
        if (esPatente || enBiblioteca) posiblesInfoNota.push({ descripcion: "Citar una patente", template: "" });

        if (pertenece.archivoComida(path)) {
            // Nota receta

        }

        if (posiblesInfoNota.length > 0) {
            let infoNota = posiblesInfoNota[0];
            if (posiblesInfoNota.length > 1) {
                infoNota = await preguntar.suggester(
                    tp, infoNota => infoNota.descripcion, posiblesInfoNota,
                    "Elegir que tipo de archivo se va a usar",
                    error.Prompt("No se eligió un tipo de archivo")
                );
            }

            tR += await tp.file.include(`[[${infoNota.template}]]`);  
        }
        
    
    } catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();
        const errorNombre = tp.user.error().nombre;

        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
        }

        let error = new Error(mensaje);
        error.name;
        throw error;
    }
_%>