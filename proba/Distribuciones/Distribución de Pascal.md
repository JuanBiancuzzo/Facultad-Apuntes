---
dia: 2023-01-23
tags:
  - proba/Proceso-de-Bernoulli
  - distribucion/discreta
---
### Definición
---
Pascal modela la cantidad de ensayos necesarios hasta obtener $k$ éxitos si se repite de forma independiente un experimento de Bernoulli con probabilidad $p$ de éxito.

Se dice que una [[Variable aleatoria]] $X$ tiene distribución de Pascal de parámetros $k$ y $p$ si su [[Función de probabilidad]] es $$ p_X(x) = \dbinom{x -1}{k - 1} \cdot (1 - p)^{x - k} \cdot p^k$$
##### Notación
$$ X \sim Pas(k, p) $$

#### Notas
---
* El [[Rango de una variable aleatoria|rango]] de $X$ es $R_X = \Set{x \in \mathbb{Z} : x \geq k}$ 
* $p \in (0, 1)$ y $k \in \mathbb{N}$ 
* La [[Esperanza]] es $E[X] = \frac{k}{p}$ y la [[Varianza]] es $Var(X) = \frac{k \cdot (1 - p)}{p^2}$.

#### Relaciones
---
![[Relaciones entre distribuciones#Distribución Geométrica y Distribución de Pascal]]