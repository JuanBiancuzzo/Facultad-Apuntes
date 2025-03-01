---
dia: 2024-08-09
tags: 
 - carrera/ingeniería-en-informática/discreta/Grafos
 - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], los vértices se etiquetan con una cadena binaria de $p$ dígitos, con una arista si la [[Distancia hamming|distancia hamming]] es $1$. Alternativamente, puede pensarse con el [[Producto cartesiano|producto cartesiano]] de $p$ veces ([[Grafo simple completo|grafo completo de orden 2]]) $K_2$ 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath { 
        \difX = 1.5; \difY = 1.5; 
        \difZX = 0.6; \difZY = 0.6; 
        \radio = 0.075;
    }
    
    \coordinate (c2) at (0, { \difZY / 2 });
    \coordinate (c3) at ({3 * \difX}, 0);    

    \foreach \i in {0, 1} {
        \foreach \j in {0, 1} {
            \coordinate (p\i\j) at ($ (c2) + (
                \j * \difX, 
                \i * \difY) 
            $);
            
            \foreach \k in {0, 1} {
                \coordinate (p\i\j\k) at ($ (c3) + (
                    \i * \difX + \k * \difZX, 
                    \j * \difY + \k * \difZX
                ) $);
            }
        }
    }

    \foreach \p/\dir [remember=\p as \lp (initially 10)] in 
        {00/below, 01/below, 11/above, 10/above} 
    {
        \fill (p\p) circle (\radio);
        \draw (p\p) -- (p\lp);
        \path (p\p) node[\dir=2pt, scale=0.8] {\p};
    }

    \path ($ (p00) + (-0.25, 0) $) -- ++(0, \difY)
        node[midway, left=2pt] {$Q_2$};

    \foreach \p/\dir [remember=\p as \lp (initially 001)] in 
        {000/below, 100/below, 110/below right, 010/above,  011/above, 111/above, 101/above right, 001/above right} {
        \fill (p\p) circle (\radio);
        \draw (p\p) -- (p\lp);
        \path (p\p) node[\dir=2pt, scale=0.8] {\p};
    }
    
    \foreach \pi/\pf in {000/010, 001/011, 100/101, 110/111} {
        \draw (p\pi) -- (p\pf);
    }

    \path ($ (p000) + (-0.25, 0) $) -- ++(0, \difY)
        node[midway, left=2pt] {$Q_3$};

\end{tikzpicture}
\end{document}
```

La distancia hamming entre dos cadenas indica la cantidad de [[Información#Bit|bits]] distintos