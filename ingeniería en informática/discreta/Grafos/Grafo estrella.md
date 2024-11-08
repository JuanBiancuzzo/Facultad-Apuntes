---
dia: 2024-08-09
tags: 
 - ingeniería-en-informática/discreta/Grafos
 - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo simple|grafo simple]] [[Grafo conexo|conexo]], se define el grafo estrella de orden $n$ teniendo $n$ vértices con un único vértice de [[Grado de un vértice|grado]] $n - 1$ que se conecta con los $n - 1$ vértices restantes de grado $1$

Denotado como $S_n$, y se puede visualizar de la siguiente forma 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick, 
    	declare function = {
			desfaseX(\i) = \sep * mod(\i - 1, 2);
            desfaseY(\i) = \sep * int( (\i - 1) / 2 );
		}
	]
        \tikzmath { 
            \sep = 1;
            \distancia = 2;
            \radio = 0.075;
        }

        \foreach \pos [count=\i] in {2, 3, 4, 5} {
            \tikzmath { 
                \posX = \distancia * (\i - 1); 
                \posY = 0; 
            }

            \coordinate (centro) at 
                ({ \posX + \sep / 2 }, { \posY + \sep / 2 });
            \fill (centro) circle (\radio);

            \foreach \j in {1, ..., \i} {
                \tikzmath {
                    \x = \posX + \sep - desfaseX(\j);
                    \y = \posY + \sep - desfaseY(\j);
                }
                
                \fill (\x, \y) circle (\radio);
                \draw (centro) -- (\x, \y);
            }

            \path (\posX, {\posY - 0.25}) -- ++(\sep, 0)
                node[midway, below=2pt] {$S_\pos$};
        }        

	\end{tikzpicture}
\end{document}
```

Notemos que es un [[Grafo k-partito|grafo bipartito]]