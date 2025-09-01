---
dia: 2023-01-23
tags:
  - "#investigación/matemática/Estadística/Machine-learning"
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - investigación/ciencias-de-la-computación/Machine-learning
  - investigación/machine-Learning
  - nota/facultad
  - nota/investigacion
aliases:
  - Regresión lineal
  - Ajuste lineal
referencias:
  - "308"
etapa: empezado
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Representación de variables aleatorias
    capitulo: 3
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En [[Estadística|estadística]], la regresión lineal o ajuste lineal es un modelo matemático usado para aproximar la relación de dependencia entre una variable $y$, $m$ variables independientes $x_i$ con $m \in \mathbb{Z}^+$ u un término independientes $\epsilon$. Intenta resolver un [[Problema de regresión|problema de regresión]], dado $$ y = \beta_0 + \beta_1 x_1 + \cdots + \beta_m x_m + \epsilon $$ donde $\beta_i$ con $i \in [0, ~\cdots,~m]$, son parámetros del modelo

Esto se puede expresar usando un [[ingeniería en informática/proba/Variables y vectores aleatorios/Vector aleatorio|vector aleatorio]] de la siguiente forma $$ Y = \beta X + \epsilon $$
## Punto de vista de la probabilidad
---
> [!teorema]+ Teorema 7.1.1 (Recta de regresión) 
> Dado el [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|error cuadrático medio]], y tomando como $Y$ la distribución a aproximar, se da la siguiente [[Inecuación|inecuación]] $$ ECM(Y,~ \beta X + \epsilon) \ge var(Y) - \frac{cov(X,~ Y)^2}{var(X)} $$ con igualdad sii $$ \beta X + \epsilon = \frac{cov(X,~ Y)}{var(X)} (X - E[X]) + E[Y] $$
> 
> > [!demostracion]- Demostración
> > Para demostrarlo, notar que la función a minimizar es $$ E\left[ Y^2 \right] + \beta^2 E\left[ X^2 \right] + \epsilon^2 - 2\beta E[X Y] - 2\epsilon E[Y] + 2\epsilon\beta E[X] $$
> > 
> > Para buscar el mínimo, se puede igualar a cero las derivadas respecto de $\beta$ y $\epsilon$ $$ 2\beta E\left[ X^2 \right] + 2 E[X Y] + 2\epsilon E[X] = 2\epsilon - 2E[Y] + 2\beta E[X] = 0 $$
> > 
> > De este se puede encontrar que $\epsilon = E[Y] - \beta E[X]$ y reemplazándolo $$ \beta E\left[ X^2 \right] - E[X Y] + E[X] ~ E[Y] - \beta E[X]^2 \implies \beta = \frac{cov(X,~ Y)}{var(X)} $$
^teo-7-1-1

Por lo tanto, la recta de regresión es la [[Función de variable aleatoria#Para Vector aleatorio|función de vector aleatorio]] $g(X)$ tal que sea una [[Predicción|predicción]] lineal de la [[Variable aleatoria|variable aleatoria]] $Y$, donde $g(X)$ esta dada por $$ g(X) = \frac{Cov(X, Y)}{Var(X)} \cdot (X - E[X]) + E[Y] $$

## Punto de vista de la computación
---
Planteamos la hipótesis de este modelo, que establece $$ h_\theta \left( \overline{x} \right) = \theta^t \cdot \overline{x} $$
donde $\overline{x}$ es una muestra y $\theta$ es el parámetro que queremos aprender

Podemos encontrarlo de forma numérica con el [[Descenso de gradiente|descenso de gradiente]] 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```