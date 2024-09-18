---
dia: 2024-08-09
tags: 
 - discreta/Grafos
 - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo simple|grafo simple]] dado un $p$-[[Conjunto|conjunto]] $H$ fijo, se define el grafo simple $G = J(p,~q)$ con $q \ge 1$, donde $V(G) = \mathcal{P}_q(H)$ y $uv \in E(G)$ si y solo si $|uv| = q - 1$. Es decir, dos vértices son adyacentes si y solo si la [[Operador AND|intersección de los conjuntos]] asociados es de [[Cardinalidad|cardinalidad]] $q - 1$. Algunas relaciones particulares son $J(p,~q) \simeq J(p, p - 1) \simeq K_p$.  El grafo de Johnson generalizado se define como $J(p,~q,~r)$ donde dos vértices son adyacentes si $|uv| = r$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \rC = 0.5; \rE = 2.5; \sX = 2; \sY = 0.8; \radio = 0.1; }
    
    \coordinate (34) at ({\rC * \sX * cos(45)}, {\rC * \sY * sin(45)});
    \coordinate (24) at ({\rC * \sX * cos(135)}, {\rC * \sY * sin(135)});
    \coordinate (23) at ({\rC * \sX * cos(270)}, {\rC * \sY * sin(270)});
    
    \coordinate (13) at ({\rE * \sX * cos(-45)}, {\rE * \sY * sin(-45)});
    \coordinate (12) at ({\rE * \sX * cos(-135)}, {\rE * \sY * sin(-135)});
    \coordinate (14) at ({\rE * \sX * cos(-270)}, {\rE * \sY * sin(-270)});
    
    \draw (34) \foreach \p in {24, 23, 34} { --(\p) };
    \draw (13) \foreach \p in {12, 14, 13} { --(\p) };
    
    \foreach \p/\dir in {34/above right, 24/above left, 23/below} { 
        \fill (\p) circle (\radio);
        \path (\p) node[\dir=2pt, scale=0.8] {\p};
    }
    \foreach \p/\dir in {13/below, 14/above, 12/below} { 
        \fill (\p) circle (\radio);
        \path (\p) node[\dir=2pt, scale=0.8] {\p};
    }
    
    \draw (23) \foreach \p in {13, 34} { --(\p) };
    \draw (23) \foreach \p in {12, 24} { --(\p) };
    \draw (24) \foreach \p in {14, 34} { --(\p) };
    
\end{tikzpicture}
\end{document}
```

Al igual que con el [[Grafo de Kneser|grafo de Kneser]], calcularemos el [[Orden de un grafo|orden del grafo]] a partir del [[Combinación|número combinatorio]] $$ n\big( J(p,~ q) \big) = \dbinom{p}{q} $$
Para calcular el [[Grado de un vértice|grado]] de cada nodo, sabemos que por cada elemento del conjunto asociado, podremos conectarnos con los nodos cuyo conjunto asociado difieran en únicamente ese elemento. Como difieren en únicamente ese elemento, este no debe pertenecer al propio nodo, luego $d(v) = q(p-q)$. El [[Tamaño de un grafo|tamaño]] del grafo entonces será $$ m\big( J(p,~ q) \big) = \frac{1}{2} \dbinom{p}{q} q (p - q) $$