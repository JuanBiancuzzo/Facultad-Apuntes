---
dia: 2024-03-23
tags:
  - circuitos/Circuitos-con-diodos
  - nota/facultad
---
### Definición
---
Dado un componente X, este es parte de un [[Circuito eléctrico|circuito]] en el que intervienen otros componentes, podemos plantear las [[Método de nodos|ecuaciones de nodos]] o [[Método de mallas|mallas]]. Las mismas aplican a todo el circuito, sea lineal o no

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
	\draw (0, 0) rectangle (3, 3)
		node[midway, text width=2cm, text centered] {Circuito Genérico G};

	\draw (3, 2.7) 
		to[short, i^ = $I_{x}$] ++ (1.5, 0)
		to[short] ++ (0, -0.5)
		to[open, v^=$V_{x}$] ++ (0, -1.4)
		to[short] ++ (0, -0.5)
		to[short] ++ (-1.5, 0);
	\end{circuitikz}
\end{document}
```

Todos los datos de G son conocidos. Por lo tanto podremos operar algebraicamente e ir eliminando todas las [[Tensión|tensiones]] y [[Corriente eléctrica|corrientes]] internas a G hasta que queden solamente dos variable $I_x$ y $V_x$ $$ I_x = f(V_x) $$
Este procedimiento es aplicable a cualquier circuito, sea lineal o no.

Como caso particular, si G es lineal $I_x = f(V_x) = I_n + \frac{V_x}{R_n}$ donde $I_n$ es la [[Teorema de Norton|corriente de Norton]] y $R_n$ [[Teorema de Norton|resistencia de Norton]]. En un caso no lineal, la relación puede ser cualquier [[Función|función]]

Esta función representa todos los puntos tensión-corriente compatibles con G. No importa qué se conecte entre los dos bornes, si la tensión resultante es $V_{x0}$, la corriente que circulará será $I_{x0} = f(V_{x0})$, eso impone G.

Esta relación impuesta por G, se la denomina curva de carga de X.

En el caso de que exista multiples puntos para una sola recta de carga, todos son valores posibles pero dependiendo del estado previo del componente. También se los puede llamar estables si una pequeña perturbación hace que no se establezca a otro de estos puntos