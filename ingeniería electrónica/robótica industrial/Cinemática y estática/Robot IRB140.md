---
dia: 2026-09-15
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Cinemática-y-estática
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El [[investigación/robótica/robótica industrial/Robótica industrial|robot industrial]] IRB140, fue creado por la empresa ABB, con $6$ [[investigación/animation/Grado de libertad|grados de libertad]], $3$ de [[Translación|translación]] y $3$ de [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]]

![[ingeniería electrónica/robótica industrial/Cinemática y estática/img/Robot IRB140.png|400]]

Con [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática#Asignación de ternas|parámetros DH]] dados por la tabla $$ \begin{array}{c|c} 
	~i~ & \theta & d & a & ~\alpha~ \\\hline
	1 & q_1 & d_1 & a_1 & -\frac{\pi}{2} \\\hline
	2 & q_2 & 0 & a_2 & 0 \\\hline
	3 & q_3 & 0 & 0 & \frac{\pi}{2} \\\hline
	4 & q_4 & d_4 & 0 & -\frac{\pi}{2} \\\hline
	5 & q_5 & 0 & 0 & \frac{\pi}{2} \\\hline
	6 & q_6 & d_6 & 0 & 0 
\end{array} $$ donde se toma la [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] $0$, en la base del robot

Vamos a modificar esta table, donde por medio de $2$ nuevas [[ingeniería en informática/algebra 2/Transformaciones lineales/Rototranslación|matriz de rototranslación]] $A_\text{base}^0$ y $A_6^\text{tool}$, podemos simplicar la tabla de parámetros, signando $d_1 = d_6 = 0$, donde la matriz de base a la terna $0$ está dada por una traslación $T(\hat{z}_0,~ d_1)$ y la matriz de la terna $6$ a la tool por una translación $T(\hat{z}_5,~ d_4)$ 

Con esta nueva tabla se tienen el [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática Directa|problema de cinemática directo]] resulto dando las matrices de rototranslación $$ \begin{align}
	A_\text{base}^0 &= \begin{bmatrix}
		1 & 0 & 0 & 0 \\
		0 & 1 & 0 & 0 \\
		0 & 0 & 1 & d_1 \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix} &
	A_0^1 &= \begin{bmatrix}
		c_1 &  0 & -s_1 & a_1 c_1 \\
		s_1 &  0 &  c_1 & a_1 s_1 \\
		  0 & -1 &   0 &       0 \\
		  0 &  0 &   0 &       1 \\
	\end{bmatrix} &
	A_1^2 &= \begin{bmatrix}
		c_2 & -s_2 & 0 & a_2 c_2 \\
		s_2 &  c_2 & 0 & a_2 s_2 \\
		  0 &    0 & 1 &       0 \\
		  0 &    0 & 0 &       1 \\
	\end{bmatrix} \\
	A_2^3 &= \begin{bmatrix}
		c_3 & 0 &  s_3 & 0 \\
		s_3 & 0 & -c_3 & 0 \\
		  0 & 1 &   0 &  0 \\
		  0 & 0 &   0 &  1 \\
	\end{bmatrix} &
	A_3^4 &= \begin{bmatrix}
		c_4 &  0 & -s_4 &   0 \\
		s_4 &  0 &  c_4 &   0 \\
		  0 & -1 &   0 &  d_4 \\
		  0 &  0 &   0 &    1 \\
	\end{bmatrix} &
	A_4^5 &= \begin{bmatrix}
		c_5 & 0 &  s_5 & 0 \\
		s_5 & 0 & -c_5 & 0 \\
		  0 & 1 &   0 &  0 \\
		  0 & 0 &   0 &  1 \\
	\end{bmatrix} \\
	A_5^6 &= \begin{bmatrix}
		c_6 & -s_6 & 0 & 0 \\
		s_6 &  c_6 & 0 & 0 \\
		  0 &    0 & 1 & 0 \\
		  0 &    0 & 0 & 1 \\
	\end{bmatrix} &
	A_6^\text{tool} &= \begin{bmatrix}
		1 & 0 & 0 &   0 \\
		0 & 1 & 0 &   0 \\
		0 & 0 & 1 & d_6 \\
		0 & 0 & 0 &   1 \\
	\end{bmatrix} 
\end{align} $$ resultando finalmente en las matrices $$ \begin{align} 
	A_0^6 &= \begin{bmatrix}
		c_{124} & -s_{124} & 0 & a_1 c_1 + a_2 c_{12} \\
		s_{124} &  c_{124} & 0 & a_1 s_1 + a_2 s_{12} \\
		      0 &        0 & 1 &                  q_3 \\
		      0 &        0 & 0 &                    1 \\
	\end{bmatrix} &
	A_\text{base}^\text{tool} &= \begin{bmatrix}
		c_{124} & -s_{124} & 0 &  a_1 c_1 + a_2 c_{12} \\
		s_{124} &  c_{124} & 0 &  a_1 s_1 + a_2 s_{12} \\
		      0 &        0 & 1 & d_1 + d_4 - d_2 + q_3 \\
		      0 &        0 & 0 &                     1 \\
	\end{bmatrix}
\end{align} $$donde tomamos la convención de escribir $\cos q_1 = c_1$ y $\cos(q_1 + q_2) = c_{12}$ para simplificar la escritura
