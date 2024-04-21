---
dia: 2023-01-22
materia: analisis 2
capitulo: 2
---
### Definición
---
Cuando teníamos una función de una variable real, teníamos su representación geométrica como 

```tikz
\usepackage{pgfplots}

\begin{document} 
	\begin{tikzpicture}
		\begin{axis}[
			xmin=-0.2, xmax=1.4,
			ymin=-0.1, ymax=0.4, 
			samples=50,
			axis lines=middle,
			xticklabels={}, yticklabels={},
			xlabel=$x$, ylabel=$y$,
		]
		  \addplot[orange, ultra thick, domain=0.2:1.2] 
			  { 0.8 * (x - 0.7)^3 + 0.2 }
			  node[pos=0.4, circle, draw, fill, scale=0.3] {}
			  node[pos=0.4, below right=2pt] {$(x, f(x))$};
		\end{axis}
	\end{tikzpicture}
\end{document}
```

Para [[Función|función]] tenemos un análogo, donde esta grafica, con $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$

$$\{(x_1, x_2, \cdots, x_n, y) \in \mathbb{R}^{n+1} : (x_1, x_2, \cdots, x_n) \in U, y = f(x_1, x_2, \cdots, x_n) \}$$

Un ejemplo, donde $f : U \subseteq \mathbb{R}^2 \to \mathbb{R}$, tal que su grafica sea

![[Grafica de una función.webp]]