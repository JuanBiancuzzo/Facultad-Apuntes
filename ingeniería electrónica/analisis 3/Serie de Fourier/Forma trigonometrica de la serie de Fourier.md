---
dia: 2022-11-29
tags:
  - ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - nota/facultad
---
# Definición
---
La [[Serie de Fourier]] se puede expresar de forma trigonométrica de la siguiente forma $$ f_m(x) = \sum_{n = -m}^m c_n(f) \cdot e^{\frac{2n\pi}{P} ix} = c_0(f) + \sum_{n = 1}^m \Bigg[ a_n(f) \cdot cos\bigg( \frac{2n\pi}{P}x \bigg) + b_n(f) \cdot sen\bigg( \frac{2n\pi}{P}x \bigg) \Bigg] $$ donde $$ \begin{align} 
	a_n(f) &= c_{-n}(f) + c_n(f) = \frac{2}{P} \int_0^P f(t) \cdot cos\bigg( \frac{2n\pi}{P}x \bigg) \cdot dt \\
	b_n(f) &= i \cdot [-c_{-n}(f) + c_n(f)] = \frac{2}{P} \int_0^P f(t) \cdot sen\bigg( \frac{2n\pi}{P}x \bigg) \cdot dt 
\end{align} $$

## Notación
$$ f(x) \sim \frac{1}{2}a_0(f) + \sum_{n = 1}^m \Bigg[ a_n(f) \cdot cos\bigg( \frac{2n\pi}{P}x \bigg) + b_n(f) \cdot sen\bigg( \frac{2n\pi}{P}x \bigg) \Bigg]  $$