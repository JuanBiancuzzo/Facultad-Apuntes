---
dia: 2024-08-16
tags:
  - discreta/Grafos
  - nota/facultad
aliases:
  - DFS
---
### Definición
---
El [[Algoritmo|algoritmo]] Depth First Search busca encontrar una [[Grafo conexo#^338349|orientación fuertemente conexo para un grafo]]

1. Se elige un [[Nodo|vértice]] $v$ cualquiera, y se lo etiqueta como el primero
2. Se toma un vértice cualquiera, adyacente al anterior
3. Se avanza en profundidad, cuidando de no crear ciclos, formando un [[Árbol generador|árbol generador]]. Cada vértice se etiqueta en orden que se recorre
4. Se orienta cada arista que es parte del árbol generador, de menor a mayor. Las agregan las aristas que no son parte de árbol generador, orientándolas del vértice mayor al vértice menor, a partir de la secuencia definida previamente

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { 
        \sep = 2.5; \radio = 0.1; 
        \vsep = -5; \arrowRadio = 2 * \radio cm;
    }
    
    \coordinate (p1) at (0, 0);
    \coordinate (p2) at (0, -\sep);
    \coordinate (p3) at ({\sep / 2}, {-\sep / 2});
    \coordinate (p4) at (\sep, 0);
    \coordinate (p5) at ({3 * \sep / 2}, {-\sep / 2});
    \coordinate (p6) at (\sep, -\sep);
    \coordinate (p7) at (-\sep, -\sep);
    \coordinate (p8) at (-\sep, 0);

    \foreach \timesY/\arrow in {0/-, 1/-, 2/->, 3/->} {
        \coordinate (centro) at (0, {\vsep * \timesY});
    
        \foreach \n/\dir in {1/above, 2/below, 3/above, 4/above, 5/above, 6/below, 7/below, 8/above} {
            \fill ($ (p\n) + (centro) $) circle (\radio);
        }
        
        \foreach \ni/\nf in {1/2, 2/7, 7/8, 2/3, 3/4, 4/5, 5/6} {
            \draw[\arrow, shorten >=\arrowRadio, shorten <=\arrowRadio] ($ (p\ni) + (centro) $) -- ($ (p\nf) + (centro) $);
        }
    }
    
    \foreach \timesY/\arrow in {0/-, 3/->} {
        \coordinate (centro) at (0, {\vsep * \timesY});
        
        \foreach \ni/\nf in {8/1, 3/1, 4/1, 6/2, 6/4} {
            \draw[\arrow, shorten >=\arrowRadio, shorten <=\arrowRadio] ($ (p\ni) + (centro) $) -- ($ (p\nf) + (centro) $);
        }
    }

    \foreach \timesY in {1, 2, 3} {
        \coordinate (centro) at (0, {\vsep * \timesY});
        
        \foreach \n/\dir in {1/above, 2/below, 3/above, 4/above, 5/above, 6/below, 7/below, 8/above} {
            \path ($ (p\n) + (centro) $) node[\dir=2pt] {$\n$};
        }
    }
    
\end{tikzpicture}
\end{document}
```
