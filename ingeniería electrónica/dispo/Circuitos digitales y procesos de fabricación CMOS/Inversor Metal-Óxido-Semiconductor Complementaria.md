---
dia: 2024-03-26
tags:
  - carrera/ingeniería-electrónica/dispo/Circuitos-digitales-y-procesos-de-fabricación-CMOS
  - nota/facultad
aliases:
  - Inversor CMOS
  - Inversor MOS Complementaria
vinculoFacultad:
  - tema: Circuitos digitales y procesos de fabricación CMOS
    capitulo: 9
    materia: Dispositivos semiconductores
    carrera: Ingeniería electrónica
---
# Definición
---
El [[Circuito eléctrico|circuito]] es
```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\node[pmos, scale = 0.7] (pmos) at (0, 1) {};
		\node[nmos, scale = 0.7] (nmos) at (0, -1) {};

		\node[ground] at ($ (nmos.D |- 0, 0) + (0, -2) $) (gg) {};
		\node[ground] at ($ (nmos.D |- 0, 0) + (1.25, -2) $) (cg) {};

		\draw (-2, 0) node[left=2pt] {$V_{IN}$}
			to[short, o-] (-1.5, 0)
			to[short] (nmos.G -| -1.5, 0)
			to[short] (nmos.G);
		\draw (-1.5, 0) 
			to[short] (pmos.G -| -1.5, 0)
			to[short] (pmos.G);
		\draw (pmos.S) to[short, -o] ++(0, 1)
			node[above=2pt] {$V_{DD}$};
		
		\draw (nmos.S) to (gg.center);
		\draw (nmos.D) to (pmos.D);
		\draw (nmos.D |- 0, 0) to[short, -o] ++(2, 0)
			node[right=2pt] {$V_{OUT}$};

		\draw (cg.center) to[capacitor, l_=$C_L$]
			($ (nmos.D |- 0, 0) + (1.25, 0) $);

	\end{circuitikz}
\end{document}
```

Este dispositivo puede implementarse solo en tecnología [[Estructura Metal-Óxido-Semiconductor|MOS]] complementaria (CMOS) ya que requiere un [[Transistor|transistor]] de cada tipo

## Principio de funcionamiento
---
* Con $V_{IN} = 0 \implies V_{OUT} = V_{DD}$ $$ \begin{align} V_{GSn} = 0 < V_{Tn} ~~~~ &\implies \text{NMOS OFF} \\ V_{SGp} = V_{DD} > -V_{Tp} ~~~~ &\implies \text{PMOS ON} \end{align} $$
* Con $V_{IN} = V_{DD} \implies V_{OUT} = 0$ $$ \begin{align} V_{GSn} = V_{DD} > V_{Tn} ~~~~ &\implies \text{NMOS ON} \\ V_{SGp} = 0 < -V_{Tp} ~~~~ &\implies \text{PMOS OFF} \end{align} $$

## Consumo de potencia
---
No consume [[Potencia|potencia]] cuando la salida está fija en un estado lógico
* $0$: $V_{DSn} = 0~V$, $I_{Dp} = 0~A$
* $1$: $V_{SDp} = 0~V$, $I_{Dn} = 0~A$

La [[Transferencia del sistema|función de transferencia]]: 

