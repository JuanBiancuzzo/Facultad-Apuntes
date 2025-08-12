---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
aliases:
  - PMF marginal
etapa: ampliar
vinculoFacultad:
  - tema: Distribuciones multivariables
    capitulo: 2
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Variables y vectores aleatorios
    capitulo: 2
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado una [[Función de masa de probabilidad#Para variable aleatoria|función de probabilidad conjunta]] $p_{X, Y}$ se define la función de probabilidad marginal como $$ \begin{align}
	p_X(x) &= \sum_y p_{X, Y}(x, y) \\
	p_Y(y) &= \sum_x p_{X, Y}(x, y)
\end{align} $$
## Marginalización
---
De forma análoga al caso [[Función de densidad marginal|continuo]], podemos marginalizar la [[Función de masa de probabilidad#Para vector aleatoria|PMF conjunta]] para obtener las PMFs marginales. Por ejemplo $$ \begin{align}
    p_{X_1}(x_1) &= \sum_{x_2: ~ (x_1,~ x_2) \in \mathcal{X}} p_{X_1,~ X_2}(x_1,~ x_2) \\
    p_{X_3}(x_3) &= \sum_{(x_1,~ x_2): ~ (x_1,~ x_2,~ x_3) \in \mathcal{X}} p_{X_1,~ X_2,~ X_3}(x_1,~ x_2,~ x_3) \\
    p_{X_1,~ X_3}(x_1,~ x_3) &= \sum_{(x_2,~ x_4): ~ (x_1,~ x_2,~ x_3,~ x_4) \in \mathcal{X}} p_{X_1,~ X_2,~ X_3,~ X_4}(x_1,~ x_2,~ x_3,~ x_4) \\
\end{align} $$