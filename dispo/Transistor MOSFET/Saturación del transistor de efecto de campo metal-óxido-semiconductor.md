---
dia: 2023-11-10
materia: dispo
capitulo: 6
aliases:
  - Saturación del MOSFET
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

La [[Corriente eléctrica|corriente]] $I_D$ es independiente de $V_{DS}$: $I_D = I_{D ~ sat}$

![[Curva de salida del MOSFET sin efecto de modulación del largo del canal.webp]]

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
Geometría del problema:
![[Geometría de un MOSFET.webp]]

La condición de saturación es $$ V_{GD} = V_T = V_{GS} - V_{DS} \implies V_{DS ~ (sat)} = V_{GS} - V_T $$
La corriente de Drain en esta situación puede calcularse como $$ I_{D ~ (sat)} = I_D(V_{DS} = V_{DS ~ (sat)} = V_{GS} - V_T) $$
Donde la corriente esta dada por la [[Triodo del transistor de efecto de campo metal-óxido-semiconductor#Corriente eléctrica|corriente en triodo]] dándonos $$ I_{D ~ (sat)} = \frac{1}{2} \frac{W}{L} \mu_n C'_{ox} V_{DS ~ (sat)}^2 $$

##### Curva de salida ($I_D$ vs. $V_{DS}$)
---
![[Curva de salida del MOSFET sin efecto de modulación del largo del canal.webp]]

##### Curva de transferencia en saturación ($I_D$ vs. $V_{GS}$)
---
![[Curva de transferencia del MOSFET sin efecto de modulación del largo del canal.webp]]

##### Pinch-off ($V_{DS} = V_{GS} - V_T$)
---
La [[Carga eléctrica|carga]] del canal en el  extremo del Drain $$ Q'_n(L) = -C'_{ox} (V_{GS} - V_{DS} - V_T) = 0 $$
![[Pinch-off en el MOSFET.webp]]

Por lo que no hay una capa de [[Inversión de la estructura Metal-Óxido-Semiconductor (MOS)|inversión]] en el extremo del Drain. A esta situación se la suele conocer como pinch-off
* La ecuación de control de carga es inexacta en el entorno de $V_T$
* La concentración de [[Electrón|electrones]] es pequeña, pero no es cero
* Los electrones se mueven rápido debido a que el [[Campo eléctrico|campo eléctrico]] es muy elevado
* No hay ningún impedimento para el movimiento de los [[Portador de carga|portadores]].

##### [[Tensión|Tensiones]] $V_{DS} > V_{GS} - V_T$
---
* En el canal ya no cambia su distribución de [[Carga eléctrica|carga]] $Q'_n(y)$ ya que este queda determinado por $V_{DS ~ (sat)}$
* El [[Campo eléctrico]] en el canal tampoco cambia porque la distribución de [[Carga eléctrica|carga]] se mantiene. Entonces $E_y(y)$ queda determinado por $V_{DS ~ (sat)}$
* La [[Corriente eléctrica|corriente]] en el canal es una [[Corriente de arrastre|corriente de arrastre]]. Si la carga y el campo se mantienen entonces $I_D$ es constante

Considerando el [[Efecto de modulación del largo del canal]], donde se utiliza una $L_{(efectiva)}$, produce una corriente $$ I_D = \underbrace{\frac{1}{2} \frac{W}{L} \mu_n C'_{ox} (V_{GS} - V_T)^2}_{I_{D ~ (sat)}} ~ \left( 1 + \lambda ~ V_{DS} \right) $$

^6198bc


^3d5409