```tikz
\usepackage{pgfplots}

\begin{document}
	\begin{tikzpicture}
		\begin{axis}[
			xmin=-0.2, ymin=-0.2,
			xmax=3, ymax=3, 
			samples=50,
			axis lines=middle,
			xtick={0, 0.5, 1, 1.5, 2, 2.5},
			ytick={0, 0.5, 1, 1.5, 2, 2.5},			
			xlabel=$V_{in}$, xlabel style={below=2pt},
			ylabel=$V_{out}$, ylabel style={left=2pt},
			axis equal image,
			scale=1.4, transform shape,
		]
		  \addplot[orange, ultra thick, domain=0:5, smooth] 
			  coordinates { 
				  (0, 2.5)
				  (1, 2.2)
				  (1.5, 0.25)
				  (2.5, 0)
			  };
			\draw[dashed] (axis cs: 0, 0) -- (axis cs: 2.5, 2.5);

			\filldraw[cyan] (axis cs: 0, 2.5) circle[radius=5]
				node[above right=2pt, text width=3cm] 
					{NMOS corte PMOS triodo};			
			\filldraw[cyan] (axis cs: 0.5, 2.45) circle[radius=5];
			\filldraw[cyan] (axis cs: 1, 2.22) circle[radius=5]
				node[right=2pt, text width=3cm] 
					{NMOS saturación PMOS triodo};
			\filldraw[cyan] (axis cs: 1.25, 1.25) circle[radius=5]
				node[left=2pt] {$V_M$}
				node[above right=2pt, text width=3cm] 
					{NMOS saturación PMOS saturación};
			\filldraw[cyan] (axis cs: 1.5, 0.27) circle[radius=5];
			\path (axis cs: 1.4, 0.4)
				node[above right=2pt, text width=3cm] 
					{NMOS trido PMOS saturación};
			\filldraw[cyan] (axis cs: 2, 0.02) circle[radius=5]
				node[above right=2pt, text width=3cm] 
					{NMOS triodo PMOS corte};
			\filldraw[cyan] (axis cs: 2.5, 0) circle[radius=5];
		\end{axis}
	\end{tikzpicture}
\end{document}
```

* $I_D = 0$ cuando $V_{in} = 0$ ó $V_{in} = V_{DD}$
* Lógica "rail-to-rail": $V_{out}$ llega a $0$ y a $V_{DD}$
* Elevada $|A_v|$ en cercanías de $V_M$

### Cálculo de $V_M$ 
---
Para calcular $V_M$ consideramos que $I_{Dn} = -I_{Dp}$ y que ambos [[Transistor de efecto de campo metal-óxido-semiconductor|transistores]] están [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|saturados]] $$ \overbrace{
	k_n ( \underbrace{V_M}_{V{GSn}} - V_{Tn} )^2
}^{I_{Dn}} = \overbrace{
	k_p ( \underbrace{V_{DD} - V_M}_{V{SGp}} - V_{Tp} )^2
}^{-I_{Dp}} $$
Despejando $V_M$ $$ V_M = \frac{
	\displaystyle V_{Tn} + \sqrt{\frac{k_p}{k_n}} (V_{DD} + V_{Tp})
}{
	\displaystyle 1 + \sqrt{\frac{k_p}{k_n}}
} $$
Usualmente, $V_{Tn}$ y $V_{Tp}$ están fijados por la tecnología de fabricación. Si consideramos $V_{Tn} \approx -V_{Tp}$, entonces $V_M$ se modifica mediante la relación $\frac{k_p}{k_n}$

* Caso simétrico: $k_n = k_p \leftrightarrow V_M = \frac{V_{DD}}{2}$, lo cual implica $$ \frac{k_p}{k_n} = 1 = \frac{
	  \displaystyle \frac{W_p}{L_p} \mu_p ~ C'_{ox}
  }{
	  \displaystyle \frac{W_n}{L_n} \mu_n ~ C'_{ox}
  } \approx \frac{
	  \displaystyle \frac{W_p}{L_p} \mu_p 
  }{
	  \displaystyle \frac{W_n}{L_n} \mu_n 
  } \implies \frac{W_p}{L_p} \simeq 2 ~ \frac{W_n}{L_n} $$
  Depende de parámetros constructivos $W$ y $L$
## Carga de un inversor CMOS
---
En un [[Circuito digital|circuito digital]] CMOS la salida de cualquier [[Compuerta lógica|compuerta]] está cargada por
* Compuertas lógicas subsiguientes
	* Debe considerarse la capacidad de entrada de cada transistor conectado
* Capacidad del cable de interconexión
	* Que conecta la salida con la entrada de las siguientes compuertas
* Capacitancia Drain-Body propia

$$ C_L = C_G + C_{wire} + C_{DBn} + C_{DBp} $$

En CMOS las cargas siempre son [[Capacitancia|capacitivas]]

