---
dia: 2023-01-22
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
aliases:
  - Curva de nivel
etapa: ampliar
referencias: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El [[Conjunto|conjunto]] de nivel se puede pensar como [[Grafica de una función|la grafica de una función]] donde en vez de ser para cualquier $y \in B$ donde $B$ es el [[Codominio|codominio]], sino $y$ siendo un valor $k$ constante

$$\{(x_1, x_2, \cdots, x_n, k) \in \mathbb{R}^{n+1} : (x_1, x_2, \cdots, x_n) \in U, k = f(x_1, x_2, \cdots, x_n) \}$$

Tambien visto como

$$ L_k = {X \in \mathbb{R}^n : X \in Dom(f) \land f(X) = k} $$

## Ejemplo
---
Con $f : \mathbb{R}^2 \to \mathbb{R} : f(x, y) = e^{y - x^2}$ los conjuntos de nivel seria

```tikz
\usepackage{pgfplots}

\begin{document} 
	\begin{tikzpicture}
		\begin{axis}[
			xmin=-5, xmax=5,
			ymin=-2.5, ymax=6, 
			width=1.2\textwidth,
			height=0.6\textwidth,
			samples=50,
			axis lines=middle,
			xticklabels={}, 
			ytick={-2, 0.1, 2, 4},
			yticklabels={$-2$, $0$, $2$, \smash{\raisebox{2\height}{$\ln(k)$}}},
			yticklabel style={anchor=south east},
			xlabel=$x$,
			ylabel=$y$,
			domain=-5:5,
		]
		  \addplot[orange, thick] { 0.5 * x^2 - 2 }
			  node[pos=0.525, above=5pt] {$k = e^{-2}$};
		  \addplot[orange, thick] { 0.5 * x^2 }
			  node[pos=0.525, above=5pt] {$k = 1$};
		  \addplot[orange, thick] { 0.5 * x^2 + 2 }
			  node[pos=0.525, above=5pt] {$k = e^{2}$};
		  \addplot[orange, thick] { 0.5 * x^2 + 4 }
			  node[pos=0.525, above=5pt] {$k, ~ k > 0$};
		\end{axis}
	\end{tikzpicture}
\end{document}
```