---
dia: 2024-11-21
etapa: sin-empezar
orden: 528
referencias: 
 - "611"
tags: 
 - animation
 - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=4, transform shape, thick] 
    \tikzmath {
        \definicion = 0.05;
    
        function easeIn(\t) {
            return 1 - cos(deg(\t * pi / 2));
        };
        
        function easeOut(\t) {
            return sin(deg(\t * pi / 2));
        };
        
        function easeInOut(\t) {
            return -( cos(deg(\t * pi)) - 1 ) / 2;
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
        {$1 - \cos\left( \frac{\pi t}{2} \right)$};

    % Ease Out
    \path ({posicion(1)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease Out};
    \path ({posicion(1)}, -0.1) -- ++(1, 0) node[midway, below=2pt, scale=0.4] 
        {$\sin\left( \frac{\pi t}{2} \right)$};
    
    % Ease InOut
    \path ({posicion(2)}, 1.1) -- ++(1, 0) node[midway, above=2pt, scale=0.4]
        {Ease InOut};
    \path ({posicion(2)}, -0.1) -- ++(1, 0) node[midway, below=2pt, scale=0.4] 
        {$\frac{1 - \cos( \pi t )}{2}$};

\end{tikzpicture}
\end{document}
```

^representacion


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```