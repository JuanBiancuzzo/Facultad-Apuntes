---
dia: 2023-03-20
tags:
  - orga/Visualizaciones
  - nota/facultad
---
# Definición
---
En este [[Plot|plot]] se muestran 5 valores
- El central de la caja verde es la [[Mediana|mediana]]. También visto como el punto que separa a la mitad a la [[Población|población]]
- Los extremos de la caja son los [[Cuantil|cuantiles]] 1 y 3, que representan el punto donde separan 25% de la población para inferior o superior, respectivamente
- Los bigotes representan, son el valor más alejado en cada dirección, hasta 1.5 veces el rango intercuartílico (que es la diferencia entre el cuantil 1 y 3)

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}
\pgfkeys{/pgf/number format/.cd,fixed,precision=2}
\usetikzlibrary{shapes.geometric}

\begin{document} 
\pgfmathsetseed{1}
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    \tikzmath { \sep = 2; }
    
    \path (-0.5, -3) node (temp) {};
    \foreach \i in {0, 1, 2, 3, 4, 5} {        
        \draw (temp.center) -- ({\i * \sep}, -3) node (temp) {};
        \ifthenelse{\i = 0}{
            \draw[thin] (temp.center) -- ++(0, -0.1) node [below=2pt] {$0$};
        }{
            \draw[thin] (temp.center) -- ++(0, -0.1)
                node [below=2pt] {$\pgfmathprintnumber{\i}00.000$};
        }        
    }
    \draw (temp.center) -- ++(0.5, 0);
    \path (0, -3) -- ++({5 * \sep}, 0)
        node[midway, below=0.75cm] {Salario mensual BRUTO (pesos)};
    \path (0, 3) -- ++({5 * \sep}, 0)
        node[midway, align=center] {Distribución del salario argentino\\en la encuesta de sysarmy};
        
    \begin{scope}[ultra thick, xscale=\sep]
        \draw (0.1, -1.25) -- ++(0, 2.5);
        \draw (0.1, 0) -- (0.6, 0);
        \draw (1.1, 0) -- (2, 0);
        \draw (2, -1.25) -- ++(0, 2.5);
        
        \filldraw[fill=green!50!black] (0.6, -2) rectangle (0.8, 2);
        \filldraw[fill=green!50!black] (0.8, -2) rectangle (1.1, 2);
    \end{scope}
    
    \foreach \i in {2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3, 3.1, 3.2, 3.4, 3.5, 3.7, 3.9, 4, 4.1, 4.3, 4.6, 4.75, 4.8} {        
        \tikzmath {
            \rand1 = (rand + 1) / 4;
            \rand2 = ((rand + 1) / 6) + 0.3;
        }
        \draw ({\sep * \i}, 0) 
             node[fill=green!50!black, diamond, draw, scale=0.5] {};
        \draw ({\sep * (\i + \rand1)}, 0) 
             node[fill=green!50!black, diamond, draw, scale=0.5] {};
        \draw ({\sep * (\i + \rand2)}, 0) 
             node[fill=green!50!black, diamond, draw, scale=0.5] {};
    }

\end{tikzpicture}
\end{document}
```

El resto de los valores se los llama outliers