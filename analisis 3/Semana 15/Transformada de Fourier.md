---
dia: 2022-12-04
materia: analisis 3
capitulo: 15
---
### Definición
---
Dada una función $f : \mathbb{R} \to \mathbb{C}$ [[Seccionalmente continua]] y [[Absolutamente integrable]] en $\mathbb{R}$, se define como transformada de Fourier de $f$ a la función $\hat{f} : \mathbb{R} \to \mathbb{C}$ tal que para cada $\omega \in \mathbb{R}$: $$ \hat{f}(\omega) = \int_{-\infty}^{+\infty} f(x) e^{-i\omega x}dx $$
### Propiedades
---

|     | Condiciones de aplicación                                      | Función original                                                                        | Transformada de Fourier                                             |
| --- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | $f \in L^1(\mathbb{R}, \mathbb{C})$ y                          | $f(x) =  \frac{1}{2\pi} \int_{-\infty}^{+\infty} \hat{f}(\omega) e^{i\omega x} d\omega$ | $\hat{f}(\omega) = \int_{-\infty}^{+\infty} f(x) e^{-i\omega x} dx$ |
| 2   | $f \in L^1(\mathbb{R}, \mathbb{C})$                            | $f(x - x_0), ~ x_0 \in \mathbb{R}$                                                      | $e^{-i\omega x_0} ~\hat{f}(\omega)$                                 |
| 3   | $f \in L^1(\mathbb{R}, \mathbb{C})$                            | $e^{i \omega_0 x} ~ f(x), ~ \omega_0 \in \mathbb{R}$                                    | $\hat{f}(\omega - \omega_0)$                                        |
| 4   | $f \in L^1(\mathbb{R}, \mathbb{C})$                            | $f(\alpha x), ~ \alpha \in \mathbb{R}, \alpha > 0$                                      | $\frac{1}{\alpha} \hat{f}( \frac{\omega}{\alpha})$                  |
| 5   | $f$ es de clase $C^1$, $f, f' \in L^1(\mathbb{R}, \mathbb{C})$ | $f'(x)$                                                                                 | $i\omega \hat{f}(\omega)$                                           |
| 6   | $f, x f \in L^1(\mathbb{R}, \mathbb{C})$                       | $-ixf(x)$                                                                               | $\hat{f}'(\omega)$                                                  |
| 7   | $f, \hat{f} \in L^1(\mathbb{R}, \mathbb{C})$                   | $\hat{f}(\omega)$                                                                       | $2\pi f(-x)$                                                        |

Donde $L^1$ es la [[Conjunto de Lebesgue de orden n|conjunto de Lebesgue de orden 1]].

### Definición para $L^2(\mathbb{R}, \mathbb{C})$
---
Dada $f \in L^2(\mathbb{R}, \mathbb{C})$, para cada $b > 0$ y cada $\omega \in \mathbb{R}$, la integral $$ \hat{f}_b(\omega) = \int_{-b}^{b} f(x) e^{-i\omega x} dx $$
es convergente y dicha fórmula define una función $\hat{f}_b \in L^2(\mathbb{R}, \mathbb{C})$. Además, existe una función $\hat{f} \in L^2(\mathbb{R}, \mathbb{C})$ tal que $\lim_{b \to \infty} \Vert \hat{f} - \hat{f}_b \Vert_2 = 0$. Esta función $\hat{f}$ se define como la transformada de Fourier de $f$ en $L^2(\mathbb{R}, \mathbb{C})$ y verifica la [[Identidad de Perseval para la transformación de Fourier|identidad de Perseval]].

Si además $f \in L^1(\mathbb{R}, \mathbb{C})$, entonces la transformada de Fourier de $f$ en $L^2(\mathbb{R}, \mathbb{C})$ coincide con la transformada de Fourier de $f$ en $L^1(\mathbb{R}, \mathbb{C})$, es decir: $$ \hat{f}(\omega) = \int_{-\infty}^{+\infty} f(x) e^{i\omega x} dx $$
