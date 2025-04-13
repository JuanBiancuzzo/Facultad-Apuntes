---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/continua
aliases:
  - Campana de Gauss
  - Distribución gaussiana
nombreDistribucion: Normal
tipoDistribucion: continua
---
# Definición
---
La [[Variable aleatoria|variable aleatoria]] $X$ que toma los valores $x \in \mathbb{R}$ tiene una distribución normal si su [[Función de densidad de probabilidad|función de densidad]] es de la forma $$ f_X(x) = \varphi(x) = \frac{1}{\sqrt{2 \pi \sigma }} \cdot \exp\left(-\frac{(x - \mu)^2}{2 \sigma^2} \right) $$
### Notación
$$ X \sim N(\mu,~ \sigma^2) $$

## Notas
---
* El [[Soporte|soporte]] de $X$ es $Sop(X) = \mathbb{R}$ 
* $\mu \in \mathbb{R}$, $\sigma^2 > 0$
* La [[Esperanza|esperanza]] es $E[X] = \mu$ y la [[Varianza|varianza]] es $Var(X) = \sigma^2$



# Calculo de probabilidad
---
$$ \Phi(x) = F_X(x) = \mathbb{P}(X \leq x) = \int_{-\infty}^{x} \frac{1}{\sqrt{2 \cdot \pi \cdot \sigma} } \cdot e^{-(t - \mu)^2 \cdot (2 \cdot \sigma^2)^{-1}} dt $$

## Observación
---
Para cuando $\mu = 1$ y $\sigma = 0$ se le dice distribución [[Normal estándar|normal estándar]]

Para una [[Transformación afín|transformación afín]], $X = \sigma Z + \mu$, donde $Z \sim N(0,~ 1)$, entonces $X \sim N(\mu,~ \sigma)$


## Relaciones
---
![[Relaciones entre distribuciones#Distribución normal]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado y Distribución normal]]

![[Relaciones entre distribuciones#Distribución t-Student y Distribución normal]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado , Distribución normal y Distribución t-Student]]