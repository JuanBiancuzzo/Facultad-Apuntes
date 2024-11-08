---
dia: 2022-11-26
tags:
  - ingeniería-electrónica/analisis-3/Series-de-Laurent
  - nota/facultad
---
# Definición
---
Sea $D \subseteq \mathbb{C}$ un abierto que contiene el exterior de un [[Disco cerrado]] con centro en $0$ salvo, eventualmente, una cantidad finita de [[Singularidad|singularidades]] $z_1, z_2, z_3, \cdots, z_m$, es decir: existe $r > 0$ tal que $$ \Set{z_1, z_2, z_3, \cdots, z_m} \subset \Set{z \in \mathbb{C} : |z| > r} \subseteq D \cup \Set{z_1, z_2, z_3, \cdots, z_m} $$

```tikz
\begin{document}
	\begin{tikzpicture}
		\draw[->, very thick] (0, -4) -- (0, 4);
		\draw[->, very thick] (-7, 0) -- (7, 0); 

		\fill[rounded corners=15pt, opacity=0.5] (6, 0) -- (5, 1.7) -- (4, 2.2) 
			-- (3.3, 3.2) -- (-1, 2.9) -- (-4, 2.6) -- (-6, 1.5) -- (-6.3, 0) 
			-- (-5, -1.5) -- (-4.5, -3) -- (-1, -2.8) -- (1.5, -3.2) -- (3, -2.2)
			-- (6.2, -1.6) -- (6, 0) -- (1, 0) -- (.7, -1.3) -- (0, -1) -- (-.8, -.8)
			-- (-1, 0) -- (0, 1) -- (1, -0.5) -- (6, -0.3);

		\draw[dashed, ultra thick] (0, 0) circle (2.5);
		\draw[dashed, very thick] (0, 0) -- (0.7 * 2.5, 0.7 * 2.5)
			node[pos=0.7, above=2pt, left=2pt, scale=1.75] {$r$};

		\draw (-4.5, 0.5) node[scale=1.75] {$D$};
		\draw (-2.75, 2) node[scale=1.75] {$z_1$};
		\draw (3.5, 1.5) node[scale=1.75] {$z_2$};
		\draw (3, -1.5) node[scale=1.75] {$z_3$};
		\draw (-3, -2) node[scale=1.75] {$\cdots z_m$};

	\end{tikzpicture}
\end{document}
```
Dada una función [[Holomorfa]] $f : D \to \mathbb{C}$ y una circunferencia $C_R = \Set{R e^{it} : 0 \le t \le 2 \pi}$ de radio $R > r$, podemos hacer un cambio de variables $w = \frac{1}{z}$ en la integral $\oint_{C_R} f(z) dz$ y obtenemos $$ \oint_{C_R} f(z) dz = \oint_{C^{(-)}_{\frac{1}{R}}} f\bigg( \frac{1}{w} \bigg) \cdot \frac{-dw}{w^2} = \oint_{C_{\frac{1}{R}}} f\bigg( \frac{1}{w} \bigg) \cdot \frac{dw}{w^2} $$ donde $C_{\frac{1}{R}} = \Set{\frac{1}{R} e^{it} : 0 \le t \le 2\pi }$ esta recorrida en sentido positivo.

Notemos que $\bar{f}(w) = \frac{1}{w^2} \cdot f(\frac{1}{w})$  en $C_{\frac{1}{R}}$ es una función [[Holomorfa]] en el recinto interior de la circunferencia $C_{\frac{1}{R}}$ excepto en $0$ y en los puntos $w_1 = \frac{1}{z_1}, w_2 = \frac{1}{z_2}, \cdots, w_m = \frac{1}{z_m}$. Por lo tanto $$ \oint_{C_R} f(z) dz = 2\pi i \cdot \bigg( Res(\bar{f}, 0) + \sum_{k = 1}^\infty Res(\bar{f}, w_k) \bigg), ~ donde ~ \bar{f}(z) = \frac{1}{z^2} \cdot f\bigg(\frac{1}{z}\bigg)  $$