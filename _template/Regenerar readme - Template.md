# Apuntes
---
Voy a ir poniendo mis apuntes acá, y estoy usando [Obsidian](https://obsidian.md) para escribir y crear los vínculos entre las páginas por lo que es recomendable para poder navegar los apuntes.

Cualquier corrección/ampliación de los contenidos en este proyecto, por favor hacer un [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para poder visualizar los cambios pedidos. En el caso de sugerir cualquier cosa, por favor crear un [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) donde ahí lo podré ver. 

## Materias
---
Un listado de materias y su estado dividido por carrera
<%*
    const dv = app.plugins.plugins.dataview.api;
    tR += dv.markdownList(dv.pages("#carrera")
        .map(carrera => {
            let path = carrera.file.path.replaceAll(" ", "%20");
            return `[${carrera.file.name}](${path})`;
        }));
%>
<%*
    tR += dv.pages("#carrera")
        .sort(carrera => carrera.file.name)
        .map(carrera => {
            let tag = carrera.tags.find(tag => tag.startsWith("carrera"))
                .replace("carrera", "materia");
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
%>

## Investigación
---
La intención en este repositorio es tener un lugar donde poder investigar sobre temas, vinculándolo con otros, y viendo que relaciones aparecen.

Para eso usaré obsidian, y pdfs, donde en obsidian todo sería archivos markdown para poder leerlo en cualquier editor. Cualquier cosa que vean que es incorrecta, ya seas la persona con tanto tiempo para estar leyendo esto, crea un issue para que pueda verlo.

<%*
    const indices = dv.pages("#índice")
        .filter(indice => indice.file.folder.split("/").length == 2)
        .sort(indice => {
            let nombre = indice.file.folder.split("/").pop();
            return `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`.trim();
        });

    tR += dv.markdownTable(["Tema de investigación", "Estado"], indices.map(indice => {
        let nombre = indice.file.folder.split("/").pop();
        nombre = `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`.trim();
        let path = `${indice.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, indice.estado ];
    }));
%>

## Proyectos
---
Un listado de los proyectos y su estado actual

### Proyectos prácticos
---
Estos proyectos tienen una aplicación como resultado final

<%* 
    let proyectos = dv.pages("#proyecto/práctico")
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
    proyectos = dv.pages("#proyecto/investigación")
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
    proyectos = dv.pages("#proyecto/juegos")
        .sort(proyecto => proyecto.dia, direction="desc");

    tR += dv.markdownTable(["Juego", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto.estado ];
    }));
%>

### Cursos
---
Estos son los cursos que vaya haciendo

<%*
    proyectos = dv.pages("#proyecto/curso")
        .sort(curso => curso.dia, direction="desc");
    
    tR += dv.markdownTable(["Curso", "Estado"], proyectos.map(curso => {
        let nombre = curso.file.name.trim();
        let path = `${curso.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, curso.estado ];
    }));
%>

### Colecciones
---
Estos proyectos se basan en recolectar información distinto de un tema de investigación ya que este busca recolectar información con respecto a un tema, mientras que este es para tener información para temas en general

| Proyecto                                        |                                                                                                                                                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Biblioteca](biblioteca/Biblioteca%20propia.md) | Tiene la intención de colectar libros, papers, etc. que me interese analizar relacionado a todo el contexto de esta página y poder referenciarla                                                 |
| [Componentes](componentes/Componentes.md)       | Vamos a caracterizar los componentes que vaya usando para poder así tener una lista de los componentes que suelo usar y por lo tanto tener un lugar en donde encontrar el como se tiene que usar |
| [Recetas](recetas/Recetas.md)                   | Todavía no tiene nada pero la idea es agregar recetas y explorar los aspectos de nutrición que pueden aparecer                                                                                   |
| [Impresion 3D](impresion%203d/Filamentos.md)    | Vamos a recolectar los posibles filamentos que se podrían usar para imprimir, con sus propiedades y con sus características para poder comprobar que filamento es el mejor para cada situación   |

## Contribuidores
---
* Juan Ignacio Biancuzzo
* Sofia Javes
* Felipe Perassi
* Rocio Nicole Heredia Piñon