## Consumo dinámico de potencia del inversor CMOS
---
Cuando $V_{IN} = HI \to LO$, entonces $V_{OUT} = LO \to HI$
* La batería aporta [[Energía|energía]] ($I_{bateria} \ne 0 ~ A$)
* El [[Capacitor|capacitor]] se carga
* [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-P|PMOS]] disipa energía ($I_{Dp} \ne 0~A$ y $V_{DSp} \ne 0~V$)
* [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-N|NMOS]] no disipa energía ($I_{Dn} = 0~A$)

Cuando $V_{IN} = LO \to HI$, entonces $V_{OUT} = HI \to LO$
* La batería no aporta [[Energía|energía]] ($I_{bateria} = 0 ~ A$)
* El capacitor se carga
* [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-P|PMOS]] no disipa energía ($I_{Dp} = 0~A$)
* [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-N|NMOS]] disipa energía ($I_{Dn} \ne 0~A$ y $V_{DSn} \ne 0~V$)

Lo importante es la Energía disipada en cada transición

| Energía                  | Transición $L \to H$         | Transición $H \to L$          |
| ------------------------ | ---------------------------- | ----------------------------- |
| Aportada por la batería  | $C_L ~ V_{DD}^2$             | 0                             |
| Que se almacena en $C_L$ | $\frac{1}{2} C_L ~ V_{DD}^2$ | $-\frac{1}{2} C_L ~ V_{DD}^2$ |
| Disipada en el NMOS      | 0                            | $\frac{1}{2} C_L ~ V_{DD}^2$  |
| Disipada en el PMOS      | $\frac{1}{2} C_L ~ V_{DD}^2$ | 0                             |

La energía disipada en el ciclo completo es $$ E_D = E_{H \to L} + E_{H \to L} = \frac{1}{2} C_L ~ V_{DD}^2 + \frac{1}{2} C_L ~ V_{DD}^2 = C_L ~ V_{DD}^2 $$
La [[Potencia disipada|disipación de potencia]], si el ciclo de conmutación completo toma lugar $f$ veces por segundo $$ P_D = f ~ E_D = f ~ C_L ~ V_{DD}^2 $$
Relación de compromiso fundamental entre velocidad de conmutación y consumo de potencia
* $f \uparrow \implies P_D \uparrow$, carga y descarga de $C_L$ más rápidamente
* $C_L \uparrow \implies P_D \uparrow$, más carga a distribuir
* $V_{DD} \uparrow \implies P_D \uparrow \uparrow$, más carga a distribuir

Para poder aumentar la frecuencia de trabajo, manteniendo el consumo ([[Temperatura|temperatura]]), se requiere
* Bajar $C_L$, equivalente a achicar los transistores
* Bajar $V_{DD}$, tiene doble peso, por tener una dependencia cuadrática

## Tiempo de propagación
---
Tiempo de propagación: retraso entre las señales de entrada y salida de una [[Compuerta lógica|compuerta]]; figura de merito clave de la velocidad

Para una tecnología del nodo $180~nm$ (largo mínimo del canal) la demora de propagación (delay) típica de un inversor es $t_p \sim 30 ~ ps$

Los sistemas lógicos complejos tienen $20$-$50$ compuertas en serie por cada ciclo del clock ($t_{clock ~ (min)} \sim 1.5 ~ ns$) lo cual da una ($f_{(max)} \sim 600 ~ MHz$)

