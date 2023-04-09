---
dia: 2022-09-12
materia: analisis 3
capitulo: 2
---
Sea $f : D \to \mathbb{C}$ una función definida en un [[analisis 3/Semana 1/Conjunto abierto]] $D \subseteq \mathbb{C}$, y sean $u : D \to \mathbb{R}$ y $v : D \to \mathbb{R}$ sus componentes real e imaginaria respectivamente. Entonces, $f$ es [[Derivable]] en un punto $z_0 = x_0 + i \cdot y_0 \in D$ sii se verifican las dos siguientes condiciones
1) $u$ y $v$ son [[Diferenciable]]s en $(x_0, y_0)$
2) $$ \begin{cases} 
	\displaystyle\frac{\partial u}{\partial x} (x_0, y_0) = \frac{\partial v}{\partial y} (x_0, y_0) \\
	-\displaystyle\frac{\partial u}{\partial y} (x_0, y_0) = \frac{\partial v}{\partial x} (x_0, y_0)
\end{cases} $$
En ese caso, $f'(x_0, i \cdot y_0) = \frac{\partial u}{\partial x} (x_0, y_0) + i \cdot \frac{\partial v}{\partial x} (x_0, y_0)$ 