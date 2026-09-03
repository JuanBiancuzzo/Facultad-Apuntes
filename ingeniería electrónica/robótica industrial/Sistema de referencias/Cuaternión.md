---
dia: 2026-08-31
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Sistema-de-referencias
  - nota/facultad
ejercicios: 
  - 623
  - 624
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
Es una forma en la cual se puede rerpesentar una [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]], y también se puede entender como una extensión de los [[Número complejo|numeros complejos]] para $4$ [[ingeniería en informática/algebra 2/Espacios Vectoriales/Dimensión|dimensiones]], donde se definen como $$ Q = g + q_x ~ i + q_y ~ j + q_z ~ k $$ donde $i^2 = j^2 = k^2 = ijk = -1$

En el caso de una rotación, se puede expresar como un ángulo $\theta$ y una dirección $\vec{k}$ de la forma $$ Q = \left( \cos\frac{\theta}{2},~ \sin\frac{\theta}{2} ~ \vec{k} \right) $$ donde existe la restricción $\lVert Q \rVert = 1$, obteniendo $3$ [[investigación/animation/Grado de libertad|grados de libertad]]

Tiene la propiedad que la multiplicación de cuaterniones, representa la concatenación de rotaciones, ya sea utilizando la expresión vectorial, siendo $Q_1 = (g_1,~ \vec{q}_1)$ y $Q_2 = (g_2,~ \vec{q}_2)$ entonces $$ Q_1 \cdot Q_2 = (g_1 g_2 - \vec{q}_1 \cdot \vec{q}_2,~ g_1 ~ \vec{q}_2 + g_2 ~ \vec{q}_1 + \vec{q}_1 \times \vec{q}_2) $$
Como también utilizando las relaciones $$ \begin{matrix}
	ij = -ji = k  && jk = -kj = i && ki = -ik = j
\end{matrix} $$
Donde si se busca tener la rotación de un vector $\vec{r}$, utilizando un cuaternión, se puede obtener de forma vectorial $$ \vec{r}' = \vec{r} + 2g ~ (\vec{q} \times \vec{r}) + 2 \vec{q} \times (\vec{q} \times \vec{r}) $$
De esta forma, se puede generar la matriz de rotación utilizando los versores $\hat{x}$, $\hat{y}$ y $\hat{z}$, obteniendo $$ R(Q) = \begin{bmatrix}
	2 q_x q_x + 2g^2 - 1 & 2q_x q_y - 2 g q_z & 2q_x q_z + 2 g q_y \\
	2q_x q_y + 2 g q_z & 2 q_y q_y + 2g^2 - 1 & 2q_z q_y - 2 g q_x \\
	2q_x q_z - 2 g q_y & 2q_y q_z + 2 g q_x & 2 q_z q_z + 2g^2 - 1 \\
\end{bmatrix} $$

