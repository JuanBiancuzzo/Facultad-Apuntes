---
dia: 2026-10-09
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 723
etapa: empezado
---
# Enunciado
---
Se desean realizar los siguientes [[Movimiento Joint|movimientos Joint]], en el [[Robot FANUC LR Mate 200iD|robot FANUC LR Mate 200iD]], tal que
* Parte de reposo de la posición de ejes $q_0$
* Luego va hacia $q_1$ en un tiempo deseado de $0.5 \cdot a$ , pasando sin detenerse
* Por último va a $q_2$ a velocidad máxima, deteniéndose en el punto

Las expresiones de las posiciones de los ejes en grados son $$ \begin{align} 
	q_0 &= \begin{bmatrix} -150 &  0 &    0 & 0 &  0 &  180 \end{bmatrix}^T \\
	q_1 &= \begin{bmatrix}  150 & 45 & 30.2 & 0 &  0 & -180 \end{bmatrix}^T \\
	q_2 &= \begin{bmatrix} 39.5 &  0 & 30.2 & 0 & 10 &  -90 \end{bmatrix}^T \\
\end{align} $$

Considerar que el tiempo de aceleración es de $100 ~ \text{ms}$, y las especificaciones de movimiento están en la siguiente tabla ![[ingeniería electrónica/robótica industrial/Cinemática y estática/Robot FANUC LR Mate 200iD#^parametros|Robot FANUC LR Mate 200iD]]

Se pide para el segundo eje, un gráfico completo de las curvas de posicón, velocidad y aceleración en función del tiempo. ¿Qué tiempo empleará en realizar el recorrido propuesto?

# Resolución
---

