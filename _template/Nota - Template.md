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
            // Nota libros

        } else if (pertenece.archivoComida(path)) {
            // Nota receta

        }
    
    } catch ({ name: _, message: mensaje }) {
        return await tp.user.eliminar().eliminar(tp, tArchivo, mensaje);
    }
_%>