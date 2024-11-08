---
dia: 2022-11-26
tags:
  - ingeniería-electrónica/analisis-3/Series-de-Laurent
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Series-de-Laurent
---
# Definición
---
Sea $z_0$ una singularidad aislada de la función $f : D \to \mathbb{C}$, [[Holomorfa]] en el abierto $D \subset \mathbb{C}$. Entonces: 

1) $z_0$ es una [[Singularidad evitable]] de $f$ si y solamente si existe (y es finito) el limite $\lim_{z \to z_0} f(z)$. En este caso la función $\bar{f} : D \cup \set{z_0} \to \mathbb{C}$ tal que $\bar{f}(z) = f(z)$ para todo $z \in D$ y $\bar{f}(z) = \lim_{z \to z_0} f(z)$ es holomorfa en $D \cup \set{z_0}$.

2) $z_0$ es una [[Singularidad polo de orden k]], con $k = 1$ (también se llama polo simple) de $f$ si y solamente si existe (y es finito y no nulo) $\lim_{z \to z_0} (z - z_0) \cdot f(z)$. En este caso se puede calcular el [[Residuo de una función]] como: $$ Res(f, z_0) = \lim_{z \to z_0} (z - z_0) \cdot f(z) $$ 

3) $z_0$ es una [[Singularidad polo de orden k]], con $k \ge 2$ de $f$ si y solamente si existe (y es finito y no nulo) $\lim_{z \to z_0} (z - z_0)^k \cdot f(z)$. En este caso se puede calcular el [[Residuo de una función]] como: $$ Res(f, z_0) = \frac{1}{(k - 1)!} \cdot \lim_{z \to z_0} \frac{d^{k - 1}}{dz^{k - 1}} \bigg( (z - z_0)^k \cdot f(z) \bigg) $$
4) $z_0$ es una [[Singularidad esencial]] de $f$ si y solamente si no existe (o son infinitos) los limites $\lim_{z \to z_0} (z - z_0)^k \cdot f(z)$ para ningun $k \ge 0$.