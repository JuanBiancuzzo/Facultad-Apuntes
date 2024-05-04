---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
El [[Transistor bipolar de juntura (TBJ)|TBJ]] es un dispositivo [[Función R-lineal|alineal]] por lo que no cumple el [[Principio de superposición]]. Entonces teniendo el [[Circuito eléctrico|circuito]]

![[Circuito de pequeña señal del transistor bipolar de juntura (TBJ).webp]]

Por lo tanto vamos a aproximarla usando el [[Serie de Taylor#Polinomio de Taylor|polinomio de Taylor]] de primer orden $$
i_C(V_{BE} + v_{be}, V_{CE} + v_{ce}) \simeq ~ I_C(V_{BE}, V_{CE})
+ \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q} v_{be} 
+ \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} $$ $$
i_B(V_{BE} + v_{be}, V_{CE} + v_{ce}) \simeq ~ I_B(V_{BE}, V_{CE})
+ \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} 
+ \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} $$
donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

#### Rango de validez del modelo
---
El error que cometemos entre el valor estimado de señal $i_c(t)$ y el valor real $i_C(t) - I_C$ debe ser pequeño. Al igual que el [[Modelo de pequeña señal para diodo]], a temperatura ambiente se obtiene $$ v_{be} \approx 5.2~mV $$ donde en la práctica se tolera $$ |v_{be}| < 10~mV $$

#### [[Modelo|Modelo]] para bajas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización

Puntos fundamentales:
* Podemos separar la respuesta del transistor en polarización y pequeña señal
* La señal es pequeña, aunque la respuesta no [[Función R-lineal|lineal]] puede aproximarse a una respuesta lineal
* Al poder considerar la respuesta lineal, se puede aplicar una pseudo-[[Principio de superposición|superposición]]

Podemos evaluar a las [[Corriente eléctrica|corrientes]] $$ i_C(V_{BE} + v_{be}, V_{CE} + v_{ce}) \approx I_C(V_{BE}, V_{CE}) + \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q}  v_{be} + \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} $$ $$ i_B(V_{BE} + v_{be}, V_{CE} + v_{ce}) \approx I_C(V_{BE}, V_{CE}) + \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} + \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} $$
donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$

$$ i_c = \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q}  v_{be} + \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} = g_m v_{be} ~ + ~ g_o v_{ce} $$
$$ i_b = \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} + \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} = g_\pi v_{be} ~ + ~ g_\mu v_{be} $$

Definimos
* $g_m \equiv$ [[Transconductancia para transistor bipolar de juntura (TBJ)|transconductancia]] $[g_m] = S$ ![[Transconductancia para transistor bipolar de juntura (TBJ)#^71b01c]]
* $g_o \equiv$ [[Conductancia de colector|Conductancia de salida o de colector]] $[g_0] = S$ ![[Conductancia de colector#^bc1d19]]
* $g_\pi \equiv$ [[Conductancia de base|Conductancia de entrada o de base]] $[g_\pi] = S$ ![[Conductancia de base#^952529]]
* $g_\mu \equiv$ [[Conductancia de realimentación|Conductancia de realimentación]] $[g_\mu] = S$ ![[Conductancia de realimentación#^333a61]]
Produciendo el circuito equivalente

```tikz
\usepackage[
	europeanvoltages,
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
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]

		\draw (0, 0) to[short, o-] ++(2, 0)
				node (rpi) {}
			to[short] ++(5.5, 0)
				node (ro) {}
			to[short, -o] ++(2, 0);
		
		\path (rpi) -- (ro) node[midway, below=2pt] {$E$};

		\draw (rpi) to[R, l_=$r_\pi$, *-] ++(0, 3)
				node (vb) {}
			to[short, -o] ++(-2, 0)
				node[above left=2pt] {$B$};
				
		\draw (ro) to[R, l_=$r_o$, *-] ++(0, 3)
				node (vc) {}
			to[short, -o] ++(2, 0)
				node[above right=2pt] {$C$};

		\draw (vb) to[R, l^=$r_\mu$, *-] ++(3, 0)
			to[isource, l^=$g_m ~ v_{be}$, -*] ++(0, -3);
		\draw (vc) to[short, *-*] ++(-2.5, 0);

	\end{circuitikz}
\end{document}
```

#### [[Modelo|Modelo]] para altas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización. Se aplica las [[Capacidad de juntura|capacitancias de juntura]] y la [[Capacidad de difusión|capacitancia de difusión]]

Donde se definen dos capacidades
* $C_\pi \equiv$ [[Capacidad de entrada]] $[C_\pi] = F$
* $C_\mu \equiv$ [[Capacidad de realimentación]] $[C_\mu] = F$

```tikz
\usepackage[
	europeanvoltages,
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
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]

		\draw (0, 0) to[short, o-] ++(2, 0)
				node (cpi) {}
			to[short] ++(2.5, 0)
				node (rpi) {}
			to[short] ++(5.5, 0)
				node (ro) {}
			to[short, -o] ++(2, 0);
		
		\path (cpi) -- (ro) node[midway, below=2pt] {$E$};

		\draw (rpi) to[R, l_=$r_\pi$, *-] ++(0, 3)
				node (vb) {}
			to[short, -*] ++(-2.5, 0);
		
		\draw (cpi) to[R, l_=$C_\pi$, *-] ++(0, 3)
			to[short, -o] ++(-2, 0)
				node[above left=2pt] {$B$};
				
		\draw (ro) to[R, l_=$r_o$, *-] ++(0, 3)
				node (vc) {}
			to[short, -o] ++(2, 0)
				node[above right=2pt] {$C$};

		\draw (vb) to[R, l^=$r_\mu$, *-] ++(3, 0)
			to[isource, l^=$g_m ~ v_{be}$, -*] ++(0, -3);
		
		\draw (vc) to[short, *-*] ++(-2.5, 0)
			to[short, *-] ++(0, 1.5)
			to[C, l_=$C_\mu$] ++(-3, 0)
			to[short, -*] ++(0, -1.5);

	\end{circuitikz}
\end{document}
```