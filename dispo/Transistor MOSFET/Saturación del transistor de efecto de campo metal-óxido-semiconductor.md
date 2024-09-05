---
dia: 2023-11-10
aliases:
  - Saturación del MOSFET
tags:
  - dispo/Transistor-MOSFET
  - nota/facultad
---
### Definición
---
Teniendo un [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] con $V_{GS} > V_T$, $V_{GD} < V_T$ con $V_{DS} > 0$

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
		\draw (0, 0) rectangle (10, 3)
			node[pos=0.2, font=\bfseries] {$p$};
		
		% Canal de inversión
		\fill[white!35!black] (3, 3) 
			-- (7, 3)
			-- (3, 2.7)
			-- (3, 3);
			
		\draw (0, 2) rectangle (3, 3)
			node[midway] {$n^+$};
		\filldraw (0.4, 3) rectangle (2.6, 3.2);
		\draw ({(2.6 + 0.4) * 0.5}, 3.2) -- ++(0, 0.4)
			node[above=2pt, font=\bfseries] {Source};
		
		\draw (7, 2) rectangle (10, 3)
			node[midway, font=\bfseries] {$n^+$};
		\filldraw (7.4, 3) rectangle (9.6, 3.2);
		\draw ({(9.6 + 7.4) * 0.5}, 3.2) -- ++(0, 0.4)
			node[above=2pt, font=\bfseries] {Drain};

		\filldraw[fill=gray] (3, 3) rectangle (7, 3.4);
		\draw (3, 3.4) rectangle (7, 4)
			node[midway, font=\bfseries] {poly-n};
		\filldraw (3, 4) rectangle (7, 4.4);
		\draw ({(7 + 3) * 0.5}, 4.4) -- ++(0, 0.4)
			node[above=2pt, font=\bfseries] {Gate};
			
		\filldraw (0, -0.2) rectangle (10, 0);
		\draw (5, -0.2) -- ++(0, -0.4)
			node[below=2pt, font=\bfseries] {Body};
		
		\draw[dashed, rounded corners=1em] (0, 1.5) 
			-- (3.5, 1.5)
			-- (3.5, 2.5)
			-- (6.5, 2.2)
			-- (6.5, 1.2)
			-- (10, 1.2);

		\draw[<-] (6.5, 2.7) -- ++(-0.75, -1.4)
			node[below=2pt, font=\bfseries, align=center, scale=0.8] 
				{Capa de inversión\\"pinched-off"\\en el lado de drain};

		\path (3, 5.25) node {$V_{GS} < V_T$};
		\path (7, 5.25) node {$V_{GD} < V_T$};
		
	\end{tikzpicture}
\end{document}
```

Para cuando la [[Corriente eléctrica|corriente]] $I_D$ es independiente de $V_{DS}$: $I_D = I_{D ~ sat}$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\vt = 2;
		\k = 0.5;
		\l = 0;
		\step = 0.1;
	}
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick,
		declare function = {
			triodo(\vds, \vgs) = 2 * \k * (\vgs - 0.5 * \vds - \vt) * \vds;
			saturacion(\vgs) = \k * (\vgs - \vt)^2;
			estrangulacion(\vds) = saturacion(\vds + \vt);
		},
	]

		\draw[->] (-0.2, 0) 
				node[left=2pt] {$0$}
			-- (8, 0)
				node[below=2pt] {$V_{DS}$};
		\draw[->] (0, -0.2) 
				node[below=2pt] {$0$}
			-- (0, 5)
				node[left=2pt] {$I_D$};

		\foreach \vds in {0, \step, ..., 3} {
			\draw[dashed] (\vds, {estrangulacion(\vds)}) 
				-- ({\vds + \step}, {estrangulacion(\vds + \step)});
		}
		\path (3, {estrangulacion(3)})
			node[above=2pt, scale=0.9] {$V_{DS(sat)} = V_{GS} - V_T$};
		\path (0, {estrangulacion(2.9)}) -- ++(2.9, 0)
			node[midway] {Triodo};
		\path (2.9, {estrangulacion(2.9)}) -- (7, {estrangulacion(2.9)})
			node[midway] {Saturación};
		\path (0, 0) -- (7, 0)
			node[midway, below=2pt] {Corte}
			node[above left=2pt, scale=0.9] {$V_{GS} = V_T$};
		
		\foreach \vgs in {3.5, 4, 4.5, 4.8} {
			\tikzmath { \vdsmax = \vgs - \vt; }
			\foreach \vds in {0, \step, ..., \vdsmax} {
				\draw (\vds, {triodo(\vds, \vgs)})
					-- ({\vds + \step}, {triodo(\vds + \step, \vgs)});
			}
			\draw (\vdsmax, {saturacion(\vgs)}) -- (7, {saturacion(\vgs)})
				node[right=2pt, scale=0.9] {$V_{GS} = \vgs$};
		}

	\end{tikzpicture}
\end{document}
```

