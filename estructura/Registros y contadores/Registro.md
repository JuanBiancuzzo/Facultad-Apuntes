---
dia: 2023-04-29
tags:
  - estructura/Registros-y-contadores
  - nota/facultad
aliases:
  - Acumulador
---
# Definición
---
Tienen la capacidad de guardar información, y su estructura se conforma por $n$ [[Flip-Flop D sincrónico|flip-flop operando sincrónicamente]] y [[Compuerta lógica|compuertas lógicas]].

Veamos un ejemplo con [[Flip-Flop D sincrónico|flip-flop d sincrónicos]]

```tikz
\usepackage{circuitikz} 

\tikzset{
  flipflop D mod/.style={
    flipflop,
    flipflop def={ t1=D, t6=Q, c3=1, td={RES}, nd=1}
  },
}

\begin{document} 
\begin{circuitikz}[american, voltage shift=0.5, scale=1.1, transform shape, thick]

%%% NODES
	\node[flipflop D mod] (d0) {};
	\node[flipflop D mod] (d1) at ($ (d0.center) + (3, 0) $) {};
	\node[flipflop D mod] (d2) at ($ (d1.center) + (3, 0) $) {};
	\node[flipflop D mod] (d3) at ($ (d2.center) + (3, 0) $) {};

	\node[not port, scale = 0.7] (not) at ($ (d0.pin 3) + (-1.25, -1.5) $) {};
%%% DRAW
	\draw ($ (d0.pin 3) + (-2, -1.5) $) node[left=2pt] {Clr}
		to[short, o-] (not.in);
	\draw (not.out) 
		to ($ (not.out -| 0, 0) + (d3.down |- 0, 0) $)
		to (d3.down);

	\draw ($ (d0.pin 3) + (-2, -2.3) $) node[left=2pt] {Ck}
		to[short, o-] ($ (d0.pin 3 -| 0, 0) + (-0.1, -2.3) + (d3.pin 3 |- 0, 0) $)
		to ($ (d3.pin 3) + (-0.1, 0) $)
		to (d3.pin 3);
	

	\foreach \d/\Q in {d0/0, d1/1, d2/2, d3/3} {
		\draw (\d.pin 1)
			to ($ (\d.pin 1) + (-0.1, 0) $)
			to[short, -o] ($ (\d.pin 1) + (-0.1, 1) $)
			node[above=2pt] {D\Q};
		\draw (\d.pin 6)
			to ($ (\d.pin 6) + (0.1, 0) $)
			to[short, -o] ($ (\d.pin 6) + (0.1, -4.7) $)
			node[below=2pt] {Q\Q};
	}

	\foreach \d in {d0, d1, d2} {
		\draw (\d.pin 3)
			to ($ (\d.pin 3) + (-0.1, 0) $)
			to[short, -*] ($ (\d.pin 3) + (-0.1, -2.3) $);
		\draw (\d.down)
			to[short, -*] ($ (\d.down |- 0, 0) + (0, -1.5) + (\d.pin 3 -| 0, 0) $);
	}
	

\end{circuitikz}
\end{document}
```

Este [[Circuito secuencial]] nos permite guardar 4 bits de información cada vez que se active el reloj.

A diferencia de los [[Registro de desplazamiento|registros de desplazamiento]], es decir en serie, estos registros nos permiten leer la información en paralelo, es decir que leemos todos los bits al mismo tiempo.

Este tipo de registro permite reducir el costo en tiempo para la comunicación, en intercambio por los cables adicionales que se necesitan.