---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Grafos/Resumen.md]]"
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], un grafo $2p$-Corona es un [[Grafo k-partito|grafo bipartito]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sep = 1.5; \radio = 0.1; }
	
	\coordinate (v1) at (0, 0);
	\coordinate (v2) at ({2 * \sep}, \sep);
	\coordinate (v3) at (\sep, {3 * \sep});
	\coordinate (v4) at (-\sep, {2 * \sep});

    \coordinate (u1) at (0, {3 * \sep});
	\coordinate (u2) at (-\sep, \sep);
	\coordinate (u3) at (\sep, 0);
	\coordinate (u4) at ({2 * \sep}, {2 * \sep});

    \foreach \vi in {1, 2, 3, 4} {
        \foreach \ui in {1, 2, 3, 4} {
            \ifthenelse { \NOT \vi = \ui }{
                \draw (v\vi) -- (u\ui);
            }{}
        }
    }

    \foreach \coor/\dir [count=\i] in 
        {v1/below, v2/right, v3/above, v4/left} 
    { 
        \fill[red] (\coor) circle (\radio); 
        \path (\coor) node[\dir=2pt] {$v_\i$}; 
    }

    \foreach \coor/\dir [count=\i] in 
        {u1/above, u2/left, u3/below, u4/right} 
    { 
        \fill[green] (\coor) circle (\radio); 
        \path (\coor) node[\dir=2pt] {$u_\i$}; 
    }
	
	\end{tikzpicture}
\end{document}
```
