---
dia: 2025-02-02
etapa: empezado
referencias: []
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-confinadas
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Como vimos en el [[Modelo circuital de la línea ideal|modelo ideal]], es decir, sin pérdidas de [[Energía|energía]]. Sin embargo, todos los sistemas reales tienen pérdidas. En una [[Guía de ondas|línea de transmisión]] las pérdidas se dan por 
* Pérdidas por [[Efecto Joule|efecto Joule]] en los [[Conductor|conductores]]
* Pérdida [[Dieléctrico|dieléctricas]]

```tikz
\usepackage[
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
    \tikzmath{ \dimension = 4.5; \porcen = 0.15; \nporcen = 1 - \porcen; }
    
    \draw ({-\dimension / 2}, {-\dimension / 2}) 
        rectangle ++(\dimension, \dimension);
    \path ({-\dimension / 2}, {-\dimension / 2}) -- ++(0, \dimension)
        node[pos=\porcen] (izqAbajo) {}
        node[pos=\nporcen] (izqArriba) {};
    \path ({ \dimension / 2}, {-\dimension / 2}) -- ++(0, \dimension)
        node[pos=\porcen] (derAbajo) {}
        node[pos=\nporcen] (derArriba) {};
        
    \draw (izqAbajo.center) -- (derAbajo.center)
        node[midway] (centroAbajo) {};
         
    \draw (izqArriba.center) 
        to[L, loops=4, l^=$L~dz$] (izqArriba.center -| centroAbajo.center)
            node (centroArriba) {}
            node[above=2pt] {A}
        to[R, l^=$R~dz$] (derArriba.center);
    
    \draw (centroArriba.center) to[short, *-] 
        ($ (centroArriba.center)!0.2!(centroAbajo.center) $)
            node (nodoArriba) {};
    \draw (centroAbajo.center) to[short, *-] 
        ($ (centroAbajo.center)!0.2!(centroArriba.center) $)
            node (nodoAbajo) {};
    
    \draw (nodoAbajo) to[short, *-] ++({\dimension / 6}, 0)
            node (temp) {}
        to[R, l_=$G~dz$] (temp.center |- nodoArriba.center)
        to (nodoArriba.center);
    \draw (nodoArriba) to[short, *-] ++({-\dimension / 6}, 0)
            node (temp) {}
        to[C, l_=$C~dz$] (temp.center |- nodoAbajo.center)
        to (nodoAbajo.center);
    
    \tikzmath { \sep = 1; }
    \draw (izqAbajo.center) to[short, -o] ++(-\sep, 0) node (izqAbajoFin) {};
    \draw (izqArriba.center) to[short, -o] ++(-\sep, 0) node (izqArribaFin) {};
    \draw (derAbajo.center) to[short, -o] ++(\sep, 0) node (derAbajoFin) {};
    \draw (derArriba.center) to[short, -o] ++(\sep, 0) node (derArribaFin) {};
    
    \draw[shorten <=0.2cm, <-] (izqArribaFin.center)
        -- ++({-0.8 * \sep}, 0) node[pos=0, scale=0.9, above left=2pt]
            {$i(z,~ t)$};
    \draw[shorten <=0.2cm, ->] (derArribaFin.center)
        -- ++({0.8 * \sep}, 0) node[pos=0, scale=0.9, above right=2pt]
            {$i(z + dz,~ t)$};
    
    \draw[shorten >= 0.3cm, shorten <= 0.3cm, ->] (izqAbajoFin.center) 
        .. controls
            ($ (izqAbajoFin.center) + ({-\sep / 2}, 0) $) and
            ($ (izqArribaFin.center) + ({-\sep / 2}, 0) $) ..
        (izqArribaFin.center) node[midway, left=2pt, scale=0.9] {$v(z,~ t)$};
    \draw[shorten >= 0.3cm, shorten <= 0.3cm, ->] (derAbajoFin.center) 
        .. controls
            ($ (derAbajoFin.center) + ({\sep / 2}, 0) $) and
            ($ (derArribaFin.center) + ({\sep / 2}, 0) $) ..
        (derArribaFin.center) node[midway, right=2pt, scale=0.9] {$v(z + dz,~ t)$};
        
\end{circuitikz}
\end{document}
```

El modelo circuital de [[Cuadripolo|cuadripolo]] puede incorporar estas pérdidas mediante una [[Resistencia#En serie|resistencia en serie]], que modela las pérdidas por efecto Joule debidas a la circulación de corriente en los conductores de la línea y una [[Conductancia#En paralelo|conductancia en paralelo]], que modela las pérdidas dieléctricas mediante una conductividad equivalente del material