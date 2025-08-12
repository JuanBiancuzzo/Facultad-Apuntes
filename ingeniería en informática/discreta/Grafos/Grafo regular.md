---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
aliases:
  - Grafo casi regular
referencias:
  - "193"
vinculoFacultad:
  - tema: Grafos
    capitulo: 8
    materia: Matemática discreta
    carrera: Ingeniería en informática
---
# Definición
---
Sea el [[Grafo|grafo]] $G = \big( V(G),~E(G),~\Psi_G \big)$, se define este como un grafo regular si y solo si $$ \forall v \in V(G): ~~~ d(v) = c, ~~ c \in \mathbb{N} $$ donde $d(v)$ es el [[Grado de un vértice|grado del vértice]] $v$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    \tikzmath { \sep = 1; \radio = 0.1; }
    
    \tikzmath{\a=30;} \coordinate (p1) at ({\sep*cos(\a)},{\sep*sin(\a)});
    \tikzmath{\a=90;} \coordinate (p2) at ({\sep*cos(\a)},{\sep*sin(\a)});
    \tikzmath{\a=150;} \coordinate (p3) at ({\sep*cos(\a)},{\sep*sin(\a)});
    \tikzmath{\a=210;} \coordinate (p4) at ({\sep*cos(\a)},{\sep*sin(\a)});
    \tikzmath{\a=270;} \coordinate (p5) at ({\sep*cos(\a)},{\sep*sin(\a)});
    \tikzmath{\a=330;} \coordinate (p6) at ({\sep*cos(\a)},{\sep*sin(\a)});
    
    \tikzmath { \infrasep = 1.5; }
    \coordinate (c0) at (0, 0);
    \coordinate (c1) at ({2 * \sep + \infrasep}, 0);
    \coordinate (c2) at ({4 * \sep + 2 * \infrasep}, 0);
    \coordinate (c3) at ({6 * \sep + 3 * \infrasep}, 0);
    
    \foreach \c in {0, 1, 2, 3} {
        \foreach \p in {p1, p2, p3, p4, p5, p6} {
            \fill ($ (\p) + (c\c) $) circle (\radio);
        }
        \path ($ (c\c) + (0, {-\sep - 0.5}) $) 
            node[below=2pt] {$\c$-regular};
    }
    
    \foreach \pi/\pf in {p2/p3, p4/p5, p6/p1} {
        \draw ($ (\pi) + (c1) $) -- ($ (\pf) + (c1) $);
    }
    
    \draw ($ (p1) + (c2) $) \foreach \p in {p2, p3, p1} 
        { -- ($ (\p) + (c2) $) };
    \draw ($ (p4) + (c2) $) \foreach \p in {p5, p6, p4} 
        { -- ($ (\p) + (c2) $) };
        
    \draw ($ (p1) + (c3) $) \foreach \p in {p2, p3, p4, p5, p6, p1} 
        { -- ($ (\p) + (c3) $) };
    \foreach \pi/\pf in {p1/p3, p2/p5, p4/p6} {
        \draw ($ (\pi) + (c3) $) -- ($ (\pf) + (c3) $);
    }
    
\end{tikzpicture}
\end{document}
```

## Grafo casi regular
---
Si todos los vértices del grafo, excepto uno, tienen de [[Grado de un vértice|grado]] igual al [[Grafo#^647b10|grado mínimo]] $\delta(G)$  $$ \forall v \in \Set{v_1,~ \cdots,~ v_{k-1},~ v_{k+1},~ \cdots,~ v_{n(G)} } : ~~~ d(v) = \delta(G) $$
Donde la excepción $v_k$ tenga grado uno mayor al mínimo (haciéndolo el [[Grafo#^8663e2|máximo]]) $$ v_k \in V(G): ~~~ d(v_k) = \delta(G) + 1 = \Delta(G) $$
Entonces $G$ es un grafo casi regular


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```