---
dia: 2023-01-23
tags:
  - proba/Representación-de-variables-aleatorias
  - nota/facultad
  - orga/Machine-learning
  - machine-Learning
aliases:
  - Regresión lineal
  - Ajuste lineal
referencias:
  - "308"
---
# Definición
---
En [[Estadística|estadística]], la regresión lineal o ajuste lineal es un modelo matemático usado para aproximar la relación de dependencia entre una variable $y$, $m$ variables independientes $x_i$ con $m \in \mathbb{Z}^+$ u un término independientes $\epsilon$. Intenta resolver un [[Problema de regresión|problema de regresión]], dado $$ y = \beta_0 + \beta_1 x_1 + \cdots + \beta_m x_m + \epsilon $$ donde $\beta_i$ con $i \in [0, ~\cdots,~m]$, son parámetros del modelo

## Punto de vista de la probabilidad
---
Es la [[Función de variable aleatoria#Para Vector aleatorio|función de vector aleatorio]] $g(X)$ tal que sea una [[Predicción|predicción]] lineal de la [[Variable aleatoria|variable aleatoria]] $Y$, donde $g(X)$ esta dada por $$ g(X) = \frac{Cov(X, Y)}{Var(X)} \cdot (X - E[X]) + E[Y] $$
## Punto de vista de la computación
---
Planteamos la hipótesis de este modelo, que establece $$ h_\theta \left( \overline{x} \right) = \theta^t \cdot \overline{x} $$
donde $\overline{x}$ es una muestra y $\theta$ es el parámetro que queremos aprender

Podemos encontrarlo de forma numérica con el [[Descenso de gradiente|descenso de gradiente]] 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```