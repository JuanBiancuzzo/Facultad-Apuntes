### Definición
---
Se denomina transformada de Laplace de $f$ a: $$ F(\sigma 
 + i \omega) = \int\limits_0^\infty f(t) e^{-(\sigma + i\omega)t} dt = \int\limits_{-\infty}^\infty f(t) H(t) e^{-(\sigma + i \omega)t} dt $$
Para $\sigma > 0$ es la [[Transformada de Fourier]] $\hat{f}_\sigma$ de la función $f_\sigma(t) = f(t) H(t) e^{-\sigma t}$.

Donde $H(t) = \begin{cases} 0 && \text{si } ~ t < 0 \\ 1 && \text{si } ~ t \ge 0 \end{cases}$  y esta es una [[Función objeto]].


### Propiedades
---
|     |                                    | [[Función objeto]]      | Transformada de Laplace                                              | Observaciones                                                                       |
| --- | ---------------------------------- | ----------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|     |                                    | $f(t)$                  | $F(s)$                                                               | [[Convergencia de la tranformación de Laplace\|abscisa de convergencia]] $\sigma_f$ |
|     |                                    | $g(t)$                  | $G(s)$                                                               | [[Convergencia de la tranformación de Laplace\|abscisa de convergencia]] $\sigma_g$ |
| 1   | Linealidad                         | $a~f(t) + b~g(t)$       | $a ~ F(s) + b ~ G(s)$                                                | $a$ y $b$ son constantes complejas                                                  |
| 2   | Derivación en frecuencias          | $t ~ f(t)$              | $-F'(s)$                                                             |                                                                                     |
| 3   | $n$-ésima derivación en frecuencia | $(-1)^n ~ F^{(n)}(S)$   |                                                                      |                                                                                     |
| 4   | Derivación en tiempo               | $f'(t)$                 | $s~F(s)-f(0^+)$                                                      | $f$ y $f'$ deben ser [[Función objeto\|funciones objeto]]                           |
| 5   | Segunda derivación en tiempo       | $f''(t)$                | $s^2~F(s) - s~f(0^+) - f'(0^+)$                                      | $f$, $f'$, $f''$ deben ser [[Función objeto\|funciones objeto]]                     |
| 6   | $n$-ésima derivación en tiempo     | $f^{(n)}(t)$            | $s^n~F(s) - \displaystyle\sum_{k = 1}^{n} s^{n - k}f^{(k - 1)}(0^+)$ | $f$, $f'$, $\cdots$, $f^{(n)}$ deben ser [[Función objeto\|funciones objeto]]       |
| 7   | Factor de escala                   | $f(\alpha t)$           | $\frac{1}{\alpha}F\left(\frac{s}{\alpha}\right)$                     | $\alpha$ es una constante real positiva                                             |
| 8   | Desplazamiento                     | $e^{s_0 t} f(t)$        | $F(s - s_0)$                                                         | $s_0$ es una constante compleja. $Re(s - s_0) > \sigma(F)$                          |
| 9   | Desplazamiento temporal            | $f(t - t_0) H(t - t_0)$ | $e^{-t_0 s}~F(s)$                                                    | $t_0$ es una constante real                                                         |
| 10  | [[Convolución]]                    | $(f * g)(t)$            | $F(s)~G(s)$                                                                     |                                                                                     |

|     | [[Función objeto]] | Transformada de Laplace | [[Convergencia de la tranformación de Laplace\|RC]]  | Observaciones              |                                                                               |
| --- | --------------------------------------------- | ---------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------- |
|     | $f(t)$                                        | $F(s)$                                               |                            |                                                                               |
| 1   | $H(t)$                                        | $\displaystyle\frac{1}{s}$                           | $Re(s) > 0$                |                                                                               |
| 2   | $H(t - t_0)$                                  | $\displaystyle\frac{1}{s} e^{-t_0 s}$                | $Re(s) > 0$                | $t_0 > 0$                                                                     |
| 3   | $t ~ H(t)$                                    | $\displaystyle\frac{1}{s^2}$                         | $Re(s) > 0$                |                                                                               |
| 4   | $t^n ~ H(t)$                                  | $\displaystyle\frac{n!}{s^{n + 1}}$                  | $Re(s) > 0$                | $n$: entero positivo o nulo, para exponentes no enteros ver [[Función gamma]] |
| 5   | $e^{-kt}~H(t)$                                | $\displaystyle\frac{1}{s + k}$                       | $Re(s) > -k$               | $k$: constante real                                                           |
| 6   | $(t - t_0)^n e^{-k(t - t_0)} ~ H(t - t_0)$    | $\displaystyle\frac{n! e^{-t_0 s}}{(s + k)^{n + 1}}$ | $Re(s) > -k$               | $t_0 > 0$, $k$: constante real                                                |
| 7   | $sen(\alpha t) ~ H(t)$                        | $\displaystyle\frac{\alpha}{s^2 + \alpha^2}$         | $Re(s) > 0$                | $\alpha$ constante                                                            |
| 8   | $cos(\alpha t) ~ H(t)$                        | $\displaystyle\frac{s}{s^2 + \alpha^2}$              | $Re(s) > 0$                | $\alpha$ constante                                                            |
| 9   | $senh(\alpha t) ~ H(t)$                       | $\displaystyle\frac{\alpha}{s^2 - \alpha^2}$         | $Re(s) > \vert\alpha\vert$ | $\alpha$ constante                                                            |
| 10  | $cosh(\alpha t) ~ H(t)$                       | $\displaystyle\frac{s}{s^2 - \alpha^2}$              | $Re(s) > \vert\alpha\vert$ | $\alpha$ constante                                                                              |
