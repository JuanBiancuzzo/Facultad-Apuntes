---
dia: 2022-11-25
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series-de-Laurent
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Series-de-Laurent
---
# Definición
---
Sea $f : D \to \mathbb{C}$ [[Holomorfa]] en un abierto $D \subset \mathbb{C}$, y sea $z_0$ una [[Singularidad aislada]], por el [[Teorema de Laurent]] admite un desarrollo en [[Serie de Laurent]]: $$ f(z) = \sum_{n = -\infty}^{\infty} c_n \cdot (z - z_0)^n $$ donde se denomina reciduo de $f$ en $z_0$ al coeficiente $c_{-1}$ y se indica como $Res(f, z_0)$. Por definición, se calcula como: $$ Res(f, z_0) := c_{-1} = \frac{1}{2\pi i} \oint f(w) dw $$