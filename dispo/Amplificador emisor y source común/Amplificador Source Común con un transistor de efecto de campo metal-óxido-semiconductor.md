---
dia: 2023-11-28
aliases:
  - Amplificador Source Común con un MOSFET
tags:
  - dispo/Amplificador-emisor-y-source-común
  - nota/facultad
---
### Definición
---
Consideremos el siguiente [[Amplificador de tensión|amplificador]] implementado con un [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]]  [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-N|canal N]]

```tikz
\usetikzlibrary{math}
\usepackage[
	europeanvoltages,
	europeancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester,
]{circuitikz} 

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	tripoles/mos style/arrows,
}

\begin{document} 
	\begin{circuitikz}[scale=1.2, transform shape, thick]		
		%%% Amplificador
		\draw (0, 4) node[above=2pt] {$V_{DD}$} 
				node (vdd) {}
			to[R, l^=$R_D$, *-] ++(0, -1.5)
				node[flowarrow, anchor=west, rotate=-90] (vd) 
					{\rotatebox{90}{$i_D$}}
			to[short] ++(0, -0.1)
				node[nigfetd, xscale=1.2, yscale=1.5, anchor=D] (nmos) {};
		
		\draw ($ (nmos.S) + (0.3, 0.2) $) to[open, v_=$v_{DS}$] 
			($ (vd.west) + (0.3, -0.5) $);
		\draw (nmos.S) to[R, l^=$R_S$] ++(0, -1.5) 
				node[ground] (gr) {};
		
		\draw (nmos.S) to[open, v^=$v_{GS}$] (nmos.G);

		\draw ($ (vdd) + (-2.5, 0) $) node[above=2pt] {$V_{GG}$} 
				node (vgg) {}
			to[R, l^=$R_{G1}$, *-] ($ (nmos.G -| 0, 0) + (vgg |- 0, 0) $)
				node (vg) {}
			to[short, i_=$i_G$] (nmos.G);
		\draw (vg) to[R, l^=$R_{G2}$] 
			($ (gr -| 0, 0) + (vg |- 0, 0) $)
				node[ground] {};

		%%% Fuente
		\draw (vg) to[C, l^=$C$, *-o] ++(-2, 0)
				node (vin) {}
			to[R, l_=$R_s$] ++(-2, 0)
			to[sV, l_=$v_s$] ++(0, -2)
				node[ground] (gr) {};
		\draw ($ (gr -| 0, 0) + (vin |- 0, 0)  + (0, -1) $)
			to[open, v^=$v_{in}$] (vin);

		%%% Carga
		\draw (vd.west) to[C, l_=$C$, *-o] ++(2.5, 0)
				node (vout) {}
			to[short] ++(1, 0)
			to[R, l_=$R_L$] ++(0, -2)
			node[ground] (gr) {};

		\draw ($ (gr) + (0.4, -0.5) $) to[open, v_=$v_{out}$] 
			($ (gr |- 0, 0) + (vout -| 0, 0) + (0.4, 0) $);
	\end{circuitikz}
\end{document}
```

^bef7b2

Donde tomamos $R_G = R_{G1} // R_{G2}$ , $R_{CA} = R_D // R_L$ $$\begin{array}{rl c|c c}
	 &&&& \text{En general} \\
	A_v =& \displaystyle -\frac{g_m ~R_{CA}}{1 + g_m ~ R_S} \underset{g_m ~ R_S \gg 1}{\approx} -\frac{R_{CA}}{R_S} &&& |A_v| \uparrow\uparrow \\\\
	R_i =& R_G &&& R_i \uparrow\uparrow \\\\
	R_{oc} =& r_{ds} ~ (1 - g_m ~ R_S) \xrightarrow[r_{ds} \gg 1]{} \infty &&& R_o \uparrow\uparrow \\\\
	C_{eq} =& &&& \text{Velocidad lento} \\\\
\end{array} $$

^27b24b

La fuente de polarización ($V_{GG}$ y $R_G$) representa el [[Teorema de Thevenin|equivalente de Thevenin]] del [[Circuito eléctrico|circuito]] de polarización del MOSFET. 

