---
dia: 2024-03-26
capitulo: 3
tags:
  - señales/Serie-de-Fourier
---
### Definición
---
Una [[Señal|señal]] periódica en tiempo discreto satisface $$ x[n] = x[n + N], ~ \forall n \in \mathbb{Z} $$ donde $N$ es el periodo. Consideremos las [[Función exponencial|exponenciales discretas]] con frecuencias fundamentales $k ~ \omega_0$ $$ f_k[n] = e^{j k \omega_0 n}, ~ \forall k \in \mathbb{Z}, ~~~ \omega_0 = \frac{2\pi}{N} $$
Donde tenemos que acordarnos la propiedad ![[Función exponencial#Ambigüedad discreta]]
De esta forma la serie de Fourier en tiempo discreto no es una [[Serie|serie]] sino una suma finita $$ x[n] = \sum_{k = \langle N \rangle} a_k ~ f_k[n] $$ donde la notación $k = \langle N \rangle$ significa que la suma se extiende por $N$ valores consecutivos de $k$

Donde $a_k$ son los [[Coeficientes de Fourier de una señal discreta|Coeficientes de Fourier]]

#### Sistemas LTI
---
Consideremos el caso de un sistema de discreto continuo cuya [[Representación de una señal mediante impulsos|respuesta al impulso]] es $h[n]$. Supongamos que la entrada al mismo es $x[n] = z^n$ donde $z \in \mathbb{C}$. La salida del sistema se puede escribir como $$ \begin{align} y(t) 
	&= \sum_{k = -\infty}^{\infty} h(\tau) ~ x(t - \tau) \\
	&= \sum_{k = -\infty}^{\infty} h(\tau) ~ z^{(n - \tau)} \\
	&= z^{n} ~ \sum_{k = -\infty}^{\infty} h(\tau) ~ z^{\tau} 
		= z^{n} ~ H(z)
\end{align} $$
La acción de un sistema LTI sobre una exponencial se puede escribir entonces como $$ y(t) = z^{n} ~ H(z) $$ donde $H(z)$ es lo que se denomina la [[Transferencia del sistema|transferencia del sistema]]. Ósea el sistema entrega a la salida la misma señal de entrada pasada por un escalar que depende sólo del sistema y del valor de $s$

Se dice que $z^n$ es un [[Autovalor|autovalor]] para los sistemas LTI y que $H(z)$ corresponde al autovalor asociado con $z^n$ y el sistema con [[Respuesta en frecuencia|respuesta al impulso]] $h[n]$

Por lo tanto, si tomamos $z = \exp(j\omega_0)$, entonces $x[n] = \exp(j\omega_0 n)$ con $\omega \in [-\pi, \pi)$, por lo tanto se define la transferencia como $H(\exp(j\omega_0))$ que es la [[Respuesta en frecuencia|respuesta en frecuencia del sistema]] $$ H(\exp(j\omega_0)) = \sum_{n = -\infty}^{\infty} h[n] \exp(-j\omega_0 t) ~ dt $$
Que podemos concluir que la acción de un sistema LTI sobre una señal periódica es modificar los [[Coeficientes de Fourier de una señal discreta|coeficientes de Fourier]] de la señal original mediante una multiplicación por la respuesta en frecuencia evaluada en cada uno de los múltiplos de la armónica fundamental