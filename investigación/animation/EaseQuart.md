---
dia: 2024-11-21
etapa: ampliar
referencias:
  - "611"
tags:
  - investigación/animation
  - investigación/game-engine/Animation-Engine
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Crea una animación que acelera y/o desacelera usando la formula $f(t) = t^4$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}
\usetikzlibrary{matrix, positioning}

\begin{document} 
\begin{tikzpicture}[scale=4, transform shape, thick] 
    \tikzmath {
        \definicion = 0.05;
    
        function easeIn(\t) {
            return \t^4;
        };
        
        function easeOut(\t) {
            return 1 - (1 - \t)^4;
        };
        
        function easeInOut(\t) {
            if \t < 0.5 then {
                return 8 * \t^4;
            } else {
                return 1 - (2 - 2 * \t)^4 / 2;
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
    \path ({posicion(0)}, -0.1) -- ++(1, 0) node[midway, below=2pt, scale=0.4] 
        {$t^4$};

    % Ease Out
    \path ({posicion(1)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease Out};
    \path ({posicion(1)}, -0.1) -- ++(1, 0) node[midway, below=2pt, scale=0.4] 
        {$1 - (1 - t)^4$};
    
    % Ease InOut
    \path ({posicion(2)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease InOut};
    \path ({posicion(2)}, -0.1) -- ++(1, 0) node[midway] (temp) {}; 
    \begin{scope}[
        every left delimiter/.style={xshift=0.3ex, scale=0.25},
    ]
        \matrix[matrix of math nodes, left delimiter=\lbrace, below = 0 of temp] 
        (mat) {
            8 t^3 & si ~ t < 0.5 \\
            1 - \frac{(2 - 2t)^4}{2} & si ~ t > 0.5 \\
        };
    \end{scope}

\end{tikzpicture}
\end{document}
```

^representacion


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```