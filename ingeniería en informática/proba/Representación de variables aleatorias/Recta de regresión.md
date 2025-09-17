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
etapa: ampliar
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
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En [[Estadística|estadística]], la regresión lineal o ajuste lineal es un modelo matemático usado para aproximar la relación de dependencia entre una variable $y$, $m$ variables independientes $x_i$ con $m \in \mathbb{Z}^+$ u un término independientes $\epsilon$. Intenta resolver un [[Problema de regresión|problema de regresión]], dado $$ y = \beta_1 x_1 + \cdots + \beta_m x_m + \epsilon $$ donde $\beta_i$ con $i \in [1, ~\cdots,~m]$, son parámetros del modelo

Esto se puede expresar usando un [[ingeniería en informática/proba/Variables y vectores aleatorios/Vector aleatorio|vector aleatorio]] de la siguiente forma $$ Y = \beta^T X + \epsilon $$
Se busca encontrar $\beta$ y $\epsilon$ tal que $$ (\beta,~ \epsilon) = \underset{\beta \in \mathbb{R}^{m},~ \epsilon \in \mathbb{R}}{\arg\min} \frac{1}{n} \sum_{i = 1}^{n} l(X_i,~ Y_i) $$ donde $l(x,~ y)$ es la [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|función de costo]]

Utilizando como función de costo al [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|error cuadrático medio]], se puede definir esta ecuación como un problema de [[ingeniería en informática/algebra 2/Espacios euclídeos/Proyección ortogonal|proyección ortogonal]], planteando de forma vectorial, definiendo $X \in \mathbb{R}^{n + 1}$ e $y \in \mathbb{R}^n$ y $w \in \mathbb{R}^{m + 1}$ de la siguiente forma $$ X = \begin{bmatrix} 1 & x_1^T \\ 1 & x_2^T \\ \vdots & \vdots \\ 1 & x_n^T \end{bmatrix}, ~~~  y =\begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}, ~~~  w =\begin{bmatrix} \epsilon \\ \beta_1 \\ \vdots \\ \beta_m \end{bmatrix} $$por lo tanto el problema de minimización se reduce a minimizar $$ J(w) = \frac{1}{n} \lVert Xw - y \rVert^2 $$ donde asumimos que $n \gg m$, esto es una suposición entendible ya que recordemos que $n$ son la cantidad de datos y $m$ la cantidad de parámetros que se necesite

Cuyo [[ingeniería en informática/analisis 2/Funciones de varias variables/Gradiente|gradiente]] y [[ingeniería en informática/analisis 2/Funciones de varias variables/Matriz Hessiana|matriz Hessiana]] respecto a $w$ son $$ \nabla J(w) = \frac{2}{n} X^T (Xw - y),~~~~ \mathcal{H}_J(w) = \frac{2}{n} X^T X $$ donde por la suposición la matriz Hessiana es inversible

> [!demostracion]- Demostración
> Pendiente...

En este caso como la matriz Hessiana al ser una [[ingeniería en informática/algebra 2/Matrices unitarias y ortogonales/Matriz definida positiva|matriz definida positiva]], y por lo tanto el problema será [[ingeniería en informática/analisis 2/Topología/Conjunto convexo|convexo]] por lo tanto al igualar el gradiente siendo $0$ será efectivamente un mínimo. Despejando $w$ del gradiente igualado a $0$ se obtiene $$ w = \left( X^T X \right)^{-1} ~ X^T y $$ la solución es la [[Matriz psudoinversa|matriz psudoinversa]] de la matriz $X$ multiplicada por $y$
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
Esta representación simple permite limitar al máximo la complejidad del modelo, relacionado al [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^gap-generalizacion|gap de generalización]], y si ajustamos a unos datos, podemos minimizar el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-empirico|riesgo empírico]]

Sea $\Set{(x_i,~ y_i)}_{i = 1}^{n}$ un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de datos con $x_i \in \mathbb{R}^d$ e $y_i \in \mathbb{R}$. Planteamos la hipótesis de este modelo, que establece $$ h_\theta \left( \overline{x} \right) = \theta^t \cdot \overline{x} $$ donde $\overline{x}$ es una muestra y $\theta$ es el parámetro que queremos aprender

En este caso se puede resolver de forma directa usando el resultado analítico obtenido anteriormente, o se puede encontrar de forma numérica con el [[Descenso de gradiente|descenso de gradiente]] 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```