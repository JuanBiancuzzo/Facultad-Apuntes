---
dia: 2022-12-04
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformada-de-Fourier
  - carrera/ingeniería-electrónica/señales/Transformada-de-Fourier
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Transformada-de-Fourier
---
# Definición
---
Sea $\mathcal{F} : L^1(\mathbb{R}, \mathbb{C}) \to C_\bullet^0(\mathbb{R}, \mathbb{C})$ la [[Transformación lineal|transformación lineal]] (donde $L^1$ es el [[Conjunto de Lebesgue de orden n|conjunto de Lebesgue]] de orden $1$, y $C_\bullet^0$ es el [[Conjunto de Lebesgue de orden n|Conjunto de Lebesgue]] de orden $\infty$) tal que $\mathcal{F}(f) = \hat{f}$  bien definida donde su [[Transformada de Fourier|transformada de Fourier]] $\hat{f}$ es [[Función continua|continua]] y verifica el [[ingeniería electrónica/analisis 3/Transformada de Fourier/Lema de Riemann-Lebesgue|lema de Riemann-Lebesgue]]

Dada una función $f : \mathbb{R} \to \mathbb{C}$ [[Seccionalmente continua|seccionalmente continua]] y [[Absolutamente integrable|absolutamente integrable]] en $\mathbb{R}$, se define como transformada de Fourier de $f$ a la función $\hat{f} : \mathbb{R} \to \mathbb{C}$ tal que para cada $\omega \in \mathbb{R}$: $$ \hat{f}(\omega) = \int_{-\infty}^{+\infty} f(x) e^{-i\omega x}dx $$
# Propiedades
---

| Condiciones de aplicación                                      | Función original                                                                        | Transformada de Fourier                                             |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| $f \in L^1(\mathbb{R}, \mathbb{C})$ y                          | $f(x) =  \frac{1}{2\pi} \int_{-\infty}^{+\infty} \hat{f}(\omega) e^{i\omega x} d\omega$ | $\hat{f}(\omega) = \int_{-\infty}^{+\infty} f(x) e^{-i\omega x} dx$ |
| $f \in L^1(\mathbb{R}, \mathbb{C})$                            | $f(x - x_0), ~ x_0 \in \mathbb{R}$                                                      | $e^{-i\omega x_0} ~\hat{f}(\omega)$                                 |
| $f \in L^1(\mathbb{R}, \mathbb{C})$                            | $e^{i \omega_0 x} ~ f(x), ~ \omega_0 \in \mathbb{R}$                                    | $\hat{f}(\omega - \omega_0)$                                        |
| $f \in L^1(\mathbb{R}, \mathbb{C})$                            | $f(\alpha x), ~ \alpha \in \mathbb{R}, \alpha > 0$                                      | $\frac{1}{\alpha} \hat{f}( \frac{\omega}{\alpha})$                  |
| $f$ es de clase $C^1$, $f, f' \in L^1(\mathbb{R}, \mathbb{C})$ | $f'(x)$                                                                                 | $i\omega \hat{f}(\omega)$                                           |
| $f, x f \in L^1(\mathbb{R}, \mathbb{C})$                       | $-ixf(x)$                                                                               | $\hat{f}'(\omega)$                                                  |
| $f, \hat{f} \in L^1(\mathbb{R}, \mathbb{C})$                   | $\hat{f}(\omega)$                                                                       | $2\pi f(-x)$                                                        |

Donde $L^1$ es la [[Conjunto de Lebesgue de orden n|conjunto de Lebesgue de orden 1]].


