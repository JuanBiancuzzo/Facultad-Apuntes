---
dia: 2024-08-03
tags:
  - carrera/ingeniería-electrónica/dispo/Circuitos-digitales-y-procesos-de-fabricación-CMOS
  - nota/facultad
---
# Definición
---
Partiendo del [[Operador NOT|inversor ideal]] podemos ver como podría ser la idea general de un inversor más real

```tikz
\usepackage{pgfplots}

\begin{document}
	\begin{tikzpicture}
		\begin{axis}[
			xmin=-0.2, ymin=-0.2,
			xmax=5.2, ymax=5.2, 
			samples=50,
			axis lines=middle,
			xtick={0, 1.8, 3.2, 5},
			xticklabels={
				$0$, $V_{IL}$, $V_{IH}$, $V^+$,
			},			
			ytick={0, 0.5, 1, 4, 4.5, 5},
			yticklabels={
				$0$, $V_{MIN}$, $V_{OL}$, $V_{OH}$, $V_{MAX}$, $V^+$,
			},
			
			xlabel=$V_{IN}$,
			ylabel=$V_{OUT}$,
		]
		  \addplot[orange, ultra thick, domain=0:5, smooth] 
			  coordinates { 
				  (0, 4.5) 
				  (1.8, 4) 
				  (3.2, 1)
				  (5, 0.5)
			  };
			\draw[dashed] (axis cs: 0, 0.5) -- (axis cs: 5, 0.5)
				-- (axis cs: 5, 0);
			\draw[dashed] (axis cs: 0, 1) -- (axis cs: 3.2, 1)
				-- (axis cs: 3.2, 0);
			\draw[dashed] (axis cs: 0, 4) -- (axis cs: 1.8, 4)
				-- (axis cs: 1.8, 0);

			\draw[thick] (axis cs: 1.8, 4) -- (axis cs: 1.4, 4.4)
				-- (axis cs: 2.2, 3.6);
			\draw[thick] (axis cs: 3.2, 1) -- (axis cs: 2.8, 1.4)
				-- (axis cs: 3.6, 0.6);
		\end{axis}
	\end{tikzpicture}
\end{document}
```

^51a100

* Rango de entrada válido para $0$ o $1$ lógico
	* $V_{IL} \equiv$ máx. [[Tensión|tensión]] de entrada considerada $0$ lógico
	* $V_{IH} \equiv$ mín. [[Tensión|tensión]] de entrada considerada $1$ lógico
	* Ambos casos se definen en donde la [[Ganancia|ganancia]] es $1$ $$ A_v = \frac{dV_{OUT}}{dV_{IN}} = -1 $$
* Rango de salida válido para $0$ lógico
	* $V_{MIN} \equiv$ tensión de salida para $V_{IN} = V^+$
	* $V_{OL} \equiv$ tensión de salida para $V_{IN} = V_{IH}$
	  
* Rango de salida válido para $1$ lógico
	* $V_{OH} \equiv$ tensión de salida para $V_{IN} = V_{IL}$
	* $V_{MAX} \equiv$ tensión de salida para $V_{IN} = 0$ 

Clave para la regeneración de [[Señal|señal]]
* Elevada $|A_v|$ en la región indefinida y baja fuera de ella