^1e0c9b

#### Corriente
---
Donde la [[Corriente eléctrica|corriente]] esta dada por 

$$ \begin{align} 
	I_D &= \frac{1}{2} \frac{W}{L} \mu_n C'_{ox} (V_{GS} - V_T)^2 ~ \left( 1 + \lambda ~ V_{DS} \right) \\
	&= k ~ (V_{GS} - V_T)^2 ~ \left( 1 + \lambda ~ V_{DS} \right) 
\end{align} $$

^c13b85


#### Calculo de la corriente
---
Geometría del problema

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.1, transform shape, thick]
	
		\begin{scope}[ultra thick]

			\draw[->] (-3.2, 8) -- (11, 8)
				node[below=2pt, scale=1.2] {$y$};
			\draw[->] (-3, 8.2) -- (-3, -2)
				node[right=2pt, scale=1.2] {$x$};
	
			\draw (3, 7.9) -- ++(0, 0.2)
				node[above=2pt] {$0$};
			\draw (7, 7.9) -- ++(0, 0.2)
				node[above=2pt] {$L$};

			\draw (-3.1, 3.4) -- ++(0.2, 0)
				node[left=2pt] {$-t_{ox}$};
			\draw (-3.1, 3) -- ++(0.2, 0)
				node[left=2pt] {$0$};
			\draw (-3.1, 2) -- ++(0.2, 0)
				node[left=2pt] {$x_j$};

			\draw (0, 0) rectangle (10, 3)
				node[pos=0.2, font=\bfseries] {$p$};
	
			% Canal de inversión
			\fill[white!35!black] (3, 3) 
				-- (7, 3)
				-- (3, 2.7)
				-- (3, 3);
				
			\draw (0, 2) rectangle (3, 3)
				node[midway] {$n^+$};
			\filldraw (0.4, 3) rectangle (2.6, 3.2);
			\draw ({(2.6 + 0.4) * 0.5}, 3.2) -- ++(0, 0.4)
				node (source) {}
				node[above left=2pt, font=\bfseries] {S};
			
			\draw (7, 2) rectangle (10, 3)
				node[midway, font=\bfseries] {$n^+$};
			\filldraw (7.4, 3) rectangle (9.6, 3.2);
			\draw ({(9.6 + 7.4) * 0.5}, 3.2) -- ++(0, 0.4)
				node (drain) {}
				node[above right=2pt, font=\bfseries] {D};
	
			\filldraw[fill=gray] (3, 3) rectangle (7, 3.4);
			\draw (3, 3.4) rectangle (7, 4)
				node[midway, font=\bfseries] {$n^+$};
			\filldraw (3, 4) rectangle (7, 4.4);
			\draw ({(7 + 3) * 0.5}, 4.4) -- ++(0, 0.4)
				node (gate) {}
				node[above right=2pt, font=\bfseries] {G};
				
			\filldraw (0, -0.2) rectangle (10, 0);
			\draw (5, -0.2) -- ++(0, -0.4)
				node (body) {}
				node[below right=2pt, font=\bfseries] {B};
			
			\draw[dashed, rounded corners=1em] (0, 1.5) 
				-- (3.5, 1.5)
				-- (3.5, 2.5)
				-- (6.5, 2.2)
				-- (6.5, 1.2)
				-- (10, 1.2);

		\end{scope}

		\draw (gate.center) to ++(0, 0.5)
				node (temp) {}
			to[battery1, l_=$V_{GS}$] (temp.center -| source.center)
				node (vgs) {}
			to[short, v^=$I_S$] (source.center);

		\draw (drain.center) to ++(0, 3)
				node (temp) {}
			to[battery1, l_=$V_{DS}$] (temp.center -| vgs.center)
				node (vds) {}
			to[short, -*] (vgs.center);
		\draw (temp.center) to[short, v^=$I_D$, invert] (drain.center);

		\draw (body.center) to ++(0, -0.5)
			to ++(-6.5, 0)
				node (temp) {}
			to[battery1, l_=$V_{BS}$] (temp.center |- vgs.center)
			to (vgs.center);
	
	\end{circuitikz}
