---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/continua
aliases:
  - Campana de Gauss
  - Distribución gaussiana
  - Distribución normal estándar#^normal-estandar
nombreDistribucion: Normal
tipoDistribucion: continua
---
# Definición
---
La [[Variable aleatoria|variable aleatoria]] $X$ que toma los valores $x \in \mathbb{R}$ tiene una distribución normal si su [[Función de densidad de probabilidad|función de densidad]] es de la forma $$ f_X(x) = \varphi(x) = \frac{1}{\sqrt{2 \pi \sigma }} \cdot \exp\left(-\frac{(x - \mu)^2}{2 \sigma^2} \right) $$
### Notación
$$ X \sim \mathcal{N}(\mu,~ \sigma^2) $$

## Notas
---
* El [[Soporte|soporte]] de $X$ es $Sop(X) = \mathbb{R}$ 
* $\mu \in \mathbb{R}$, $\sigma^2 > 0$
* La [[Esperanza|esperanza]] es $E[X] = \mu$ y la [[Varianza|varianza]] es $Var(X) = \sigma^2$

### Propiedades
---
Se le llama distribución normal estándar a aquella [[Variable aleatoria|variable aleatoria]] $X \sim \mathcal{N}(\mu = 0, \sigma^2 = 1)$ ^normal-estandar

Para una [[Transformación afín|transformación afín]], $X = \sigma Z + \mu$, donde $Z \sim \mathcal{N}(0,~ 1)$, entonces $X \sim \mathcal{N}(\mu,~ \sigma^2)$

Si $Z \sim \mathcal{N}(0,~ 1)$ es una [[Variable aleatoria|variable aleatoria]] normal estándar su [[Función característica|función característica]] es $$ \Phi_Z(\omega) = \exp\left( -\frac{\omega^2}{2} \right) $$ donde se puede observar, que salvo por un factor de escala, la función característica de una variable aleatoria estándar tiene su misma forma y en cierto sentido podemos pensar que la distribución normal estándar es una [[Autovector|autofunción]] de esta transformación ^funcion-caracteristica-normal-estandar

Usando la propiedad de la transformación tanto de la distribución normal como de la función característica, obtenemos que su función característica esta dada por $$ \Phi_X(\omega) = \exp\left( j\omega^T \mu \right) ~ \exp\left( -\frac{\sigma^2 \omega^2}{2} \right) $$

## Relaciones
---
![[Relaciones entre distribuciones#Distribución normal]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado y Distribución normal]]

![[Relaciones entre distribuciones#Distribución t-Student y Distribución normal]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado , Distribución normal y Distribución t-Student]]