---
dia: 2022-12-04
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformada-de-Fourier
  - carrera/ingeniería-en-informática/analisis-3/Transformada-de-Fourier
  - nota/facultad
---
# Definición
---
Sean $f, ~g \in L^1(\mathbb{R}, \mathbb{C})$ (donde $L^1$ es [[Conjunto de Lebesgue de orden n|conjunto de Lebesgue de orden 1]]) tales que $\overline{f}$ y $\overline{g}$ son acotadas. Entonces, para cada $x \in \mathbb{R}$, la [[Integral impropia|integral]] $\int_{-\infty}^{+\infty} f(x - t) \cdot g(t) dt$ es [[Absolutamente integrable|absolutamente convergente]]. Queda entonces bien definida la [[Función|función]] $f \ast g : \mathbb{R} \to \mathbb{C}$ tal que para cada $x \in \mathbb{R}$: $$ (f \ast g)(x) = \int_{-\infty}^{+\infty} f(x - t) \cdot g(t) dt $$
Esta función, que se define como la convolución entre $f$ y $g$, es [[Absolutamente integrable]] y verifica la desigualdad $$ \Vert f \ast g \Vert_1 \le \Vert f \Vert_1 ~ \Vert g \Vert_1 $$

## Suma de convolución
---
Sea $\mathcal{T}$ un [[Sistema lineal e invariante en el tiempo|sistema LTI]] de tiempo discreto tal que $\mathcal{T}[\delta[n]] = h[n]$ donde $\delta[n]$ es la [[Delta de Dirac|delta de Dirac]]. La respuesta $y[n]$ del sistema $\mathcal{T}$ a cualquier entrada $x[n]$ de tiempo discreto se escribe como $$ y[n] = h[n] \ast x[n] = \sum_{k=-\infty}^{\infty} x[k] ~ h[n - k] $$ esto se conoce como suma de convolución

De esta forma la acción de un sistema LTI en tiempo discreto queda totalmente caracterizada por una única señal: la [[Representación de una señal mediante impulsos|respuesta al impulso]] del mismo $h[n]$

### Consideraciones
---
Como se ve podemos interpretar la suma de convolución mediante un deslizamiento de la secuencia $h[n - k]$ sobre la señal de entrada $x[k]$

Habiendo calculado la salida para un instante $y[n]$ podemos calcular $y[n + 1]$ desplazando en $1$ la secuencia $h[n - k]$, multiplicando por $x[k]$ y sumar

## Propiedades
---
Sean $f, ~g, ~h \in L^1(\mathbb{R}, \mathbb{C})$ (donde $L^1$ es [[Conjunto de Lebesgue de orden n|conjunto de Lebesgue de orden 1]]), tres funciones acotadas y $c$ una constante compleja. Entonces:

1) $f \ast (g \ast h) = (f \ast g) \ast h$
2) $g \ast f = g \ast f$
3) $f \ast (g + h) = (f \ast g) + (f \ast h)$
4) $(cf) \ast g = f \ast (cg) = c(f \ast g)$
5) $\mathcal{F}(f \ast g) = \mathcal{F}(f) \cdot \mathcal{F}(g)$, donde $\mathcal{F}$ es la [[Transformada de Fourier]]. Es decir, $\forall \omega \in \mathbb{R} : \hat{f \ast g}(\omega) = \hat{f}(\omega) \cdot \hat{g}(\omega)$
