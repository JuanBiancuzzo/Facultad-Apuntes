---
dia: 2024-08-09
tags: 
 - discreta/Grafos
 - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo simple|grafo simple]], el grafo es que se llama Pesa $B_p$ que se obtiene de conectar dos copias de un [[Grafo simple completo|grafo completo]] $K_p$ con un puente

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sep = 1; \radio = 0.1; }
    
    \coordinate (pc) at (0, 0);
    
    \coordinate (c11) at (0, \sep);
    \coordinate (c12) at (\sep, {2 * \sep});
    \coordinate (c13) at (0, {3 * \sep});
    \coordinate (c14) at (-\sep, {2 * \sep});
    
    \coordinate (c21) at (0, -\sep);
    \coordinate (c22) at (\sep, {-2 * \sep});
    \coordinate (c23) at (0, {-3 * \sep});
    \coordinate (c24) at (-\sep, {-2 * \sep});

    \foreach \p in {pc, c11, c12, c13, c14, c21, c22, c23, c24} {
        \fill (\p) circle (\radio);
    }
    
    \draw (pc) \foreach \p in 
        {c11, c12, c13, c14, c11, pc, c21, c22, c23, c24, c21} 
    { -- (\p) };
    
    \foreach \i [evaluate=\i as \j using \i+2] in {1, 2} {
        \draw (c1\i) -- (c1\j);
        \draw (c2\i) -- (c2\j);
    }
    
    \path ({-\sep - 0.5}, 0) 
        node[above left=2pt, scale=1.5] {$B_4$};
    
\end{tikzpicture}
\end{document}
```