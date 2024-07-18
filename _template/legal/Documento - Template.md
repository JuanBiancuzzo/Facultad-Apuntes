<%*
    const dv = app.plugins.plugins.dataview.api;
    const herramientas = tp.user.herramientas();
    const preguntar = tp.user.preguntar();

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    let secciones;

    try {
        let nombre = await preguntar.prompt(
            tp, "Nombre del documento?", "No se ingresó el nombre del documento"
        );

        let documentos = dv.pages('"legal/Articulos" and #legal/documento');
        let nombreValido = herramientas.esNombreValido(nombre);

        while (documentos.some(doc => doc.file.name == nombre) || !nombreValido) {
            const mensaje = nombreValido
                ? "Ya existe un documento con ese nombre"
                : `El nombre es invalido, no puede contener ${herramientas.cte.caracteresInvalidos.join(" ")}`;
            
            console.log(mensaje);
            new Notice(mensaje);

            nombre = await preguntar.prompt(
                tp, "Nombre del documento?", "No se ingresó el nombre del documento"
            );

            nombreValido = herramientas.esNombreValido(nombre);
        }

        let abreviacion = await preguntar.prompt(
            tp, `La abreviación para ${nombre}, como "del CC y CN" para el Código Civil y Comercial de la Nación`,
            "No se ingresó una abreviación"
        );

        secciones = [];
        while (true) {
            try {

                let representacion = secciones.join(">");
                let seccion = await preguntar.prompt(
                    tp, `Agregar nueva sección, siguiendo el orden: \n${representacion}`
                );

                secciones.push(seccion);

            } catch {
                break;
            }
        }

        let articulosConNombre = false;
        try {
            articulosConNombre = await preguntar.suggester(
                tp, ["✓ Sí", "X No"], [true, false], 
                "Los artículos tienen nombre?",
                "Se salió del prompt, se asume que no es opcional",
            );
        } catch ({ name: _, message: mensaje }) {
            console.log(mensaje);
            new Notice(mensaje);
        }

        tR += "---\n";
        tR += `abreviacion: ${abreviacion}\n`;
        tR += `grupos: \n${secciones.map(sec => ` - ${sec}\n`).join("")}`;
        tR += `artConNombre: ${articulosConNombre}\n`;
        tR += "tags: \n - legal/documento\n";
        tR += "---\n";

        try {
            await app.vault.createFolder(`legal/Articulos/${nombre}`);

            let tArchivo = tp.file.find_tfile(tp.file.path(true));
            await app.vault.rename(tArchivo, `legal/Articulos/${nombre}/${nombre}.md`);

        } catch(e) {
            console.log(e);
            new Notice(e);
        }

    } catch ({ name: _, message: mensaje }) {
        return await tp.user.eliminar().eliminar(tp, tArchivo, mensaje);
    }
_%>
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarSubSecciones", { paginaActual: dv.current() });
```
### Artículos
---
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarArticulos", { paginaActual: dv.current() });
```