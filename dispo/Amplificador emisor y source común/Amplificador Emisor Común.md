---
dia: 2023-11-26
materia: dispo
capitulo: 7
---
### Definición
---
Este es un [[Amplificador de tensión|amplificador de tensión]], basado en un [[Transistor bipolar de juntura (TBJ)|TBJ]] 

```tikz
\usetikzlibrary{math}
\usepackage[
	europeanvoltages,
	europeancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 


\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[scale=1.2, transform shape, thick]		
		%%% Amplificador
		\draw (0, 4) node[above=2pt] {$V_{CC}$} 
				node (vcc) {}
			to[R, l^=$R_C$, *-] ++(0, -1.5)
				node[flowarrow, anchor=west, rotate=-90] (vc) 
					{\rotatebox{90}{$i_C$}}
			to[short] ++(0, -0.1)
				node[npn, xscale=1.2, yscale=1.5, anchor=C] (npn) {};
		
		\draw ($ (npn.E) + (0.3, 0.2) $) to[open, v_=$v_{CE}$] 
			($ (vc.west) + (0.3, -0.5) $);
			
		\draw (npn.E) to[short] ++(0, -0.5) 
			to[R, l^=$R_E$] ++(0, -1)
			to[short] ++(0, -0.5)
				node[ground] (gr) {};

		\draw (npn.E) to[short] ++(1.5, 0)
			to[C, l^=$C$] ($ (gr -| 1.5, 0) + (npn.E |- 0, 0) $)
				node[ground] {};
			
		\draw (npn.E) to[open, v^=$v_{BE}$] (npn.B);

		\draw ($ (vcc) + (-2.5, 0) $) node[above=2pt] {$V_{BB}$} 
				node (vbb) {}
			to[R, l^=$R_{B1}$, *-] ($ (npn.B -| 0, 0) + (vbb |- 0, 0) $)
				node (vb) {}
			to[R, l^=$R_{B2}$, *-] ($ (gr -| 0, 0) + (vbb |- 0, 0) $)
				node[ground] (gr) {};
		
		\draw (vb) to[short, i_=$i_B$] (npn.B);

		%%% Fuente
		\draw (vb) to[C, l^=$C$, *-o] ++(-2, 0)
				node (vin) {}
			to[R, l_=$R_s$] ++(-2, 0)
			to[sV, l_=$v_s$] ++(0, -2)
				node[ground] (gr) {};
		\draw ($ (gr -| 0, 0) + (vin |- 0, 0)  + (0, -1) $)
			to[open, v^=$v_{in}$] (vin);

		%%% Carga
		\draw (vc.west) to[C, l_=$C$, *-o] ++(2.5, 0)
				node (vout) {}
			to[short] ++(1, 0)
			to[R, l_=$R_L$] ++(0, -2)
			node[ground] (gr) {};

		\draw ($ (gr) + (0.4, -0.5) $) to[open, v_=$v_{out}$] 
			($ (gr |- 0, 0) + (vout -| 0, 0) + (0.4, 0) $);
	\end{circuitikz}
\end{document}
```

^6b9228

$$ \begin{matrix} 
	&&& \text{En general} \\
	A_v =  &&&  |A_v| \gg 1 \\
	A_{vs} = &&& \\
	R_i = &&& \\
	R_o = &&& \\
	C_{eq} = &&& \\
\end{matrix} $$

^daaa29

#### Calculo de parámetros
---
Suponiendo que $R_L \to \infty$ y no afecta al funcionamiento del [[Circuito eléctrico|circuito]].

Donde se tiene
* $v_{OUT}(t) = V_{OUT} + v_{out}(t)$
	* $v_{OUT}(t)$ es la [[Tensión|tensión]] total, y depende del tiempo
	* $V_{OUT}$ es la tensión de continua o polarización, no dependiente del tiempo
	* $v_{out}(t)$ es la señal alterna, dependiente del tiempo
* $V_{BB}$ y $R_B$ representan el [[Teorema de Thevenin|equivalente de Thevenin]] del circuito de polarización de la Base
* $V_{CC}$ y $R_C$ representan el [[Teorema de Thevenin|equivalente de Thevenin]] del circuito de polarización de la Colector
* $V_{BB}$, $R_B$, $V_{CC}$ y $R_C$ seleccionados para polarizar el [[Transistor|transistor]] en [[Modo activo directo (MAD) del transistor bipolar de juntura (TBJ)|MAD]] y obtener el punto $Q = Quiescent = Resposo$ deseado
* Si $v_s \uparrow \implies v_{BE} \uparrow \implies i_B \uparrow \implies i_C \uparrow \implies i_R \uparrow \implies v_{OUT} \downarrow$ 
* $A_{vo} = \frac{v_{out}}{v_{in}} < 0$ la salida está en contrafase con la entrada
* $|A_v| = \left| \frac{v_{out}}{v_{in}} \right| > 1$, si el amplificador está bien diseñado

