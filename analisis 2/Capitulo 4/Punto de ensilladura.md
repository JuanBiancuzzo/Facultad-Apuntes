---
dia: 2023-01-22
capitulo: 4
tags:
  - analisis-2/Capitulo-4
  - nota
---
### Definición
---
Considere la [[Función|función]] $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ definida en el conjunto abierto $U$ de $\mathbb{R}^n$ Sea $\vec{x} \in U$. Si cualquier [[Disco abierto|disco abierto]] B con centro en $\vec{x}$  contiene puntos $x \in B$ tales que $f(x) - f(\vec{x})$ es positivo y puntos $y \in B$ tales que $f(y) - f(\vec{x})$ es negativos, se dice que $\vec{x}$ es un punto de ensilladura de la función $f$

Esto se puede pensar como que para una [[Derivada direccional|derivada direccional]] es un [[Punto critico|punto critico]] siendo este el máximo, y para otra dirección un punto critico mínimo

Un ejemplo sería
```tikz
\usepackage{pgfplots}

\begin{document} 
	\begin{tikzpicture}
		\begin{axis}[	
			scale=1.1, transform shape,		
			samples=15,
			xticklabels={}, yticklabels={}, zticklabels={},
			y dir=reverse,
			ymin=0, ymax=1.5,
			xmin=0, xmax=1.5,
			zmin=0,
			axis lines=middle
		]
		\addplot3[surf, domain=0:1, y domain=0:1] 
			{ 0.5 * ((2 * \x - 1)^2 - (2 * \y - 1)^2 + 1) };
		\end{axis}
	\end{tikzpicture}
	\begin{tikzpicture}
		\begin{axis}[
			scale=1.1, transform shape,
			xmin=-1.5, ymin=-1.5,
			xmax=1.5, ymax=1.5, 
			samples=50,
			axis lines=middle,
			xlabel=$x$, ylabel=$y$,
			xtick={-1, 1}, ytick={-1, 1},
			xticklabels={$c > 0$, $c > 0$},
			yticklabels={$c < 0$, $c < 0$},
		]
		\foreach \c in {-0.5, -0.25, 0, 0.25, 0.5} {
			\addplot[orange, ultra thick, domain=0:1] { sqrt(\x^2 + \c) };
			\addplot[orange, ultra thick, domain=0:1] { -sqrt(\x^2 + \c) };
		}
		\foreach \c in {-0.5, -0.25, 0, 0.25, 0.5} {
			\addplot[orange, ultra thick, domain=-1:0] { sqrt(\x^2 + \c) };
			\addplot[orange, ultra thick, domain=-1:0] { -sqrt(\x^2 + \c) };
		}
		\end{axis}
	\end{tikzpicture}
\end{document}
```
