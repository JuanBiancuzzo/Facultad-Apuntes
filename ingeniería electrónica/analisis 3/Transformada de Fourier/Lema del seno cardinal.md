---
dia: 2022-12-04
tags:
  - ingeniería-electrónica/analisis-3/Transformada-de-Fourier
  - nota/facultad
---
# Definición
---
Sea $f : \mathbb{R} \to \mathbb{C}$ [[Seccionalmente continua]] y [[Absolutamente integrable]] en $\mathbb{R}$. Entonces para cada $x \in \mathbb{R}$ donde existen y son finitas las derivadas laterales de $f$, se tiene: $$ \lim_{\lambda \to \infty} \int_{-\infty}^{\infty} \frac{sen(\lambda(x - t))}{\pi(x - t)} f(t) dt = \frac{1}{2} \bigg[ f(x^-) + f(x^+) \bigg] $$