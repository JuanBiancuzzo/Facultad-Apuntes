---
dia: 2024-11-21
etapa: ampliar
referencias:
  - "611"
tags:
  - nota/investigacion
  - investigación/animation
  - investigación/game-engine/Animation-Engine
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Crea un animación que recrea la oscilación de un resorte al intentar modificar su posición

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
        \c1 = (2 * pi) / 3;
        \c2 = (2 * pi) / 4.5;
    
        function easeIn(\t) {
            return -(2^(10 * \t - 10)) * sin(deg((10 * \t - 10.75) * \c1));
        };
        
        function easeOut(\t) {
            return (2^(-10 * \t)) * sin(deg((10 * \t - 0.75) * \c1)) + 1;
        };
        
        function easeInOut(\t) {
            if \t < 0.5 then {
                return -(2^(20 * \t - 10) * sin(deg( (20 * \t - 11.125) * \c2 ))) / 2;
            } else {
                return (2^(-20 * \t + 10) * sin(deg( (20 * \t - 11.125) * \c2 ))) / 2 + 1;
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
    \path ({posicion(0)}, -0.3) -- ++(1, 0) node[midway, below=2pt, scale=0.3] 
        {$-2^{10t - 10} ~ \sin(C_1 (10t - 10.75))$};

    % Ease Out
    \path ({posicion(1)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease Out};
    \path ({posicion(1)}, -0.3) -- ++(1, 0) node[midway, below=2pt, scale=0.3] 
        {$2^{-10t} ~ \sin(C_1 (10t - 0.75)) + 1$};
    
    % Ease InOut
    \path ({posicion(2)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease InOut};
    \path ({posicion(2)}, -0.3) -- ++(1, 0) node[pos=0.65] (temp) {}; 
    \begin{scope}[
        every left delimiter/.style={xshift=0.3ex, scale=0.25},
    ]
        \matrix[matrix of math nodes, left delimiter=\lbrace, below = 0 of temp] 
        (mat) {
            -\frac{1}{2} 2^{20t - 10} \sin(C_1 (20t - 11.125)) & si ~ t < 0.5 \\
            2^{-20t + 9} \sin(C_1 (20t - 11.125)) + 1 & si ~ t > 0.5 \\
        };
    \end{scope}

\end{tikzpicture}
\end{document}
```

^representacion

Donde se toma los valores $$ \begin{cases} 
    \displaystyle C_1 = \frac{2}{3} \pi \\
    \displaystyle C_2 = \frac{2}{4.5} \pi
\end{cases} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```