\end{document}
```

^6c03f5

La condición de saturación es $$ V_{GD} = V_T = V_{GS} - V_{DS} \implies V_{DS ~ (sat)} = V_{GS} - V_T $$
La corriente de Drain en esta situación puede calcularse como $$ I_{D ~ (sat)} = I_D(V_{DS} = V_{DS ~ (sat)} = V_{GS} - V_T) $$
Donde la corriente esta dada por la [[Triodo del transistor de efecto de campo metal-óxido-semiconductor#Corriente eléctrica|corriente en triodo]] dándonos $$ I_{D ~ (sat)} = \frac{1}{2} \frac{W}{L} \mu_n C'_{ox} V_{DS ~ (sat)}^2 $$

##### Curva de salida ($I_D$ vs. $V_{DS}$)
---
Tenemos la [[Curva de salida|curva de salida]] sin [[Efecto de modulación del largo del canal|efecto de modulación del largo del cana]]

![[Saturación del transistor de efecto de campo metal-óxido-semiconductor#^1e0c9b]]


##### Curva de transferencia en saturación ($I_D$ vs. $V_{GS}$)
---
Tenemos la [[Curva de transferencia|curva de transferencia]] 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\vt = 2.5;
		\k = 0.25;
		\vds = 3;
		\step = 0.1;
	}
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick,
		declare function = {
			triodo(\vgs) = 2 * \k * (\vgs - 0.5 * \vds - \vt) * \vds;
			saturacion(\vgs) = \k * (\vgs - \vt)^2;
			estrangulacion(\vds) = saturacion(\vds + \vt);
		},
	]

		\draw[->] (-0.2, 0) 
				node[left=2pt] {$0$}
			-- (8, 0)
				node[below=2pt] {$V_{GS}$};
		\draw[->] (0, -0.2) 
				node[below=2pt] {$0$}
			-- (0, 5)
				node[left=2pt] {$I_D$};
		
		\draw (\vt, -0.1)
				node[below=2pt] {$V_T$}
			-- (\vt, 0.1);
		\draw[dashed] ({\vds + \vt}, 0) -- ++(0, 4.5);
		\draw[dashed] (\vt, 0) -- ++(0, 4.5);

		\tikzmath { 
			\vtstep = \vt + \step; 
			\satmax = \vds + \vt;
		}
		\foreach \vgs in {\vt, \vtstep, ..., \satmax} {
			\draw (\vgs, {saturacion(\vgs)}) 
				-- ({\vgs + \step}, {saturacion(\vgs + \step)});
		}
		\tikzmath {
			\satstep = \satmax + \step;
		}
		\foreach \vgs in {\satmax, \satstep, ..., 7} {
			\draw (\vgs, {triodo(\vgs)}) 
				-- ({\vgs + \step}, {triodo(\vgs + \step)});
		}

		\path (\vt, 4) -- ({\vds + \vt}, 4)
			node[midway, above=2pt] {Saturación}
			node[midway, scale=0.85] {$V_{GS} < V_{DS} + V_T$};

	\end{tikzpicture}
\end{document}
```


##### Pinch-off ($V_{DS} = V_{GS} - V_T$)
---
La [[Carga eléctrica|carga]] del canal en el  extremo del Drain $$ Q'_n(L) = -C'_{ox} (V_{GS} - V_{DS} - V_T) = 0 $$
![[Pinch-off en el MOSFET.webp]]

Por lo que no hay una capa de [[Inversión de la estructura Metal-Óxido-Semiconductor|inversión]] en el extremo del Drain. A esta situación se la suele conocer como pinch-off
* La ecuación de control de carga es inexacta en el entorno de $V_T$
* La concentración de [[Electrón|electrones]] es pequeña, pero no es cero
* Los electrones se mueven rápido debido a que el [[Campo eléctrico|campo eléctrico]] es muy elevado
* No hay ningún impedimento para el movimiento de los [[Carga eléctrica|portadores]].

##### [[Tensión|Tensiones]] $V_{DS} > V_{GS} - V_T$
---
* En el canal ya no cambia su distribución de [[Carga eléctrica|carga]] $Q'_n(y)$ ya que este queda determinado por $V_{DS ~ (sat)}$
* El [[Campo eléctrico]] en el canal tampoco cambia porque la distribución de [[Carga eléctrica|carga]] se mantiene. Entonces $E_y(y)$ queda determinado por $V_{DS ~ (sat)}$
* La [[Corriente eléctrica|corriente]] en el canal es una [[Corriente de arrastre|corriente de arrastre]]. Si la carga y el campo se mantienen entonces $I_D$ es constante

Considerando el [[Efecto de modulación del largo del canal]], donde se utiliza una $L_{(efectiva)}$, produce una corriente $$ I_D = \underbrace{\frac{1}{2} \frac{W}{L} \mu_n C'_{ox} (V_{GS} - V_T)^2}_{I_{D ~ (sat)}} ~ \left( 1 + \lambda ~ V_{DS} \right) $$

