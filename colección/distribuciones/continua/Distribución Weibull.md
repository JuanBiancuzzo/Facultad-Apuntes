---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/continua
nombreDistribucion: Weibull
tipoDistribucion: continua
---
# Definición
---
Se dice que una [[Variable aleatoria]] $X$ tiene distribución Weibull de parámetros $c$ y $\alpha$ si su [[Función de densidad de probabilidad]] es $$ f_X(x) = \frac{c}{\alpha} \bigg( \frac{x}{\alpha} \bigg)^{c-1} e^{-\bigg({\displaystyle\frac{x}{\alpha}} \bigg)^c} $$
### Notación
$$ X \sim Wei(c, \alpha) $$

## Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = [0, \infty)$ 
* $c > 0$ y $\alpha > 0$
* La [[Esperanza]] es $E[X] = \alpha \cdot \Gamma(1 + \frac{1}{c})$, la [[Supervivencia]] es $S(t) = e^{-(\frac{t}{\alpha})^2}$ y la [[Varianza]] es $Var(X) = \alpha^2 \cdot (\Gamma(1 + \frac{2}{c}) - \Gamma^2(1 + \frac{1}{c}))$ donde $\Gamma(x)$ es la [[Función gamma]].

## Relaciones
---
![[Relaciones entre distribuciones#Distribución Weibull y Distribución Exponencial]]

![[Relaciones entre distribuciones#Distribución Gamma y Distribución Weibull]]