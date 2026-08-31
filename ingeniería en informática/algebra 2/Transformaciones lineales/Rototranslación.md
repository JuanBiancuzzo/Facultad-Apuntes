---
dia: 2026-08-31
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - carrera/ingeniería-electrónica/algebra-2/Transformaciones-lineales
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Transformaciones lineales
    capitulo: 2
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se puede expresar una rototranslación, que combina una [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]] $R_{0}^{1}$ con una [[Translación|translación]] $\vec{p}_{01}$, en una única [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] de la siguiente forma $$ A_0^1 = \begin{bmatrix}
	R_0^1 & \vec{p}_{01} \\
	\vec{0}^T & 1
\end{bmatrix} $$
Donde si se busca transladar y rotar un [[ingeniería electrónica/robótica móvil/Repaso álgebra/Vector|vector]] en la [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] $1$, $\vec{r}^1$, a la terna $0$, se logra $$ \begin{align}
	\begin{bmatrix} 
		\vec{r}^0 \\ 1 
	\end{bmatrix} &= \begin{bmatrix}
		R_0^1 & \vec{p}_{01} \\
		\vec{0}^T & 1
	\end{bmatrix} ~ \begin{bmatrix} 
		\vec{r}^1 \\ 1 
	\end{bmatrix}
\end{align} $$

Se puede representar la rototranslación inversa como $$ \left( A_0^1 \right)^{-1} = \begin{bmatrix}
	\left( R_0^1 \right)^T & -\left( R_0^1 \right)^T \vec{p}_{01} \\
	\vec{0}^T & 1
\end{bmatrix}$$

