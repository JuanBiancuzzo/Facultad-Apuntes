---
dia: 2023-11-10
materia: dispo
capitulo: 6
aliases:
  - Triodo del MOSFET
---
### Definición
---
Teniendo un [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] con $V_{GS} > V_T$, $V_{GD} > V_T$ con $V_{DS} > 0$

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
		\draw (0, 0) rectangle (10, 3)
			node[pos=0.2, font=\bfseries] {$p$};
		
		% Canal de inversión
		\fill[white!35!black] (3, 3) 
			-- (7, 3)
			-- (7, 2.9)
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

		\draw[<-] (4.2, 2.7) -- ++(0.25, -1.2)
			node[below=2pt, font=\bfseries, align=center, scale=0.8] 
				{Capa de inversión\\en todos lados};

		\path (3, 5.25) node {$V_{GS} < V_T$};
		\path (7, 5.25) node {$V_{GD} < V_T$};
		
	\end{tikzpicture}
\end{document}
```

Los [[Electrón|electrones]] fluyen del source al drain, por lo que hay [[Corriente eléctrica|corriente]]
* $V_{GS} \uparrow \implies |Q_n| \uparrow \implies I_D \uparrow$ 
* $V_{DS} \uparrow \implies |E_y| \uparrow \implies I_D \uparrow$ 

#### Corriente
---
Donde la [[Corriente eléctrica|corriente]] esta dada por 
$$ \begin{align} 
	I_D &= \frac{W}{L} \mu_n C'_{ox} \left( V_{GS} - \frac{V_{DS}}{2} - V_T \right) V_{DS} ~ \left( 1 + \lambda ~ V_{DS} \right) \\
	&= 2k \left( V_{GS} - \frac{V_{DS}}{2} - V_T \right) V_{DS} ~ \left( 1 + \lambda ~ V_{DS} \right)
\end{align} $$

^628376

### Calculo de la corriente
---
Geometría del problema:

![[Geometría de un MOSFET.webp]]

La corriente es uniforme y fluye en la dirección $y$ $$ I_y = W Q'_n(y) ~ v_y(y) $$ y como la corriente de Drain es inversa a la corriente del canal $$ I_D = -W Q'_n(y) ~ v_y(y) $$
Reescribiendo en términos de la [[Tensión|tensión]] del canal $V_c(y)$
* Si el [[Campo eléctrico|campo eléctrico]] no es demasiado grande $$ v_y(y) \simeq -\mu_n ~ E_y(y) = \mu_n ~ \frac{dV_c(y)}{dy} $$
* Para $Q'_n(y)$ usamos la relación de control de [[Carga eléctrica|carga]] $$ Q'_n(y) = - C'_{ox} (V_{GS} - V_c(y) - V_T) $$ para $V_{GS} - V_c(y) \ge V_T$ donde $C'_{ox}$ es la [[Capacidad de óxido]]. 
 
Dándonos $$ I_D = W \mu_n C'_{ox} (V_{GS} - V_c(y) - V_T) ~ \frac{dV_c(y)}{dy} $$
Una simple [[Ecuación diferencial ordinaria|ecuación diferencial de primer orden]] con una sola incógnita, $V_c(y)$, que resolvemos mediante [[Método de separación de variables|separación de variables]], considerando régimen lineal integramos a lo largo del canal 
* para $y = 0$, $V_c(0) = 0$
* para $y = L$, $V_c(L) = V_{DS}$
Entonces $$ I_D = \frac{W}{L} \mu_n C'_{ox} \left( V_{GS} - \frac{V_{DS}}{2} - V_T \right) V_{DS} $$
La ecuación es válida si $V_{DS} \le V_{GS} - V_T$, dándonos una parábola de límite cuando $V_{DS} = V_{GS} - V_T$ donde la corriente es $$ I_D = \frac{W}{L} \mu_n C'_{ox} \frac{V_{DS}^2}{2} $$

##### Principales dependencias 
---
* $V_{DS} \uparrow \implies I_D \uparrow$ - elevado [[Campo eléctrico]] transversal
* $V_{GS} \uparrow \implies I_D \uparrow$ - elevada concentración de [[Electrón|electrones]]
* $L \uparrow \implies I_D \downarrow$ - menor campo eléctrico transversal
* $W \uparrow \implies I_D \uparrow$ - canal de conducción más ancho

##### Polarización del canal
---
Para entender por qué $I_D$ se curva debemos entender la despolarización del canal.

A lo largo del canal, desde source hasta drain $$ y \uparrow \implies V_c(y) \uparrow \implies |Q_n(y)| \downarrow \implies |E_y(y)| \uparrow $$
El "local channel overdrive" se reduce cerca del drain.

El impacto que tiene $V_{DS}$ sobre la corriente esta dado por

![[Impacto de Vds en la corriente de Drain en un MOSFET en régimen triodo.webp]]

Cuando $V_{DS} \uparrow$, la despolarización del canal se hace más prominente, por lo tanto $I_D$ crece más lentamente con $V_{DS}$.

##### [[Efecto de modulación del largo del canal]]
---
Considerando el [[Efecto de modulación del largo del canal]], donde se utiliza una $L_{(efectiva)}$, produce una corriente $$ I_D = \frac{W}{L} \mu_n C'_{ox} \left( V_{GS} - \frac{V_{DS}}{2} - V_T \right) V_{DS} ~ \left( 1 + \lambda ~ V_{DS} \right) $$