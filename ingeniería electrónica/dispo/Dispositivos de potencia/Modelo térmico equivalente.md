---
dia: 2024-02-29
tags:
  - carrera/ingeniería-electrónica/dispo/Dispositivos-de-potencia
  - nota/facultad
---
# Definición
---
Usando la situación

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{shadings}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 

\definecolor{rojo}{RGB}{226, 41, 16} 
\definecolor{azul}{RGB}{101, 127, 220} 

\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath { \alto = 4; \ancho = 2; }
    \draw[left color=rojo, right color=azul] (0, 0) 
        rectangle ++(\ancho, \alto);
    
    \path (0, 0) -- ++(0, \alto) node[pos=0.9, left=2pt] {$T_C$};
    \path (\ancho, 0) -- ++(0, \alto) node[pos=0.9, right=2pt] {$T_F$};
    
    \draw[<->, ultra thick] (0, -0.3) -- ++(\ancho, 0)
        node[midway, below=2pt] {$L$};
        
    \tikzmath { \grosor = 0.5; \largo = (2/3) * \ancho; \porFlecha = 0.65; }
    \fill[black] ({\ancho / 2 - \largo / 2}, {\alto / 2 - \grosor / 2}) 
        -- ++(0, \grosor)
        -- ++({\porFlecha * \largo}, 0)
        -- ++(0, {\grosor / 2})
        -- ++({(1 - \porFlecha) * \largo}, {-\grosor})
        -- ++({(\porFlecha - 1) * \largo}, {-\grosor})
        -- ++(0, {\grosor / 2})
        -- cycle;
    \path ({\ancho / 2}, {\alto / 2}) node[white] {$q$};
\end{tikzpicture}
\end{document}
```

Recordando la [[Conducción de calor|conducción de calor]] ![[Conducción de calor#^3f1660]]
y la [[Convección de calor|convección de calor]] ![[Convección de calor#^6ed9a1]]

Se puede escribir como $$ \underbrace{T_2 - T_1 = \theta_T ~ P_{DIS} = \theta_T ~ \frac{dQ}{dt}}_{V_2 - V_1 = R ~I} $$
Por lo que podemos representar este sistema, donde $\theta$ como una [[Resistor|resistor]], la [[Temperatura|temperatura]] como la [[Tensión|tensión]] y el [[Calor|calor]], dándonos el [[Circuito eléctrico|circuito equivalente]] 

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
    voltage shift=0.5, scale=1.3, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    
    \draw (3, 0) -- (0, 0) 
        to[isource, l^=$P_{DIS}$, -*] ++(0, 3)
            node[above left=2pt] {$T_J$}
        to[R, l^=$\theta_{jc}$, -*] ++(3, 0)
            node[above right=2pt] {$T_C$}
        to[R, l_=$\theta_{ca}$, -*] ++(0, -3)
        to[battery1, l^=$T_A$] ++(0, -2)
            node[tlground] {};
    
    \draw (3, 2.6) to[short, *-] ++(1.5, 0)
        to[R, l^=$\theta_{dis}$] ++(0, -2.2)
        to[short, -*] ++(-1.5, 0);
    
\end{circuitikz}
\end{document}
```