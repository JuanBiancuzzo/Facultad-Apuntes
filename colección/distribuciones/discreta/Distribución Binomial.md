---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/discreta
nombreDistribucion: Binomial
tipoDistribucion: discreta
---
# Definición
---
Binomial modela la cantidad de éxitos obtenidos al repetir $n$ veces de forma independiente un experimento de Bernoulli con probabilidad $p$ de éxito.

Se dice que una [[Variable aleatoria]] $X$ tiene distribución Binomial de parámetros $n$ y $p$ si su [[Función de masa de probabilidad]] es $$ p_X(x) = \dbinom{n}{x} \cdot p^x \cdot (1 - p)^{n - x} $$
### Notación
$$ X \sim B(n, p) $$

## Notas
---
* El [[Rango de una variable aleatoria|rango]] de $X$ es $R_X = \{ x \in \mathbb{Z} : 0 \leq x \leq n \}$
* $p \in (0, 1), n \in \mathbb{N}$ 
* La [[Esperanza]] es $E[X] = n \cdot p$ y la [[Varianza]] es $Var(X) = n \cdot p \cdot (1 - p)$.

## Relaciones
---
![[Relaciones entre distribuciones#Distribución de Bernoulli y Distribución Binomial]]
