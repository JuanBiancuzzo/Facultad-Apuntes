---
dia: 2024-09-16
tags:
  - embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
referencias:
  - "241"
  - "254"
aliases:
  - Protección de pin de entrada#Protección
  - Pin Input Protection#Protección
  - Optoacoplador#Optoacoplador
  - Optoaislador#Optoacoplador
  - Optoisolator#Optoacoplador
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
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

## Saltos por una switch
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

## Protección
---
[[Circuito integrado|Circuitos integrados]], como se menciona en el uso de un [[General Purpose Input Output#Input|pin de entrada]], si se recibe más [[Tensión|tensión]] de la alimentación o menor al $0~V$, puede dañar el integrado. También esta tensión puede venir por algún medio externo como la descarga estática de una persona. En conclusión, es buena idea poner una cierta protección

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
        -- ++(2, 0) node[midway] (vdd) {}
        -- ++(0, -4) node[pos=0.5] (p0) {}
        -- ++(-2, 0) node[midway] (gnd) {};
    
    \draw (vdd.center) to[short, -*] ++(0, 0.75) 
        node[right=2pt] {$V_{dd}$};
    \draw (gnd.center) to[short, l^=GND] ++(0, -0.75)
        node[tlground] {}; 
    
    \draw (p0.center) node[above right=2pt] {P$0$} 
        to ++(1.5, 0) node (temp0) {}
        to[R, l_=$R2$] ++(2.5, 0)
            node (fin0) {};
    \draw (temp0.center) to[C, l_=$C1$, *-]
        ($ (temp0.center |- gnd.center) + (0, -0.75) $)
            node[tlground] {}; 
            
    \draw (fin0.center) 
        to[R, l_=R$1$, *-*] ($ (fin0.center |- vdd.center) + (0, 0.75) $)
            node[right=2pt] {$V_{dd}$};
    \draw (fin0.center) to ++(0.75, 0)
        node[cuteopenswitchshape, anchor=out, xscale=-1] (switch0) {};
    \draw (switch0.in) -- ++(0.75, 0) -- ++(0, -0.2)
        node[tlground] {};
    \path ($ (switch0.in)!0.5!(switch0.out) + (0, 0.75) $) node { SW$1$ };
    
\end{circuitikz}
\end{document}
```


Ya agregando $R2$ da un poco de protección, ya que en el caso de un pico de tensión, esta resistencia limitaría la [[Corriente eléctrica|corriente]] que iría al pin $P0$, típicamente el valor de $R2$ esta entre los $10$ a un par de cientos de Ohms

Agregando el [[Capacitor|capacitor]] $C1$ mejora la protección, ya que resiste el cambio de tensión, porque este se va a cargar mientras corriente fluya, la cual esta limitada por $R2$. Notemos que esto produce un [[Circuito RC|circuito RC]]

Mientras más grande sea el pico de tensión esperado, más grande tiene que ser $C1$ y $R2$, para obtener una mayor [[Constante de tiempo|constante de tiempo]] y por lo tanto hay que tenerlo en cuenta para la etapa de diseño

### Protección con un diodo Zener
---
Usar un [[Diodo Zener|diodo Zener]] permite que si la tensión es muy alta, el Zener va a empezar a conducir y por lo tanto la tensión en el pin "nunca" va a exceder la tensión de Zener $V_z$. Cabe aclarar que los diodos siempre tienen un tiempo de reacción, por lo que si la frecuencia, del pico de tensión, es muy alta, muy posiblemente el Zener no responda a tiempo, y por lo tanto llegando la tensión al pin como si el Zener no estuviera

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
	diodes/scale=0.8,
}

\begin{document} 
\begin{circuitikz}[
    voltage shift=0.5, scale=1.2, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    
    \draw[ultra thick] (0, 2) 
        -- ++(2, 0) node[midway] (vdd) {}
        -- ++(0, -4) node[pos=0.5] (p0) {}
        -- ++(-2, 0) node[midway] (gnd) {};
    
    \draw (vdd.center) to[short, -*] ++(0, 0.75) 
        node[right=2pt] {$V_{dd}$};
    \draw (gnd.center) to[short, l^=GND] ++(0, -0.75)
        node[tlground] {}; 
    
    \draw (p0.center) node[above right=2pt] {P$0$} 
        to ++(1.5, 0) node (temp0) {}
        to[R, l_=$R2$] ++(2.5, 0)
            node (fin0) {};
    \draw ($ (temp0.center |- gnd.center) + (0, -0.75) $)
            node[tlground] {}
        to[zzDo, l_=$D1$, *-] (temp0.center); 
            
    \draw (fin0.center) 
        to[R, l_=R$1$, *-*] ($ (fin0.center |- vdd.center) + (0, 0.75) $)
            node[right=2pt] {$V_{dd}$};
    \draw (fin0.center) to ++(0.75, 0)
        node[cuteopenswitchshape, anchor=out, xscale=-1] (switch0) {};
    \draw (switch0.in) -- ++(0.75, 0) -- ++(0, -0.2)
        node[tlground] {};
    \path ($ (switch0.in)!0.5!(switch0.out) + (0, 0.75) $) node { SW$1$ };
    
\end{circuitikz}
\end{document}
```

### Optoacoplador
---
Un optoacoplador, también llamado optoaislador o aislador acoplado ópticamente, es un dispositivo de emisión y recepción que funciona como un interruptor activado mediante la luz emitida por un [[Diodo|diodo]] led que satura un componente optoelectrónico, normalmente en forma de [[Fototransistor|fototransistor]] o fototriac. De este modo se combinan en un solo dispositivo [[Semiconductor|semiconductor]], un fotoemisor y un fotorreceptor cuya conexión entre ambos es óptica. Estos elementos se encuentran dentro de un encapsulado que por lo general es del tipo [[Dual in-line package (DIP) (DIL)|DIP]]. Se suelen utilizar para aislar eléctricamente a dispositivos muy sensibles<sup><a href="#ref-254" style="color: inherit; text-decoration: none;">[254]</a></sup> 

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
        -- ++(-2, 0) node[midway] (vdd) {}
        -- ++(0, -4) node[pos=0.5] (p0) {}
        -- ++(2, 0) node[midway] (gnd) {};
    
    \draw (vdd.center) to[short, -*] ++(0, 0.75) 
        node[right=2pt] {$V_{dd}$};
    \draw (gnd.center) to[short, l^=GND] ++(0, -0.75)
        node[tlground] {}; 
    
    \draw (p0.center) node[above left=2pt] {P$0$} -- ++(-1, 0) 
        node (fin0) {};
    
    \draw (fin0.center) to[R, l^=R$2$, -*] 
        ($ (fin0.center |- vdd.center) + (0, 0.75) $)
            node[right=2pt] {$V_{dd}$}; 
    \draw (fin0.center) to ++(0, -0.5)
        to ++(-0.3, 0) node (temp) {};
    \draw (temp.center) to ++(-0.6, 0) 
        node[npn, xscale=0.5, yscale=0.7, anchor=C] (npn1) {};
    \draw (temp.center) to ++(0, -0.6) 
        node[npn, xscale=0.5, yscale=0.7, anchor=C] (npn2) {};
    
    \draw (npn2.E) to ++(0, -0.3) node[tlground] {};
    \draw (npn1.E) -- (npn1.E |- npn2.B) -- (npn2.B);
    \draw (npn1.B) to ++(-0.2, 0) to[short, -*] ++(0, 1.1)
        node[right=2pt] {$V_{dd}$};
    
    \ctikzset{diodes/scale=0.6}
    \draw ($ (npn1.B) + (-1, 0.5) $) 
        to[leD] ++(0, -1)
        to ++(0, -0.2)
        to ++(-1.5, 0) node (temp) {}
        to[short, -o] ++(-2.5, 0) node (extremo-) {};
    
    \draw (temp.center) to[D, l^=$D1$] ++(0, 2) node (temp) {}
        to ($ (temp.center -| npn1.B) + (-1, 0) $) 
        to ($ (npn1.B) + (-1, 0.5) $);
    
    \draw (temp.center) to[R, l_=$R1$, -o] (temp.center -| extremo-)
        node (extremo+) {};
    
    \path (extremo-.center) node[left=2pt] {$-$}
        -- (extremo+.center) 
            node[midway, left=2pt] {$V_{in}$}
            node[left=2pt] {$+$};
    
    \draw[dashed, thin] ($ (npn1.C) + (0.8, 0.2) $)
        rectangle ++(-2.6, -1.8);
    
\end{circuitikz}
\end{document}
```

En general se usa un [[Darlington|darlington]] como dispositivo semiconductor, ya que tiene una [[Ganancia|ganancia]] muy alta

Cabe aclarar que este sistema puede ser algo lento, especialmente la transición de $1$ a $0$, siendo de $10$ a $20$ veces más lento que la transición de $0$ a $1$

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```