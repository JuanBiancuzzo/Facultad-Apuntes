---
etapa: sin-empezar
dia: 2026-07-22
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 219
---
# Enunciado
---
Se entrenó un [[Filtro colaborativo|filtro colaborativo]] con la siguiente base de datos $$ \begin{array}{c | c | c | c } 
	& \text{Andrea} & \text{Bruno} & \text{Camila} \\\hline
\text{Item} ~ 1 & ~ & 1 & 1 \\ 
\text{Item} ~ 2 & 0 & 1 & ~ \\ 
\text{Item} ~ 3 & ~ & ~ & 0 \\ 
\text{Item} ~ 4 & 1 & 0 & ~ \\ 
\text{Item} ~ 5 & ~ & 1 & 1 \\ 
\end{array} $$ donde se desea hacer una recomendación a Camila sobre el ítem $4$ 

El [[investigación/ciencias de la computación/algoritmos/Algoritmo|algoritmo]] aprendió $\theta_C = \begin{bmatrix} -0.5 & -0.5 \end{bmatrix}$ para Camila y $x_4 = \begin{bmatrix} 0.25 & 0.25 \end{bmatrix}$ para el ítem $4$

Indicar el ranking de recomendación de manera que la salida del filtro posea el doble del peso de la clasificación media

# Resolución
---

