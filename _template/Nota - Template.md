<%*
    const pertenece = tp.user.whiteList();

    const dv = app.plugins.plugins.dataview.api;
    
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let tPadre = tArchivo.parent;

	if (!tPadre || tPadre.isRoot()) {
		console.log("Esta en el root");
		return;
	}

    let path = `${tPadre.path}/${tArchivo.basename}`;
	
	try {
        if (pertenece.archivoFacultad(path)) {
            let template = pertenece.articuloLegal(tp, path)
                ? "legal/Artículo - Template"
                : "Definición - Template";
            
            tR += await tp.file.include(`[[${template}]]`);            

        } else if (pertenece.archivoInvestigacion(path)) {
            tR += await tp.file.include("[[Nota investigacion - Template]]");
            
        } else if (pertenece.archivoProyecto(path)) {
            tR += await tp.file.include("[[Nota proyecto - Template]]");
            
        } else if (pertenece.archivoLibro(path)) {
            tR += await tp.file.include("[[Libro - Template]]");

        } else if (pertenece.archivoBiblioteca(path)) {
            tR += await tp.file.include("[[Biblioteca selector - Template]]");
            
        } else if (pertenece.archivoComida(path)) {
            // Nota receta

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