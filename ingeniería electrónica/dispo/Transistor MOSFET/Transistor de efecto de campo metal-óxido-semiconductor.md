---
dia: 2023-11-10
aliases:
  - MOSFET
  - Transistor MOSFET
  - Transistor de efecto de campo metal-óxido-semiconductor canal N#Canal-N
  - MOSFET canal N#Canal-N
  - Transistor MOSFET canal N#Canal-N
  - Transistor de efecto de campo metal-óxido-semiconductor canal P#Canal-P
  - MOSFET canal P#Canal-P
  - Transistor MOSFET P#Canal-P
tags:
  - carrera/ingeniería-electrónica/circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
  - carrera/ingeniería-electrónica/dispo/Transistor-MOSFET
  - nota/facultad
---
# Definición
---
Este transistor tiene como componente principal a la [[Estructura Metal-Óxido-Semiconductor|estructura MOS]]

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
		\draw (0, 0) rectangle (10, 3)
			node[pos=0.2, font=\bfseries] {$p$};
			
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
		
	\end{tikzpicture}
\end{document}
```

Elementos claves
* Debajo del gate se forma una capa de inversión controlada por la tensión $V_G$
* Existen dos regiones [[Dopaje|dopadas]] a los lados del gate, llamadas drain y source, donde la capa de inversión permite la circulación de [[Carga eléctrica|carga]] entre ambas regiones
* Es un dispositivo de cuatro terminales: la tensión del body es importante

## Simbología
---
### Canal-N
---
Dispositivo de canal-n (n-MOSFET) sobre un substrato [[Impureza aceptora#Cantidad de dopante|tipo p]] (capa de inversión de [[Electrón|electrones]])

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=0.8, transform shape, thick]
		\begin{scope}[ultra thick]
			\draw (-1, 0) -- ++(1, 0)
				node[pos=0, above=2pt] {G};
			\draw (0, 0.8) -- ++(0, -1.6);
			\draw (0.3, 1) -- ++(0, -2);
	
			\draw (0.3, 0) -- ++(2, 0)
				node[right=2pt] {B};
			\draw (0.3, 0.6) -- ++(1, 0)
				-- ++(0, 2)
					node[above=2pt] {D};
			\draw (0.3, -0.6) -- ++(1, 0)
				-- ++(0, -2)
					node[below=2pt] {S};
		\end{scope}

		\fill (-1, 0) circle (0.1)
			node (gate) {};
		\fill (1.3, 2.6) circle (0.1)
			node (drain) {};
		\fill (1.3, -2.6) circle (0.1)
			node (source) {};
		\fill (2.3, 0) circle (0.1)
			node (body) {};

		\tikzmath {
			\sep = 0.3;
			\dist = 1;
		}

		\draw[->] ($ (drain.center) + (-\sep, -\sep) $)
			-- ++(0, -1)
				node[midway, left=2pt] {$I_D$};

		\draw[->] ($ (source.center) + (-\sep, 0) $)
			.. controls
				($ (source.center -| gate.center) + (\dist, 0) $)
					and
				($ (source.center -| gate.center) + (0, \dist) $)
			.. ($ (gate.center) + (0, -\sep) $)
				node[midway, below left=2pt] {$V_{GS}$};
				
		\draw[->] ($ (source.center) + (\sep, 0) $)
			.. controls
				($ (source.center -| body.center) + ({\dist / 4}, \dist) $)
					and
				($ (source.center -| body.center) + (0, {\dist * (7 / 4)}) $)
			.. ($ (body.center) + (0, -\sep) $)
				node[midway, left=2pt] {$V_{BS}$};

		\draw[->] ($ (source.center) + (\sep, 0) $)
			.. controls
				($ (source.center) + ({2.5 * \dist}, 0) $)
					and
				($ (drain.center) + ({2.5 * \dist}, 0) $)
			.. ($ (drain.center) + (\sep, 0) $)
				node[midway, right=2pt] {$V_{DS} > 0$};
	\end{tikzpicture}

	\begin{tikzpicture}[scale=1.1, transform shape, thick]

		\path (-1, 0) -- ++(-1, 0);
 
		\begin{scope}[ultra thick]
			\draw (-1, 0) -- ++(1, 0)
				node[pos=0, above=2pt] {G};
			\draw (0, 0.8) -- ++(0, -1.6);
			\draw (0.3, 1) -- ++(0, -2);
	
			\draw (0.3, 0) -- ++(2, 0)
				node[right=2pt] {B};
			\draw (0.3, 0.6) -- ++(1, 0)
				-- ++(0, 2)
					node[above=2pt] {D};
			\draw[->] (0.3, -0.6) -- ++(1, 0);
			\draw (1.3, -0.6) -- ++(0, -2)
					node[below=2pt] {S};
		\end{scope}

		\fill (-1, 0) circle (0.1)
			node (gate) {};
		\fill (1.3, 2.6) circle (0.1)
			node (drain) {};
		\fill (1.3, -2.6) circle (0.1)
			node (source) {};
		\fill (2.3, 0) circle (0.1)
			node (body) {};

		\tikzmath { \sep = 0.3; }

		\draw[->] ($ (drain.center) + (-\sep, -\sep) $)
			-- ++(0, -1)
				node[midway, left=2pt] {$I_D$};
	\end{tikzpicture}
\end{document}
```

