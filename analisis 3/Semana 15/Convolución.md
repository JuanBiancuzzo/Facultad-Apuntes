---
dia: 2022-12-04
materia: analisis 3
---
### Definición
---
Sean $f, ~g \in L^1(\mathbb{R}, \mathbb{C})$ (donde $L^1$ es [[Conjunto de Lebesgue de orden n|conjunto de Lebesgue de orden 1]]) tales que $\overline{f}$ y $\overline{g}$ son acotadas. Entonces, para cada $x \in \mathbb{R}$, la [[Integrales impropias|integral]] $\int_{-\infty}^{+\infty} f(x - t) \cdot g(t) dt$ es [[Absolutamente integrable|absolutamente convergente]]. Queda entonces bien definida la función $f*g : \mathbb{R} \to \mathbb{C}$ tal que para cada $x \in \mathbb{R}$: $$ (f * g)(x) = \int_{-\infty}^{+\infty} f(x - t) \cdot g(t) dt $$
Esta función, que se define como la convolución entre $f$ y $g$, es [[Absolutamente integrable]] y verifica la desigualdad $$ \Vert f * g \Vert_1 \le \Vert f \Vert_1 ~ \Vert g \Vert_1 $$

### Propiedades
---
Sean $f, ~g, ~h \in L^1(\mathbb{R}, \mathbb{C})$ (donde $L^1$ es [[Conjunto de Lebesgue de orden n|conjunto de Lebesgue de orden 1]]), tres funciones acotadas y $c$ una constante compleja. Entonces:

1) $f * (g * h) = (f * g) * h$
2) $g * f = g * f$
3) $f * (g + h) = (f * g) + (f * h)$
4) $(cf) * g = f * (cg) = c(f * g)$
5) $\mathbb{f}(f * g) = \mathbb{f}(f) \cdot \mathbb{f}(g)$, donde $\mathbb{f}$ es la [[Transformación de Fourier]]. Es decir, $\forall \omega \in \mathbb{R} : \hat{f * g}(\omega) = \hat{f}(\omega) \cdot \hat{g}(\omega)$.