---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 570
tituloObra: 5G NR
subtituloObra: The Next Generation Wireless Access Technology
nombreAutores:
  - apellido: Dehlman
    nombre: Erik
  - apellido: Parkvall
    nombre: Stefan
  - apellido: Skold
    nombre: Johan
anio: 2018
editorial: Academic Press
edicion: 1
volumen: 
url: 
capitulos:
  - numReferencia: 571
    numeroCapitulo: "19"
    nombreCapitulo: RF Technologies at mm-Wave Frequencies
    editores: []
    paginas:
      inicio: "287"
      final: "306"
cover: 5G NR, the Next Generation Wireless Access Technology de Erik Dehlman, Stefan Parkvall, Johan Skold.jpg
aliases:
  - "5G NR, the Next Generation Wireless Access Technology de Erik Dehlman, Stefan Parkvall, Johan Skold, Capítulo 19: RF Technologies at mm-Wave Frequencies#Capítulo 19: RF Technologies at mm-Wave Frequencies"
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/coleccion/libro/capitulos", { libro: actual, capitulos: actual?.capitulos });
```


## Capítulo 19: RF Technologies at mm-Wave Frequencies
---


<%*
    const dv = app.plugins.plugins.dataview.api;
    
    const libros = dv.pages('#referencia/libro');
    let cambios = [];
    
    for (let libro of libros) {
        let tArchivo = tp.file.find_tfile(libro.file.path);
        let cambio = app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            if (frontmatter["volumen"] !== null) {
                frontmatter["volumen"] = parseInt(frontmatter["volumen"], 10);
            }
        });
        cambios.push(cambio); 
    }    
    // await Promise.all(cambios);
    console.log("Termiando");
    return
%>