Estimación de $t_p$ utilizamos una señal $V_{in}$ cuadrada

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.1, transform shape, thick]
		\draw[->] (0, 4) -- ++(8, 0)
			node[below=2pt] {$t$};
		\draw[->] (0, 4) -- ++(0, 3)
			node[left=2pt] {$V_{IN}$};
		\draw (0, 6) -- ++(0.2, 0)
			node[pos=0, left=2pt] {$V_{DD}$};
		\draw[ultra thick] (0, 4) -- ++(1, 0)
			-- ++(0, 2) 
			-- ++(2, 0)
			-- ++(0, -2)
			-- ++(2, 0) 
			-- ++(0, 2)
			-- ++(1.75, 0);
		\draw[|<->|] (1, 5.5) -- ++ (4, 0)
			node[midway, below=2pt] {$t_{CYCLE}$};

		\draw[->] (0, 0) -- ++(8, 0)
			node[below=2pt] {$t$};
		\draw[->] (0, 0) -- ++(0, 3)
			node[left=2pt] {$V_{OUT}$};
		\draw (0, 2) -- ++(0.2, 0)
			node[pos=0, left=2pt] {$V_{DD}$};
		\draw[ultra thick] (0, 2) -- (0.75, 2)
			.. controls (1.25, 2) .. (1.75, 1)
			.. controls (2.25, 0) .. (2.75, 0)
			-- (3, 0)
			.. controls (3.25, 0) .. (3.75, 1)
			.. controls (4.25, 2) .. (4.75, 2)
			-- (5, 2)
			.. controls (5.25, 2) .. (5.75, 1)
			.. controls (6.25, 0) .. (6.75, 0);
			
		\draw[|<->|] (1.75, 1) 
			node[left=2pt] {$50\%$}
			-- ++ (4, 0)
			node[pos=0.25, below=2pt] {$t_{CYCLE}$};

		\draw[dashed] (1, 2.5) -- (1, 4);
		\draw[dashed] (1.75, 1) -- (1.75, 3);
		\draw[|<->|] (1, 2.75) -- (1.75, 2.75)
			node[midway, above=2pt] {$t_{PHL}$};

		\draw[dashed] (3, 2.5) -- (3, 4);
		\draw[dashed] (3.75, 1) -- (3.75, 3);
		\draw[|<->|] (3, 2.75) -- (3.75, 2.75)
			node[midway, above=2pt] {$t_{PLH}$};
	\end{tikzpicture}
\end{document}
```

Tiempo de propagación promedio $$ t_p = \frac{1}{2} (t_{PHL} + t_{PLH}) $$

* Tiempo de propagación de alto a bajo ($t_{PHL}$)
	* Durante los primeros momentos de descarga
		* El [[Capacitor|capacitor]] está cargado a $C_L ~ V_{DD}$
		* El NMOS está [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|saturado]] (conduce, corriente, etc)
		* El PMOS está [[Corte del transistor de efecto de campo metal-óxido-semiconductor|cortado]] (no conduce)
	* Tiempo para descargar la mitad a $C_L$ $$ t_{PHL} \simeq \frac{\frac{1}{2} ~ \text{carga inicial de} ~ C_L}{\text{corriente de descarga}} = \frac{\frac{1}{2} C_L V_{DD}}{k_n ( \underbrace{V_{Gsn}}_{V_{DD}}  - V_{Tn})^2} $$
* Tiempo de propagación de bajo a alto ($t_{PLH}$)
	* Durante los primeros momentos de descarga
		* El capacitor está descargado
		* El PMOS está [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|saturado]] (conduce, corriente, etc)
		* El NMOS está [[Corte del transistor de efecto de campo metal-óxido-semiconductor|cortado]] (no conduce)
	* Tiempo para descargar la mitad a $C_L$ $$ t_{PLH} \simeq \frac{\frac{1}{2} ~ \text{carga final de} ~ C_L}{\text{corriente de carga}} = \frac{\frac{1}{2} C_L V_{DD}}{k_p ( \underbrace{V_{Gsp}}_{-V_{DD}}  - V_{Tp})^2} $$
	  Considerando que $2~\mu_p = \mu_n$, $V_{Tp} \simeq -V_{Tn}$ y el caso simétrico: $k_n = k_p$, entonces $L_p = L_n$, $W_p = 2 W_n$ y recordando que $t_p = \frac{1}{2} (t_{PHL} + t_{PLH})$, obtenemos $$ t_p \simeq \frac{C_L V_{DD}}{\mu C'_{ox} \frac{W_n}{L_n} (V_{DD} - V_{Tn})^2} $$
	  Dependencias fundamentales del tiempo de propagación
		* $V_{DD} \uparrow \implies t_p \uparrow$: Motivación para aumentar $V_{DD}$. Se diferencia con el consumo, en donde se busca reducir $V_{DD}$
		* $L \downarrow \implies t_p \downarrow \downarrow$ (también baja $C_L$): Motivación para reducir el tamaño