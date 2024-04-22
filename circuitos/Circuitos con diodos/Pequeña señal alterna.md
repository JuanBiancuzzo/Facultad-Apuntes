---
dia: 2024-03-23
materia: circuitos
capitulo: 1
---
### Definición
---
Tomemos este [[Circuito eléctrico|circuito]] de ejemplo 

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.2, transform shape, thick]
		\draw (5, 0) to[short, o-] ++(-2, 0)
			to[R, l_=$10 ~ K\Omega$] ++ (0, 3)
			to[short, i=$I_x$, -o] ++(2, 0)
			to ++(-2, 0)
			to[R, l=$40 ~ K\Omega$] ++ (-3, 0)
			to[vsource, l=$10 ~V $] ++ (0, -3)
			to[short] ++(3, 0);
		\draw (5, 3) to[open, v^=$V_x$] ++ (0, -3);
	\end{circuitikz}
\end{document}
```

Que podemos encontrar su [[Teorema de Thevenin|equivalente de Thevenin]] 

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.2, transform shape, thick]
		\draw (3, 3) to[short, i=$I_x$, -o] ++(2, 0);
		\draw (3, 3) to[R, l_=$8 ~ K\Omega$] ++ (-2, 0)
			to[short] ++(-1, 0)
			to[vsource, l=$2 ~V $] ++ (0, -3)
			to[short, -o] ++(5, 0);
		\draw (5, 3) to[open, v^=$V_x$] ++ (0, -3);
	\end{circuitikz}
\end{document}
```

Si ahora asumimos que hay una pequeña [[Señal|señal]] alterna en el circuito

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.2, transform shape, thick]
		\draw (3, 3) to[short, i=$I_x$, -o] ++(2, 0);
		\draw (3, 3) to[R, l_=$8 ~ K\Omega$] ++ (-2, 0)
			to[short] ++(-1, 0)
			to[sV, l=$3 ~mV $] ++ (0, -1.5)
			to[vsource, l=$2 ~V $] ++ (0, -1.5)
			to[short, -o] ++(5, 0);
		\draw (5, 3) to[open, v^=$V_x$] ++ (0, -3);
	\end{circuitikz}
\end{document}
```

Ésta se ve como una ligera variación de la [[Curva de carga de un componente|curva de carga]]

![[Curva de carga de pequeña señal alterna.webp]]

Al avanzar el tiempo, la curva de carga (recta en este caso particular) se mueve, haciendo que el punto de intersección con la [[Curva característica de un componente|curva característica del componente X]] cambie. Los distintos puntos de intersección reflejan los valores instantáneos de [[Tensión|tensión]] y [[Corriente eléctrica|corriente]] 

#### Aproximación
---
Lo más sencillo sería reemplazar el componente X por su [[Recta de carga estática de un componente|resistencia estática en el punto Q]], al fin y al cabo la tensión total en cada nodo dependerá de la tensión continua (que es grande) y la alterna (que es pequeña). Y por definición, el punto Q encontrado usando X o su resistencia estática sería exactamente el mismo

![[Aproximación de primero orden de la curva de carga de pequeña señal alterna.webp]]

Podríamos reducir sustancialmente el [[Error relativo|error]] si en vez de utilizar la resistencia estática pudiéramos usar la [[Derivable|derivada]] de la [[Curva característica de un componente|ecuación característica en Q]]. Lamentablemente ésta, tal como puede verse, no es la ecuación de una [[Resistencia|resistencia]] en el plano $I_x - V_x$

![[Aproximación de segundo orden de la curva de carga de pequeña señal alterna.webp]]

##### Cambio de ejes coordenados
---
La solución viene de ver las cosas desde otro punto de vista. Por eso planteamos un cambio de variable $$ I_x = I _x ~ Q + i_x ~~~~~ V_x = V_x ~ Q + v_x $$
![[cambio de ejes de curva de carga de pequeña señal alterna.webp]]