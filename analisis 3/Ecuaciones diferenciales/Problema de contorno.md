---
dia: 2022-12-08
capitulo: 11
tags:
  - analisis-3/Ecuaciones-diferenciales
  - nota
---
### Definición
---
Tenemos un sistema de ecuaciones donde una es una [[Ecuación diferencial ordinaria]] y otra dan condiciones en $x = 0$ y $x = L$, donde $L$ es el otro extremo . Por ejemplo $$ \begin{cases} 
	y''(x) + y(x) = 0 && 0 \le x \le \frac \pi 2 \\
	y(0) = y_0 \\
	y(\frac \pi 2) = y_1
\end{cases} $$
Donde $y_0$ e $y_1$ son datos del ejercicio.

O la ecuación diferencial podria ser una [[Ecuación diferencial en derivadas parciales]], por ejemplo $$ \begin{cases} 
	 \displaystyle\frac{\partial^2 u(x, y)}{\partial^2 x} - \frac{\partial^2 u(x, y)}{\partial^2 y} = 0 && 0 < x < 1, t > 0 \\
	 \begin{cases} 
		 u(x, 0) = u_0(x) && 0 < x < 1 \\
		 \displaystyle\frac{\partial u(x, 0)}{\partial t} = u_1(x) && 0 < x < 1
	 \end{cases} \\
	 u(0, t) = u(1, t) = 0 && t \ge 0
\end{cases}$$
Donde la última ecuación es de contorno.