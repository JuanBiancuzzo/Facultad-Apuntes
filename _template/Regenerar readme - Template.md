# Apuntes
---
Voy a ir poniendo mis apuntes acá, y estoy usando [Obsidian](https://obsidian.md) para escribir y crear los vínculos entre las páginas por lo que es recomendable para poder navegar los apuntes.

Cualquier corrección/ampliación de los contenidos en este proyecto, por favor hacer un [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para poder visualizar los cambios pedidos. En el caso de sugerir cualquier cosa, por favor crear un [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) donde ahí lo podré ver. 

## Carreras
---
Un listado de materias y su estado dividido por carrera
<%*
    const dv = app.plugins.plugins.dataview.api;
    const { TAGS } = tp.user.constantes();
    tR += dv.markdownList(dv.pages(`#${TAGS.carrera.self}`)
        .map(carrera => {
            let path = carrera.file.path.replaceAll(" ", "%20");
            return `[${carrera.file.name}](${path})`;
        }));
%>
<%*
    tR += dv.pages(`#${TAGS.carrera.self}`)
        .sort(carrera => carrera.file.name)
        .map(carrera => {
            let tag = carrera.tags.find(tag => tag.startsWith(TAGS.carrera.self))
                .replace(TAGS.carrera.self, TAGS.materia);
            const materias = dv.pages(`#${tag}`).sort(materia => materia.file.name);
            let titulos = ["Materia", "Estado"];
            if (carrera.tieneCodigo) titulos.splice(1, 0, "Código");
            
            let tabla = dv.markdownTable(titulos, materias.map(materia => {
                let nombre = materia.file.name.trim();
                if (carrera.tieneCodigo) nombre.replace(`(${materia.codigo})`, "");
                
                let path = materia.file.path.replaceAll(" ", "%20");
                
                let estado = materia.estado;
                if (materia.equivalencia) {
                    let equivalencia = dv.page(materia.equivalencia.path);
                    estado = equivalencia.estado;
                }                
                let resultado = [`[${nombre}](${path})`, estado];
                if (carrera.tieneCodigo) resultado.splice(1, 0, materia.codigo);
                
                return resultado;
            }));
            
            let texto = carrera.tieneCodigo
                ? "Un listado de materias, sus códigos y su estado actual"
                : "Un listado de materias y su estado actual";
            return `### ${carrera.file.name}\n---\n${texto}\n\n${tabla}`;
        }).join("\n");
_%>

## Investigación
---
La intención en este repositorio es tener un lugar donde poder investigar sobre temas, vinculándolo con otros, y viendo que relaciones aparecen.

Para eso usaré obsidian, y pdfs, donde en obsidian todo sería archivos markdown para poder leerlo en cualquier editor. Cualquier cosa que vean que es incorrecta, ya seas la persona con tanto tiempo para estar leyendo esto, crea un issue para que pueda verlo.

<%*
    const indices = dv.pages(`#${TAGS.investigacion.self}`)
        .filter(indice => {
            let carpeta = indice.file.folder;
            if (indice.equivalente) {
                carpeta += `/${indice.file.name}`;
            }
            return carpeta.split("/").length == 2;
        }).sort(indice => {
            let nombre = indice.file.name;
            if (nombre == "Índice") {
                let carpeta = indice.file.folder.split("/").pop();
                nombre = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`.trim();
            }
            return nombre;
        });

    tR += dv.markdownTable(["Tema de investigación", "Estado"], indices.map(indice => {
        let nombre = indice.file.name;
        if (nombre == "Índice") {
            let carpeta = indice.file.folder.split("/").pop();
            nombre = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`.trim();
        }
        let path = `${indice.file.path}`.replaceAll(" ", "%20");
        let estado = indice.estado;
        if (indice.equivalente) {
            let equivalente = dv.page(indice.equivalente.path);
            estado = equivalente.estado;
        }
        
        return [ `[${nombre}](${path})`, indice.estado ];
    }));
_%>

## Proyectos
---
Un listado de los proyectos y su estado actual

### Proyectos prácticos
---
Estos proyectos tienen una aplicación como resultado final

<%* 
    let proyectos = dv.pages(`#${TAGS.proyecto.self}/${TAGS.proyecto.practico.self}`)
        .sort(proyecto => proyecto.dia, direction="desc");

    tabla = dv.markdownTable(["Proyecto", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto.estado ];
    }));

    tR += `${tabla}\n`;
_%>

### Proyectos de investigación
---
Estos proyectos tienen como objetivo investigar y crear pruebas para llegar a un resultado

<%* 
    proyectos = dv.pages(`#${TAGS.proyecto.self}/${TAGS.proyecto.investigacion.self}`)
        .sort(proyecto => proyecto.dia, direction="desc");
    tabla = dv.markdownTable(["Proyecto", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto.estado ];
    }));

    tR += `${tabla}\n`;
_%>

### Game Design Documents
---
Estos proyectos tienen como objetivo crear un GDD y mostrar el desarrollo del juego

<%* 
    proyectos = dv.pages(`#${TAGS.proyecto.self}/${TAGS.proyecto.juego.self}`)
        .sort(proyecto => proyecto.dia, direction="desc");
    
    tR += dv.markdownTable(["Juego", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto.estado ];
    }));
_%>

### Cursos
---
Estos son los cursos que vaya haciendo

<%*
    proyectos = dv.pages(`#${TAGS.curso.self}`)
        .sort(curso => curso.dia, direction="desc");
    tR += dv.markdownTable(["Curso", "Estado"], proyectos.map(curso => {
        let nombre = curso.file.name.trim();
        let path = `${curso.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, curso.estado ];
    }));
_%>

### Colecciones
---
Estos proyectos se basan en recolectar información distinto de un tema de investigación ya que este busca recolectar información con respecto a un tema, mientras que este es para tener información para temas en general

<%* 
    const colecciones = dv.pages(`#${TAGS.coleccion}`)
        .sort(coleccion => coleccion.file.name);

    tabla = dv.markdownTable(["Colección", "Estado"], colecciones.map(coleccion => {
        let nombre = coleccion.file.name.trim();
        let path = `${coleccion.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, coleccion.estado ];
    }));

    tR += `${tabla}\n`;
_%>

## Contribuidores
---
* Juan Ignacio Biancuzzo
* Sofia Javes
* Felipe Perassi
* Rocio Nicole Heredia Piñon