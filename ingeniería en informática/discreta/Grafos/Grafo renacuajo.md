---
dia: 2024-08-09
tags: 
 - carrera/ingeniería-en-informática/discreta/Grafos
 - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo simple|grafo simple]], el grafo es que se llama Renacuajo $T_{p,~q}$ esta compuesto por el [[Camino#Ciclo (Cicle)|ciclo]] $C_p$ y el [[Camino#Camino simple (Path)|camino simple]] $P_q$ mediante un puente

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sep = 1; \radio = 0.1; }
    
    \coordinate (p1) at (0, {-2 * \sep});
    \coordinate (p2) at (0, -\sep);
    \coordinate (k1) at (0, 0);
    \coordinate (k2) at (\sep, \sep);
    \coordinate (k3) at (0, {2 * \sep});
    \coordinate (k4) at (-\sep, \sep);

    \foreach \p in {p1, p2, k1, k2, k3, k4} {
        \fill (\p) circle (\radio);
    }
    
    \draw (p1) \foreach \p in {p2, k1, k2, k3, k4, k1} {
        -- (\p)
    };
    
    \path ({-\sep - 0.5}, 0) 
        node[above left=2pt, scale=1.5] {$T_{4, ~2}$};
    
\end{tikzpicture}
\end{document}
```