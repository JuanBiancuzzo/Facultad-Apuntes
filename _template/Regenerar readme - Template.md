<%*
    const dv = app.plugins.plugins.dataview.api;
_%>
### Apuntes
---
Voy a ir poniendo mis apuntes acá, y estoy usando [Obsidian](https://obsidian.md) para escribir y crear los vínculos entre las páginas por lo que es recomendable para poder navegar los apuntes.

Cualquier corrección/ampliación de los contenidos en este proyecto, por favor hacer un [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para poder visualizar los cambios pedidos. En el caso de sugerir cualquier cosa, por favor crear un [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) donde ahí lo podré ver. 

##### Materias
---
Un listado de materias y su estado actual

<%*
    const materias = dv.pages("#materia")
        .sort(materia => materia.file.name);

    let tabla = dv.markdownTable(["Materia", "Estado"], materias.map(materia => {
        let nombre = materia.file.name.replace(`(${materia.codigo})`, "").trim();
        let path = `${materia.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, materia.estado ];
    }));

    tR += `${tabla}\n`;
_%>

##### Investigación
---
Un listado de los temas investigados y su estado actual

<%*
    const indices = dv.pages("#índice")
        .filter(indice => indice.file.folder.split("/").length == 1)
        .sort(indice => indice.file.name);

    tabla = dv.markdownTable(["Tema de investigación", "Estado"], indices.map(indice => {
        let nombre = indice.file.folder.split("/").pop();
        nombre = `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`.trim();
        let path = `${indice.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, indice.estado ];
    }));

    tR += `${tabla}\n`;
_%>

##### Contribuidores
---
* Juan Ignacio Biancuzzo
* Felipe Perassi
