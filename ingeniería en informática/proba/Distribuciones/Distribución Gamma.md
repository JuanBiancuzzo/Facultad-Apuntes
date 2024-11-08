---
dia: 2023-01-23
tags:
  - distribucion/continua
---
# Definición
---
Se dice que una [[Variable aleatoria]] $X$ tiene distribución Gamma de parámetros $\lambda$ y $\nu$ si su [[Función de densidad]] es $$ f_X(x) = \frac{\lambda^\nu}{\Gamma(\nu)} \cdot x^{\nu - 1} \cdot e^{-\lambda \cdot x} $$
Donde $\Gamma (\nu)$ es la [[ingeniería en informática/proba/Distribuciones/Función Gamma]] evaluada en $\nu$.

### Notación
$$ X \sim \Gamma(\nu, \lambda) $$
## Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = [0, \infty)$ 
* $\nu > 0$ y $\lambda > 0$
* La [[Esperanza]] es $E[X] = \frac{\nu}{\lambda}$, si $\nu \in \mathbb{N}$ entonces su [[Supervivencia]] es $S(t) = \displaystyle \sum_{n = 0}^{\nu - 1} \frac{e^{-\lambda \cdot t} \cdot (\lambda \cdot t)^n}{n!}$ y la [[Varianza]] es $Var(X) = \frac{\nu}{\lambda^2}$.

# Propiedades
---
La función $\Gamma(t)$ crece muy rápidamente, y para evitar problemas numéricos en algunos algoritmos conviene adaptar las formulas para que aparezca el logaritmo de la función $log|\Gamma(t)|$ 


## Relaciones
---
![[Relaciones entre distribuciones#Distribución Chi cuadrado y Distribución Gamma]]

![[Relaciones entre distribuciones#Distribución exponencial y Distribución Gamma]]

![[Relaciones entre distribuciones#Distribución Gamma y Distribución Weibull]]



