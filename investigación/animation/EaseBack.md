---
dia: 2024-11-21
etapa: ampliar
orden: 529
referencias:
  - "611"
tags:
  - nota/investigacion
  - investigación/animation
  - investigación/game-engine/Animation-Engine
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Retrasa el movimiento de la animación ligeramente antes de empezar, y/o al final

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}
\usetikzlibrary{matrix, positioning}

\begin{document} 
\begin{tikzpicture}[scale=4, transform shape, thick] 
    \tikzmath {
        \definicion = 0.005;
        \c1 = 1.70158;
        \c2 = \c1 * 1.525;
        \c3 = \c1 + 1;
    
        function easeIn(\t) {
            return \c3 * \t^3 - \c1 * \t^2;
        };
        
        function easeOut(\t) {
            return 1 + \c3 * (\t - 1)^3 + \c1 * (\t - 1)^2;
        };
        
        function easeInOut(\t) {
            if \t < 0.5 then {
                return 2 * \t^2 * ((\c2 + 1) * 2 * \t - \c2);
            } else {
                return (2 * \t - 2)^2 * (\t * (\c2 + 1) - \c2 / 2 - 1) + 1;
            };
        };
        
        function posicion(\i) {
            return 1.5 * \i;
        };
    }    
   
    \foreach \i in {0, ..., 2} {
        \tikzmath { 
            function ease(\t) {
                if \i == 0 then { return easeIn(\t); } else {
                    if \i == 1 then { return easeOut(\t); } else {
                        return easeInOut(\t);
                    };
                };
            };
        }
    
        \begin{scope}[cm={1, 0, 0, 1, ({posicion(\i)}, 0)}]
            \draw[->] (0, 0) -- (1.1, 0) node[above left=2pt, scale=0.4] {$t$};
            \draw[->] (0, 0) -- (0, 1.1) node[below right=2pt, scale=0.4] {$x$};
            
            \draw[cyan] (0, {ease(0)}) \foreach \x [parse = true] in
                {0, \definicion, ..., 1 + \definicion} { -- (\x, {ease(\x)}) };
        \end{scope}
    }
    
    % Ease In
    \path ({posicion(0)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease In};
    \path ({posicion(0)}, -0.1) -- ++(1, 0) node[midway, below=2pt, scale=0.3] 
        {$C_3 ~ t^3 - C_1 ~ t^2$};

    % Ease Out
    \path ({posicion(1)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease Out};
    \path ({posicion(1)}, -0.1) -- ++(1, 0) node[midway, below=2pt, scale=0.3] 
        {$1 + C_3 ~ (t - 1)^3 + C_1 ~ (t - 1)^2$};
    
    % Ease InOut
    \path ({posicion(2)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease InOut};
    \path ({posicion(2)}, -0.1) -- ++(1, 0) node[pos=0.6] (temp) {}; 
    \begin{scope}[
        every left delimiter/.style={xshift=0.3ex, scale=0.25},
    ]
        \matrix[matrix of math nodes, left delimiter=\lbrace, below = 0 of temp] 
        (mat) {
            4t^3 ~ (C_2 + 1) - 2C_2 ~ t^2 & si ~ t < 0.5 \\
            (2t - 2)^2 ~ (t (C_2 + 1) - \frac{C_2}{2} - 1) & si ~ t > 0.5 \\
        };
    \end{scope}

\end{tikzpicture}
\end{document}
```

^representacion

Donde se toma los valores $$ \begin{cases} 
    C_1 = 1.70158 \\
    C_2 = 1.525 ~ C_1\\
    C_3 = 1 + C_1
\end{cases} $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```