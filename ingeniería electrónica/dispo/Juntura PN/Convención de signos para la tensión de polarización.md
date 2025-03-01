---
dia: 2023-09-06
tags:
  - carrera/ingeniería-electrónica/dispo/Juntura-PN
  - nota/facultad
aliases:
  - Juntura en directa#Polarización directa
  - Juntura en inversa#Polarización inversa
---
# Definición
---
Usaremos la convención para la polarización de la [[Juntura PN|juntura PN]] 

```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.5, transform shape, thick]
		\draw (3, 0) rectangle +(1, 1)
			node[pos=0.5, scale=1.5] {p};
		\filldraw (2.9, 0.15) rectangle +(0.1, 0.7)
			node(p)[pos=0.5] {};
	
		\draw (4, 0) rectangle +(1, 1)
			node[pos=0.5, scale=1.5] {n};
		\filldraw (5, 0.15) rectangle +(0.1, 0.7)
			node(n)[pos=0.5] {};

		\draw (p.center) to ++(-1, 0)
			to ++(0, -2)
			to[vsource, V_=$V$] ($ (n.center) + (1, -2) $)
			to ++(0, 2)
			to (n.center);
	\end{circuitikz}
\end{document}
```

### Polarización directa
---
Diremos que estamos en directa cuando la [[Tensión|tensión]] $V > 0$

### Polarización inversa
---
Diremos que estamos en inversa cuando la [[Tensión|tensión]] $V < 0$
