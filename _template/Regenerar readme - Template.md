# Apuntes
---
Voy a ir poniendo mis apuntes acá, y estoy usando [Obsidian](https://obsidian.md) para escribir y crear los vínculos entre las páginas por lo que es recomendable para poder navegar los apuntes.

Cualquier corrección/ampliación de los contenidos en este proyecto, por favor hacer un [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para poder visualizar los cambios pedidos. En el caso de sugerir cualquier cosa, por favor crear un [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) donde ahí lo podré ver. 

## Materias
---
Un listado de materias y su estado actual

<%*
    const dv = app.plugins.plugins.dataview.api;
    const tagCarreraPrincipal = "ingeniería-informática-y-electrónica"
    
    const materias = dv.pages(`#materia/${tagCarreraPrincipal}`)
        .sort(materia => materia.file.name);

    let tabla = dv.markdownTable(["Materia", "Código", "Estado"], materias.map(materia => {
        let nombre = materia.file.name.replace(`(${materia.codigo})`, "").trim();
        let path = `${materia.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, materia.codigo, materia.estado ];
    }));

    tR += `${tabla}\n`;
_%>

### Otras carreras
---
Un listado de otras carreras en las que voy a ir resumiendo para completar y ver distintos puntos de vista

<%*
    const carreras = dv.pages(`#carrera and -#carrera/${tagCarreraPrincipal}`)
        .sort(carrera => carrera.file.name);

    tabla = dv.markdownTable(["Carrera", "Estado"], carreras.map(carrera => {
        let nombre = carrera.file.name;
        let path = `${carrera.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, carrera.estado ];
    }));

    tR += `${tabla}\n`;
_%>

## Investigación
---
Un listado de los temas investigados y su estado actual

<%*
    const indices = dv.pages("#índice")
        .filter(indice => indice.file.folder.split("/").length == 1)
        .sort(indice => {
            let nombre = indice.file.folder.split("/").pop();
            return `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`.trim();
        });

    tabla = dv.markdownTable(["Tema de investigación", "Estado"], indices.map(indice => {
        let nombre = indice.file.folder.split("/").pop();
        nombre = `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`.trim();
        let path = `${indice.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, indice.estado ];
    }));

    tR += `${tabla}\n`;
_%>

## Proyectos
---
Un listado de los proyectos y su estado actual

<%* 
    const proyectos = dv.pages("#proyecto")
        .sort(proyecto => proyecto.dia, direction="desc");

    tabla = dv.markdownTable(["Proyecto", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto.estado ];
    }));

    tR += `${tabla}\n`;
_%>

## Subproyectos
---
Tenemos los subproyectos específicos que son

| Proyecto                                        |                                                                                                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Biblioteca](biblioteca/Biblioteca%20propia.md) | Tiene la intención de colectar libros, papers, etc. que me interese analizar relacionado a todo el contexto de esta página y poder referenciarla |
| [Recetas](recetas/Recetas.md)                   | Todavía no tiene nada pero la idea es agregar recetas y explorar los aspectos de nutrición que pueden aparecer                                   |

## Contribuidores
---
* Juan Ignacio Biancuzzo
* Felipe Perassi
* Rocio Nicole Heredia Piñon