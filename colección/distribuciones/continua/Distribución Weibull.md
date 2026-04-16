---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - distribuciones/continua
  - nota/colección
nombreDistribucion: Weibull
tipoDistribucion: continua
propiedades: 
  - nombre: c
    rango: c > 0
  - nombre: \alpha
    rango: \alpha > 0
---
# Definición
---
Se dice que una [[Variable aleatoria|variable aleatoria]] $X$ tiene distribución Weibull de parámetros $c$ y $\alpha$ si su [[Función de densidad de probabilidad|función de densidad]] es $$ f_X(x) = \frac{c}{\alpha} \bigg( \frac{x}{\alpha} \bigg)^{c-1} e^{-\bigg({\displaystyle\frac{x}{\alpha}} \bigg)^c} $$
### Notación
$$ X \sim Wei(c, \alpha) $$

## Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = [0, \infty)$ 
* La [[Esperanza]] es $E[X] = \alpha \cdot \Gamma(1 + \frac{1}{c})$
* La [[Varianza]] es $Var(X) = \alpha^2 \left(\Gamma\left( 1 + \frac{2}{c} \right) - \Gamma^2\left( 1 + \frac{1}{c} \right) \right)$ donde $\Gamma(x)$ es la [[Función gamma]].
* La [[Supervivencia]] es $S(t) = e^{-(\frac{t}{\alpha})^2}$ 

## Propiedades
---

## Relaciones
---
![[Relaciones entre distribuciones#Distribución Weibull y Distribución Exponencial]]

![[Relaciones entre distribuciones#Distribución Gamma y Distribución Weibull]]