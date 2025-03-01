---
dia: 2023-09-03
tags:
  - carrera/ingeniería-electrónica/adc/Cuadripolos
  - nota/facultad
  - ingeniería-en-informática/adc/Cuadripolos
---
# Definición
---
Las redes de dos puertos resultan útiles en las comunicaciones, los [[Control del sistema|sistemas de control]], los sistemas de potencia y la electrónica.

Una vez se conocen sus parámetros se puede tratar a la red como una "caja negra", y es análogo a los [[Teorema de Thevenin|equivalentes de Thevenin]] y [[Teorema de Norton|Norton]].

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

	\tikzmath {
		\width = 2;
		\height = 1.75;
	}

	\begin{circuitikz}[voltage shift=0.5, scale=1.2, transform shape, ultra thick]
		\draw (-\height, -\width) rectangle (\height, \width);
		\node (cuadri_in_up)    at (-\height, {4 * (2 * \width) / 5 - \height}) {};
		\node (cuadri_in_down)  at (-\height, {1 * (2 * \width) / 5 - \height}) {};
		\node (cuadri_out_up)   at ( \height, {4 * (2 * \width) / 5 - \height}) {};
		\node (cuadri_out_down) at ( \height, {1 * (2 * \width) / 5 - \height}) {};
		\node (cuadri_center)   at ( 0, 0) {};

		\path (cuadri_center) node[align=center, scale=1.5] {Red\\lineal};

		\draw (cuadri_in_down) to[short, f^=$I_1$, -o] ++(-3, 0);
		\draw (cuadri_out_down) to[short, f_=$I_2$, -o] ++(3, 0);

		\draw ($ (cuadri_in_up) + (-3, 0) $) to[short, f^=$I_1$, o-] ++(3, 0);
		\draw ($ (cuadri_out_up) + (3, 0) $) to[short, f_=$I_2$, o-] ++(-3, 0);

		\draw ($ (cuadri_in_down) + (-3, 0) $) to[open, v^=$V_1$] 
			($ (cuadri_in_up) + (-3, 0) $);
		\draw ($ (cuadri_out_down) + (3, 0) $) to[open, v_=$V_2$] 
			($ (cuadri_out_up) + (3, 0) $);

	\end{circuitikz}
\end{document}
```

Los parámetros de las red, son cantidades que relacionan $V_1$, $V_2$, $I_1$ e $I_2$.

## Tipos de parámetros
---
Se tiene $4$ tipos de parámetros
* Parámetros de [[Impedancia|impedancia]]
* Parámetros de [[Admitancia|admitancia]]
* Parámetros híbridos y su inverso
* Parámetros de transmisión y su inverso

### Parámetros de impedancia
---
![[Parámetros de impedancia de un cuadripolo#Definición]]

### Parámetros de admitancia
---
![[Parámetros de admitancia de un cuadripolo#Definición]]

### Parámetros híbridos
---
![[Parámetros híbridos de un cuadripolo#Definición]]

### Parámetros híbridos inversos
---
![[Parámetros híbridos de un cuadripolo#Inversos]]


### Parámetros de transmisión
---
![[Parámetros de transmisión de un cuadripolo#Definición]]

### Parámetros de transmisión inversos
---
![[Parámetros de transmisión de un cuadripolo#Inversos]]

## Interconexiones
---
Hay varias posibles conexiones

### Conexión en serie
---
![[Cuadripolo en serie#Definición]]

### Conexión en paralelo
---
![[Cuadripolo en paralelo#Definición]]

### Conexión en cascada
---
![[Amplificadores en cascada#Punto de vista del cuadripolo|Cuadripolo en cascada]]