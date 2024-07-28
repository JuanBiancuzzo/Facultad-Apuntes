---
dia: 2024-03-11
tags:
  - señales/Transformada-de-Fourier
  - nota
---
### Definición
---
La anti-transformada de Fourier $\hat{x}(t) = \mathcal{F}^{-1} \Set{X(j\omega)}$ se define como $$ \hat{x}(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega) \exp\left( j \omega t \right) ~ d\omega, ~ t \in \mathbb{R} $$
Siempre y cuando sea [[Seccionalmente continua|seccionalmente continua]] y [[Absolutamente integrable|absolutamente integrable]] en $\mathbb{R}$

Para [[Señal|señales]] que pertenezcan al [[Espacio de Schwartz|espacio de Schwartz]] se puede asegurar completamente que $\hat{x}(t) = x(t)$. Se puede ver de forma poco rigurosa como lo siguiente $$ \begin{align} 
	\hat{x}(t) &= \lim_{M \to \infty} \frac{1}{2\pi} \int_{-M}^{M} \left( \int_{-\infty}^{\infty} x(u) \exp\left( -j \omega u \right) du \right) \exp\left( j \omega t \right) d\omega \\
	&= \lim_{M \to \infty} \int_{-\infty}^{\infty} x(u) \left( \frac{1}{2\pi} \int_{-M}^{M} \exp\left( j \omega (t - u) \right) d\omega \right) du \\
	&= \lim_{M \to \infty} \int_{-\infty}^{\infty} x(u) \frac{\sin\left( M (t - u) \right)}{\pi (t - u)} du
\end{align} $$
Donde podemos reconocer la [[Función sinc#Sinc normalizada|función sinc normalizada]], y usando la [[Función sinc#^58985d|propiedad de convergencia a la delta de Dirac]] para resumirlo en la siguiente $$ \hat{x}(t) = \int_{-\infty}^{\infty} x(u) \delta(t - u) ~ du = x(t) * \delta(t) = x(t) $$