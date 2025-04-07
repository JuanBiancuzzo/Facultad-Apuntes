---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/continua
nombreDistribucion: Exponencial
tipoDistribucion: continua
---
# Definición
---
Una [[Variable aleatoria]] tiene distribución exponencial de parametron $\lambda > 0$ si su [[Función de densidad de probabilidad]] esta dada por $$ f_X(x) = \lambda \cdot e^{-\lambda \cdot x} \cdot \mathbb{1}\{x > 0\} $$
### Notación
$$ X \sim \varepsilon(\lambda)$$

## Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = [0, \infty)$ 
* $\lambda > 0$
* La [[Esperanza]] es $E[X] = \frac{1}{\lambda}$, la [[Supervivencia]] es $S(t) = e^{-\lambda \cdot t}$ y la [[Varianza]] es $Var(X) = \frac{1}{\lambda^2}$.


# Propiedades
---
1) Si $X \sim \varepsilon(\lambda)$ entonces $\mathbb{P}(X > t + s | X > t) = \mathbb{P}(X > s), \forall t, s \in \mathbb{R}^+$, esto se llama propiedad de falta de memoria
2) Si $X$ es una [[Variable aleatoria continua]] y $\mathbb{P}(X > t + s | X > t) = \mathbb{P}(X > s) \forall t, s \in \mathbb{R}^+$ entonces existe $\lambda > 0$ tal que $X \sim \varepsilon(\lambda)$ 
3) Siendo $X_1, X_2, \cdots, X_n$ independientes y $X_i \sim \varepsilon(\lambda)$ entonces el [[Método de máxima verosimilitud|estimador de máxima verosimilitud]] para $\lambda$ es $$ \hat{\lambda} = \frac{n}{\displaystyle\sum_{i = 1}^n X_i} $$

## Relaciones
---
![[Relaciones entre distribuciones#Distribución exponencial]]

![[Relaciones entre distribuciones#Distribución exponencial y Distribución Gamma]]

![[Relaciones entre distribuciones#Distribución exponencial y Distribución Chi cuadrado]]

![[Relaciones entre distribuciones#Distribución Weibull y Distribución Exponencial]]