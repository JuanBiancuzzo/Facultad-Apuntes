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
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$  un [[Grafo|grafo]], se define el grafo nulo de orden $n$ donde $$ E(G) = \emptyset $$
Denotado como $N_n$, y se puede visualizar de la siguiente forma 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]
        \tikzmath { 
            \sep = 1;
            \distancia = 2;
            \radio = 0.075;
        }

        \foreach \i in {1, 2, 3, 4} {
            \tikzmath { \posX = \distancia * (\i - 1); \posY = 0; }

            \foreach \j in {1, ..., \i} {
                 \fill (
                     { \posX + \sep * mod(\j - 1, 2) }, 
                     { \posY + \sep * int( (\j - 1) / 2 ) }
                 ) circle (\radio);   
            }

            \path (\posX, {\posY - 0.25}) -- ++(\sep, 0)
                node[midway, below=2pt] {$N_\i$};
        }        

	\end{tikzpicture}
\end{document}
```