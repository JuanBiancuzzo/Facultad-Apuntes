---
dia: 2023-04-28
tags:
  - carrera/ingeniería-electrónica/estructura/Flip-Flops
  - carrera/ingeniería-en-informática/estructura/Flip-Flops
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/estructura/Flip-Flops/Resumen.md]]"
---
# Definición
---
El [[Circuito secuencial|circuito]] con ecuación característica $$ Q^{n + 1} = S + \overline{R} \cdot Q^n $$
y tiene el circuito

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick] 	

	\node[nor port](nor1) at (4, 2.7) {};
	\node[nor port](nor2) at (4, 0.3) {};	

	\draw ($(nor1.in 1) + (-1, 0)$) node[left=2pt] {S}
		to (nor1.in 1);
	\draw ($(nor2.in 2) + (-1, 0)$) node[left=2pt] {R}
		to (nor2.in 2);
	\draw (nor1.out) to[short, -o] ++ (1, 0) node[right=2pt] {$Q$};
	\draw (nor2.out) to[short, -o] ++ (1, 0) node[right=2pt] {$\overline{Q}$};

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

| $Q_t$ | $S_t$ | $R_t$ |     | $Q_{t+1}$ |
| ----- | ----- | ----- | --- | --------- |
| 0     | 0     | 0     |     | 0         |
| 0     | 0     | 1     |     | 0         |
| 0     | 1     | 0     |     | 1         |
| 0     | 1     | 1     |     | Prohibido |
| 1     | 0     | 0     |     | 1         |
| 1     | 0     | 1     |     | 0         |
| 1     | 1     | 0     |     | 1         |
| 1     | 1     | 1     |     | Prohibido |

Los caso que esta prohibido es en el cual su comportamiento que oscila a la velocidad de respuesta de los componentes.