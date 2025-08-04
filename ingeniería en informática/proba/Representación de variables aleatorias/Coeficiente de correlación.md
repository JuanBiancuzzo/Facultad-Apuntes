---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
aliases:
  - Correlación lineal
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería electrónica/estoca/Distribuciones multivariables/Resumen.md]]"
  - "[[ingeniería en informática/proba/Representación de variables aleatorias/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición 
---
La forma de interpretar la [[Covarianza cruzada|covarianza]], entre las [[Variable aleatoria|variable aleatoria]] $X$ e $Y$ esta dada por $$ \rho_{XY} = \frac{Cov(X, Y)}{\sqrt{Var(X) \cdot Var(Y)}} $$ notemos como se usa la [[Varianza|varianza]] de cada variable

## Observación
---
El coeficiente esta definido para $\rho_{XY} \in [-1, 1]$. Donde $$ |\rho_{XY}| = 1 \Leftrightarrow \mathbb{P}(a \cdot X + b = Y) = 1$$ ese decir que hay una correlación lineal entre las variables, donde si es igual a $0$ significa que no hay correlación **lineal** entre las variables