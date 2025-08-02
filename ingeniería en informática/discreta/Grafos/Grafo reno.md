---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo simple|grafo simple]], el grafo es que se llama Remo $KP(p,~q,~l)$ resultante de unir el [[Camino#Ciclo (Cicle)|ciclo]] $C_p$, con un clico $C_q$ mediante un [[Camino#Camino simple (Path)|camino simple]] $P_l$ 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sep = 1; \radio = 0.1; }
    
    \coordinate (pc) at (0, 0);
    
    \coordinate (c41) at (0, \sep);
    \coordinate (c42) at (\sep, {2 * \sep});
    \coordinate (c43) at (0, {3 * \sep});
    \coordinate (c44) at (-\sep, {2 * \sep});
    
    \coordinate (c31) at (0, -\sep);
    \coordinate (c32) at (\sep, {-2 * \sep});
    \coordinate (c33) at (-\sep, {-2 * \sep});

    \foreach \p in {pc, c41, c42, c43, c44, c31, c32, c33} {
        \fill (\p) circle (\radio);
    }
    
    \draw (pc) \foreach \p in 
        {c41, c42, c43, c44, c41, pc, c31, c32, c33, c31, pc} 
    { -- (\p) };
    
    \path ({-\sep - 0.5}, 0) 
        node[above left=2pt, scale=1.5] {$KP(4, ~3, ~2)$};
    
\end{tikzpicture}
\end{document}
```