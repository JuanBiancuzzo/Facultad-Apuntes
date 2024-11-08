---
dia: 2022-12-04
tags:
  - ingeniería-electrónica/analisis-3/Transformada-de-Fourier
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Transformada-de-Fourier
---
El teorema de inversión es u teorema de [[Convergencia puntual]], análogo al de [[Condición de Dirichlet para la convergencia puntual|Dirichlet]] para [[Serie de Fourier]]. 

# Definición
---
Sea $f : \mathbb{R} \to \mathbb{C}$ [[Seccionalmente continua]] y [[Absolutamente integrable]] en $\mathbb{R}$. Entonces, para cada $x \in \mathbb{R}$ donde existen y son finitas las derivadas laterales de $f$, se tiene la igualdad $$ \frac{1}{2\pi} vp\int_{-\infty}^{+\infty} \hat{f}(\omega)e^{i\omega x}d\omega = \frac{1}{2} \bigg[ f(x^-) + f(x^+) \bigg] $$

# Observaciones
---
* Si $f(x_0) = \frac{1}{2} \bigg[ f(x_0^-) + f(x_0^+) \bigg]$ entonces $$  \frac{1}{2\pi} vp\int_{-\infty}^{+\infty} \hat{f}(\omega)e^{i\omega x}d\omega = f(x) $$
* La hipítesis del enunciado sobre la existencia de derivadas laterales garantizan la igualdad, perro hay otras como la [[Condición de Dini]]