---
dia: 2022-11-26
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series-de-Laurent
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Series-de-Laurent
---
# Definición
---
Sean: $f : D \to \mathbb{C}$ una función [[Holomorfa]] en un abierto $D \subset \mathbb{C}$ y $C$ un circuito simple positivo contenido en $D$ cuyo recinto interior contiene una cantidad finita $z_1, z_2, z_3, \cdots, z_m$ de [[Singularidad aislada|singularidades aisladas]] de $f$. Entonces $$ \oint_C f(z) dz = 2\pi i \cdot \sum_{k = 1}^m Res(f, z_k) $$ donde $Res(f, z_k)$ es el [[Residuo de una función|residuo]] de la función $f$ en $z_k$.