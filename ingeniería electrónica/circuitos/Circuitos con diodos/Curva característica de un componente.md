---
dia: 2024-03-11
tags:
  - ingeniería-electrónica/circuitos/Circuitos-con-diodos
  - nota/facultad
aliases:
  - Recta característica de un componente
---
# Definición
---
Se puede definir el comportamiento de los componentes que no tienen la capacidad de almacenar [[Energía|energía]] mediante una curva [[Tensión|tensión]]-[[Corriente eléctrica|corriente]] 

```tikz
\usepackage{circuitikz} 
\usepackage{pgfplots}
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 3) node[above=2pt] {Componente X} 
			to[R, i^ = $I_{x}$, v=$V_{x}$] (0, 0);
		\path (2, 0) -- (2, 2);
	\end{circuitikz}
	\begin{tikzpicture}
		\begin{axis}[
			xmin=-0.2, ymin=-0.2,
			xmax=2.2, ymax=1.7, 
			samples=50,
			axis lines=middle,
			ticks=none,
			xlabel=$V_x$,
			ylabel=$I_x$,
		]
		  \addplot[orange, ultra thick, domain=0:1] 
			  coordinates { 
				  (0, 0) (0.5, 0.1) (0.53, 0.13) (0.56, 0.18)
				  (0.6, 0.3) (0.7, 0.6) (0.75, 0.8) (0.8, 0.9)
				  (0.83, 0.93) (0.86, 0.96) (1.4, 1.05)
				  (1.43, 1.07) (1.48, 1.10) (1.52, 1.14)
				  (1.56, 1.2) (1.7, 1.4)
			  };
		\end{axis}
	\end{tikzpicture}
\end{document}
```

Esta curva se denomina curva característica del componente, y representa todos los puntos tensión corriente posibles para el componente