---
dia: 2023-04-29
tags:
  - carrera/ingeniería-electrónica/estructura/Flip-Flops
  - carrera/ingeniería-en-informática/estructura/Flip-Flops
  - nota/facultad
---
# Definición
---
El [[Circuito secuencial]] con ecuación característica $$ Q^{n + 1} = J \cdot \overline{Q^n} + \overline{K} \cdot Q^n $$
y tiene el circuito

```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale = 1.3, transform shape, thick]
		\node[and port](and1) at (4, 5 - 0.3) {};
		\node[and port](and2) at (4, 1 + 0.3) {};

		\node[nor port](nor1) at (7, 5 - 0.6) {};
		\node[nor port](nor2) at (7, 1 + 0.6) {};

		\draw ($(and1.in 2) + (-0.5, 0)$) node[left=2pt] {K}
			to (and1.in 2);
		\draw ($(and2.in 1) + (-0.5, 0)$) node[left=2pt] {J}
			to (and2.in 1);

		\draw (and1.in 1) to ($(and1.in 1) + (-0.25, 0)$)
			to ($(and1.in 1) + (-0.25, 0.5)$)
			to ($(nor1.out) + (0.5, 1)$)
			to ($(nor1.out) + (0.5, 0)$);
		\draw (and2.in 2) to ($(and2.in 2) + (-0.25, 0)$)
			to ($(and2.in 2) + (-0.25, -0.5)$)
			to ($(nor2.out) + (0.5, -1)$)
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

## Tabla de estados
---

| $Q_t$ | $J_t$ | $K_t$ |     | $Q_{t+1}$ |
| ----- | ----- | ----- | --- | --------- |
| 0     | 0     | 0     |     | 0         |
| 0     | 0     | 1     |     | 0         |
| 0     | 1     | 0     |     | 1         |
| 0     | 1     | 1     |     | 0         |
| 1     | 0     | 0     |     | 1         |
| 1     | 0     | 1     |     | 0         |
| 1     | 1     | 0     |     | 1         |
| 1     | 1     | 1     |     | 0         |

Notemos que es como un [[Flip-Flop RS asincrónico]] pero donde los casos prohibidos se reemplazan por el opuesto.