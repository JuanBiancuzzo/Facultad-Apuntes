---
dia: 2022-09-06
materia: analisis 3
capitulo: 1
---
Sea $f:D \to \mathbb{C}$ y $g:D \to \mathbb{C}$ dos funciones definidas en un mismo conjunto $D \subseteq \mathbb{C}$ tales que $\lim_{z \to z_0} f(z) = a$ y $\lim_{z \to z_0} g(z) = b$, donde $z_0 \in \mathbb{C}$ es un [[Punto de acumulacion]] de $D$. Entonces:

1) $f + g \xrightarrow{z \to z_0} a + b$ 
2) $f \cdot g \xrightarrow{z \to z_0} a \cdot b$
3) Si $g(z) \neq 0$ para todo $z \in D$ y ademas $b \neq 0$, entonces $\frac{f}{g} \xrightarrow{z \to z_0} \frac{a}{b}$ 
4) (Limites por componentes) Sea $f:D \to \mathbb{C}$ una función definida en un conjuto $D \subseteq \mathbb{C}$ y sea $z_0 = x_0 + i \cdot y_0 \in \mathbb{B}$ un [[Punto de acumulacion]] de $D$. Sea $u : D \to \mathbb{R}$ y $v : D \to \mathbb{R}$ las partes real e imaginaria de $f$, respectivamente. Finalmente, sea $l = a + i \cdot b \in \mathbb{c}$. Entonces 

		$$ \lim_{x + i \cdot y \to x_0 + i \cdot y_0} f(x + i \cdot y) = a + i \cdot b \Leftrightarrow 
	\begin{cases}
		\displaystyle\lim_{x + i \cdot y \to x_0 + i \cdot y_0} u(x, y) = a \\
		\text{} \\
		\displaystyle\lim_{x + i \cdot y \to x_0 + i \cdot y_0} v(x, y) = b \\
	\end{cases}
	$$
