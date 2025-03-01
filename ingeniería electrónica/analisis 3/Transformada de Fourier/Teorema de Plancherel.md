---
dia: 2024-04-09
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformada-de-Fourier
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Transformada-de-Fourier
---
# Definición
---
Sobre el espacio $L_2(\mathbb{R})$ el operador $x(t) \to \mathcal{F}[x(t)]$ es [[Función biyectiva|biyectivo]]. Es decir, si $\mathcal{F}[x_1(t)] = \mathcal{F}[x_2(t)]$ (en el sentido [[Valor cuadrático medio|cuadrático]]) entonces $x_1(t) = x_2(t)$ (en el sentido cuadrático). 

Además para cada $x(t) \in L_2(\mathbb{R})$ existe su [[Transformada de Fourier|transformada de Fourier]] $X(j \omega) \equiv \mathcal{F}[x(t)]$ la cual la es de [[Medida de una señal#Energía|energia finita]]. Así mismo para cada [[Señal|señal]] $X(j\omega) \in L_2(\mathbb{R})$ existe $x(t) \equiv \mathcal{F}^{-1}[X(j\omega)]$ también de energía finita. Además se cumple la [[Igualdad de Parseval|relación de Parseval]] $$ \int_{-\infty}^{\infty} |x(t)|^2 ~ dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(j\omega)|^2 ~ d\omega $$
## Consideraciones
---
* Se puede interpretar como el calculo del [[Error cuadrático medio|error cuadrático medio]], donde $$ x_m(t) = \frac{1}{2\pi} \int_{-m}^{m} X(j\omega) \exp(j\omega t)  d \omega, ~~~ X(j\omega) = \int_{-\infty}^{\infty} x(t) \exp(-j\omega t)  dt $$donde $x_m(t)$ es la [[Antitransforamda de Fourier|antitransforamda de Fourier]] truncada.

	Podemos calcular el [[Error absoluto|error]] como $e(t) = x(t) - x_m(t)$ y por lo tanto $$ \lVert e(t) \rVert^2 = \int_{-\infty}^{\infty} \lVert e(t) \rVert^2 ~ dt = \lim_{m \to \infty} \int_{-\infty}^{\infty} \left\lVert x(t) - \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(j\omega)|^2 ~ d\omega \right\rVert^2 dt = 0 $$
* El operador $\mathcal{F} : L_2(\mathbb{R}) \to L_2(\mathbb{R})$ define una isometría en dicho espaico
* Notar que existe una dualidad interesante entre una señal y su transformada. Sea $x(t) \in L_2(\mathbb{R})$ y $X(j\omega) = \mathcal{F}[x(t)]$. Entonces lo siguiente es cierto $$ x(-t) = \frac{1}{2\pi} \mathcal{F}[X(j\omega)], ~~~ x(t) = \frac{1}{2\pi} \mathcal{R}[\mathcal{F}[X(j\omega)]] $$ donde $\mathcal{R}[x(t)]$ es el [[Operador reflexión temporal|operador reflexión temporal]]. Es claro que esto muestra que $$ \mathcal{F}^{-1}[\cdot] = \frac{1}{2\pi} \mathcal{R}[\mathcal{F}[\cdot]] = \frac{1}{2\pi} \mathcal{F}[\mathcal{R}[\cdot]] $$
* Es posible definir la transformada de Fourier en $L_2(\mathbb{R}^n)$ con exactamente las mismas propiedades que para el caso con $N = 1$ $$ \begin{matrix} 
	  X(j\omega) = \int_{\mathbb{R}^N} x(t) \exp(-j\omega t) ~ dt, ~~ \omega \in \mathbb{R}^N \\
	  x(t) = \frac{1}{2\pi} \int_{\mathbb{R}^N} X(j\omega) \exp(j\omega t) ~ d\omega, ~~ t \in \mathbb{R}^N \\
  \end{matrix} $$
