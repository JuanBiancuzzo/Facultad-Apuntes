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
\end{align} $$ donde el resultado es suficientemente largo que es preferible simplemente expresarlo como $$ \begin{align} 
	A_0^6(\bar{q}) &= \prod_{i = 1}^{6} A_{i - 1}^{i}(q_i) &
	A_\text{base}^\text{tool} &= A_\text{base}^0 \cdot A_0^6(\bar{q}) \cdot A_6^\text{tool}
\end{align} $$ y de esto se puede agregar un offset a las variables articulares, para establecer el "$0$" del robot

Para resolver el [[investigación/animation/Cinemática inversa|problema de cinemática inversa]], se necesita encontrar $\bar{q} = (q_1,~ q_2,~ q_3,~ q_4,~ q_5,~ q_6)$, donde vamos a necesitar un array de configuración (ya que no es único) dado por $\text{conf}_1,~ \text{conf}_2,~ \text{conf}_3 \in \set{-1,~ 1}$ resultando $$ \begin{align}
	q_1 &= \text{atan2}\left( \text{conf}_1 ~ \frac{p_y}{\sqrt{p_x^2 + p_y^2}};~ \text{conf}_1 ~ \frac{p_x}{\sqrt{p_x^2 + p_y^2}} \right) \\
	q_2 &= \text{atan2}\left( 
		\frac{(p_x c_1 + p_y s_1 - a_1) ~ d_4 c_3 - p_z (d_4 s_3 + a_2)}{(d_4 c_3)^2 + (d_4 s_3 + a_2)^2};~ 
		\frac{(p_x c_1 + p_y s_1 - a_1)(d_4 s_3 + a_2) + p_z d_4 c_3}{(d_4 c_3)^2 + (d_4 s_3 + a_2)^2} 
	\right) \\
	q_3 &= \text{atan2}\left( s_3;~ \text{conf}_2 ~ \sqrt{1 - s_3^2} \right) \\
	q_4 &= \text{atan2}\left( \text{conf}_3 ~ a'_y;~ \text{conf}_3 ~ a'_x \right) \\
	q_5 &= \text{atan2}\left( \text{conf}_3 \sqrt{1 - c_5^2};~ c_5 \right) \\
	q_6 &= \text{atan2}\left( \text{conf}_3 ~ s'_z;~ -\text{conf}_3 ~ n'_z \right) \\
\end{align} $$ donde $$ \begin{align} 
	s_3 &= \frac{\left( p_x c_1 + p_y s_1 - a_1 \right)^2 + p_z^2 - \left( a_2^2 + d_4^2 \right)}{2 a_2 d_4} &
	c_3 &= \text{conf}_2 ~ \sqrt{1 - s_3^2} \\
	R_3^6(q_4,~ q_5,~ q_6) &= \begin{bmatrix}
		n'_x & s'_x & a'_x \\
		n'_y & s'_y & a'_y \\
		n'_z & s'_z & a'_z
	\end{bmatrix} = \begin{bmatrix}
		\diamond & \diamond & s_5 c_4 \\
		\diamond & \diamond & s_5 s_4 \\
		-s_5 c_6 & s_5 s_6 & c_5
	\end{bmatrix} \\
	s_5 c_4 &= a'_x & s_5 s_4 &= a'_y \\
	c_5 &= a'_z & s_5 &= \text{conf}_3 ~ \sqrt{1 - c_3^2} \\
	-s_5 c_6 &= n'_z & s_5 s_6 &= s'_z \\
\end{align} $$
De acá se obtiene las condiciones de alcansabilidad, ya que $s_3 \in [-1,~ 1]$, por lo tanto $$ \begin{array}{rcl} 
	-1 \le& s_3 &\le 1 \\
	-2 a_2 d_4  \le& \left( p_x c_1 + p_y s_1 - a_1 \right)^2 + p_z^2 - \left( a_2^2 + d_4^2 \right) &\le a_2 d_4 \\
	-2 a_2 d_4 + \left( a_2^2 + d_4^2 \right) \le& \left( p_x c_1 + p_y s_1 - a_1 \right)^2 + p_z^2 &\le a_2 d_4 + \left( a_2^2 + d_4^2 \right) \\
	( d_4 - a_2 )^2 \le& \underbrace{\left( p_x c_1 + p_y s_1 - a_1 \right)^2 + p_z^2}_\text{distancia máxima} &\le ( d_4 + a_2 )^2 \\
\end{array} $$ como también se puede calcular la configuración a partir de las variables articulares $$ \begin{align} 
	\text{conf}_1 &= \text{sign}(d_4 s_{23} + a_2 c_2 + a_1) \\
	\text{conf}_2 &= \text{sign}(c_3) \\
	\text{conf}_3 &= \text{sign}(q_5) \\
\end{align} $$