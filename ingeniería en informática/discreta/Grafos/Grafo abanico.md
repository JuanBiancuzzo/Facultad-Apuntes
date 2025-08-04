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
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], el abanico se define por $F(p,~ q) = N_p ~ P_q$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sep = 2; \radio = 0.1; }
    
    \coordinate (pic) at (0, 0);
    \coordinate (pi1) at ({-0.5 * \sep}, 0);
    \coordinate (pi2) at ({ 0.5 * \sep}, 0);
    
    \coordinate (ps1) at ({-\sep}, \sep);
    \coordinate (ps2) at ({-0.5 * \sep}, {1.4 * \sep});
    \coordinate (ps3) at ({ 0.5 * \sep}, {1.4 * \sep});
    \coordinate (ps4) at ({ \sep}, \sep);

    \coordinate (centro) at (0, 0);
    \foreach \pp in {pic} {
        \fill ($ (\pp) + (centro) $) circle (\radio);
        \foreach \pq in {ps1, ps2, ps3, ps4} {
            \fill ($ (\pq) + (centro) $) circle (\radio);
            \draw ($ (\pp) + (centro) $) 
                 -- ($ (\pq) + (centro) $);   
        }
        \draw ($ (ps1) + (centro) $) \foreach \pq in {ps2, ps3, ps4} {
            -- ($ (\pq) + (centro) $)
        };
    }
    \path ($ (centro) + (0, -0.5) $) node {$F(1,~ 4)$};
    
    \coordinate (centro) at (6, 0);
    \foreach \pp in {ps1, ps2, ps3, ps4} {
        \fill ($ (\pp) + (centro) $) circle (\radio);
        \foreach \pq in {pi1, pi2} {
            \fill ($ (\pq) + (centro) $) circle (\radio);
            \draw ($ (\pp) + (centro) $) 
                 -- ($ (\pq) + (centro) $);   
        }
        \draw ($ (pi1) + (centro) $) \foreach \pq in {pi2} {
            -- ($ (\pq) + (centro) $)
        };
    }
    \path ($ (centro) + (0, -0.5) $) node {$F(4,~ 2)$};
    

\end{tikzpicture}
\end{document}
```