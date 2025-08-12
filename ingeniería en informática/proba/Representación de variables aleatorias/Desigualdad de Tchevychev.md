---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
etapa: ampliar
referencias: []
aliases:
  - Desigualdad de Chebycheff
  - Desigualdad de Tchevychev generalizada#Generalización
  - Desigualdad de Chebycheff generalizada#Generalización
vinculoFacultad:
  - tema: Análisis de datos
    capitulo: 3
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Representación de variables aleatorias
    capitulo: 3
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Sea $X$ una [[Variable aleatoria|variable aleatoria]] con [[Varianza|varianza]] finita, con $k \in \mathbb{R}_{>0}$, entonces $$ \forall k > 0, ~~~~ \mathbb{P}(|X - E[X]| \geq k) \leq \frac{Var(X)}{k^2} $$

> [!observacion]+ Observación 5.2.10  
> Se puede ver que la desigualdad de Tchevychev es un caso especifico de la [[Desigualdad de Markov|desigualdad de Markov]] donde $Y = X - E[X]$ y $h(t) = t^2$
^obs-5-2-10

## Generalización
---
Si $X$ e $Y$ son variables aleatorias, con $k \in \mathbb{R}_{>0}$, entonces $$ \mathbb{P}(|X - Y| \ge k) \le \frac{E\left[ (X - Y)^2 \right]}{k^2} $$ donde recordemos que $E\left[ (X - Y)^2 \right]$ es el [[Consistencia en media cuadrática|error cuadrático medio]] entre $X$ e $Y$