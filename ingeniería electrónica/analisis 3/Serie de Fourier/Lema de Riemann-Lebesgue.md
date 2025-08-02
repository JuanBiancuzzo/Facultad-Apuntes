---
dia: 2022-11-29
tags:
  - carrera/ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - carrera/ingeniería-en-informática/analisis-3/Serie-de-Fourier
  - nota/facultad
---
# Definición
---
Para toda $f \in E_P$ ([[Conjunto de funciones periódicas]]) y para todo entero positivo $m$ se verifica $$ \sum_{n = - m}^m \vert c_n(f) \vert^2 \le \frac{1}{P} \Vert f \Vert_2^2 $$
Por lo tanto, puesto que el segundo miembro de esta desigualdad no depende de $m$: $$  \sum_{n = - \infty}^\infty \vert c_n(f) \vert^2 \le \frac{1}{P} \Vert f \Vert_2^2  $$ donde implica que $\lim_{n \to \infty} c_n(f) = \lim_{n \to -\infty} c_n(f)$.