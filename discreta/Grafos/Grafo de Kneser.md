---
dia: 2024-08-09
tags: 
 - discreta/Grafos
 - nota/facultad
---
### Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo simple|grafo simple]], dado un $p$-[[Conjunto|conjunto]] $H$ fijo, se define el grafo simple $G = K(p,~q)$ siendo $V(G) = \mathcal{P}_q(H)$ (los $q$-[[Subconjunto|subconjunto]] de $H$) con $uv \in E(G)$ si y solo si $uv = \emptyset$. Es decir, dos vértices son adyacentes si y solo si los correspondientes conjuntos son disjuntos. Genéricamente, definimos $K(p,~ q,~ s)$ donde $uv \in E(G)$ si y solo si $|uv| \le s$, y entonces particularmente $K(p,~q) = K(p, q, 0)$


```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sep = 1.5; \radio = 0.1; }
    
    \coordinate (p45) at (0, 0);
    \tikzmath { \a = -20; } 
    \coordinate (p13) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a =  20; } 
    \coordinate (p24) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a =  50; } 
    \coordinate (p35) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a =  90; } 
    \coordinate (p12) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a =  130; } 
    \coordinate (p34) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a =  160; } 
    \coordinate (p15) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a =  200; } 
    \coordinate (p23) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a = -110; } 
    \coordinate (p14) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    \tikzmath { \a = -70; } 
    \coordinate (p25) at ({\sep * cos(\a)}, {\sep * sin(\a)});
    
    \fill (p45) circle (\radio);
    \path (p45) node[below=2pt] {$45$};
    
    \foreach \ij/\dir [remember=\ij as \pij (initially 25)] in {13/right, 24/right, 35/above right, 12/above, 34/above left, 15/left, 23/left, 14/below, 25/below} {
        \fill (p\ij) circle (\radio);
        \path (p\ij) node[\dir=2pt] {$\ij$};
        \draw (p\ij) -- (p\pij);
    }

    \draw (p23) -- (p45) -- (p12) -- (p45) -- (p13);
    \draw (p34) .. controls (p34 |- 0, 0) and (p25 -| 0, 0) .. (p25);
    \draw (p35) .. controls (p35 |- 0, 0) and (p14 -| 0, 0) .. (p14);
    \draw (p15) .. controls (0, {0.65 * \sep}) .. (p24);
    
    \path ({-\sep - 1}, 0) node[left=2pt] {$K(5,~2)$};

\end{tikzpicture}
\end{document}
```

Denotamos $ij$ al vector asociado al conjunto $i$, $j$.

Genéricamente, podemos hallar el [[Orden de un grafo|orden del grafo]] de Kneser a partir de la cantidad de formas posibles de tomar $q$ elementos de un conjunto de $p$ elementos, es decir, el [[Combinación|número combinatorio]] $$ n\big( K(p,~ q) \big) = \dbinom{p}{q} $$
Para el [[Tamaño de un grafo|tamaño]], cada vértice será adyacente a aquellos nodos con los cuales no comparta elementos, luego esto es el número combinatorio $\dbinom{p-q}{q}$, como cada arista se contara dos veces, dividimos el número en dos. Tendremos entonces $$ m\big( K(p,~ q) \big) = \frac{1}{2} \dbinom{p}{q} \dbinom{p - q}{q} $$
Si $q > p$, entonces el grafo será vacío, que es un grafo en sí mismo. La [[analisis 2/Nomenclatura/Función.md|función]] del grafo vacío se denomina función nula. Por otro laso, si $p - q < q$, entonces el grafo no tendrá aristas