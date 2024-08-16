---
dia: 2024-08-13
tags:
  - discreta/Grafos
  - nota/facultad
aliases:
  - Grafo bidual
---
### Definición
---
Dado una [[Grafo planar|inmersión]] de un [[Grafo|grafo]] $G$, se define su dual $G^*$ al grafo que tiene tantos vértices como caras del original, existiendo una arista entre dos vértices del dual por cada arista de frontera entre las correspondientes caras del original. El dual del dual se llama bidual, y se denota $G^{**}$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, thick]
	\tikzmath { \sep = 1; \radio = 0.1; }
	
	\coordinate (c1) at ({-\sep / 2}, {-\sep / 2});
	\coordinate (c2) at ({ \sep / 2}, {-\sep / 2});
	\coordinate (c3) at (0, { \sep / 2});
	
	\coordinate (d1) at (0, { \sep / 2});
	\coordinate (d2) at (0, {-\sep / 2});

    \foreach \cx [parse=true] in {-3*\sep, 3*\sep} {
        \coordinate (centro) at (\cx, 0);
        \foreach \p [remember=\p as \lp (initially c3)] in {c1, c2, c3} {
            \fill ($ (\p) + (centro) $)  circle (\radio);
            \draw ($ (\p) + (centro) $) 
                -- ($ (\lp) + (centro) $);
        }
        \path ($ (centro) + (0, {-\sep}) $) 
            node[below=2pt, scale=1.3] {$C_3$};
    }

    \foreach \p in {d1, d2} { \fill (\p) circle (\radio); }
    \draw (d1) 
        -- (d2) 
        .. controls 
            ($ (d2 -| 0, 0) + ({0.7 * \sep}, 0) $) and
            ($ (d1 -| 0, 0) + ({0.7 * \sep}, 0) $)            
        .. (d1)
        .. controls 
            ($ (d1 -| 0, 0) + ({-0.7 * \sep}, 0) $) and
            ($ (d2 -| 0, 0) + ({-0.7 * \sep}, 0) $)            
        .. (d2);
    
    \foreach \cx [parse=true] in {-1.5*\sep, 1.5*\sep} {
        \path (\cx, 0) node[scale=1.5] {$\to^*$};
    }

	\end{tikzpicture}
\end{document}
```

Se observa que $C_3^{**} \cong C_3~C_3^{**} = C_3$, pero en general no se puede decir que $G^{**} \cong G$. Esto ocurre si el original es [[Grafo conexo|conexo]] 

El grafo dual siempre es conexo, por la definición de cara
