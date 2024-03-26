---
dia: 2023-01-23
materia: intro
capitulo: 1
---
### Definición
---
Es el elemento que introduce una [[Resistencia]] en un circuito eléctrico

##### Simbología
```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 0) to[R, *-*] ++ (1.7, 0);
		\draw (0, 1) to[R, european, *-*] ++ (1.7, 0);
	\end{circuitikz}
\end{document}
```

##### Código de colores
![[Código de colores de una resistencia.webp]]