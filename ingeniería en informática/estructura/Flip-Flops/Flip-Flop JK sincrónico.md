---
dia: 2023-04-29
tags:
  - ingeniería-en-informática/estructura/Flip-Flops
  - nota/facultad
---
# Definición
---
A diferencia de su versión [[Flip-Flop JK asincrónico|asincrónica]] este nos permite tener un reloj o clock para activar su comportamiento. Con ecuación característica $$ Q^{n + 1} = \left( J \cdot \overline{Q^n} + \overline{K} \cdot Q^n \right) \cdot C_k + Q^n \cdot \overline{C_k} $$
En este caso tenemos dos circuitos que lo representan:
```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale = 1.3, transform shape, thick]
		\node[and port, number inputs=3](and1) at (4, 5 - 0.3) {};
		\node[and port, number inputs=3](and2) at (4, 1 + 0.3) {};

		\node[nor port](nor1) at (7, 5 - 0.6) {};
		\node[nor port](nor2) at (7, 1 + 0.6) {};

		\draw ($(and1.in 2) + (-0.5, 0)$) node[left=2pt] {K}
			to[short, o-] (and1.in 2);
		\draw ($(and2.in 2) + (-0.5, 0)$) node[left=2pt] {J}
			to[short, o-] (and2.in 2);
		\draw (2, 3) node[left=2pt] {Ck} 
			to[short, o-] (2.4, 3)
			to ($(and1.in 3) + (-0.2, 0)$)
			to (and1.in 3);
		\draw (2.4, 3) to[short, *-] ($(and2.in 1) + (-0.2, 0)$)
			to (and2.in 1);

		\draw (and1.in 1) to ($(and1.in 1) + (-0.25, 0)$)
			to ($(and1.in 1) + (-0.25, 0.5)$)
			to ($(nor1.out) + (0.5, 1.2)$)
			to ($(nor1.out) + (0.5, 0)$);
		\draw (and2.in 3) to ($(and2.in 3) + (-0.25, 0)$)
			to ($(and2.in 3) + (-0.25, -0.5)$)
			to ($(nor2.out) + (0.5, -1.2)$)
			to ($(nor2.out) + (0.5, 0)$);

		\draw (and1.out) to (nor1.in 1);
		\draw (nor1.out) to[short, -o] ($(nor1.out) + (1, 0)$)
			node[right=2pt] {$Q$};

		\draw (and2.out) to (nor2.in 2);
		\draw (nor2.out) to[short, -o] ($(nor2.out) + (1, 0)$)
			node[right=2pt] {$\overline{Q}$};

		\draw (nor1.in 2) to ++ (-0.5, 0)
			to ++ (0, -0.75)
			to ($(nor2.out) + (0.5, 0.5)$)
			to[short, -*] ($(nor2.out) + (0.5, 0)$);
		\draw (nor2.in 1) to ++ (-0.5, 0)
			to ++ (0, 0.75)
			to ($(nor1.out) + (0.5, -0.5)$)
			to[short, -*] ($(nor1.out) + (0.5, 0)$);
	\end{circuitikz}
\end{document}
```

Donde este se lo puede ver representado por el mismo circuito que el asincrónico, pero con la integración de un reloj.

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\node[flipflop SR] (sr1) {};
		\node[flipflop SR] (sr2) at ($(sr1.center) + (3, 0)$) {};
		
		\node[and port] (and1) at ($(sr1.pin 1) + (-1, 0)$) {};
		\node[and port] (and2) at ($(sr1.pin 3) + (-1, 0)$){};

		\node[not port] (not) at ($(and2.center) + (2, -2)$) {};

		\draw ($(and1.in 2) + (-0.5, 0)$) node[left=2pt] {J}
			to[short, o-] (and1.in 2);
		\draw (and1.out) to (sr1.pin 1);
		\draw (sr1.pin 6) to (sr2.pin 1);
		\draw (sr2.pin 6) to[short, -o] ($(sr2.pin 6) + (0.75, 0)$)
			node[right=2pt] {$Q$};

		\draw (and1.in 1)
			to ($(and1.in 1) + (-0.5, 0)$) 
			to ($(and1.in 1) + (-0.5, 0.5)$) 
			to ($(sr2.pin 4) + (0.4, 2.5)$) 
			to[short, -*] ($(sr2.pin 4) + (0.4, 0)$);
		\draw (and2.in 2)
			to ($(and2.in 2) + (-0.5, 0)$) 
			to ($(and2.in 2) + (-0.5, -0.5)$) 
			to ($(sr2.pin 6) + (0.1, -2.5)$) 
			to[short, -*] ($(sr2.pin 6) + (0.1, 0)$);
		
		\draw ($(and2.in 1) + (-0.5, 0)$) node[left=2pt] {K}
			to[short, o-] (and2.in 1);
		\draw (and2.out) to (sr1.pin 3);
		\draw (sr1.pin 4) to (sr2.pin 3);
		\draw (sr2.pin 4) to[short, -o] ($(sr2.pin 4) + (0.75, 0)$)
			node[right=2pt] {$\overline{Q}$};

		\draw (not.in) to[short, -o] ($(not.in) + (-3.1, 0)$)
			node[left=2pt] {Ck};
		\draw (not.in) to[short, -*] ($(not.in) + (-0.8, 0)$)
			to ($(sr1.pin 2) + (-0.5, 0)$)
			to (sr1.bpin 2);
		\draw (not.out) to ($(not.in) + (2.2, 0)$)
			to ($(sr2.pin 2) + (-0.5, 0)$)
			to (sr2.bpin 2);
			
	\end{circuitikz}
\end{document}
```

Donde podemos crearlo a partir de dos [[Flip-Flop RS sincrónico|Flip-Flop RS sincrónicos]]. Este tipo se lo conoce como maestro-esclavo, por la utilización de dos [[Circuito secuencial|circuitos secuenciales]] controlados a destiempo uno del otro.