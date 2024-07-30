---
dia: 2022-11-25
tags:
  - analisis-3/Series-de-Laurent
  - nota/facultad
---
### Definición
---
Sea $f : D \to \mathbb{C}$ una función [[Holomorfa]] en un abierto que contiene una corona circular $D(z_0, r_1, r_2) = \set{z \in \mathbb{C} : r_1 < |z - z_0| < r_2}$. Entonces, para cada $z \in D(z_0, r_1, r_2)$ (los $z$ pertenecientes a la [[Corona]]) se tiene el desarrollo de serie de Laurent $$ \sum_{n = - \infty}^{\infty} c_n \cdot (z - z_0)^n 
 $$ donde los coeficientes están dados por las fórmulas $$ \forall n \in \mathbb{Z} : c_n = \frac{1}{2\pi i} \oint_C \frac{f(w)}{(w - z_0)^{n + 1}} dw $$
 En estas fórmulas, $C$ puede ser cualquier circuito simple positivo contenido en la corona $D(z_0, r_1, r_2)$ y cuyo recinto interno contega al punto $z_0$.