Consideramos la [[Delta de Dirac|delta de Dirac]] $\delta(t)$. Aunque no podemos decir que $\delta(t) \in L^2(\mathbb{R})$, podemos definir su transformada de Fourier en un sentido distribucional $$ X(j\omega) = \int_{-\infty}^{\infty} \delta(t) \exp(-j\omega t) ~ dt = 1 $$
Podemos pensar que de alguna forma un impulso unitario tiene contribuciones de todos los armónicos posibles en forma pareja. Además podemos escribir $$ \delta(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \exp(j\omega t) ~ d\omega $$

Vamos a asumir que las [[Señal|señales]] a considerar son tales que existe su transformada de Fourier

### Linealidad
---
Sean $x(t)$ e $y(t)$ funciones, tenemos que $$ \mathcal{F}[a ~ x(t) + b ~ y(t)] = a ~ \mathcal{F}[x(t)] + b ~ \mathcal{F}[y(t)], ~~~ a, b \in \mathbb{C} $$

### Desplazamiento temporal
---
Sea $x(t)$ tal que $X(j\omega) = \mathcal{F}[x(t)]$, tenemos que $$ \mathcal{F}[x(t-t_0)] = \exp(-j\omega t_0) X(j\omega) $$


### Conjugación y simetría conjugada
---
Sea $x(t)$ tal que $X(j\omega) = \mathcal{F}[x(t)]$, tenemos $$ \mathcal{F}[x^*(t - t_0)] = X^*(-j\omega) $$
* Si $x(t)$ es real $X(j\omega) = X^*(-j\omega)$. Esto implica $\mathcal{Re}(X(j\omega)) = \mathcal{Re}(X(-j\omega))$  y $\mathcal{Im}(X(j\omega)) = -\mathcal{Im}(X(-j\omega))$
	* Si además $x(t)$ es [[Función par|par]] se puede chequear que $X(j\omega) = X^*(j\omega)$. Entonces $X(j\omega)$ es real y par
	* Si además $x(t)$ es [[Función impar|impar]] se puede chequear que $X(j\omega) = -X^*(j\omega)$. Entonces $X(j\omega)$ es imaginaria pura e impar

* Si $x(t)$ es imaginaria $X(j\omega) = -X^*(-j\omega)$. Esto implica $\mathcal{Re}(X(j\omega)) = -\mathcal{Re}(X(-j\omega))$  y $\mathcal{Im}(X(j\omega)) = \mathcal{Im}(X(-j\omega))$
	* Si además $x(t)$ es par se puede chequear que $X(j\omega) = X^*(j\omega)$. Entonces $X(j\omega)$ es imaginaria pura y par
	* Si además $x(t)$ es impar se puede chequear que $X(j\omega) = -X^*(j\omega)$. Entonces $X(j\omega)$ es real e impar

### Derivación
---
Sea $x(t)$ tal que $X(j\omega) = \mathcal{F}[x(t)]$, temeos que $$ \mathcal{F}\left[ \frac{dx}{dt}(t) \right] = j\omega X(j\omega) $$

### Integración
---
Sea $x(t)$ tal que $X(j\omega) = \mathcal{F}[x(t)]$, tenemos que $$ \mathcal{F}\left[ \int_{-\infty}^{t} x(\tau) ~ d\tau \right] = \frac{X(j\omega)}{j\omega} + \pi X(0) \delta(\omega) $$
Notar que $\displaystyle X(0) = \int_{-\infty}^{\infty} x(\tau) ~ d\tau$ 

### Convolución
---
Sean las funciones $x(t)$ y $y(t)$, tenemos que $$ \mathcal{F}[x(t) * y(t)] = \mathcal{F}[x(t)] ~ \mathcal{F}[y(t)] $$
Donde $x(t) * y(t)$ es la [[Convolución|convolución]] de las dos señales.

## Teorema
---
Sea $x(t) \in L_1(\mathbb{R})$ de variación acotada sobre cualquier intervalo finito de la recta. Entonces vale $$ \lim_{M \to \infty} \int_{-\infty}^{\infty} x(u) \frac{M}{\pi} sinc \left( \frac{M}{\pi} (t - u) \right) ~ du = \frac{x(t - 0^{-}) + x(t + 0^{+})}{2} $$

# Definición para $L^2(\mathbb{R}, \mathbb{C})$ 
---
Dada $f \in L^2(\mathbb{R}, \mathbb{C})$, para cada $b > 0$ y cada $\omega \in \mathbb{R}$, la integral $$ \hat{f}_b(\omega) = \int_{-b}^{b} f(x) e^{-i\omega x} dx $$
es convergente y dicha fórmula define una función $\hat{f}_b \in L^2(\mathbb{R}, \mathbb{C})$. Además, existe una función $\hat{f} \in L^2(\mathbb{R}, \mathbb{C})$ tal que $\lim_{b \to \infty} \Vert \hat{f} - \hat{f}_b \Vert_2 = 0$. Esta función $\hat{f}$ se define como la transformada de Fourier de $f$ en $L^2(\mathbb{R}, \mathbb{C})$ y verifica la [[Identidad de Perseval para la transformación de Fourier|identidad de Perseval]].

Si además $f \in L^1(\mathbb{R}, \mathbb{C})$, entonces la transformada de Fourier de $f$ en $L^2(\mathbb{R}, \mathbb{C})$ coincide con la transformada de Fourier de $f$ en $L^1(\mathbb{R}, \mathbb{C})$, es decir: $$ \hat{f}(\omega) = \int_{-\infty}^{+\infty} f(x) e^{-i\omega x} dx $$
## Teorema de Plancherel
---
![[Teorema de Plancherel#Definición]]

