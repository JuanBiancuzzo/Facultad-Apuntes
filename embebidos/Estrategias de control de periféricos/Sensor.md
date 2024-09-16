---
dia: 2024-09-16
tags:
  - embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
referencias:
  - "241"
---
### Definición
---
Un [[Microcontrolador|microcontrolador]] no debería hacer decisiones sin censar el mundo exterior, entonces podemos partir de la forma más simple de censar si un switch esta abierto o cerrado

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
\begin{circuitikz}[
    voltage shift=0.5, scale=1.2, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    
    \draw[ultra thick] (0, 2) 
        -- ++(2, 0)
            node[midway] (vdd) {}
        -- ++(0, -4)
            node[pos=0.35] (p0) {}
            node[pos=0.65] (p1) {}
        -- ++(-2, 0)
            node[midway] (gnd) {};
    
    \draw (vdd.center) to[short, -*] ++(0, 0.75) 
        node[right=2pt] {$V_{dd}$};
    \draw (gnd.center) to[short, l^=GND] ++(0, -0.75)
        node[tlground] {}; 
    
    \draw (p0.center) node[above right=2pt] {P$0$} -- ++(3, 0) 
        node[pos=0.6] (temp0) {}
        node (fin0) {};
    \draw (p1.center) node[below right=2pt] {P$1$} -- ++(3, 0) 
        node[pos=0.6] (temp1) {}
        node (fin1) {};
    
    \draw (temp0.center) to[R, l_=R$1$, *-*] 
        ($ (temp0.center |- vdd.center) + (0, 0.75) $)
            node[right=2pt] {$V_{dd}$}; 
    \draw (temp1.center) to[R, l^=R$2$, *-] 
        ($ (temp1.center |- gnd.center) + (0, -0.75) $)
            node[tlground] {}; 
            
    \draw (fin0.center)
        node[cuteopenswitchshape, anchor=out, xscale=-1] (switch0) {};
    \draw (switch0.in) -- ++(0.75, 0) -- ++(0, -0.2)
        node[tlground] {};
    \path ($ (switch0.in)!0.5!(switch0.out) + (0, 0.75) $) node { SW$1$ };
    
    \draw (fin1.center) -- ($ (fin1.center -| switch0.in) + (0.5, 0) $)
        node[cuteopenswitchshape, anchor=out, xscale=-1] (switch1) {};
    \draw (switch1.in) to ++(0.75, 0) 
        to[short, -*] ++(0, 1)
            node[right=2pt] {$V_{dd}$};
    \path ($ (switch1.in)!0.5!(switch1.out) + (0, -0.5) $) node { SW$2$ };
    
\end{circuitikz}
\end{document}
```

Se puede censar de las dos formas con un [[General Purpose Input Output#Input|pin de entrada]]
1. Como el pin $P0$ que usa la [[Resistor|resistencia]] $R1$ como [[General Purpose Input Output#^pull-up|pull up]]. Cuando el $SW1$ esta abierta $P0$ va a leer un $1$, y cuando este cerrado $P0$ va a leer un $0$
2. Como el pin $P1$ que usa la resistencia $R2$ como [[General Purpose Input Output#^pull-down|pull down]]. Cuando el $SW2$ esta abierto $P1$ va a leer un $0$, y cuando este cerrado $P0$ va a leer un $1$

#### Saltos por una switch
---
Cuando un switch se cierra, no es un cambio perfecto, y este podemos decir que salta entre los cambios, por la vibración de los contactos que permite establecer la conexión

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \xscale = 1.5; \yscale = 2.5; }
    \draw[->] (-0.2, 0) -- ({5.8 * \xscale}, 0) node[below=2pt] {$t$};
    \draw[->] (0, -0.2) -- (0, {1.5 * \yscale}) 
        node[right=2pt, align=center] {Bit\\leido};
        
    \path (-0.2, 0) node[left=2pt] {$0$};
    \draw (0.2, \yscale) -- ++(-0.4, 0) node[left=2pt] {$1$};
    
    \draw[ultra thick] (0, \yscale) \foreach \x/\y in 
        {2/1, 2.2/0, 2.3/0, 2.5/0.8, 2.6/0.3, 2.65/0.3, 2.75/0,
        3/0, 3.1/0.75, 3.2/0.2, 3.25/0.2, 3.3/0, 3.5/0, 3.6/0.4, 
        3.7/0, 5.7/0} {
        -- ({\x * \xscale}, {\y * \yscale})
    };
    
    \path (0, \yscale) -- ++({2 * \xscale}, 0)
        node[midway, above=2pt] { Switch abierto };

    \draw[<-] ({2.1 * \xscale}, {1.1 * \yscale}) -- 
        ++({0.3 * \xscale}, {0.2 * \yscale})
            node[above right=0.1pt] { Cerrando switch };
    
    \path ({3.7 * \xscale}, 0) -- ({5.7 * \xscale}, 0)
        node[midway, above=2pt] { Switch estable };

\end{tikzpicture}
\end{document}
```

Como el microcontrolador trabaja a un par de ordenes de magnitud más rápido que un switch mecánico, va a leer este estado intermedio e interpretarlo como un cambio en el switch

La forma más simple de corregir este problema es por [[Software|software]], se puede lograr tomando una pequeña espera, permitiendo que el switch se estabilice y tomar una medición ahí

Hay que tener en cuenta que si el período en el que se espera es suficientemente corto, puede ser que sigamos leyendo de forma errónea, pero si es suficientemente largo podamos perder lecturas, entonces es algo a tener en cuenta

Algunos switches en su data sheet pueden tener el tiempo que tarda en estabilizarse o se puede hacer una [[Curva característica de un componente|curva característica]] del switch y por lo tanto saber cuanto se tiene que esperar


### Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```