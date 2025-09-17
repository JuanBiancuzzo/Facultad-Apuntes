---
dia: 2023-01-22
etapa: ampliar
tags:
  - carrera/ingeniería-electrónica/analisis-2/Topología/1
  - carrera/ingeniería-en-informática/analisis-2/Topología/1
  - nota/facultad
aliases:
  - Función convexa
  - Ecuación convexa
vinculoFacultad:
  - tema: Topología
    capitulo: 2
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
referencias:
  - "1087"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Con $S \subset \mathbb{R}^n$ es un [[Conjunto|conjunto]] convexo cuando para todo par de puntos, $a, b \in S$ el segmento $\overline{ab}$ (un [[Lado|lado]]) esta incluido en $S$

Análogamente se define una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] convexa en un intervalo $(a,~ b)$, si el segmento que une dos puntos cualesquiera dentro del segmento, sea mayor que la función 

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.4, transform shape, thick]
    \tikzmath { 
        \ancho = 6; \alto = 3;
        function f(\x) {
            return .2 * (\x - 5.8)^2 + 1.4 * (\x - 5.8) + 3;
        };
        \A = 0.5; \P = 1.5; \Q = 4.5; \B = 5.5;
    }
    
    \draw[->] (-0.2, 0) -- (\ancho, 0) node[below=2pt, scale=1.1] {$x$};
    \draw[->] (0, -0.2) -- (0, \alto) node[left=2pt, scale=0.9] {$y$};
        
    \begin{scope}
        \clip (.2, .2) rectangle ({\ancho - .2}, {\alto - .2});
        \draw[red] (0, {f(0)}) \foreach \x in {0, 0.1, ..., \ancho} {
            -- (\x, {f(\x)})
        };
    \end{scope}
    
    \draw[red] (\P, {f(\P)}) -- (\Q, {f(\Q)}); 
    
    \foreach \x/\label/\eje in {\A/A/a, \B/B/b, \P/P/x_1, \Q/Q/x_2} {
        \draw[dashed] (\x, 0) -- (\x, {f(\x)})
            node[pos=0, below=2pt] {$\eje$}
            node[pos=1, above=2pt] {\label};
        \fill[black] (\x, {f(\x)}) circle (0.08);        
    }
    
\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```