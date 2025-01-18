<%*
    const {
        TEMPLATE, ETAPAS, SECCIONES, FORMATO_DIA,
        TAGS: { 
            coleccion: { self: TAG_COLECCION, representante: TAG_REPRESENTANTE, estructuraDatos: TAGS_ESTRUCTURAS },
            nota: TAGS_NOTA,
        },
        DATOS: { ESTRUCTURA_DATOS: DATOS_ESTRUCTURA }
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let titulo = tp.file.title;
    if (titulo.startsWith("Untitle")) {
        titulo = await preguntar.prompt(
            tp, "Nombre de la estructura", 
            error.Prompt("No se ingresó un nombre para la estructuras")
        );
    }

    let representante = dv.pages(`#${TAG_COLECCION}/${TAG_REPRESENTANTE} and #${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}`)
        .first();

    await tp.file.move(`${representante.file.folder}/${titulo}`, tArchivo);

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_ESTRUCTURA.dia]: tp.file.creation_date(FORMATO_DIA),
        [DATOS_ESTRUCTURA.etapa]: ETAPAS.empezado,
        [DATOS_ESTRUCTURA.tags]: [
            ...tp.user.obtenerTag(tp, representante[DATOS_ESTRUCTURA.tags]), 
            `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
            `${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}/${TAGS_ESTRUCTURAS.estructura}`,
        ],
        [DATOS_ESTRUCTURA.nombre]: titulo,
    });
    tR += "---\n";
    tR += await tp.file.include(`[[${TEMPLATE.etapa}]]`);
    tR += `\n${"#".repeat(SECCIONES.definicion.nivel)} ${SECCIONES.definicion.texto}\n---\n`;
_%>
> %% Descripción de la estructura %%
> <% tp.file.cursor() %>
^descripcion

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
       
    \fill (0, 0) circle (.25);       
       
\end{tikzpicture}
\end{document}
``` 
^representacion