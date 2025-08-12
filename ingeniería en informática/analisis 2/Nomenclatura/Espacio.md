---
dia: 2024-08-05
tags:
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - carrera/licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - nota/facultad
referencias:
  - "517"
etapa: empezado
vinculoFacultad:
  - tema: Nomenclatura
    capitulo: 1
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
  - tema: Vectores y geometría del espacio
    capitulo: 1
    materia: Análisis 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un espacio es todo [[Conjunto|conjunto]] no vacío de elementos a los cuales se los denomina puntos

Podemos definir el espacio como $\mathbb{R}^3$ que es el [[Producto cartesiano|producto cartesiano]] $\mathbb{R} \times \mathbb{R} \times \mathbb{R}$ del eje [[Números Reales|real]], donde representamos un punto $$ P = (a, b, c) $$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    
    \draw[->] (0, 0, 0) -- (2.5, 0, 0)
        node[pos=1.1, scale=0.9] {$y$};
    \draw[->] (0, 0, 0) -- (0, 2.5, 0)
        node[pos=1.1, scale=0.9] {$z$};
    \draw[->] (0, 0, 0) -- (0, 0, 3)
        node[pos=1.2, scale=0.9] {$x$};
    \path (0.3, 0, 0.5) node[scale=0.9] {$O$};
    
    \coordinate (P) at (2, 2.3, 2);
    \fill (P) circle (0.075)
        node[above right=2pt] {$P$};
    
    \draw[dashed] (0, 0, 2) node[left=2pt] {$a$} -- (2, 0, 2);
    \draw[dashed] (2, 0, 0) node[above=2pt] {$b$} -- (2, 0, 2);
    \draw[dashed] (0, 2.3, 0) node[left=2pt] {$c$} -- (P);
    \draw[dashed] (2, 0, 2) -- (P);

\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```