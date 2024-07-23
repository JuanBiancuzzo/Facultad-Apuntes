<%*
    const cte = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;
    
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let tPadre = tArchivo.parent;

	if (!tPadre || tPadre.isRoot()) {
		console.log("Esta en el root");
		return;
	}
	
	try {
        if (tPadre.path.startsWith(cte.pathArticulos)) {
            tR += await tp.file.include("[[legal/Artículo - Template]]");
        } else if (dv.pages(`"${tPadre.path}" and (#materia or #resumen)`).length > 0) {
            tR += await tp.file.include("[[Definición - Template]]");
        }
    } catch ({ name: _, message: mensaje }) {
        return await tp.user.eliminar().eliminar(tp, tArchivo, mensaje);
    }
_%>