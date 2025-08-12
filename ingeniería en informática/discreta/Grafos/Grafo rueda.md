---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
vinculoFacultad:
  - tema: Grafos
    capitulo: 8
    materia: Matemática discreta
    carrera: Ingeniería en informática
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], se puede pensarse coloquialmente como una [[Grafo estrella|estrella]] y un [[Camino#Ciclo (Cicle)|ciclo]] en los satélites

Denotado como $W_n$, y se puede visualizar de la siguiente forma 

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
        
        \coordinate (centro) at ({ \sep / 2 }, { \sep / 2 });
        \coordinate (pmid) at ({ \sep / 2 }, 0);
        
        \tikzmath { \i = 1; \posX = \distancia * (\i - 1); \posY = 0; }
        
        \fill ($ (centro) + (\posX, \posY + 0.1 ) $) circle (\radio); 
        \foreach \coor [remember=\coor as \cUltimo (initially p4)] in 
            {pmid, p3, p4} 
        {
            \node (actual) at (\coor) {};
            \node (ultimo) at (\cUltimo) {};
            
            \fill ($ (actual) + (\posX, \posY) $) circle (\radio); 

            \draw ($ (actual) + (\posX, \posY) $) 
                -- ($ (ultimo) + (\posX, \posY) $);
            
            \draw ($ (actual) + (\posX, \posY) $) 
                -- ($ (centro) + (\posX, \posY + 0.1 ) $);
        }                
        
        \tikzmath { \i = 2; \posX = \distancia * (\i - 1); \posY = 0; }

        \fill ($ (centro) + (\posX, \posY ) $) circle (\radio); 
        \foreach \coor [remember=\coor as \cUltimo (initially p4)] in 
            {p1, p2, p3, p4} 
        {
            \node (actual) at (\coor) {};
            \node (ultimo) at (\cUltimo) {};
            
            \fill ($ (actual) + (\posX, \posY) $) circle (\radio); 

            \draw ($ (actual) + (\posX, \posY) $) 
                -- ($ (ultimo) + (\posX, \posY) $);
            
            \draw ($ (actual) + (\posX, \posY) $) 
                -- ($ (centro) + (\posX, \posY ) $);
        }   
        
        \foreach \pos [count=\i] in {4, 5} {
            \tikzmath { \posX = \distancia * (\i - 1); \posY = 0; }
            \path (\posX, {\posY - 0.25}) -- ++(\sep, 0)
                node[midway, below=2pt] {$W_\pos$};
        }        

	\end{tikzpicture}
\end{document}
```