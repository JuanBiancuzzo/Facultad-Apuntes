---
dia: 2026-10-13
etapa: empezado
referencias: []
aliases: []
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/robótica-industrial/Generación-de-trayectorias
ejercicios: []
vinculoFacultad:
  - tema: Generación de trayectorias
    capitulo: 5
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La interpolación Joint, busca representar el movimiento de las [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación|articulaciones]] de un [[investigación/robótica/robótica industrial/Robótica industrial|robot]], recordando que se busca tener una [[Velocidad|velocidad]] constante el mayor tiempo posible, y que el movimiento tiene que ser realizable, es decir que la [[Aceleración|aceleración]] sea [[ingeniería electrónica/analisis 3/Derivabilidad y holomorfía/Derivable|derivable]] en todo punto

Dado una [[ingeniería electrónica/robótica móvil/Repaso álgebra/Pose|pose]] inicial, con la cual podemos obtener las variables articulares $q_0$ por medio de [[investigación/animation/Cinemática inversa|cinemática inversa]], y de igual forma $q_1$ dada por la pose final, con un tiempo de trayectoria $T$

Para resolver esto, se plantea un parámetro $t_{acc}$ el cual define un tiempo alrededor de los puntos $q_0$ y $q_1$ en los cuales se permite velocidades no lineales, permitiendo la aceleración y desaceleración. En conjunto a esto, se proponemos que $q(t_0 = 0) = q_0$, entonces tendremos el punto de interes $q_{-1} = q(t = -t_{acc})$ 

Definiendo este parámetro, podemos dividir la trayectoria en $2$ zonas
* La zona $1$ se tiene velocidad no constante
* La zona $2$ se tiene velocidad constante

Para conseguir velocidad constante en la zona $2$, se define $$ \begin{cases}
	q(t) = \frac{q_1 - q_0}{T} t + q_0 \\
	\dot{q}(t) = \frac{q_1 - q_0}{T} \\
	\ddot{q}(t) = 0
\end{cases}, ~~~ t \in [t_{acc},~ T - t_{acc}] $$
Para la zona $1$ se tiene mayor libertad, donde se necesita crear una curva que cumpla las condiciones $$ \begin{cases}
	q(t = -t_{acc}) = q_{-1} \\
	\dot{q}(t = -t_{acc}) = -\frac{q_0 - q_{-1}}{t_{acc}} \\
	\dot{q}(t = +t_{acc}) = \frac{q_1 - q_0}{T} \\
\end{cases} $$
Por lo que necesitamos un [[ingeniería electrónica/analisis 3/Funciones elementales/Función polinómica|polinomio]] de [[ingeniería electrónica/analisis 3/Funciones elementales/Función polinómica#^grado|grado]] $2$ o mayor ($4,~ 6,~ \cdots$ ), donde con ordenes mayores se puede imponer mayores condiciones $$ \begin{align}
	\begin{cases}
		\ddot{q}(t = +t_{acc}) = 0 \\
		\ddot{q}(t = -t_{acc}) = 0 \\
	\end{cases} \tag{Grado 4} \\
	\begin{cases}
		\dddot{q}(t = +t_{acc}) = 0 \\
		\dddot{q}(t = -t_{acc}) = 0 \\
	\end{cases} \tag{Grado 6} \\
\end{align} $$
Dando finalmente, con un $t \in [-t_{acc},~ t_{acc})$, se tiene $$ \begin{align}
	\begin{cases}
		q(t)        = a_2 t^2 + a_1 t + a_0 \\
		\dot{q}(t)  = 2 a_2 t + a_1 \\
		\ddot{q}(t) = 2 a_2 \\
	\end{cases} && \begin{array}{c|c}
		a_2 & \displaystyle \frac{q_0 - q_{-1}}{4 t_{acc}^2} + \frac{q_1 - q_0}{4 T t_{acc}} \\\hdashline
		a_1 & \displaystyle \frac{q_0 - q_{-1}}{2 t_{acc}} + \frac{q_1 - q_0}{2 T} \\\hdashline
		a_0 & \displaystyle -\frac{3}{4}(q_0 - q_{-1}) + \frac{t_{acc}}{T}(q_1 - q_0) 
	\end{array} \tag{Grado 2} \\\\
	\begin{cases}
		q(t)        = a_4 t^4 + a_3 t^3 + a_2 t^2 + a_1 t + a_0  \\
		\dot{q}(t)  = 4 a_4 t^3 + 3 a_3 t^2 + 2 a_2 t + a_1 \\
		\ddot{q}(t) = 12 a_4 t^2 + 6 a_3 t + 2 a_2 \\
	\end{cases} && \begin{array}{c|c}
		a_4 & \displaystyle -\frac{q_0 - q_{-1}}{16 t_{acc}^4} - \frac{q_1 - q_0}{16 T t_{acc}^3} \\\hdashline
		a_3 & \displaystyle 0 \\\hdashline
		a_2 & \displaystyle \frac{q_0 - q_{-1}}{4 t_{acc}^2} + \frac{q_1 - q_0}{4 T t_{acc}} \\\hdashline
		a_1 & \displaystyle \frac{q_0 - q_{-1}}{2 t_{acc}} + \frac{q_1 - q_0}{2 T} \\\hdashline
		a_0 & \displaystyle -\frac{3}{4}(q_0 - q_{-1}) + \frac{t_{acc}}{T}(q_1 - q_0) 
	\end{array} \tag{Grado 4}
\end{align} $$
