---
dia: 2023-01-23
tags:
  - distribucion/continua
---
### Definición
---
La [[Variable aleatoria|variable aleatoria]] $X$ que toma los valores $x \in \mathbb{R}$ tiene una distribución normal si su [[Función de densidad|función de densidad]] es de la forma $$ f_X(x) = \varphi(x) = \frac{1}{\sqrt{2 \cdot \pi \cdot \sigma }} \cdot e^{-(x - \mu)^2 \cdot (2 \cdot \sigma^2)^{-1}} $$
##### Notación
$$ X \sim N(\mu, \sigma^2) $$

#### Notas
---
* El [[Soporte|soporte]] de $X$ es $Sop(X) = \mathbb{R}$ 
* $\mu \in \mathbb{R}, \sigma^2 > 0$
* La [[Esperanza|esperanza]] es $E[X] = \mu$ y la [[Varianza|varianza]] es $Var(X) = \sigma$.



### Calculo de probabilidad
---
$$ \Phi(x) = F_X(x) = \mathbb{P}(X \leq x) = \int_{-\infty}^{x} \frac{1}{\sqrt{2 \cdot \pi \cdot \sigma} } \cdot e^{-(t - \mu)^2 \cdot (2 \cdot \sigma^2)^{-1}} dt $$

#### Observación
---
Para cuando $\mu = 1$ y $\sigma = 0$ se le dice distrobución [[Normal estandar|normal estandar]]


#### Relaciones
---
![[Relaciones entre distribuciones#Distribución normal]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado y Distribución normal]]

![[Relaciones entre distribuciones#Distribución t-Student y Distribución normal]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado , Distribución normal y Distribución t-Student]]