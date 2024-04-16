---
dia: 2022-11-29
materia: analisis 3
capitulo: 12
---
### Definición
---
Sea $E_P^m$ un [[Subespacio|subespacio]] de $E_P$ ([[Conjunto de funciones periódicas|conjunto de funciones periódicas]]), con $m \in \mathbb{N}$ donde: $$ E_P^m = gen\Set{e_{-m}, ~e_{-m + 1}, ~\cdots,~ e_{-2}, ~e_{-1}, ~e_{0}, ~e_{1}, ~e_{2}, ~\cdots, ~e_{m - 1}, ~e_{m}} $$
Observe que $dim~E_P^m = 2m + 1$ y que se tiene la cadena infinita $E_p^1 \subset E_p^2 \subset E_p^3 \subset \cdots$ de inclusiones estrictas.

Para cada $f \in E_p$, sea $f_m = \Pi_m(f)$ la proyección ortogonal de $f$ sobre $E_p^m$, es decir: $$ f_m = \sum_{n = - m}^m c_n(f) \cdot e_n $$ donde los coeficientes $$ c_n(f) = \frac{ \langle e_n, f \rangle}{\Vert e_n \Vert_2^2} = \frac{1}{P} \int_0^P \overline{e_n(\theta)} \cdot f(\theta) \cdot d\theta = \frac{1}{P} \int_0^P f(\theta) \cdot e^{-\frac{2n\pi}{P}i\theta} \cdot d\theta $$ donde $\langle e_n, f \rangle$ es el [[Producto interno entre funciones periodicas|producto interno]], y notemos que $\Vert e_n \Vert_2 = \sqrt{P}$.

Con los coeficientes $c_n(f)$ se denominan coeficientes de Fourier de $f$.

#### Proposición
---
Sean $f \in E_P$, $m$ un entero positivo, $f_m$ su [[Proyección ortogonal|proyección ortogonal]] sobre $E_P^m$ y $k$ un entero tal que $-m \le k \le m$. Entonces:

1) $\langle f - f_m, e_k \rangle = 0$
2) Para todo $g \in E_P^m$: $\Vert f - g \Vert_2^2 = \Vert f - f_m \Vert_2^2 + \Vert f_m - g \Vert_2^2$
3) Para todo $g \in E_P^m$: $Vert f - f_m \Vert_2^2 \le \Vert f - g \Vert_2^2$ y vale la igualdad sii $g = f_m$ (en casi todo punto)
4) $\Vert f_m \Vert_2^2 \le \Vert f \Vert_2^2$ y vale igualdad sii $f = f_m$ (en casi todo punto)