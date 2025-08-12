---
dia: 2022-11-26
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series-de-Laurent
  - carrera/ingeniería-en-informática/analisis-3/Series-de-Laurent
  - nota/facultad
vinculoFacultad:
  - tema: Series de Laurent
    capitulo: 8
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
---
# Definición
---
Sea $z_0$ una [[Singularidad evitable]] de la función $f : D \to \mathbb{C}$, [[Holomorfa]] en el abierto $D \subset \mathbb{C}$. Entonces, las siguientes afirmaciones son equivalentes:

1) Existe una [[Principio de Prolongación analítica|extensión holomorfa]] de $f$ al abierto $D \cup \set{z_0}$, es decir, una función holomorfa $\bar{f} : D \cup \set{z_0} \to \mathbb{C}$ tal que $\bar{f}(z) = f(z)$ para todo $z \in D$.     

2) Existe $r > 0$ tal que el [[Disco abierto reducida]] $D_0(z_0, r) \subset D$ y $f$ es acotada en $D_0(z_0, r)$, es decir que existe $k \in \mathbb{R}$ y $k > 0$ tal que $|f(z)| \le k$ para todo $z \in D_0(z_0, r)$. 

3) $$ \lim_{z \to z_0} (z - z_0) \cdot f(z) = 0 $$