---
dia: 2022-12-04
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformada-de-Fourier
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Transformada-de-Fourier
---
# Definición
---
Sea $f : \mathbb{R} \to \mathbb{C}$ [[Seccionalmente continua]] y [[Absolutamente integrable]] en $\mathbb{R}$. Entonces para cada constante $\beta \in \mathbb{R}$ se verifica: $$ \lim_{\lambda \to \infty} \int_{-\infty}^{\infty} f(t) ~sen(\lambda t + \beta) dt = 0 $$
En particular,
1) para $\beta = 0$: $$ \lim_{\lambda \to \infty} \int_{-\infty}^{\infty} f(t) ~sen(\lambda t) dt = 0 $$
2) para $\beta = \frac{2}{\pi}$: $$ \lim_{\lambda \to \infty} \int_{-\infty}^{\infty} f(t) ~cos(\lambda t) dt = 0 $$
y como consecuencia inmediata
$$ \lim_{\omega \to \infty} \int_{-\infty}^{\infty} f(t) ~e^{-i\omega t} dt = 0 ~ \text{ y } ~ \lim_{\omega \to -\infty} \int_{-\infty}^{\infty} f(t) ~e^{-i\omega t} dt = 0 $$

Es decir, que $$ \lim_{\omega \to -\infty} \hat{f}(\omega) = 0 ~ \text{ y } ~ \lim_{\omega \to \infty} \hat{f}(\omega) $$