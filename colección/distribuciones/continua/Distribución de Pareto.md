---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/continua
nombreDistribucion: Pareto
tipoDistribucion: continua
---
# Definición
---
Se dice que una [[Variable aleatoria]] $X$ tiene distribución de Pareto de parametros $m$ y $\alpha$ si su [[Función de densidad de probabilidad]] es $$ f_X(x) = \frac{\alpha \cdot m^\alpha}{x^{\alpha + 1}} $$

### Notación
$$ X \sim Par(m, \alpha) $$
## Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = \Set{x \in \mathbb{R} : x \geq m }$ 
* $m > 0$ y $\alpha > m$
* La [[Esperanza]] es $E[X] = \displaystyle\frac{\alpha \cdot m}{\alpha - 1}, \alpha > 1$, la [[Supervivencia]] es $S(t) = (\frac{m}{t})^\alpha$ para $t \geq m$ y la [[Varianza]] es $Var(X) = \displaystyle\frac{m^2 \cdot \alpha}{(a - 1)^2 \cdot (\alpha - 2)}, \alpha > 2$.