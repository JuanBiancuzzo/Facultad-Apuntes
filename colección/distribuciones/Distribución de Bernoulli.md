---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Proceso-de-Bernoulli
  - distribucion/discreta
  - carrera/ingeniería-electrónica/proba/Proceso-de-Bernoulli
---
# Definición
---
Bernoulli modela un experimento con dos resultados posibles, asignado el valor $1$ a la ocurrencia del [[Evento|evento]] estudiado (que en general se lo llama éxito y tiene probabilidad $p$) y $0$ a la no ocurrencia del mismo (con probabilidad $1 - p$).

Se dice que una [[Variable aleatoria|variable aleatoria]] $X$ tiene distribución de Bernoulli de parámetro $p$ si su [[Función de probabilidad|función de probabilidad]] es $$ p_X(x) = p^x \cdot (1 - p)^{1 - x}$$
### Notación
$$ X \sim Ber(p) $$

## Notas
---
* El [[Rango de una variable aleatoria|rango]] de $X$ es $R_X = \{ 0, 1 \}$
* $p \in (0, 1)$ 
* La [[Esperanza|esperanza]] es $E[X] = p$ y la [[Varianza|varianza]] es $Var(X) = p \cdot (1 - p)$


## Relaciones
---
![[Relaciones entre distribuciones#Distribución de Bernoulli y Distribución Binomial]]

![[Relaciones entre distribuciones#Distribución de Bernoulli y Distribución Geométrica]]
