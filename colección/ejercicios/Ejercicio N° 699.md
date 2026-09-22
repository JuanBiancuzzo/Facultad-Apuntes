---
dia: 2026-09-19
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 699
etapa: ampliar
---
# Enunciado
---
Para el [[ingeniería electrónica/robótica industrial/Cinemática y estática/Robot IRB140|robot IRB140]], con la [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática#Asignación de ternas|asignación de ternas de DH]] dado por la tabla de parámetros $$ \begin{array}{c|c} 
	~i~ & \theta & d & a & ~\alpha~ \\\hline
	1 & q_1 & 0 & a_1 & -\frac{\pi}{2} \\\hline
	2 & q_2 & 0 & a_2 & 0 \\\hline
	3 & q_3 & 0 & 0 & \frac{\pi}{2} \\\hline
	4 & q_4 & d_4 & 0 & -\frac{\pi}{2} \\\hline
	5 & q_5 & 0 & 0 & \frac{\pi}{2} \\\hline
	6 & q_6 & 0 & 0 & 0 
\end{array} $$
Calcular el [[ingeniería en informática/numerico/Errores/Error absoluto|error en valor absoluto]] en la dirección $\hat{x}_0$ al querer alcanzar $$ \begin{align}
	\text{POSE} &= \begin{bmatrix}
		1 & 0 & 0 & 500 \\
		0 & 1 & 0 & 100 \\
		0 & 0 & 1 & 400 \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix} &
	\text{conf} &= \begin{bmatrix} -1 & -1 & 1 \end{bmatrix} 
\end{align} $$ cuando  $d_4$ tiene en realidad un valor $380.1$ mientras que el software utiliza el valor nominal para el cálculo, con una precisión de $0.0001$

# Resolución
---


# Resultado
---
El resultado es $0.0605$