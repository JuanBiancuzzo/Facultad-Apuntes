---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], es un grafo común, utilizado para demostrar muchas propiedades

Se puede visualizar de la siguiente forma 

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
        \coordinate (p3) at ({ \sep / 2 }, { 0.75 * \sep });
        \coordinate (p4) at ({ \sep / 2 }, { 1.5 * \sep });
        
        \foreach \coor [remember=\coor as \cUltimo (initially p3)] in 
            {p1, p2, p3} 
        {
            \node (actual) at (\coor) {};
            \node (ultimo) at (\cUltimo) {};
            
            \fill (actual) circle (\radio); 
            \draw (actual.center) -- (ultimo.center);
        }

        \fill (p4) circle (\radio); 
        \draw (p4) -- (p3);
        
	\end{tikzpicture}
\end{document}
```