---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-5
  - nota
---
### Definición
---
```tikz
\usepackage{pgfplots}

\begin{document} 
	\begin{tikzpicture}
		\begin{axis}[
			scale=1.2, transform shape,
			xmin=-1.8, xmax=2.2,
			ymin=-0.2, ymax=2, 
			samples=50,
			axis lines=middle,
			xlabel = $x$, ylabel = $y$,
			xtick={-1.6, -1.25, 0.23, 1.53, 2},
			xticklabels={$a$, $x_1$, $x_2$, $x_3$, $b$},
			yticklabels={},
		]
			\addplot[orange, ultra thick, domain=-1.6:2] 
			  {0.69 * (-0.54*x^4 + 0.36*x^3 + 2*x^2 - 0.93*x + 0.4)}
			  node[pos = 0.8, above left = 2pt] {$y = f(x)$};
			\addplot[gray, thin, dashed] coordinates { (-1.6,  0) (-1.6,  1.36) };
			\addplot[gray, thin, dashed] coordinates { (-1.25, 0) (-1.25, 1.83) };
			\addplot[gray, thin, dashed] coordinates { (0.23,  0) (0.23,  0.2 ) };
			\addplot[gray, thin, dashed] coordinates { (1.53,  0) (1.53,  1.36) };
			\addplot[gray, thin, dashed] coordinates { (2,     0) (2,     0.53) };
		\end{axis}
	\end{tikzpicture}
\end{document}
```

En la figura se representa $y = f(x)$ con $a \le x \le b$, por simple observación es claro que
 * $f(b)$ es el mínimo valor de $f$ en el $[a, b]$
 * $f(x_1)$ es el máximo valor de $f$ en el $[a, b]$

Estos son los [[Máximo y mínimo absoluto|máximos y mínimos absolutos]] de la función en dicho intervalo

Por otra parte $f(x_2)$ y $f(x_3)$ también son mínimos y máximos, si se los considera en un entorno de $x_2$ y $x_3$ respectivamente. En este caso se trata de [[Máximo y mínimo local|máximo y mínimo local]]

#### Teorema
Toda función escalar continua en un [[Conjunto compacto]], produce máximos y mínimos absolutos (en sentido amplio) en dicho conjunto

Este es el único teorema que permite asegurar la existencia en extremos absolutos. Bajo las condiciones del mismo, los extremos absolutos se producirán en un [[Punto interno]] o en un [[Punto frontera]]

#### Análisis de existencia de extremos
![[Analisis de extremos locales para funciones de una variable#Definición]] ![[Analisis de extremos locales para campos escalares]] ![[Analisis de extremos absolutos]]