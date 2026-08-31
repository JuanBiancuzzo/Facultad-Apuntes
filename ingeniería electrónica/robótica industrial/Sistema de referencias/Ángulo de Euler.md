---
dia: 2026-08-26
etapa: empezado
referencias: []
aliases:
  - Ángulo de Tait-Bryan
  - Ángulo de navegación
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Sistema-de-referencias
  - nota/facultad
vinculoFacultad:
  - tema: Sistema de referencias
    capitulo: 2
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Representa una [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]] dada por la composición de $3$ rotaciones, particularmente en el caso de existir en un espacio de $3$ [[ingeniería en informática/algebra 2/Espacios Vectoriales/Dimensión|dimensiones]], de forma sucesivas alrededor de $3$ ejes [[ingeniería en informática/algebra 2/Espacios Vectoriales/Linealmente independiente|linealmente independientes]], donde estos $3$ angulos los definiremos como $( \varphi, \theta, \psi )$ 

Dado los [[ingeniería electrónica/robótica móvil/Repaso álgebra/Vector|versores]] $\hat{x}$, $\hat{y}$ y $\hat{z}$, se tiene las combinaciones de rotaciones dadas por 

|       Ángulos de Euler        |     Ángulos de Tait-Bryan     |
| :---------------------------: | :---------------------------: |
| $\hat{z} ~ \hat{y} ~ \hat{z}$ | $\hat{x} ~ \hat{y} ~ \hat{z}$ |
| $\hat{z} ~ \hat{x} ~ \hat{z}$ | $\hat{y} ~ \hat{z} ~ \hat{x}$ |
| $\hat{y} ~ \hat{z} ~ \hat{y}$ | $\hat{z} ~ \hat{x} ~ \hat{y}$ |
| $\hat{y} ~ \hat{x} ~ \hat{y}$ | $\hat{z} ~ \hat{y} ~ \hat{x}$ |
| $\hat{x} ~ \hat{z} ~ \hat{x}$ | $\hat{x} ~ \hat{z} ~ \hat{y}$ |
| $\hat{x} ~ \hat{y} ~ \hat{x}$ | $\hat{y} ~ \hat{x} ~ \hat{z}$ |

Tomando la convensión de $\hat{z} ~ \hat{y} ~ \hat{z}$, por lo tanto se puede representar estos ángulos de Euler como la matriz de rotación $$ R( \varphi, \theta, \psi ) = R(\hat{z},~ \varphi) ~ R(\hat{y},~ \theta) ~ R(\hat{z},~ \psi) $$
En el caso de obtener de una matriz de rotación, los $3$ ángulos, se tiene $$ \begin{align}
	\theta &= \arccos(R_{3,3}) \\
	\varphi &= \arccos\left( \frac{R_{1,3}}{\sin\theta} \right) \\
	\psi &= \arccos\left( -\frac{R_{3,1}}{\sin\theta} \right) \\
\end{align} $$ donde se toma que $R_{i,j}$ donde $i$ es la fila (empezando en $1$) y $j$ es la columna (nuevamente, empezando en $1$)

Notemos que al ver este caso inverso, se vé que si $\theta = 0$ y por consecuencia $\sin\theta = 0$, existe una [[ingeniería electrónica/analisis 3/Series de Laurent/Singularidad|singularidad]] en la solución de los ángulos

De forma más robusta, se tiene $$ \begin{align}
	\varphi_1 &= \text{atan}2\left( R_{2,3},~ R_{1,3} \right) & \varphi_2 &= \varphi_1 \pm \pi \\
	\theta &= \text{atan}2\left( R_{1,3} ~ \cos\varphi + R_{2,3} ~ \sin\varphi,~ R_{3,3} \right) \\
	\psi &= \text{atan}2\left( -R_{1,1} ~ \sin\varphi + R_{2,1} ~ \cos\varphi,~ -R_{1,2} ~ \sin\varphi + R_{2,2} ~ \cos\varphi \right) \\
\end{align} $$