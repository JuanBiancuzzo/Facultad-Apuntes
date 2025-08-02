---
dia: 2023-04-29
tags:
  - carrera/ingeniería-electrónica/estructura/Registros-y-contadores
  - carrera/ingeniería-en-informática/estructura/Registros-y-contadores
  - nota/facultad
---
# Definición
---
Los [[Contador|contador]] [[Circuito asincrónico|asincrónico]] tiene todas las propiedades de un contador, encadenando $n$ [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] nos permite contar hasta $2^n$ este siendo su [[Módulo de un contador|módulo]]. Como ejemplo veamos un contador de $3$ bits

```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]

	\node[flipflop JK, anchor=pin 2] (jk0) {};
	\node[flipflop JK, anchor=pin 2] (jk1) at ($(jk0.center) + (2, 0)$) {};
	\node[flipflop JK, anchor=pin 2] (jk2) at ($(jk1.center) + (2, 0)$) {};

	\draw ($(jk0.bpin 2) + (-1.25, 0)$) node[left=2pt] {Ck}
		to[short, o-o] ($(jk0.bpin 2) + (-0.05, 0)$);

	\draw ($(jk0.bpin 1) + (-1.25, 1)$) node[left=2pt] {$1$}
		to[short, o-] ($(jk2.pin 1) + (-0.2, 1)$)
		to ($(jk2.pin 1) + (-0.2, 0)$)
		to (jk2.pin 1);
	\draw ($(jk2.pin 1) + (-0.2, 0)$)
		to[short, *-] ($(jk2.pin 3) + (-0.2, 0)$)
		to (jk2.pin 3);

	\draw ($(jk0.pin 1) + (-0.2, 1)$)
		to[short, *-] ($(jk0.pin 1) + (-0.2, 0)$)
		to (jk0.pin 1);
	\draw ($(jk0.pin 1) + (-0.2, 0)$)
		to[short, *-] ($(jk0.pin 3) + (-0.2, 0)$)
		to (jk0.pin 3);
	\draw ($(jk1.pin 1) + (-0.2, 1)$)
		to[short, *-] ($(jk1.pin 1) + (-0.2, 0)$)
		to (jk1.pin 1);
	\draw ($(jk1.pin 1) + (-0.2, 0)$)
		to[short, *-] ($(jk1.pin 3) + (-0.2, 0)$)
		to (jk1.pin 3);

	\draw (jk0.pin 4)
		to ($(jk0.pin 4) + (.2, 0)$)
		to ($(jk1.pin 2) + (-0.68, 0)$)
		to (jk1.pin 2);
	\draw (jk1.pin 4)
		to ($(jk1.pin 4) + (.2, 0)$)
		to ($(jk2.pin 2) + (-0.68, 0)$)
		to (jk2.pin 2);

	\draw (jk0.pin 6)
		to ($(jk0.pin 6) + (0.2, 0)$)
		to[short, -o] ($(jk0.pin 6) + (0.2, 1.3)$)
			node[above=2pt] {A};
	\draw (jk1.pin 6)
		to ($(jk1.pin 6) + (0.2, 0)$)
		to[short, -o] ($(jk1.pin 6) + (0.2, 1.3)$)
			node[above=2pt] {B};
	\draw (jk2.pin 6)
		to ($(jk2.pin 6) + (0.2, 0)$)
		to[short, -o] ($(jk2.pin 6) + (0.2, 1.3)$)
			node[above=2pt] {C};

	\end{circuitikz}
\end{document}
```

Recordemos que podemos usar un [[Flip-Flop JK sincrónico|flip-flop jk sincrónico]] como [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] cuando $J = K$. 

En este caso incluso $J = K = 1$ por lo que cada vez que llega la señal del reloj, entonces el flip-flop va a invertirse, y como están encadenados, únicamente cuando se haga $0$ el flip-flop anterior el siguiente va a invertirse. Esto tiene la desventaja que los [[Contador sincrónico|contadores sincrónicos]] no tienen, que el tiempo en calcular el siguiente número aumenta con la cantidad de flip-flops que se utiliza.

También tengamos en cuenta que no necesariamente el clock tiene que ser pulsos de un reloj, puede ser cualquier evento.
