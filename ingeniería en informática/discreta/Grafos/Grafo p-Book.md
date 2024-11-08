---
dia: 2024-08-09
tags: 
 - ingeniería-en-informática/discreta/Grafos
 - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], definido como $p$ [[Camino#Ciclo (Cicle)|ciclos]] $C_4$ todos compartiendo una arista en común. Puede ser definida a partir de [[Grafo#Operaciones|operaciones]] como $$ B(p) = S_{p + 1} \times P_2 $$
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sep = 1.3; \difX = -0.6; \difY = 0.6; \radio = 0.075; }
    
    \coordinate (p1) at (0, -\sep);
    \coordinate (p2) at (\sep, 0);
    \coordinate (p3) at (0, \sep);
    \coordinate (p4) at (-\sep, 0);
    
    \coordinate (pc) at (0, 0);

    \fill (pc) circle (\radio);
    \fill ($ (pc) + (\difX, \difY) $) circle (\radio);
    \draw (pc) -- ($ (pc) + (\difX, \difY) $);
    \foreach \coor in {p1, p2, p3, p4} {
        \fill (\coor) circle (\radio);
        \fill ($ (\coor) + (\difX, \difY) $) circle (\radio);
        
        \draw (pc) 
            -- (\coor)
            -- ($ (\coor) + (\difX, \difY) $)
            -- ($ (pc) + (\difX, \difY) $);
    }
    \path ({\difX / 2}, {-\sep - 0.5}) node {$4$-Book};

    \tikzmath { \difX = -0.8; \difY = 0.3; }
    \tikzmath { \difCentro = 4 * \sep; }

    \coordinate (p1) at ({\difCentro - \sep / 2}, -\sep);
    \coordinate (p2) at ({\difCentro + \sep / 2}, -\sep);
    \coordinate (p3) at ({\difCentro + 1.25 * \sep}, 0);
    \coordinate (p4) at ({\difCentro + \sep / 2}, \sep);
    \coordinate (p5) at ({\difCentro - \sep / 2}, \sep);
    \coordinate (p6) at ({\difCentro - 1.25 * \sep}, 0);
    
    \coordinate (pc) at (\difCentro, 0);

    \fill (pc) circle (\radio);
    \fill ($ (pc) + (\difX, \difY) $) circle (\radio);
    \draw (pc) -- ($ (pc) + (\difX, \difY) $);
    \foreach \coor in {p1, p2, p3, p4, p5, p6} {
        \fill (\coor) circle (\radio);
        \fill ($ (\coor) + (\difX, \difY) $) circle (\radio);
        
        \draw (pc) 
            -- (\coor)
            -- ($ (\coor) + (\difX, \difY) $)
            -- ($ (pc) + (\difX, \difY) $);
    }
    \path ({\difCentro + \difX / 2}, {-\sep - 0.5}) node {$6$-Book};

\end{tikzpicture}
\end{document}
```

Los libros son [[Grafo k-partito|bipartitos]], ya que las [[Grafo estrella|estrellas]] lo son, y los vértices de cada estrella son solo adyacentes a sus análogos en la segunda estrella. De esta forma, se pueden colorear inversamente las estrellas, formando un grafo bipartito