---
dia: 2026-09-19
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 700
etapa: empezado
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
Se desea realizar un movimiento que lleva la [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] $6$ a la [[ingeniería electrónica/robótica móvil/Repaso álgebra/Pose|pose]] descripta por los vectores $$ \begin{align} 
	\text{posición} &= \begin{bmatrix} 0 & 0 & 650 \end{bmatrix}^T \\
	\text{rotación} &= \begin{bmatrix} 1 & 0 & 0 & 0 \end{bmatrix}^T \\
	\text{configuración} &= \begin{bmatrix} 1 & -1 & 1 \end{bmatrix} \\
\end{align} $$ 
Indicar cuáles de las siguientes afirmaciones son correctas
1. Existen infinitas combinaciones de $q_1$ y $q_6$ que son solución para alcanzar esta pose ^parte-1
2. Existe una única solución pues se ha indicado el vector de configuración ^parte-2
3. El punto no puede ser alcanzado con la configuración de brazo pedida ^parte-3
4. El punto deseado no puede alcanzarse por estar fuera de rango ^parte-4

# Resolución
---


# Resultado
---