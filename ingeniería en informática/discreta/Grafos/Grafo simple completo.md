---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Grafos/Resumen.md]]"
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo simple|grafo simple]], se define el grafo simple completo de orden $n$ donde $$ \Psi_G = \mathcal{P}\big( V(G) \big) $$
Denotado como $K_n$, y se puede visualizar de la siguiente forma 

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

        \foreach \i in {1, 2, 3, 4} {
            \tikzmath { \posX = \distancia * (\i - 1); \posY = 0; }

            \foreach \j in {1, ..., \i} {
                \tikzmath {
                    \x = \posX + desfaseX(\j);
                    \y = \posY + desfaseY(\j);
                }
                 \fill (\x, \y) circle (\radio);

                \foreach \k in {1, ..., \j} {
                    \tikzmath {
                        \xDif = \posX + desfaseX(\k);
                        \yDif = \posY + desfaseY(\k);
                    }
                    \draw (\x, \y) -- (\xDif, \yDif);
                }
            }

            \path (\posX, {\posY - 0.25}) -- ++(\sep, 0)
                node[midway, below=2pt] {$K_\i$};
        }        

	\end{tikzpicture}
\end{document}
```