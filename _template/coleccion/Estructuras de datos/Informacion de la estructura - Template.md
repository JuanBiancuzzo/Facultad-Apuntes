<%*
    const { SECCIONES } = tp.user.constantes();
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