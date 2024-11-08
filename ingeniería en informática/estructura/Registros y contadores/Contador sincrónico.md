---
dia: 2023-04-29
tags:
  - ingeniería-en-informática/estructura/Registros-y-contadores
  - nota/facultad
  - ingeniería-electrónica/estructura/Registros-y-contadores
---
# Definición
---
Los [[Contador|contador]] [[Circuito sincrónico|sincrónico]] tiene todas las propiedades de un contador, encadenando $n$ [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] nos permite contar hasta $2^n$ este siendo su [[Módulo de un contador|módulo]]. Como ejemplo veamos un contador de $4$ bits

```tikz
\usepackage{circuitikz} 

\tikzset{
  flipflop JK mod/.style n args={1}{
    flipflop,
    flipflop def={ t1=J, t3=K, t6=#1, c2=1, n2=1 }
  },
}

\begin{document} 
\begin{circuitikz}[american, voltage shift=0.5, scale=1, transform shape, thick]

%% NODES 
	\node[flipflop JK mod=A] (jka) {};
	\node[flipflop JK mod=B] (jkb) at ($(jka.center) + (2.8, 0)$) {};
	\node[flipflop JK mod=C] (jkc) at ($(jkb.center) + (5, 0)$) {};
	\node[flipflop JK mod=D] (jkd) at ($(jkc.center) + (5, 0)$) {};

	\node[and port] (andab) at ($(jkb.center)!0.5!(jkc.center) + (0.5, 3.5)$) {};
	\path ($(andab.out) + (0.2, 0)$) node[above=2pt] {AB};
	
	\node[and port, number inputs=3] (andabc) at ($(jkc.center)!0.5!(jkd.center) + (0.5, 3.5)$) {};
	\path ($(andabc.out) + (0.2, 0)$) node[above=2pt] {ABC};
%% DRAW
	\draw ($(jka.pin 3) + (-1, -1)$) node[left=2pt] {Ck}
		to[short, o-] ($(jkd.pin 3) + (-0.4, -1)$)
		to ($(jkd.pin 2) + (-0.4, 0)$)
		to (jkd.pin 2);

	\foreach \jk in {jka, jkb, jkc} {	
		\draw ($(\jk.pin 3) + (-0.4, -1)$)
			to[short, *-] ($(\jk.pin 2) + (-0.4, 0)$)
			to (\jk.pin 2);
	}

	\foreach \jk in {jkb, jkc, jkd} {	
		\draw (\jk.pin 3) 
			to ($(\jk.pin 3) + (-0.15, 0)$)
			to ($(\jk.pin 1) + (-0.15, 0)$)
			to[short, *-] (\jk.pin 1);
	}

	\foreach \npin in {1, 3} {
		\draw ($(jka.pin \npin) + (-1, 0)$) node[left=2pt] {$1$}
			to[short, o-] (jka.pin \npin);
	}

	\draw (jka.pin 6) 
		to ($(jkb.pin 1) + (-0.15, 0)$)
		to ($(jkb.pin 1 |- 0, 0) + (-0.15, 0) + (andab.in 1 -| 0, 0) $)
		to (andab.in 1);
	\draw (jkb.pin 6)
		to ($(jkb.pin 6) + (0.15, 0)$)
		to ($(jkb.pin 6 |- 0, 0) + (0.15, 0) + (andab.in 2 -| 0, 0) $)
		to (andab.in 2);
	\draw (jkc.pin 6)
		to ($(jkc.pin 6) + (0.15, 0)$)
		to ($(jkc.pin 6 |- 0, 0) + (0.15, 0) + (andabc.in 3 -| 0, 0) $)
		to (andabc.in 3);
	\draw (andab.out) 
		to ($(jkc.pin 1 |- 0, 0) + (-0.15, 0) + (andab.out -| 0, 0) $)
		to ($(jkc.pin 1 |- 0, 0) + (-0.15, 0)$);
	\draw (andabc.out) 
		to ($(jkd.pin 1 |- 0, 0) + (-0.15, 0) + (andabc.out -| 0, 0) $)
		to ($(jkd.pin 1 |- 0, 0) + (-0.15, 0)$);
	\draw ($(jkb.pin 1 |- 0, 0) + (-0.15, 0) + (andab.in 1 -| 0, 0) $)
		to[short, *-] ++ (0, 0.7)
		to ($(jkc.center |- 0, 0) + (0, 0.7) + (andab.in 1 -| 0, 0) $)
		to ($(jkc.center |- 0, 0) + (andabc.in 1 -| 0, 0) $)
		to (andabc.in 1);
	\draw ($(jkb.pin 6 |- 0, 0) + (0.15, 2.5) $)
		to[short, *-] ($(jkc.center |- 0, 0) + (0, 2.5) $)
		to ($(jkc.center |- 0, 0) + (andabc.in 2 -| 0, 0) $)
		to (andabc.in 2);
		
\end{circuitikz}
\end{document}
```

Recordemos que podemos usar un [[Flip-Flop JK sincrónico|flip-flop jk sincrónico]] como [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] cuando $J = K$. 

Vemos que es un poco más complejo que el [[Contador asincrónico]], pero tiene la ventaja que el tiempo en contar siempre es el mismo independientemente de cuantos flip-flop se estén usando.