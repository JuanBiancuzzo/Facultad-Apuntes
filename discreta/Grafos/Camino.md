---
dia: 2024-08-09
tags:
  - discreta/Grafos
  - nota/facultad
aliases:
  - Camino abierto
  - Camino cerrado
  - Trail
  - Path
  - Circuit
  - Cicle
  - Recorrido
  - Camino simple
  - Circuito
  - Ciclo
---
### Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$  un [[Grafo|grafo]], un camino $v_0-v_q$ es una [[Sucesión|sucesión]] alternada de vértices y aristas para viajar desde $v_0$ a $v_q$ $$ v_0 ~ e_1 ~ v_1 ~ e_2 v_2 ~ \cdots ~ e_q ~ v_q, ~~~ \Psi_G(e_k) = \Set{ v_{k-1},~ v_k } ~~ \forall k = 1,~ 2,~ \cdots,~ q $$
Un camino es cerrado si $v_0 = v_q$ de lo contrario es un camino abierto

#### Recorrido (Trail)
---
Si el camino es abierto que no repite aristas es un recorrido

#### Camino simple (Path)
---
Si el camino es abierto que no repite vértices es un camino simple

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

                \tikzmath {
                    \xDif = \posX + desfaseX(max(1, \j - 1));
                    \yDif = \posY + desfaseY(max(1, \j - 1));
                }
                \draw (\x, \y) -- (\xDif, \yDif);
            }

            \path (\posX, {\posY - 0.25}) -- ++(\sep, 0)
                node[midway, below=2pt] {$P_\i$};
        }        

	\end{tikzpicture}
\end{document}
```

#### Circuito (Circuit)
---
Si el camino es cerrado que no repite aristas es un circuito

#### Ciclo (Cicle)
---
Si el camino es cerrado que no repite vértices es un ciclo

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

        \coordinate (p1) at (0, 0);
        \coordinate (p2) at (\sep, 0);
        \coordinate (p3) at (\sep, \sep);
        \coordinate (p4) at (0, \sep);

        \tikzmath { \i = 1; \posX = \distancia * (\i - 1); \posY = 0; }
        \fill ({ \posX + \sep / 2 }, { \posY + \sep / 2 }) circle (\radio);

        \tikzmath { \i = 2; \posX = \distancia * (\i - 1); \posY = 0; }
        
        \fill ($ (p1) + (\posX, \posY + \sep / 2) $) circle (\radio);
        \fill ($ (p2) + (\posX, \posY + \sep / 2) $) circle (\radio);

        \draw ({ \posX + \sep / 2 }, { \posY + \sep / 2 }) 
            circle ({\sep / 2});

        \tikzmath { \i = 3; \posX = \distancia * (\i - 1); \posY = 0; }
        \coordinate (pmid) at ({ \sep / 2 }, \sep);

        \foreach \coor [remember=\coor as \cUltimo (initially pmid)] in 
            {p1, p2, pmid} 
        {
            \node (actual) at (\coor) {};
            \node (ultimo) at (\cUltimo) {};
            
            \fill ($ (actual) + (\posX, \posY) $) circle (\radio); 

            \draw ($ (actual) + (\posX, \posY) $) 
                -- ($ (ultimo) + (\posX, \posY) $);
        }

        \tikzmath { \i = 4; \posX = \distancia * (\i - 1); \posY = 0; }

        \foreach \coor [remember=\coor as \cUltimo (initially p4)] in 
            {p1, p2, p3, p4} 
        {
            \node (actual) at (\coor) {};
            \node (ultimo) at (\cUltimo) {};
            
            \fill ($ (actual) + (\posX, \posY) $) circle (\radio); 

            \draw ($ (actual) + (\posX, \posY) $) 
                -- ($ (ultimo) + (\posX, \posY) $);
        }


        \foreach \i in {1, 2, 3, 4} {
            \tikzmath { \posX = \distancia * (\i - 1); \posY = 0; }
            \path (\posX, {\posY - 0.25}) -- ++(\sep, 0)
                node[midway, below=2pt] {$C_\i$};
        }

	\end{tikzpicture}
\end{document}
```
