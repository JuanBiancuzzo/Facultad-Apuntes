---
dia: 2022-12-04
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformada-de-Laplace
  - carrera/ingeniería-electrónica/señales/Transformadas-de-Laplace-y-Z
  - carrera/ingeniería-en-informática/analisis-3/Transformada-de-Laplace
  - nota/facultad
aliases:
  - Transformada inversa de Laplace
etapa: ampliar
referencias:
  - "873"
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Transformada de Laplace/Resumen.md]]"
  - "[[ingeniería electrónica/señales/Transformadas de Laplace y Z/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $\mathcal{L} : \mathbb{O} \to \mathbb{I}$, donde $\mathcal{L}$ es la aplicación de la [[Transformada de Laplace|transformada de Laplace]], de un espacio $\mathbb{O}$ (cuyos elementos se denominan tradicionalmente "[[Función objeto|función objeto]]") en un espacio $\mathbb{I}$ de funciones [[Holomorfa|holomorfas]], denominadas "funciones imagen"

Definiendo $\mathcal{L}(f(t)) = F(s) = F(\sigma + i\omega)$, se denomina transformada de Laplace de $f$ a $$ F(\sigma + i \omega) \overset{\Delta}{=} \int\limits_{-\infty}^\infty f(t) ~ \exp(-(\sigma + i \omega)t) ~ dt $$
Notemos que $F(s)$ es [[Función lineal|función C-lineal]], y que para definir correctamente necesitamos ver la [[Región de convergencia de la transformada de Laplace|región de convergencia]] la cual determina correctamente a la transformada de Laplace

## Relación con la transformada de Fourier
---
Se puede decir que la [[Transformada de Fourier|transformada de Fourier]] es un caso especifico de una transformada de Laplace, por lo siguiente

$$ \begin{align} 
	F(\sigma + i \omega) &= \int\limits_{-\infty}^\infty f(t) ~ \exp(-(\sigma + i \omega)t) ~ dt \\
	&= \int\limits_{-\infty}^\infty [f(t) ~ \exp(-\sigma t)] ~ \exp(-i \omega t) ~ dt \\
	&= \mathcal{F}[f(t) ~ \exp(-\sigma t)]
\end{align} $$

La transformada de Laplace $F(s)$ de $f(t)$ es la transformada de Fourier de $f(t) ~\exp(-\sigma t)$

# Propiedades
---
Veamos las siguientes propiedades de la transformada de Laplace

|                                    | Función objeto          | Transformada de Laplace                                              | Observaciones                                                                       |
| ---------------------------------- | ----------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|                                    | $f(t)$                  | $F(s)$                                                               | [[Convergencia de la tranformación de Laplace\|abscisa de convergencia]] $\sigma_f$ |
|                                    | $g(t)$                  | $G(s)$                                                               | [[Convergencia de la tranformación de Laplace\|abscisa de convergencia]] $\sigma_g$ |
| Linealidad                         | $a~f(t) + b~g(t)$       | $a ~ F(s) + b ~ G(s)$                                                | $a$ y $b$ son constantes complejas                                                  |
| Derivación en frecuencias          | $t ~ f(t)$              | $-F'(s)$                                                             |                                                                                     |
| $n$-ésima derivación en frecuencia | $(-1)^n ~ F^{(n)}(S)$   |                                                                      |                                                                                     |
| Derivación en tiempo               | $f'(t)$                 | $s~F(s)-f(0^+)$                                                      | $f$ y $f'$ deben ser [[Función objeto\|funciones objeto]]                           |
| Segunda derivación en tiempo       | $f''(t)$                | $s^2~F(s) - s~f(0^+) - f'(0^+)$                                      | $f$, $f'$, $f''$ deben ser [[Función objeto\|funciones objeto]]                     |
| $n$-ésima derivación en tiempo     | $f^{(n)}(t)$            | $s^n~F(s) - \displaystyle\sum_{k = 1}^{n} s^{n - k}f^{(k - 1)}(0^+)$ | $f$, $f'$, $\cdots$, $f^{(n)}$ deben ser [[Función objeto\|funciones objeto]]       |
| Factor de escala                   | $f(\alpha t)$           | $\displaystyle \frac{1}{\alpha}F\left(\frac{s}{\alpha}\right)$       | $\alpha$ es una constante real positiva                                             |
| Desplazamiento                     | $e^{s_0 t} f(t)$        | $F(s - s_0)$                                                         | $s_0$ es una constante compleja. $Re(s - s_0) > \sigma(F)$                          |
| Desplazamiento temporal            | $f(t - t_0) H(t - t_0)$ | $e^{-t_0 s}~F(s)$                                                    | $t_0$ es una constante real                                                         |
| [[Convolución]]                    | $(f * g)(t)$            | $F(s)~G(s)$                                                          |                                                                                     |
| Producto                           | $(f~ g)(t)$             | $F(s) \ast G(s)$                                                     |                                                                                     |
| Valor inicial                      | $f(0)$                  | $\displaystyle \lim_{s \to \infty} s ~ F(s)$                         |                                                                                     |
| Valor final                        | $f(\infty)$             | $\displaystyle \lim_{s \to 0} s ~ F(s)$                              |                                                                                     |

## Tabla de transformaciones conocidas
---
Vamos a enumerar algunas transformaciones conocidas

| Función objeto                             | Transformada de Laplace                              | RC                         | Observaciones                                                             |
| ------------------------------------------ | ---------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------- |
| $f(t)$                                     | $F(s)$                                               |                            |                                                                           |
| $\delta(t)$                                | 1                                                    |                            | Esta es la pseudo identidad                                               |
| $H(t)$                                     | $\displaystyle\frac{1}{s}$                           | $Re(s) > 0$                |                                                                           |
| $H(t - t_0)$                               | $\displaystyle\frac{1}{s} e^{-t_0 s}$                | $Re(s) > 0$                | $t_0 > 0$                                                                 |
| $t ~ H(t)$                                 | $\displaystyle\frac{1}{s^2}$                         | $Re(s) > 0$                |                                                                           |
| $t^n ~ H(t)$                               | $\displaystyle\frac{n!}{s^{n + 1}}$                  | $Re(s) > 0$                | $n$: entero positivo o nulo, para exponentes no enteros ver función gamma |
| $e^{-kt}~H(t)$                             | $\displaystyle\frac{1}{s + k}$                       | $Re(s) > -k$               | $k$: constante real                                                       |
| $(t - t_0)^n e^{-k(t - t_0)} ~ H(t - t_0)$ | $\displaystyle\frac{n! e^{-t_0 s}}{(s + k)^{n + 1}}$ | $Re(s) > -k$               | $t_0 > 0$, $k$: constante real                                            |
| $sen(\alpha t) ~ H(t)$                     | $\displaystyle\frac{\alpha}{s^2 + \alpha^2}$         | $Re(s) > 0$                | $\alpha$ constante                                                        |
| $cos(\alpha t) ~ H(t)$                     | $\displaystyle\frac{s}{s^2 + \alpha^2}$              | $Re(s) > 0$                | $\alpha$ constante                                                        |
| $senh(\alpha t) ~ H(t)$                    | $\displaystyle\frac{\alpha}{s^2 - \alpha^2}$         | $Re(s) > \vert\alpha\vert$ | $\alpha$ constante                                                        |
| $cosh(\alpha t) ~ H(t)$                    | $\displaystyle\frac{s}{s^2 - \alpha^2}$              | $Re(s) > \vert\alpha\vert$ | $\alpha$ constante                                                        |


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```