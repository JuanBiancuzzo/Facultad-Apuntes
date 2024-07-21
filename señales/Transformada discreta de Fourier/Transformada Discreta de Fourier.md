---
dia: 2024-03-11
capitulo: 6
aliases:
  - DFT
  - Discrete Fourier Transform
  - IDFT
  - Inverse Discrete Fourier Transform
  - Transformación Inversa Discreta de Fourier
tags:
  - señales/Transformada-discreta-de-Fourier
  - nota
---
### Definición
---
 Es un [[Muestreo|muestreo]] equispaciado en frecuencia de la [[Transformada de Fourier|transformada de Fourier]] de una secuencia de [[Señal#^02aea6|tiempo discreto]]. El gran punto a favor de la DFT es que existen [[Algoritmo|algoritmos]] computacionalmente muy eficientes para el cálculo de la misma como la [[Fast Fourier Transform|FFT]] 

  Consideremos una secuencia $x[n]$ de longitud $M$. Es decir $x[n] = 0$ para $n < 0$ y $n \ge M$. Sea $N \ge M$. Siempre podremos definir la secuencia periódica $\tilde{x}[n]$ con periodo $N$ $$ \tilde{x}[n] = \sum_{l = -\infty}^{\infty} x[n - lN] = x[n~\text{mod}~N] $$
  Dado que $M \le N$ siempre podremos recuperar $x[n]$ a partir de un periodo de $\tilde{x}[n]$. Es decir $$ x[n] = \begin{cases} 
	  \tilde{x}[n] & 0 \le n \le N - 1 \\
	  0 & \text{en otro caso}
  \end{cases} $$
  Sean $a[k] = X\left( e^\left( j \frac{2\pi}{N} k \right) \right) = X\left( e^{j\omega} \right) \biggm|_{\omega = \frac{2\pi}{N}k}$, $k \in \mathbb{Z}$ los [[Coeficientes de Fourier|coeficientes del desarrollo de Fourier]] de $\tilde{x}[n]$. Esta secuencia es periódica con periodo $N$. Definimos la siguiente secuencia $$ X[k] = \begin{cases} 
	  a[k] & 0 \le k \le N - 1 \\
	  0 & \text{en otro caso}
  \end{cases} $$
  Recordando que definimos $W_N = \exp\left(-j\frac{2\pi}{N}\right)$ entonces podemos expresar las ecuaciones de síntesis y de análisis $$ \begin{array}{c c} 
	\displaystyle X[k] = \sum_{n = 0}^{N - 1} x[n] ~ W_N^{kn}, & \text{Ecuación de análisis} \\
	\displaystyle x[n] = \frac{1}{N} \sum_{k = 0}^{N - 1} X[k] ~ W_N^{-kn}, & \text{Ecuación de síntesis} \\
\end{array} $$
Donde la ecuación de síntesis es la IDFT (Inverse Discrete Fourier Transform)

Se puede denotar de forma compacta, dado una cantidad $N$ de puntos, como $$ x[n] \xleftrightarrow[N]{~\mathcal{DFT}} X[k] $$
Notar que tenemos que $$ X[k] = X\left( e^\left( j \frac{2\pi}{N} k \right) \right) = X\left( e^{j\omega} \right) \biggm|_{\omega = \frac{2\pi}{N}k}, ~~ k \in \Set{0, 1, \cdots, N - 1} $$
Por lo que podemos decir que la DFT es igual a las muestras de la [[Transformada de Fourier|transformada de Fourier]] de $x[n]$ evaluada en los puntos $\omega_k = \frac{2\pi}{N}k, ~~ k \in \Set{0, 1, \cdots, N - 1}$, o sea $N$ muestras en el intervalo $[0, ~2\pi)$ 

#### Aclaraciones
---
* A pesar de estar definidas en un intervalo de $[0, ~N-1]$ para la ecuación de análisis como la de síntesis. Existe una periocidad implícita en ambas definiciones que es necesario tener en cuenta cuando se analicen las propiedades de la DFT, aún sólo estemos interesados en el intervalo $[0, ~ N - 1]$
* Sea $x = [x[0] ~ x[1] ~ \cdots x[N - 1]]^T$ y $X = [X[0] ~ X[1] ~ \cdots X[N - 1]]^T$, donde $$ \begin{align} 
	  X &= W x \\
	  x &= \frac{1}{N} W^H X
  \end{align} $$ donde la definición de $W \in \mathbb{C}^{N \times N}$ es ![[Serie discreta de Fourier#^eb7ec0]]

#### Propiedades
---
Al analizar las propiedades de la DFT debemos considerar la periocidad implícita en la secuencia $x[n]$ y en la misma DFT $X[k]$. Veremos que dicha periodicidad influencia fuertemente las propiedades de la DFT

##### Linealidad
---
Sea $x[n]$ una señal de longitud $N_1$ e $y[n]$ una señal de longitud $N_2$. Consideremos $z[n] = \alpha x[n] + \beta y[n]$. Es claro que la longitud de $z[n]$ será $N_3 \ge \max\Set{N_1, N_2}$, donde la otra secuencia se completa con $0$ usando [[Expansión en tiempo discreto|expansión]]

Sea entonces $x[n] \xleftrightarrow[N_3]{~\mathcal{DFT}} X[k]$ e $y[n] \xleftrightarrow[N_3]{~\mathcal{DFT}} Y[k]$. Es claro que $$ z[n] \xleftrightarrow[N_3]{~\mathcal{DFT}} \alpha X[k] + \beta Y[k] $$
##### Desplazamiento circular de una secuencia
---
Sea una secuencia $x[n]$ de longitud $N$ y $x[n] \xleftrightarrow[N]{~\mathcal{DFT}} X[k]$. Entonces $$ x[(n - m) \mod N] \xleftrightarrow[N]{~\mathcal{DFT}} W_N^{km} ~ X[k] $$
Sobre la izquierda tenemos que lo se denomina un desplazamiento circular

##### Dualidad
---
Sea una secuencia $x[n]$ de longitud $N$ y $x[n] \xleftrightarrow[N]{~\mathcal{DFT}} X[k]$. Entonces $$ X[n] \xleftrightarrow[N]{~\mathcal{DFT}} Nx[(-k) \mod N] $$

##### Simetría conjugada
---
Sea una secuencia $x[n]$ de longitud $N$ y $x[n] \xleftrightarrow[N]{~\mathcal{DFT}} X[k]$. Entonces $$ x^*[n] \xleftrightarrow[N]{~\mathcal{DFT}} X^*[(-k) \mod N] $$

##### Convolución
---
Sean $x[n]$ e $y[n]$ unas señales de longitud $N$. Considerando $z[n] = x[n] ~ \underset{N}{\circledcirc} ~ y[n]$. Si $x[n] \xleftrightarrow[N]{~\mathcal{DFT}} X[k]$ e $y[n] \xleftrightarrow[N]{~\mathcal{DFT}} Y[k]$ tenemos que $$ z[n] \xleftrightarrow[N]{~\mathcal{DFT}} X[k] ~ Y[k] $$
Donde esta convolución se conoce como la [[Convolución circular|convolución circular]] de $N$ puntos entre $x[n]$ e $y[n]$**