Usando el [[Modelo de pequeña señal del transistor bipolar de juntura (TBJ)#Modelo Modelo para bajas frecuencias|modelo de pequeña señal para baja frecuencia]] y pasivando las [[Fuente de tensión|fuentes de tensión continuas]], tendremos


```tikz
\usepackage{circuitikz} 
\begin{document} 
\begin{circuitikz}[
	american, 
	voltage shift=0.5, 
	scale = 0.8,
    transform shape
] 	
	\node[ground] at (0, 0) (Gs) {};
    \node[ground] at (9, 0) (Ge) {};
    \node[ground] at (18, 0) (Gl) {};

    \draw (Gs.center) to [sV, l = $v_s$] (0, 3)
    to [R, l_ = $R_s$, i^ = $i_{in}$] (2, 3)
    to [short] (3, 3)
    to [R, l = $R_{B1}$] (3, 0)
    to [short, -*] (4.5, 0)
    
    (3, 3) to [short] (4.5, 3)
    to [R, l = $R_{B1}$] (4.5, 0)
    to [short] (Ge.center)
    
    (4.5, 3) to [short] (6, 3)
    to [short, i^ = $i_b$] (7.5, 3)
    to [R, l = $r_\pi$, -*] (7.5, 0);

    \draw (Gl.center) to [R, l_ = $R_L$] (18, 3)
    to [short, i_ = $i_{out}$] (16.5, 3)
    to [short] (15.5, 3)
    to [R, l_ = $R_{C1}$] (15.5, 0)
    to [short] (Ge.center)
    
    (15.5, 3) to [R, l_ = $R_{C2}$] (12, 3)
    to [short, i_ = $i_c$] (10.5, 3)
    to [R, l = $r_o$, -*] (10.5, 0)
    
    (10.5, 3) to (9, 3)
    to [isource, -o] node[above right =1pt] {$g_m ~ v_{be}$} (Ge.center)
    node[above left] {$e$};
        
    
    \draw (2.5, 3) to[open, v_ = $v_{in}$, o-] ++ (0, -3);
	\draw [dashed, blue!70] (-1, -1) rectangle (2, 4);

    \draw (16.5, 3) to[open, v_ = $v_{out}$, o-] ++ (0, -3);
    
    \draw (6, 0) to[open, v = $v_{be}$, o-o] ++ (0, 3)
    node [above] {$b$};
    \draw (12, 0) to[open, v = $v_{ce}$, o-o] ++ (0, 3)
    node [above] {$c$};
\end{circuitikz}
\end{document}
```

![[Amplificador emisor común con modelo de pequeña señal.webp]]

Esto se puede pensar como los [[Parámetros híbridos de un cuadripolo|parámetros de un cuadripolo]]

##### Ganancia de tensión $A_{vo}$
---
La [[Ganancia|ganancia]] de [[Tensión|tensión]] $A_{vo}$ se define sin carga conectada a la salida $$ A_{vo} = \frac{v_{out}}{v_{in}} \biggm|_{i_{out} = 0} $$
Considerando $v_{in} = v_{be}$ por lo que la ganancia de tensión sin carga es $$ A_{vo} = -g_m (r_0 // R_C) $$ donde $g_m$ es la [[Transconductancia para transistor bipolar de juntura (TBJ)|transconductancia]], y $r_0$ es [[Conductancia de colector|resistencia de salida o de colector]].

Conociendo $R_{out}$ se puede calcula la ganancia como $$ A_{vo} = -g_m ~ R_{out} $$
##### Resistencia de entrada $R_{in}$
---
La [[Resistencia|resistencia]] de entrada $R_{in}$ se define $$ R_{in} = \frac{v_{in}}{i_{in}} $$
La tensión $v_{in}$ es aplicada directamente en $v_{be}$, entonces se enciende el generador controlado, pero la corriente $g_m ~ v_{be}$ no influye en la [[Corriente eléctrica|corriente]] $i_{in}$, por lo que $$ R_{in} = (r_\pi // R_B) $$ donde $r_\pi$ es la [[Conductancia de base|resistencia de entrada o de base]]

##### Resistencia de salida $R_{out}$
---
La [[Resistencia|resistencia]] de salida $R_{out}$ se define $$ R_{out} = \frac{v_{out}}{i_{out}} \biggm|_{v_{in} = 0} $$
El generador controlado no se enciende, recordando que $v_{in} = v_{be}$, por lo que $$ R_{out} = (r_0 // R_C) $$ donde $r_0$ es la [[Conductancia de colector|resistencia de salida o de colector]]

##### Ganancia de tensión $A_{vs}$
---
Se puede definir la [[Ganancia|ganancia]] de [[Tensión|tensión]] del [[Amplificador de tensión|amplificador]] en funcionamiento. Esto implica tener tanto la fuente de señal ($v_s$ y $R_s$) como la carga conectadas ($R_L$) a la entrada y la salida $$ A_{vs} = \frac{v_{out}}{v_s} \biggm|_{i_{out} \ne 0} $$
Analizando el modelo macroscópico del amplificador 

```tikz 
\usepackage{circuitikz} 
\begin{document} 
\begin{circuitikz}[american, voltage shift=0.5] 	
	\coordinate (O) at (0, 0);
    \coordinate (A) at (8, 0);

    \draw (O) to [sV, l_ = $v_s$] ++ (0, 3)
    to [R, l_ = $R_S$, i^ = $i_{in}$] ++ (3, 0)
    to ++ (3, 0)
    to [R, l_ = $R_{in}$] ++ (0, -3)
    to (O);

    \draw (3.5, 0) to[open, v=$v_{in}$, o-o] ++ (0, 3);

    \draw (A) to ++ (6, 0)
    to [R, l_ = $R_{L}$] ++ (0, 3)
    to ++ (-1, 0)
    to [short, i_ = $i_{out}$] ++ (-2, 0)
    to [R, l_ = $R_{out}$] ++ (-3, 0)
    to [sV, l = $A_{vo} ~ v_{in}$] (A);

    \draw (11.25, 0) to[open, v=$v_{out}$, o-o] ++ (0, 3);

    \draw [dashed, blue!50] (-1, -0.5) rectangle (3, 4);
    \node[above = 2pt] (f) at (1, 4) {Fuente};

    \draw (4.5, -0.5) rectangle (10.5, 4);
    \draw [dashed, blue!50] (4.25, -0.75) rectangle (10.75, 4.25);
    \node[above = 2pt] (f) at (7.5, 4.25) {Amplificador};
    
    \draw [dashed, blue!50] (13.25, -0.5) rectangle (15, 3.5);
    \node[above = 2pt] (f) at (14.25, 3.5) {Carga};
\end{circuitikz} 
\end{document} 
```

Tenemos que $$ v_{in} = v_s \frac{R_{in}}{R_{in} + R_s} \implies \frac{v_{in}}{v_s} = \frac{R_{in}}{R_{in} + R_s} $$
Por lo tanto podemos calcular $$ v_{out} = A_{vo} v_{in} \frac{R_L}{R_{out} + R_L} \implies \frac{v_{out}}{v_{in}} = A_{vo} \frac{R_L}{R_{out} + R_L} $$
Consiguiendo $$ A_{vs} = \frac{v_{out}}{v_s} = \frac{v_{out}}{v_{in}} \frac{v_{in}}{v_s} = A_{vo} \underbrace{\frac{R_{in}}{R_{in} + R_s}}_{\substack{\text{Atenuación a} \\ \text{la entrada}}} \underbrace{\frac{R_L}{R_{out} + R_L}}_{\substack{\text{Atenuación por} \\ \text{efecto de la} \\\\\\ \text{carga}}} $$
#### Relación de compromiso de $A_{vo}$, $R_C$, $V_{CC}$ e $I_{CQ}$
---
Examinemos la dependencia con la polarización $$ |A_{vo}| = g_m ~ (r_0 // R_C) \approx g_m R_C $$ ya que $r_0 \gg R_C$, y si reescribimos $|A_{vo}|$ de la siguiente forma $$ |A_{vo}| \approx g_m R_C = \frac{I_C}{V_{th}} \frac{V_{CC} - V_{out}}{I_C} = \frac{V_{CC} - V_{out}}{V_{th}} $$
Para un $V_{out}$ fijo, la ganancia depende sólo de $V_{CC}$, mientras que se elija un $I_C$ y un $R_C$ para obtener el $V_{out}$ deseado.

#### Máxima señal sin distorsión
---
La distorsión ocurre cuando el [[Transistor|transistor]] no está trabajando en el régimen que corresponde. La relación de la señal de salida con la señal de entrada no será [[Función R-lineal|lineal]]. Existirá una deformación de la señal de salida y entonces $$ v_{out} \ne A_{vo} v_{in} $$
![[Máxima señal sin distorsión.webp]]

##### Distorsión por alinealidad
---
![[Distorsión por alinealidad en un Amplificador emisor común#Definición]]

##### Distorsión por corte en un Amplificador emisor común
---
![[Distorsión por corte en un Amplificador emisor común#Definición]]

##### Distorsión por saturación
---
![[Distorsión por saturación#Definición]]

#### Eficiencia de conversión de potencia
---
$$ \eta = \frac{P_{OUT}}{P_{DC}} \cdot 100 $$
Donde $P_{out}$ es la [[Potencia|potencia eficaz]] de la señal de salida $$ P_{OUT} = \frac{1}{2} \frac{\hat{v}^2_{out}}{R_L} $$
y $P_{DC}$ es la [[Potencia|potencia]] de continua que consume el [[Circuito eléctrico|circuito]] $$ P_{DC} = V_{CC} ~ I_C $$
Para un amplificador sin carga ($R_L \to \infty$), no se entrega potencia a la salida y el [[Rendimiento en potencia|rendimiento]] es nulo.

Si el amplificador entrega potencia a una carga, la máxima eficiencia se obtiene cuando $$ v_{out} = v_{out, ~ max} = \frac{1}{2} V_{CC} = I_{CQ} ~ R_L $$
Entonces, en general $$ \eta_{max} = \frac{1}{2} \frac{\frac{1}{2} V_{CC} I_{CQ} R_L}{R_L} \frac{1}{V_{CC} I_{CQ}} \cdot 100 = \frac{100}{4} = 25 $$
Este $25 \%$ es una cota teórica máxima.
