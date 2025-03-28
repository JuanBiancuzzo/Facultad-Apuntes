---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - nota/colección
  - distribuciones/discreta
nombreDistribucion: Hipergeométrica
tipoDistribucion: discreta
---
# Definición
---
Hipergeométrica modela la cantidad de éxitos en $n$ extracciones sin reposición de una población de tamaño total $N$, de los cuales $d$ individuos son éxito y $N - d$ individuos no lo son.

Se dice que una [[Variable aleatoria]] $X$ tiene distribución Hipergeométrica de parametros $N$, $d$ y $n$ si su [[Función de masa de probabilidad]] es $$ p_X(x) = \frac{\dbinom{d}{x} \dbinom{N - d}{n - x}}{\dbinom{N}{n}} $$

### Notación
$$ X \sim H(N, d, n) $$

## Notas
---
* El [[Rango de una variable aleatoria|rango]] de $X$ es $R_X = \{ x \in \mathbb{Z} : max\{ 0, d + n - N \} \leq x \leq min\{ n, d \} \}$.
* $d \leq N$, $n \leq N \in \mathbb{N}$
* La [[Esperanza]] es $E[X] = \displaystyle\frac{n \cdot d}{N}$ y la [[Varianza]] es $Var(X) = \displaystyle\frac{n \cdot d \cdot (N - d) \cdot (N - n)}{N^2 \cdot (N - 1)}$.