<%*
    const dv = app.plugins.plugins.dataview.api;

    let [ tipo, nombre, numero, tipoPrevio ] = tp.file.title.split("-").map(parte => parte.trim());
    numero = parseInt(numero, 10);

    await tp.file.rename(`${tipo} ${numero}, ${nombre}`);    

    let carpeta = tp.file.folder(true).split("/");
    carpeta.pop();
    carpeta = carpeta.join("/");

    let previo = dv.pages(`"${carpeta}" and #legal/${tipoPrevio}`)[0];    

    tR += "---\n";
    tR += `tipo: ${tipo}\n`;
    tR += `nombre: ${nombre}\n`;
    if (numero > 0) {
        tR += `num: ${numero}\n`;
    }
    tR += `previo: "[[${previo.file.path}|${previo.file.name}]]"\n`;
    tR += `tags: \n  - legal/${tipo}\n`;
    tR += "---\n";
_%>
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarSubSecciones", { paginaActual: dv.current() });
```
### Interpretación
---


### Artículos
---
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarArticulos", { paginaActual: dv.current() });
```
