---
dia: 2022-11-29
tags:
  - ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Serie-de-Fourier
---
# Definición
---
Dada $f \in E_P$ ([[Conjunto de funciones periódicas|conjunto de funciones periódicas]]) y un punto $x_0 \in [0, ~P]$, si existen las [[Derivada lateral|derivadas laterales]] (finitas) $$ f'^-(x_0) = \lim_{t \to 0^+} \frac{f(x_0 - t) - f(x)}{t} ~\text{ y }~ f'^+(x_0) = \lim_{t \to 0^+} \frac{f(x_0 - t) - f(x)}{t} $$ entonces [[Convergencia puntual|converge puntualmente]] $$ \lim_{m \to \infty} f_m(x_0) = \frac{1}{2} \bigg[ f(x_0^-) + f(x_0^+) \bigg] $$ donde $f(x_0^+) = \lim_{t \to 0^+} f(x_0 + t)$ y $f(x_0^-) = \lim_{t \to 0^+} f(x_0 - t)$.