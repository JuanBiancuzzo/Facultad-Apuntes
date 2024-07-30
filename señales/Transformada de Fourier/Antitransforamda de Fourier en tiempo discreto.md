---
dia: 2024-04-15
tags:
  - señales/Transformada-de-Fourier
  - nota/facultad
---
### Definición
---
La [[Antitransforamda de Fourier|antitransformada de Fourier]] para [[Señal#^02aea6|señales de tiempo discreto]]. $\hat{x}(n) = \mathcal{F}^{-1}\Set{X\left(e^{j\Omega}\right)}$ se define como $$ \hat{x}(n) = \frac{1}{2\pi} \int_{-\pi}^{\pi} X\left(e^{j\Omega}\right) \exp\left( j\Omega n \right) ~ d\Omega, n \in \mathbb{Z} $$ siempre que la integral esté bien definida.

Notar que por ser $X\left(e^{j\Omega}\right)$ [[Función periódica|periódica]] la integral se puede hacer sobre cualquier intervalo $B \in \mathbb{R}$ de largo $2\pi$

Podemos escribir, usando la [[Transformada de Fourier en tiempo discreto|transformada de Fourier]], tenemos $$ \begin{align} 
	\hat{x}(n) &= \frac{1}{2\pi} \int_{-\pi}^{\pi} X\left(e^{j\Omega}\right) \exp\left( j\Omega n \right) ~ d\Omega \\
	&= \frac{1}{2\pi} \int_{-\pi}^{\pi} \left( \sum_{n = -\infty}^{\infty} x(k) ~ \exp(-j\Omega k) \right) \exp\left( j\Omega n \right) ~ d\Omega \\
	&= \sum_{n = -\infty}^{\infty} x(n) ~ \frac{1}{2\pi} \int_{-\pi}^{\pi} \exp\left( j\Omega (n - k) \right) ~ d\Omega \\
	&= \sum_{n = -\infty}^{\infty} x(n) ~ \delta(n - k) \\
	&= x(n)
\end{align} $$

Por lo que si la transformada de Fourier está bien definida es siempre posible recuperar $x(n)$


