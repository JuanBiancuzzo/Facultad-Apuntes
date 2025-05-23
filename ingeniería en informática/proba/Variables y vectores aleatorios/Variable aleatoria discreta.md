---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
etapa: ampliar
aliases:
  - Vector aleatorio discreto#Para vector aleatorio
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición 
---
Sea $(\Omega, \mathbb{A}, \mathbb{P})$ un [[Espacio de probabilidad|espacio de probabilidad]] y $X$ una [[Variable aleatoria|variable aleatoria]], diremos que $X$ es una variable aleatoria discreta cuando existe $A \in \mathbb{R}$ finito o infinito numerable tal que $p_X(A) = 1$ donde $p_X(A) = \mathbb{P}(X \in A)$

Una variable aleatoria discreta es aquella cuyos valores posibles constituyen un [[Conjunto|conjunto]] finito o infinito numerable

### Punto de vista de los átomos
---
La variable aleatoria $X$ será discreta si la suma de las probabilidades de todos los [[Átomo|átomos]] es $1$-

### Teorema
---
Sea $X$ una variable aleatoria discreta, entonces usando la [[Función de masa de probabilidad|función de probabilidad]], podemos plantear $$ p_X(B) = \sum_{x \in B} p_X(x) $$
## Para vector aleatorio
---
Un [[Vector aleatorio|vector aleatorio]] $X = [X_1,~ \cdots,~ X_n]^T$ es discreto si está formado únicamente por átomos, es decir, existe un conjunto de puntos $\mathcal{X}$ tal que
* $\forall x \in \mathcal{X}$, $\mathbb{P}(X = x) > 0$
* $\displaystyle \sum_{x \in \mathbb{X}} \mathbb{P}(X = x) = 1$

Donde $\mathcal{X}$ puede ser finito o [[Infinito numerable|infinito numerable]]