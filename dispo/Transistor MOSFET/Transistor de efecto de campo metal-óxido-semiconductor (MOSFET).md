---
dia: 2023-11-10
materia: dispo
capitulo: 6
---
### Definición
---
Este transistor tiene como componente principal a la [[Estructura Metal-Óxido-Semiconductor (MOS)|estructura MOS]]

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
		\draw (0, 0) rectangle (10, 3)
			node[midway, font=\bfseries] {$p$};
			
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
			
		\draw (0, 0) rectangle (10, 3);
		\filldraw (0, -0.2) rectangle (10, 0);
		\draw (5, -0.2) -- ++(0, -0.4)
			node[below=2pt, font=\bfseries] {Body};
		
	\end{tikzpicture}
\end{document}
```

Elementos claves
* Debajo del gate se forma una capa de inversión controlada por la tensión $V_G$
* Existen dos regiones [[Dopaje|dopadas]] a los lados del gate, llamadas drain y source, donde la capa de inversión permite la circulación de [[Carga eléctrica|carga]] entre ambas regiones
* Es un dispositivo de cuatro terminales: la tensión del body es importante

#### Simbología
---
##### Canal-N
---
Dispositivo de canal-n (n-MOSFET) sobre un substrato [[Impureza aceptora#Cantidad de dopante|tipo p]] (capa de inversión de [[Electrón|electrones]])
![[MOSFET canal N.webp]]

##### Canal-P
---
Dispositivo de canal-p (p-MOSFET) sobre un substrato [[Impureza donora#Cantidad de dopante|tipo n]] (capa de inversión de [[Hueco|huecos]])
![[MOSFET canal P.webp]]

#### Regímenes de operación
---
El [[Transistor]] tiene 3 regímenes de operación

##### [[Corte del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|Corte]]
---
![[Corte del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Definición]]

##### [[Triodo del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|Triodo/Linea]]
---
![[Triodo del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Definición]]

##### [[Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|Saturación]]
---
![[Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Definición]]


#### Características del MOSFET con $V_{BS} \ne 0~V$
---
Hay un cuarto terminal en los MOSFET, el body o bulk. Este terminal es especialmente importante en los [[Circuito eléctrico|circuitos]] integrados.

El contacto de Body permite la aplicación de una polarización al body respecto de la capa de [[Inversión de la estructura Metal-Óxido-Semiconductor (MOS)|inversión]].

Para un n-MOSFET, $V_{BS}$ puede ser únicamente negativa para asegurar que la [[Juntura PN]] entre Source y Bulk esté en [[Diodo de Juntura PN#Para $V_D < 0$ (en Convención de signos para la tensión de polarización Polarización inversa inversa )|inversa]].

Suponiendo a la juntura MOS en inversión analizaremos el caso $V_{BS} = 0$ y luego observaremos que ocurre cuando se aplica una $V_{BS} < 0$. Asumiremos que no circula [[Corriente eléctrica|corriente]] de Drain.

Al modificar $V_{BS}$ cambian las condiciones de contorno del lado del [[Semiconductor]]

##### Densidad de [[Carga eléctrica|carga]]
---
![[Densidad de carga en la capa de inversión de un MOSFET al aumentar la tensión Vbs.webp]]

Donde la $Q_G$ se mantiene, pero la carga $Q_B$ y $Q_n$ se compensan entre sí para la [[Conservación de carga]].
##### [[Campo eléctrico]]
---
![[Campo eléctrico en la capa de inversión de un MOSFET al aumentar la tensión Vbs.webp]]

##### [[Potencial eléctrico|Función potencial]]
---
![[Función potencial en la capa de inversión de un MOSFET al aumentar la tensión Vbs.webp]]

* Al considerar $V_{GS}$ fijo, $V_{ox}$ no cambia porque el canal se encuentra al mismo potencial que el Source.
* Como $V_{ox}$ no cambia, la suma de las [[Carga eléctrica|cargas]] de deserción e inversión no cambian.
* Al aumentar la carga de deserción, entonces hay menos carga de inversión $Q'_n$. La carga de inversión es 