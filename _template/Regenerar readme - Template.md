# Mind Side Quest
---
Voy a ir poniendo mis apuntes acá, y estoy usando [Obsidian](https://obsidian.md) para escribir y crear los vínculos entre las páginas por lo que es recomendable para poder navegar los apuntes.

Cualquier corrección/ampliación de los contenidos en este proyecto, por favor hacer un [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para poder visualizar los cambios pedidos. En el caso de sugerir cualquier cosa, por favor crear un [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) donde ahí lo podré ver. 
<%* 
    if (tp.file.folder() != "") {
        if (tp.file.exists("README")) {
            let tExisting = tp.file.find_tfile("README");
            await app.vault.trash(tExisting, true);
        }
        await tp.file.move("README");
    }
_%>

## Carreras
---
Un listado de materias y su estado dividido por carrera
<%*
    const dv = app.plugins.plugins.dataview.api;
    const { 
        DATOS: {
            MATERIA: DATOS_MATERIA, CARRERA: DATOS_CARRERA, INVESTIGACION: DATOS_INVESTIGACION,
            PROYECTO: DATOS_PROYECTO, CURSO: DATOS_CURSO, COLECCION: DATOS_COLECCION,
        },
        TAGS: { 
            investigacion: TAGS_INVESTIGACION, curso: TAGS_CURSO, 
            facultad: TAGS_FACULTAD, coleccion: TAGS_COLECCION, proyecto: TAGS_PROYECTO
        },
    } = tp.user.constantes();

    tR += dv.markdownList(dv.pages(`#${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`)
        .map(carrera => {
            let path = carrera.file.path.replaceAll(" ", "%20");
            return `[${carrera.file.name}](${path})`;
        }));
%>
<%*
    tR += dv.pages(`#${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`)
        .sort(carrera => carrera.file.name)
        .map(carrera => {
            let tags = tp.user.obtenerTag(tp, carrera[DATOS_CARRERA.tags])
                .map(tag => `#${tag}`)
                .join(" or ")

            const materias = dv.pages(`(${tags}) and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`)
                .sort(materia => materia[DATOS_MATERIA.nombre]);
            let titulos = ["Materia", "Estado"];
            if (carrera[DATOS_CARRERA.tieneCodigoLaMateria]) titulos.splice(1, 0, "Código");
            
            let tabla = dv.markdownTable(titulos, materias.map(materia => {
                let nombre = materia[DATOS_MATERIA.nombre];
                let path = materia.file.path.replaceAll(" ", "%20");
                
                let estado = materia[DATOS_MATERIA.estado];
                if (materia[DATOS_MATERIA.equivalencia]) {
                    let equivalencia = dv.page(materia[DATOS_MATERIA.equivalencia].path);
                    estado = equivalencia[DATOS_MATERIA.estado];
                }                
                let resultado = [`[${nombre}](${path})`, estado];
                if (carrera[DATOS_CARRERA.tieneCodigoLaMateria]) resultado.splice(1, 0, materia[DATOS_MATERIA.codigo]);
                
                return resultado;
            }));
            
            let texto = carrera[DATOS_CARRERA.tieneCodigoLaMateria]
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
    const indices = dv.pages(`#${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`)
        .filter(indice => {
            let carpeta = indice.file.folder;
            if (indice[DATOS_INVESTIGACION.equivalencia]) {
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
        let estado = indice[DATOS_INVESTIGACION.estado];
        if (indice[DATOS_INVESTIGACION.equivalencia]) {
            let equivalente = dv.page(indice[DATOS_INVESTIGACION.equivalencia].path);
            estado = equivalente[DATOS_INVESTIGACION.estado];
        }
        
        return [ `[${nombre}](${path})`, estado ];
    }));
_%>

## Proyectos
---
Un listado de los proyectos y su estado actual

### Proyectos prácticos
---
Estos proyectos tienen una aplicación como resultado final

<%* 
    let proyectos = dv.pages(`#${TAGS_PROYECTO.self}/${TAGS_PROYECTO.practico.self}`)
        .sort(proyecto => proyecto[DATOS_PROYECTO.dia], direction="desc");

    tabla = dv.markdownTable(["Proyecto", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto[DATOS_PROYECTO.estado] ];
    }));

    tR += `${tabla}\n`;
_%>

### Proyectos de investigación
---
Estos proyectos tienen como objetivo investigar y crear pruebas para llegar a un resultado

<%* 
    proyectos = dv.pages(`#${TAGS_PROYECTO.self}/${TAGS_PROYECTO.investigacion.self}`)
        .sort(proyecto => proyecto[DATOS_PROYECTO.dia], direction="desc");
    tabla = dv.markdownTable(["Proyecto", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto[DATOS_PROYECTO.estado]];
    }));

    tR += `${tabla}\n`;
_%>

### Game Design Documents
---
Estos proyectos tienen como objetivo crear un GDD y mostrar el desarrollo del juego

<%* 
    proyectos = dv.pages(`#${TAGS_PROYECTO.self}/${TAGS_PROYECTO.juego.self}`)
        .sort(proyecto => proyecto[DATOS_PROYECTO.dia], direction="desc");
    
    tR += dv.markdownTable(["Juego", "Estado"], proyectos.map(proyecto => {
        let nombre = proyecto.file.name.trim();
        let path = `${proyecto.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, proyecto[DATOS_PROYECTO.estado] ];
    }));
_%>

### Cursos
---
Estos son los cursos que vaya haciendo

<%*
    proyectos = dv.pages(`#${TAGS_CURSO.self}/${TAGS_CURSO.curso}`)
        .sort(curso => curso[DATOS_CURSO.dia], direction="desc");
    tR += dv.markdownTable(["Curso", "Estado"], proyectos.map(curso => {
        let nombre = curso[DATOS_CURSO.nombre].trim();
        let path = `${curso.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, curso[DATOS_CURSO.estado] ];
    }));
_%>

### Colecciones
---
Estos proyectos se basan en recolectar información distinto de un tema de investigación ya que este busca recolectar información con respecto a un tema, mientras que este es para tener información para temas en general

<%* 
    const colecciones = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_COLECCION.representante}`)
        .sort(coleccion => coleccion.file.name);

    tabla = dv.markdownTable(["Colección", "Estado"], colecciones.map(coleccion => {
        let nombre = coleccion.file.name.trim();
        let path = `${coleccion.file.path}`.replaceAll(" ", "%20");
        
        return [ `[${nombre}](${path})`, coleccion[DATOS_COLECCION.estado] ];
    }));

    tR += `${tabla}\n`;
_%>

## Contribuidores
---
* Juan Ignacio Biancuzzo
* Sofia Javes
* Felipe Perassi
* Rocio Nicole Heredia Piñon