### Canal-P
---
Dispositivo de canal-p (p-MOSFET) sobre un substrato [[Impureza donora#Cantidad de dopante|tipo n]] (capa de inversión de [[Hueco|huecos]])

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=0.8, transform shape, thick]
		\begin{scope}[ultra thick]
			\draw (-1, 0) -- ++(0.75, 0)
				node[pos=0, below=2pt] {G};
			\draw (-0.15, 0) circle (0.1);
			\draw (0, 0.8) -- ++(0, -1.6);
			\draw (0.3, 1) -- ++(0, -2);
	
			\draw (0.3, 0) -- ++(2, 0)
				node[right=2pt] {B};
			\draw (0.3, 0.6) -- ++(1, 0)
				-- ++(0, 2)
					node[above=2pt] {S};
			\draw (0.3, -0.6) -- ++(1, 0)
				-- ++(0, -2)
					node[below=2pt] {D};
		\end{scope}

		\fill (-1, 0) circle (0.1)
			node (gate) {};
		\fill (1.3, 2.6) circle (0.1)
			node (source) {};
		\fill (1.3, -2.6) circle (0.1)
			node (drain) {};
		\fill (2.3, 0) circle (0.1)
			node (body) {};

		\tikzmath {
			\sep = 0.3;
			\dist = 1;
		}

		\draw[->] ($ (drain.center) + (-\sep, \sep) $)
			-- ++(0, 1)
				node[midway, left=2pt] {$I_D$};

		\draw[<-] ($ (source.center) + (-\sep, 0) $)
			.. controls
				($ (source.center -| gate.center) + (\dist, 0) $)
					and
				($ (source.center -| gate.center) + (0, -\dist) $)
			.. ($ (gate.center) + (0, \sep) $)
				node[midway, above left=2pt] {$V_{SG}$};
				
		\draw[<-] ($ (source.center) + (\sep, 0) $)
			.. controls
				($ (source.center -| body.center) + ({\dist / 4}, -\dist) $)
					and
				($ (source.center -| body.center) + (0, {-\dist * (7 / 4)}) $)
			.. ($ (body.center) + (0, \sep) $)
				node[midway, left=2pt] {$V_{SB}$};

		\draw[<-] ($ (source.center) + (\sep, 0) $)
			.. controls
				($ (source.center) + ({2.5 * \dist}, 0) $)
					and
				($ (drain.center) + ({2.5 * \dist}, 0) $)
			.. ($ (drain.center) + (\sep, 0) $)
				node[midway, right=2pt] {$V_{SD} > 0$};
	\end{tikzpicture}

	\begin{tikzpicture}[scale=1.1, transform shape, thick]

		\path (-1, 0) -- ++(-1, 0);
 
		\begin{scope}[ultra thick]
			\draw (-1, 0) -- ++(1, 0)
				node[pos=0, below=2pt] {G};
			\draw (0, 0.8) -- ++(0, -1.6);
			\draw (0.3, 1) -- ++(0, -2);
	
			\draw (0.3, 0) -- ++(2, 0)
				node[right=2pt] {B};
			\draw[<-] (0.3, 0.6) -- ++(1, 0);
			\draw (1.3, 0.6) -- ++(0, 2)
					node[above=2pt] {S};
			\draw (0.3, -0.6) -- ++(1, 0)
				-- ++(0, -2)
					node[below=2pt] {D};
		\end{scope}

		\fill (-1, 0) circle (0.1)
			node (gate) {};
		\fill (1.3, 2.6) circle (0.1)
			node (source) {};
		\fill (1.3, -2.6) circle (0.1)
			node (drain) {};
		\fill (2.3, 0) circle (0.1)
			node (body) {};

		\tikzmath { \sep = 0.3; }

		\draw[->] ($ (drain.center) + (-\sep, \sep) $)
			-- ++(0, 1)
				node[midway, left=2pt] {$I_D$};
	\end{tikzpicture}
\end{document}
```


## Regímenes de operación
---
El [[Transistor]] tiene 3 regímenes de operación
* Corte ![[Corte del transistor de efecto de campo metal-óxido-semiconductor#^ef3a86]]
* Triodo/Linea ![[Triodo del transistor de efecto de campo metal-óxido-semiconductor#^628376]]
* Saturación ![[Saturación del transistor de efecto de campo metal-óxido-semiconductor#^c13b85]]

## Curvas características
---
![[Curvas características del MOSFET.png]]

## Características del MOSFET con $V_{BS} \ne 0~V$
---
Hay un cuarto terminal en los MOSFET, el body o bulk. Este terminal es especialmente importante en los [[Circuito eléctrico|circuitos]] integrados

El contacto de Body permite la aplicación de una polarización al body respecto de la capa de [[Inversión de la estructura Metal-Óxido-Semiconductor|inversión]]

Para un n-MOSFET, $V_{BS}$ puede ser únicamente negativa para asegurar que la [[Juntura PN]] entre Source y Bulk esté en [[Diodo de Juntura PN#Para $V_D < 0$ (en Convención de signos para la tensión de polarización Polarización inversa inversa )|inversa]]

Suponiendo a la juntura MOS en inversión analizaremos el caso $V_{BS} = 0$ y luego observaremos que ocurre cuando se aplica una $V_{BS} < 0$. Asumiremos que no circula [[Corriente eléctrica|corriente]] de Drain

Al modificar $V_{BS}$ cambian las condiciones de contorno del lado del [[Semiconductor|semiconductor]]

### Densidad de [[Carga eléctrica|carga]]
---
```tikz
\usetikzlibrary{math}

\begin{document} 
	\tikzmath {
		\cero = 1;
		\qNa = 1;
		\xdmax = 4;
		\qn = - \qNa - 1;
		\dif = 0.05;
	}
	
	\begin{tikzpicture}[scale=1.2, transform shape]
		\draw[->] (-0.5, 0) 
			node[above=2pt] {$0$}
			node[below=2pt] {$-t_{ox}$}
			-- ({\xdmax + 1}, 0) node[below right=2pt] {$x$};
		\draw[->] (0, {\qn - 0.5}) -- (0, 1.5)
			node[left=2pt] {$\rho$};

		\draw[ultra thick] (-0.5, 0) 
			-- (0, 0)
			-- (0, \qNa)
			-- (0, 0)
			-- (\cero, 0)
				node[above=2pt] {$0$}
			-- (\cero, \qn)
				node[right=2pt] {$Q_n$}
			-- (\cero, -\qNa)
			-- ({\xdmax - 1}, -\qNa)
			-- ({\xdmax - 1}, 0)
			-- ({\xdmax + 0.8}, 0);

		\draw[dashed, ultra thick] (-0.5, -\dif) 
			-- ({0 - \dif}, -\dif)
			-- ({0 - \dif}, \qNa);
		\draw[dashed, ultra thick] ({0 - \dif}, -\dif)
			-- ({\cero + \dif}, -\dif)
			-- ({\cero + \dif}, {\qn + 0.3});
		\draw[dashed, ultra thick] ({\cero + \dif}, {-\qNa - \dif})
			-- (\xdmax, {-\qNa - \dif})
				node[right=2pt] {$-q~N_a$}
			-- (\xdmax, -\dif)
				node[above=2pt, scale=0.9] {$x_{d~max}(V_{BS})$}
			-- ({\xdmax + 0.8}, -\dif);

		\draw[ultra thick] ({\xdmax + 2}, 0.5) -- ++(2, 0)
			node[right=2pt] {$V_{BS} = 0$};
		\draw[dashed, ultra thick] ({\xdmax + 2}, 0) -- ++(2, 0)
			node[right=2pt] {$V_{BS} < 0$};
	\end{tikzpicture}
\end{document}
```

Donde la $Q_G$ se mantiene, pero la carga $Q_B$ y $Q_n$ se compensan entre sí para la [[Ecuación de continuidad#En electromagnetismo|conservación de carga]]
### Campo eléctrico
---
![[Campo eléctrico en la capa de inversión de un MOSFET al aumentar la tensión Vbs.webp]]

### Función potencial
---
![[Función potencial en la capa de inversión de un MOSFET al aumentar la tensión Vbs.webp]]

* Al considerar $V_{GS}$ fijo, $V_{ox}$ no cambia porque el canal se encuentra al mismo potencial que el Source.
* Como $V_{ox}$ no cambia, la suma de las [[Carga eléctrica|cargas]] de deserción e inversión no cambian.
* Al aumentar la carga de deserción, entonces hay menos carga de inversión $Q'_n$. La carga de inversión es... (sin querer lo borre, por favor ayuda)