---
dia: 2022-11-27
tags:
  - analisis-3/Integrales-impropias
  - nota/facultad
---
### Definición
---
Si $\forall x \ge a : 0 \le f(x) \le g(x)$, entonces:

1) Si $\int_a^\infty g(x) \cdot dx$, entonces $\int_a^\infty f(x) \cdot dx$ converge.

2) Si $\int_a^\infty f(x) \cdot dx$ diverge, entonces $\int_a^\infty g(x) \cdot dx$ diverge.

Si suponemos que $\forall x \ge a : f(x) \ge 0$ y $\forall x \ge a : g(x) > 0$ y que además existe (y es finito) el [[Límite]] $\lim_{x \to \infty} \frac{f(x)}{g(x)} = c$. Puesto que $\forall x \ge a : \frac{f(x)}{g(x)} \ge 0$, tenemos que $c \ge 0$. Entonces

1) Si $c > 0$, $\int_a^\infty f(x) \cdot dx$ converge sii $\int_a^\infty g(x) \cdot dx$ converge.

2) Si $c = 0$ y $\int_a^\infty g(x) \cdot dx$ converge entonces $\int_a^\infty f(x) \cdot dx$ converge.