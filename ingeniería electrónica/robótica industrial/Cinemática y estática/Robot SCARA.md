---
dia: 2026-09-15
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Cinemática-y-estática
  - nota/facultad
ejercicios: 
  - 677
  - 678
  - 679
  - 680
  - 682
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
El [[investigación/robótica/robótica industrial/Robótica industrial|robot industrial]] SCARA (por las siglas en inglés Selective Compliant Articulated Robot Arm), fue creado por la empresa ABB, con $4$ [[investigación/animation/Grado de libertad|grados de libertad]], $3$ de [[Translación|translación]] y uno de [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]]

![[ingeniería electrónica/robótica industrial/Cinemática y estática/img/Robot SCARA.png|400]]

Con [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática#Asignación de ternas|parámetros DH]] dados por la tabla $$ \begin{array}{c|c} 
	~i~ & \theta & d & a & ~\alpha~ \\\hline
	1 & q_1 & d_1 & a_1 & 0 \\\hline
	2 & q_2 & d_2 & a_2 & 0 \\\hline
	3 & 0 & q_3 & 0 & 0 \\\hline
	4 & q_4 & d_4 & 0 & 0 
\end{array} $$ donde se toma la [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] $0$, en la base del robot

Vamos a modificar esta table, donde por medio de $2$ nuevas [[ingeniería en informática/algebra 2/Transformaciones lineales/Rototranslación|matriz de rototranslación]] $A_\text{base}^0$ y $A_4^\text{tool}$, podemos simplicar la tabla de parámetros, signando $d_1 = d_2 = d_4 = 0$, donde la matriz de base a la terna $0$ está dada por una traslación $T(\hat{z}_0,~ d_1)$ y la matriz de la terna $4$ a la tool por una translación $T(\hat{z}_3,~ d_4 - d_2 ~ (\hat{z}_1 \cdot \hat{z}_3))$ 

Con esta nueva tabla se tienen el [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática directa|problema de cinemática directo]] resulto dando las matrices de rototranslación $$ \begin{align}
	A_\text{base}^0 &= \begin{bmatrix}
		1 & 0 & 0 & 0 \\
		0 & 1 & 0 & 0 \\
		0 & 0 & 1 & d_1 \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix} &
	A_0^1 &= \begin{bmatrix}
		c_1 & -s_1 & 0 & a_1 c_1 \\
		s_1 &  c_1 & 0 & a_1 s_1 \\
		  0 &    0 & 1 &       0 \\
		  0 &    0 & 0 &       1 \\
	\end{bmatrix} &
	A_1^2 &= \begin{bmatrix}
		c_2 & -s_2 & 0 & a_2 c_2 \\
		s_2 &  c_2 & 0 & a_2 s_2 \\
		  0 &    0 & 1 &       0 \\
		  0 &    0 & 0 &       1 \\
	\end{bmatrix} \\
	A_2^3 &= \begin{bmatrix}
		1 & 0 & 0 & 0 \\
		0 & 1 & 0 & 0 \\
		0 & 0 & 1 & q_1 \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix} &
	A_3^4 &= \begin{bmatrix}
		c_4 & -s_4 & 0 & 0 \\
		s_4 &  c_4 & 0 & 0 \\
		  0 &    0 & 1 & 0 \\
		  0 &    0 & 0 & 1 \\
	\end{bmatrix} &
	A_4^\text{tool} &= \begin{bmatrix}
		1 & 0 & 0 &         0 \\
		0 & 1 & 0 &         0 \\
		0 & 0 & 1 & d_4 - d_2 \\
		0 & 0 & 0 &         1 \\
	\end{bmatrix} 
\end{align} $$ resultando finalmente en las matrices $$ \begin{align} 
	A_0^4 &= \begin{bmatrix}
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

Para resolver el [[investigación/animation/Cinemática inversa|problema de cinemática inversa]], se necesita encontrar $\bar{q} = (q_1,~ q_2,~ q_3,~ q_4)$, donde vamos a necesitar un array de configuración (ya que no es único) dado por $\text{conf} \in \set{-1,~ 1}$ resultando $$ \begin{array}{cc}
	\begin{aligned}
		q_1 &= \text{atan2}\left( \frac{a_2 ~ (p_y c_2 - p_x s_2) + a_1 p_y}{p_x^2 + p_y^2};~ \frac{a_2 ~ (p_y c_2 + p_x s_2) + a_1 p_x}{p_x^2 + p_y^2} \right) \\
		q_2 &= \text{atan2}\left( \text{conf} ~ \sqrt{1 - c_2^2};~ c_2 \right) \\
		q_3 &= p_z \\
		q_4 &= \text{atan2}(s_{124};~ c_{124}) - q_1 - q_2
	\end{aligned} & \begin{aligned} 
		c_2 &= \frac{p_x^2 + p_y^2 - \left( a_1^2 + a_2^2 \right)}{2 a_1 a_2} \\
		s_2 &= \text{conf} ~ \sqrt{1 - c_2^2} \\
	\end{aligned}
\end{array} $$
De acá se obtiene las condiciones de alcansabilidad, ya que $c_2 \in [-1,~ 1]$ y $p_x^2 + p_y^2 > 0$, por lo tanto $$  0 < (a_1 - a_2)^2 \le p_x^2 + p_y^2 \le (a_1 + a_2)^2 $$ como también se puede calcular la configuración a partir de las variables articulares $$ \text{conf} = \text{sign}(q_2) $$