---
dia: 2023-04-29
tags:
  - estructura/Registros-y-contadores
  - nota/facultad
---
# Definición
---
A diferencia de los [[Registro|registros]] normales, es decir en paralelo, estos registros de desplazamiento nos permiten leer la información en serie, es decir que primero leemos un bit, después otro, y así sucesivamente hasta el último bit guardado.

Este tipo de registro permite reducir el costo en cables para la comunicación, en intercambio por el tiempo.

Veamos un ejemplo con [[Flip-Flop D sincrónico|flip-flop d sincrónicos]]

```tikz
\usepackage{circuitikz} 

\tikzset{
  flipflop D mod/.style={
    flipflop,
    flipflop def={ t1=D, t6=Q, c3=1 }
  },
}

\begin{document} 
\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
%%% NODES	
	\node[flipflop D mod] (d0) {FF0};
	\node[flipflop D mod] (d1) at ($ (d0.center) + (3, 0) $) {FF1};
	\node[flipflop D mod] (d2) at ($ (d1.center) + (3, 0) $) {FF2};
	\node[flipflop D mod] (d3) at ($ (d2.center) + (3, 0) $) {FF3};

%%% DRAW
	\foreach \dx/\dy/\Q in {d0/d1/0, d1/d2/1, d2/d3/2} {
		\draw (\dx.pin 6) to (\dy.pin 1);
		\draw ($ (\dx.pin 6)!0.3!(\dy.pin 1) $)
			to[short, *-o] ++ (0, -3.5)
			node[below = 2pt] {Q\Q};
	}

	\draw (d3.pin 6) 
		to ($ (0, 0)!0.3!($ (d3.pin 1) - (d2.pin 6) $) + (d3.pin 6) $)
		to[short, -o] ++ (0, -3.5)
		node[below = 2pt] {Q3};
	\draw (d0.pin 1) 
		to[short, -o] ($ (d0.pin 1) + (-1, 0) $)
		node[left=2pt] {SI};
	\draw ($ (d0.pin 1) + (-1, -2.75) $) node[left=2pt] {Ck}
		to[short, o-] ($ (d3.pin 1) + (-0.1, -2.75) $)
		to ($ (d3.pin 3) + (-0.1, 0) $)
		to (d3.pin 3);
	
	\foreach \d in {d0, d1, d2} {
		\draw (\d.pin 3)
			to ($ (\d.pin 3) + (-0.1, 0) $)
			to[short, -*] ($ (\d.pin 1) + (-0.1, -2.75) $);
	}

\end{circuitikz}
\end{document}
```

Podemos pensarlo como la siguiente tabla

| Salida | Memoria |
| ---- | ---- |
| $t = 0$ | $Q_3$ |
| $t = 1$ | $Q_2$ |
| $t = 2$ | $Q_1$ |
| $t = 3$ | $Q_0$ |
