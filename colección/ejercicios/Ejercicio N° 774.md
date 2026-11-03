---
dia: 2026-11-03
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 774
etapa: empezado
---
# Enunciado
---
Para el [[Robot MyCobot Pro-600|robot MyCobot Pro-600]], con datos en la tabla ![[ingeniería electrónica/robótica industrial/Cinemática y estática/Robot MyCobot Pro-600#^parametros]] se desa realizar con este robot un [[ingeniería electrónica/robótica industrial/Generación de trayectorias/Interpolación Joint|movimiento Joint]] 
* Parte de reposo en $q_0$
* Luego va hacia $q_1$ en un tiempo deseado $t_d = 0.5 ~ \text{s}$, pasando sin detenerse
* Por último va a $q_2$ a velocidad máxima, deteniéndose en el punto

Las expresiones de las posiciones de los ejes en grados son $$ \begin{align}
	q_0 &= \begin{bmatrix} -115 &  0 &  0 & 0 &  0 &  170 \end{bmatrix}^T \\
	q_1 &= \begin{bmatrix}  115 & 45 & 35 & 0 &  0 & -170 \end{bmatrix}^T \\
	q_2 &= \begin{bmatrix}   45 &  0 & 35 & 0 & 10 &  -90 \end{bmatrix}^T \\
\end{align} $$


Considerar que el tiempo de aceleración es de $t_{acc} = 200 ~ \text{ms}$, y las especificaciones en la tabla. Se pide para el segundo eje, un gráfico completo de las curvas de posición, velocidad y aceleración en función del tiempo

¿Qué tiempo empleará en realizar el recorrido propuesto?

# Resolución
---

