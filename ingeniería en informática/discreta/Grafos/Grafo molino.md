---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], se define como un molino de $q$ aspas de longitud $p - 1$, puede formarse con el ensamble $W_d(p,~ q) = N_{1}~q~K_{p-1}$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    \tikzmath { \sep = 1.5; \radio = 0.075; }

    \coordinate (p1) at (0, {-\sep / 2});
    \coordinate (p2) at (0, {\sep / 2});
    \coordinate (p3) at ({\sep / 2}, 0);
    \coordinate (p4) at (\sep, {-\sep / 2});
    \coordinate (p5) at (\sep, {\sep / 2});

    \foreach \p [remember=\p as \lp (initially p5)] in {p1, p2, p3, p4, p5}{
        \fill (\p) circle (\radio);
        \draw (\p) -- (\lp);
    }

    \path (-0.25, 0) node[left=2pt] {$W_d(3,~ 2)$};

    \coordinate (wdct) at (5, 0);
    \path ($ (wdct) + (-0.25, 0)$) node[left=2pt] {$W_d(4,~ 3)$};

    \coordinate (p1) at (0, 0);
    \coordinate (p2) at (\sep, 0);
    \coordinate (p3) at ({\sep / 2}, {0.8 * \sep});
    \coordinate (pc) at ({\sep / 2}, {0.35 * \sep});

    \foreach \cx/\cy [parse=true] in 
        {0/0, 0.5 * \sep / -0.8 * \sep, \sep/0} 
    {
        \coordinate (centro) at ($ (wdct) + (\cx, \cy) $);
        \fill ($ (pc) + (centro) $) circle (\radio);
        \foreach \p [remember=\p as \lp (initially p3)] in {p1, p2, p3}{
            \fill ($ (\p) + (centro) $) circle (\radio);
            \draw ($ (\lp) + (centro) $)
                -- ($ (\p) + (centro) $)
                -- ($ (pc) + (centro) $);
        }
    }
    

\end{tikzpicture}
\end{document}
```
