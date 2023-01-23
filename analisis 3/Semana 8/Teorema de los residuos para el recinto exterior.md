---
dia: 2022-11-26
materia: analisis 3
capitulo: 8
---
### Definición
---
Sea $D \subseteq \mathbb{C}$ un abierto que contiene el exterior de un [[Disco cerrado]] con centro en $0$ salvo, eventualmente, una cantidad finita de [[Singularidad|singularidades]] $z_1, z_2, z_3, \cdots, z_m$, es decir: existe $r > 0$ tal que $$ \Set{z_1, z_2, z_3, \cdots, z_m} \subset \Set{z \in \mathbb{C} : |z| > r} \subseteq D \cup \Set{z_1, z_2, z_3, \cdots, z_m} $$
![[Residuo en infinito.png]]

Dada una función [[Holomorfa]] $f : D \to \mathbb{C}$ y una circunferencia $C_R = \Set{R e^{it} : 0 \le t \le 2 \pi}$ de radio $R > r$, podemos hacer un cambio de variables $w = \frac{1}{z}$ en la integral $\oint_{C_R} f(z) dz$ y obtenemos $$ \oint_{C_R} f(z) dz = \oint_{C^{(-)}_{\frac{1}{R}}} f\bigg( \frac{1}{w} \bigg) \cdot \frac{-dw}{w^2} = \oint_{C_{\frac{1}{R}}} f\bigg( \frac{1}{w} \bigg) \cdot \frac{dw}{w^2} $$ donde $C_{\frac{1}{R}} = \Set{\frac{1}{R} e^{it} : 0 \le t \le 2\pi }$ estarecorrida en sentido positivo.

Notemos que $\bar{f}(w) = \frac{1}{w^2} \cdot f(\frac{1}{w})$  en $C_{\frac{1}{R}}$ es una función [[Holomorfa]] en el recinto interior de la circunferencia $C_{\frac{1}{R}}$ excepto en $0$ y en los puntos $w_1 = \frac{1}{z_1}, w_2 = \frac{1}{z_2}, \cdots, w_m = \frac{1}{z_m}$. Por lo tanto $$ \oint_{C_R} f(z) dz = 2\pi i \cdot \bigg( Res(\bar{f}, 0) + \sum_{k = 1}^\infty Res(\bar{f}, w_k) \bigg), ~ donde ~ \bar{f}(z) = \frac{1}{z^2} \cdot f\bigg(\frac{1}{z}\bigg)  $$