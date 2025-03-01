---
dia: 2022-11-27
tags:
  - carrera/ingeniería-electrónica/analisis-3/Integrales-impropias
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Integrales-impropias
---
# Definición Abel
---
Sean $u : [a, \infty) \to \mathbb{R}$ y $\alpha : [a, \infty) \to \mathbb{R}$ [[Función continua|funciones continuas]] tales que 
1) $\alpha$ es monotona y acotada
2) $\int_a^\infty u(x) \cdot dx$ convergente

Entonces la integral $\int_a^\infty \alpha(x) \cdot u(x) \cdot dx$ converge.


# Definición Dirichlet
---
Sean $u : [a, \infty) \to \mathbb{R}$ y $\alpha : [a, \infty) \to \mathbb{R}$ [[Función continua|funciones continuas]] tales que 
1) $\alpha$ es monotona decreciente
2) $\lim_{x \to \infty} \alpha(x) = 0$
3) Existe una constante positiva $k$ tal que para todo $\lambda \ge a : \bigg\vert \int_a^\lambda u(x) \cdot dx \bigg\vert \le k$.

Entonces la integral $\int_a^\infty \alpha(x) \cdot u(x) \cdot dx$ converge.