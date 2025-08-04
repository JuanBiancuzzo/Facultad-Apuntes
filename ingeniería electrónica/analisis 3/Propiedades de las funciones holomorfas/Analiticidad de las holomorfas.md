---
dia: 2022-11-25
tags:
  - carrera/ingeniería-electrónica/analisis-3/Propiedades-de-las-funciones-holomorfas
  - carrera/ingeniería-en-informática/analisis-3/Propiedades-de-las-funciones-holomorfas
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Propiedades de las funciones holomorfas/Resumen.md]]"
---
# Definición
---
Sea $f : D \to \mathbb{C}$ [[Holomorfa|holomorfa]] en un abierto $D \subseteq \mathbb{C}$. Entonces, $f$ es [[Función analítica|analítica]] en $D$. Más aún para cada [[Disco abierto|disco abierto]] $D(z_0, r) \subseteq D$ y todo $z \in D(z_0, r)$ se verifica $$ f(z) = \sum_{n = 0}^\infty c_n (z - z_0)^n $$ donde $$ c_n = \frac{f^{(n)}(z_0)}{n!} = \frac{1}{2\pi i} \oint \frac{f(w)}{(w - z_0)^{n + 1}} dw $$ para todo $n \ge 0$, y $C$ es cualquier circuito simple positivo contenido en $D(z_0, r)$ tal que $z_0 \in RI(C)$. Además, el [[Radio de convergencia|radio de convergencia]] de la serie es menor igual al radio del disco abierto