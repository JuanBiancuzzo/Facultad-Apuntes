---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/continua
nombreDistribucion: Rayleigh
tipoDistribucion: continua
---
# Definición
---
Se dice que una [[Variable aleatoria|variable aleatoria]] $X$ tiene distribución de Rayleigh de parámetro $\sigma$ si su [[Función de densidad de probabilidad|función de densidad]] es $$ f_X(x) = \frac{x}{\sigma^2}\cdot e^{\displaystyle -\frac{x^2}{2\sigma^2}} $$

### Notación
$$ X \sim Ray(\sigma) $$
## Notas
---
* El [[Soporte|soporte]] de $X$ es $Sop(X) = \Set{x \in \mathbb{R} : x \geq 0}$ 
* $\sigma > 0$
* La [[Esperanza|esperanza]] es $E[X] = \sigma \cdot \sqrt{\frac{\pi}{2}}$, la [[Supervivencia|supervivencia]] es $S(t) = e^{-t^2(2\sigma^2)^{-1}}$ y la [[Varianza|varianza]] es $Var(X) = \frac{4 - \pi}{2} \cdot \sigma^2$