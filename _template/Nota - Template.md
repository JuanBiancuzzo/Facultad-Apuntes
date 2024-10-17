<%*
    const pertenece = tp.user.whiteList();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let tPadre = tArchivo.parent;

	if (!tPadre || tPadre.isRoot()) {
		console.log("Esta en el root");
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
        
        if (pertenece.archivoLibro(path) || (pertenece.archivoBiblioteca(path) && !pertenece.archivoPaper(path))) 
            posiblesInfoNota.push({
                descripcion: "Citar un libro",
                template: "Libro - Template"
            });
        
        if (pertenece.archivoPaper(path) || (pertenece.archivoBiblioteca(path) && !pertenece.archivoLibro(path)))
            posiblesInfoNota.push({
                descripcion: "Citar un paper",
                template: "Paper - Template"
            });
        
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