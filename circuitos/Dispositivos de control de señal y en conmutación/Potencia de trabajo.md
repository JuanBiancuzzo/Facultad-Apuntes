---
dia: 2024-04-21
capitulo: 2
tags:
  - circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
  - nota
---
### Definición
---
La forma comercial de determinar si un componente trabaja a su máxima potencia de trabajo es si la [[Potencia|potencia]] que manejan esta por debajo del watt

Una forma más fiel al componente es viendo la [[Curva de salida|curva de salida]] superponiendo la ecuación $$ P_{max} = V_o ~ I_o $$
Tenemos lo siguiente

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\va = 4.5;
		\rc = 3;
		\voq = 2;

		\lin = 4;
		\sep = (7/3) / \lin;
		\cant = 7;

		\potenciaMaxima = 6;
		\imax = 4.5;
		\vrup = 6.5;
	}
	\begin{tikzpicture}[scale=1.4, transform shape, ultra thick,
		declare function = {
			potencia(\v) = min(\potenciaMaxima / \v, \imax);
		},
	]
		\draw[->] (-0.5, 0) -- (8, 0)
			node[below right=2pt] {$V_0$};
		\draw[->] (0, -0.5) -- (0, 5)
			node[left=2pt] {$I_0$};

		\draw (\va, 0) node[below=2pt] {$V_A$}
			-- (0, {\va / \rc})
				node[left=2pt] {$\frac{V_A}{R_C}$};

		\draw[dashed] (\voq, 0) 
				node[below=2pt] {$V_{0Q}$}
			-- (\voq, {(\va - \voq) / \rc})
				node[above right=2pt] {$Q$}
				node[circle, fill, minimum size=5pt, 
					inner sep=0pt, outer sep=0pt] {}
			-- (0, {(\va - \voq) / \rc})
				node[left=2pt] {$I_{0Q}$};

		\draw (-0.1, \imax) 
				node[left=2pt] {$I_{max}$}
			-- (0.1, \imax);
			
		\tikzmath { \vlim = \vrup - 0.1; }
		\foreach \x in {0.1, 0.2, ..., \vlim} {
			\tikzmath { 
				\iActual = potencia(\x);
				\iSiguiente = potencia(\x + 0.1); 
			}
			\draw (\x, \iActual) -- ({\x + 0.1}, \iSiguiente);
		}			
		\draw (\vrup, {potencia(\vrup)}) -- (\vrup, 0)	
			node[below=2pt] {$V_{rup}$};

		\path (\va, {potencia(\va)})
			node[above right=2pt] {$V_o ~ I_o = cte$};

		\draw[->] ({\voq}, {potencia(\voq) + 1})
				node[above right=2pt] {SOA}
			-- ++(-1, -1.5);
	\end{tikzpicture}
\end{document}
```

Donde SOA se refiere a una área de operación segura.

Definimos bajo nivel de potencia como trabajar por debajo de la curva $P_{max}$, y un componente que trabaje cerca de la curva, la definimos como trabajando a alto o máximo nivel de potencia

#### Notas
---
Por fuera del área de operación segura se espera que si se mantiene el punto de trabajo ($Q$) por un período suficientemente largo, este dejará de funcionar. En el caso de que este este por poco tiempo, ya que aumentar la [[Temperatura|temperatura]] es un proceso lento, se puede pasar, aunque sea por poco tiempo, afuera de la SOA