#### Calculo de parámetros
---
Usando el [[Modelo de pequeña señal para transistor de efecto de campo metal-óxido-semiconductor#Modelo Modelo para bajas frecuencias|modelo de pequeña señal para baja frecuencia]] y pasivando las [[Fuente de tensión|fuentes de tensión continuas]], tendremos

![[Amplificador source común con modelo de pequeña señal.webp]]

Esto se puede pensar como los [[Parámetros híbridos de un cuadripolo|parámetros de un cuadripolo]]

##### Ganancia de tensión $A_{vo}$
---
La [[Ganancia|ganancia]] de [[Tensión|tensión]] $A_{vo}$ se define sin carga conectada a la salida $$ A_{vo} = \frac{v_{out}}{v_{in}} \biggm|_{i_{out} = 0} $$
Considerando $v_{in} = v_{gs}$ por lo que la ganancia de tensión sin carga es $$ A_{vo} = -g_m (r_0 // R_C) $$ donde $g_m$ es la [[Transconductancia para transistor de efecto de campo metal-óxido-semiconductor|transconductancia]], y $r_0$ es [[Conductancia del drain|resistencia de salida o del drain]].

##### Resistencia de entrada $R_{in}$
---
La [[Resistencia|resistencia]] de entrada $R_{in}$ se define $$ R_{in} = \frac{v_{in}}{i_{in}} $$
La [[Tensión|tensión]] $v_{in}$ es aplicada directamente a $v_{gs}$, entonces se enciende el generador controlado. 

Sin embargo, la [[Corriente eléctrica|corriente]] $g_m \times v_{gs}$ no influye en la corriente de entrada $i_{in}$ $$ i_{in} = i_{rg} + i_g $$
##### Resistencia de salida, $R_{out}$
---
La [[Resistencia|resistencia]] de salida $R_{out}$ se define $$ R_{out} = \frac{v_{out}}{i_{out}} $$
Ya que $v_s = 0$, entonces podemos decir que $g_m \cdot v_{gs} = 0$, y nos deja conseguir la corriente $i_{out}$ como el paralelo entre $r_0$ y $R_D$, y en función de $v_{out}$ dándonos $$ R_{out} = \frac{1}{\frac{1}{r_0} + \frac{1}{R_D}} = r_0 // R_D $$
Se puede reescribir la ganancia $A_{vo}$ como $$ A_{vo} = -g_m \cdot (r_0 // R_D) = -g_m \cdot R_{out} $$
##### Ganancia de tensión $A_{vs}$ de pequeña señal
---
Se puede también definir la [[Ganancia|ganancia]] de [[Tensión|tensión]] del amplificador en funcionamiento

Esto implica tener tanto la fuente de señal ($v_s; ~R_s$) como la carga conectada ($R_L$) a la entrada y la salida $$ A_{vs} = \frac{v_{out}}{v_s} \biggm|_{i_{out} \ne 0} $$
Analizando el modelo macroscópico del amplificador $$ v_{in} = \frac{R_{in}}{R_{in} + R_s} ~ v_s \implies \frac{v_{in}}{v_s} = \frac{R_{in}}{R_{in} + R_s} $$ $$ v_{out} \bigm|_{i_{out} \ne 0} = A_{vo} ~ v_{in} ~ \frac{R_L}{R_{out} + R_L} $$ $$ v_{out} \bigm|_{i_{out} \ne 0} = A_{vo} ~ \underbrace{\frac{R_{in}}{R_{in} + R_s} ~ v_s}_{v_{in}} ~ \frac{R_L}{R_{out} + R_L} $$
$$ \implies A_{vs} = \frac{v_{out}}{v_s} = A_{vo} \underbrace{\frac{R_{in}}{R_{in} + R_s}}_{\substack{\text{Atenuación a} \\ \text{la entrada}}} ~ \underbrace{\frac{R_L}{R_{out} + R_L}}_{\substack{\text{Atenuación por} \\ \text{efecto de la carga}}} $$

Para el source-común, como $R_{in}$ suele ser un valor elevado, si despreciamos el efecto de carga $$ v_{in} \simeq v_s \implies \frac{v_{in}}{v_s} \simeq 1 \implies A_{vs} \simeq \frac{v_{out}}{v_{in}} = A_{vo} $$
##### Relación de compromiso de $A_{vo}$, $R_D$, $V_{DD}$ e $I_{DQ}$
---
Examinemos la dependencia con la polarización $$ |A_{vo}| = g_m ~ (r_0 // R_D) \simeq g_m ~ R_D $$
Reescribimos $|A_{vo}|$ de la siguiente forma $$ |A_{vo}| \simeq g_m ~ R_D = \sqrt{2 \frac{W}{L} \mu_n C'_{ox} I_D} ~ \frac{V_{DD} - V_{out}}{I_D} $$
Por lo que $$ |A_{vo}| \propto \frac{V_{DD} - V_{out}}{I_D} $$
Para obtener elevado $|A_{vo}|$ conviene $V_{DD} \uparrow$ e $I_D \uparrow$

Si $V_{out}$ se quiere dejar constante, entonces ambos enfoques implican $\implies R_D = \frac{V_{DD}}{I_D} \uparrow$ 

Consecuencia de un elevado valor de $R_D$:
* Entra en juego el valor de $r_0$, ya que $|A_{vo}| = g_m ~ (r_0 // R_D)$
* Su implementación en [[Circuito integrado|circuitos integrados]] requiere un área muy grande de silicio. Es preferible prescindir de [[Resistor|resistores]]
* El valor elevado de [[Resistencia|resistencia]] incrementa el [[Ruido térmico|ruido térmico]] del [[Circuito eléctrico|circuito]]

#### Máxima señal sin distorsión
---
La distorsión ocurre cuando el [[Transistor de efecto de campo metal-óxido-semiconductor|transistor]] no está trabajando en el [[Transistor de efecto de campo metal-óxido-semiconductor#Regímenes de operación|régimen]] que corresponde. 

La relación de la señal de salida con la señal de entrada no será lineal. 

Existirá una deformación de la señal de salida y entonces $v_{out} \ne A_{vo} ~ v_{in}$

##### Distorsión por alinealidad
---
![[Distorsión por alinealidad en un Amplificador source común#Definición]]

##### Distorsión por corte
---
![[Distorsión por corte en un Amplificador source común#Definición]]

##### Distorsión por tríodo
---
![[Distorsión por tríodo en un Amplificador source común#Definición]]

