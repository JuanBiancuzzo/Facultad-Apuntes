---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - nota/facultad
vinculoFacultad:
  - tema: Funciones de varias variables
    capitulo: 4
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
  - tema: Propiedades de funciones
    capitulo: 3
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
---
# Definición
---
Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ una [[Función|función]] definida en el conjunto abierto $U$ de $\mathbb{R}^n$. Se dice que $f$ tiene un máximo o un mínimo (extremo) local o relativo en el punto $x_0 \in U$ si $f(x_0) \ge f(x)$ o $f(x_0) \le f(x)$ respectivamente, para toda $x$ en una [[Disco abierto|disco abierto]] B de centro en $x_0$

## Ejemplo
---
Con $f : \mathbb{R}^2 \to \mathbb{R}$ dada por $f(x, y) = x^2 + y^2$, tiene un mínimo local en $x_0 = (0, 0)$ pues en una bola B de centro en $x_0$ se tiene 

$$ f(0, 0) = 0^2 + 0^2 = 0 \le x^2 + y^2 = f(x, y) $$

```tikz
\usepackage{pgfplots}

\begin{document} 
	\begin{tikzpicture}
		\begin{axis}[	
			scale=1.1, transform shape,		
			samples=15,
			xticklabels={}, yticklabels={}, zticklabels={},
			y dir=reverse,
			ymin=-1.5, ymax=1.5,
			xmin=-1.5, xmax=1.5,
			zmin=0, 
			axis lines=middle
		]
		\addplot3[surf, domain=-1:1, y domain=-1:1] 
			{ \x^2 + \y^2 };
		\end{axis}
	\end{tikzpicture}
	\begin{tikzpicture}
		\begin{axis}[
			scale=1.1, transform shape,
			xmin=-2.5, ymin=-2.5,
			xmax=2.5, ymax=2.5, 
			samples=50,
			axis lines=middle,
			xlabel=$x$, ylabel=$y$,
			ytick={-0.5, -1, -1.5, -2},
			xticklabels={},
			yticklabels={$c_4$, $c_3$, $c_2$, $c_1$},
			yticklabel style={anchor={south east}},
		]
		\foreach \c in {0.25, 1, 2.25, 4} {
			\addplot[orange, ultra thick, domain=0:2] { sqrt(\c - \x^2) };
			\addplot[orange, ultra thick, domain=0:2] { -sqrt(\c - \x^2) };
		}
		\foreach \c in {0.25, 1, 2.25, 4} {
			\addplot[orange, ultra thick, domain=-2:0] { sqrt(\c - \x^2) };
			\addplot[orange, ultra thick, domain=-2:0] { -sqrt(\c - \x^2) };
		}
		\end{axis}
	\end{tikzpicture}
\end{document}
```

Donde $0 < c_4 < c_3 < c_2 < c_1$.