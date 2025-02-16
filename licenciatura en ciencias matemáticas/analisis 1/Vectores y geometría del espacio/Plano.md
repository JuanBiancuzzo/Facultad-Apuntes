---
dia: 2024-11-13
etapa: ampliar
referencias:
  - "517"
tags:
  - licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Podemos definir el plano como $\mathbb{R}^2$ que es el [[Producto cartesiano|producto cartesiano]] $\mathbb{R} \times \mathbb{R}$ del eje [[Números Reales|real]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    
    \draw[->] (-3.5, 0) -- (3.5, 0) node[right=2pt, scale=0.8] {$x$};
    \draw[->] (0, -2.5) -- (0, 2.5) node[above=2pt, scale=0.8] {$y$};
    
    \foreach \tick in {-3, -2, -1, 1, 2, 3} {
        \draw[thick] (\tick, -0.1) 
                node[below=2pt, scale=0.7] {$\tick$}
            -- (\tick, 0.1);
    }
    
    \foreach \tick in {-2, -1, 1, 2} {
        \tikzmath { 
            \signo = abs(\tick) / \tick;
            \direccion = \signo > 0 ? "left" : "right";
        }
        \draw[thick] ({-0.1 * \signo}, \tick) 
                node[\direccion=2pt, scale=0.7] {$\tick$}
            -- ({0.1 * \signo}, \tick);
    }
    
    \tikzmath { \a = 2; \b = 1.5; }
    \draw[thin, dashed] (\a, -2) -- (\a, 2);
    \draw[thin, dashed] (-3, \b) -- (3, \b);
    
    \fill (\a, \b) circle (0.05);
    
\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```