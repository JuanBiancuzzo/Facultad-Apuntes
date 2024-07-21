---
dia: 2022-09-20
capitulo: 3
tags:
  - analisis-3/Series
---
### Definición
---
Sea $\mathbb{D} \subseteq \mathbb{C}$ el conjunto de $z \in \mathbb{C}$ para los cuales la [[Serie de potencias|serie de potencias]] converge, es decir
$$ \mathbb{D} = \{ z \in \mathbb{C} : \exists \lim_{n \to \infty} f_n(z) \} $$
donde $\mathbb{D}$ es lo que se denomina el dominio de convergencia.

Por lo que queda bien definida la función $f : \mathbb{D} \to \mathbb{C}$ tal que $\forall z \in \mathbb{D}$:
$$ f(z) = \lim_{n \to \infty} f_n(z) = \lim_{n \to \infty} \sum_{k = 0}^n c_k \cdot (z - z_0)^k = \sum_{k = 0}^\infty c_k \cdot (z - z_0)^k $$

### Teorema
---
El dominio de convergencia $D_S$ de una serie de potencias $S = \displaystyle\sum_{n = 0}^{\infty} c_n [\cdot]^n$ con [[Radio de convergencia|radio de convergencia]] $R$ verifica una de las tres condiciones:
1) $D_S = \set{0}$ si $R = 0$
2) $D(0, R) \subseteq D_S \subseteq \overline{D(0, R)}$ si $0 < R < \infty$
3) $D_S = \mathbb{C}$ si $R = \infty$

En el caso (2), la serie $S$ [[Convergencia absoluta|converge absolutamente]] para todo $z \in D(0, R)$.