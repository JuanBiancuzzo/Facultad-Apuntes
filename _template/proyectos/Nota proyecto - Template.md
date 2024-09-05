<%*    
    const cte = tp.user.constantes();    
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let fecha = tp.file.creation_date("YYYY-MM-DD");
    let path = tArchivo.parent.path;

    let tag = path.trim()
        .split(" ")
        .filter(token => token.trim() != "-" && token.trim() != "")
        .join("-");
		
    tR += "---\n"; 
    tR += `dia: ${fecha}\n`;
    tR += `tags: \n - ${tag}\n - nota/proyecto \n`;
    tR += "---\n";

    let [ anio, mes, dia ] = fecha.split("-").map(num => parseInt(num, 10));
    dia = (dia <= 3) ? ["1ro", "2do", "3ro"][dia - 1] : dia;
    mes = cte.meses[mes - 1];

    let nuevoNombre = `Nota del ${dia} de ${mes} del ${anio}`;
    let carpeta = tp.file.folder(true);

    try {
        await tp.file.rename(nuevoNombre);

    } catch (_) {
        let path = `${carpeta}/${nuevoNombre}.md`;
        let leafAUsar;

        app.workspace.iterateRootLeaves((leaf) => {
            let tArchivoActual = leaf.view.file;
            if (!tArchivoActual) 
                return;

            if (tArchivoActual.path == path) 
                leafAUsar = leaf;
        });

        if (!leafAUsar) leafAUsar = await app.workspace.getLeaf("tab");  

        const tArchivoViejo = tp.file.find_tfile(path);
        await leafAUsar.openFile(tArchivoViejo);

        throw tp.user.error().Quit("Esa nota ya existe");
	}
_%>
### Progreso
---
<% tp.file.cursor() %>