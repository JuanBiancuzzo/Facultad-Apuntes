---
dia: 2023-11-16
aliases:
  - MPS para transistor de efecto de campo metal-óxido-semiconductor
  - MPS para MOSFET
  - Modelo de pequeña señal para MOSFET
  - Transconductancia para transistor de efecto de campo metal-óxido-semiconductor#Transconductancia
  - Transconductancia para MOSFET#Transconductancia
  - Conductancia del drain para transistor de efecto de campo metal-óxido-semiconductor#Conductancia del drain o conductancia de salida
  - Conductancia de salida para transistor de efecto de campo metal-óxido-semiconductor#Conductancia del drain o conductancia de salida
  - Conductancia del drain para MOSFET#Conductancia del drain o conductancia de salida
  - Conductancia de salida para MOSFET#Conductancia del drain o conductancia de salida
  - Transconductancia del backgate#Transconductancia del backgate
tags:
  - dispo/Transistor-MOSFET
  - nota/facultad
  - circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
---
### Definición
---
El [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] es un dispositivo [[Función lineal|alineal]] por lo que no cumple el [[Principio de superposición|principio de superposición]]. Entonces teniendo el [[Circuito eléctrico|circuito]]

![[Circuito de pequeña señal del Transistor de efecto de campo metal-óxido-semiconductor (MOSFET).webp]]

Por lo tanto vamos a aproximarla usando el [[Serie de Taylor#Polinomio de Taylor|polinomio de Taylor]] de primer orden $$ \begin{align}
	i_D(V_{GS} + v_{gs}, V_{DS} + v_{ds}, V_{BS} + v_{bs}) \simeq& ~ I_DQ(V_{GS}, V_{DS}, V_{BS}) \\
	+& ~ \frac{\partial i_D}{\partial v_{GS}} \biggm|_{Q} v_{gs} \\ 
	+& ~ \frac{\partial i_D}{\partial v_{DS}} \biggm|_{Q} v_{ds} \\ 
	+& ~ \frac{\partial i_D}{\partial v_{BS}} \biggm|_{Q} v_{bs} \\  
\end{align} $$ donde $Q \equiv$  punto de polarización  $(V_{GS}, V_{DS}, V_{BS})$.
#### Rango de validez del modelo
---
Recordando que $i_D$ esta dada por $$ i_D = \begin{cases} 
	0 & v_{GS} < V_T \\
	k (v_{GS} - V_T)^2 (1 + \lambda v_{DS}) & v_{GS} > V_T, ~ v_{DS} > V_{DS ~ (sat)} \\
	2k \left( v_{GS} - \frac{v_{DS}}{2} - V_T \right) v_{DS} (1 + \lambda v_{DS}) & v_{GS} > V_T, ~ v_{DS} < V_{DS ~ (sat)}\\
\end{cases} $$
Tomando la corriente correspondiente al [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|régimen de saturación]]. Al [[Serie de Taylor|aproximar]] una función cuadrática con un polinomio de primer orden, se comete un error. El error está dado por el término de orden 2 del polinomio. Si aceptamos un $10\%$ de error en la linealización $$ k ~ v^2_{gs} < 10\% ~ 2k ~ (V_{GS} - V_T) ~ v_{gs} $$ $$ v_{gs} < 0.2 ~ (V_{GS} - V_T) $$ 
Por lo que el límite del modelo de pequeña señal depende de la polarización.

#### Modelo para bajas frecuencias
---
Corriente $i_d$ de pequeña señal $$ i_d \simeq g_m ~ v_{gs} + g_0 ~ v_{ds} + g_{mb} ~ v_{bs} $$
Tomando $i_D$ como $$ i_D = \frac{1}{2} \frac{W}{L} (v_{GS} - V_T)^2 (1 + \lambda v_{DS}) $$ donde tomamos como punto de polarización $Q$ en  $(V_{GS}, V_{DS}, V_{BS})$

Dándonos el modelo completo que pequeña señal a baja frecuencia 

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

		\draw (0, 0) 
				node (vs) {}
				node[left=2pt] {$S$}
			to[short, o-] ++(7, 0)
			to[R, l_=$r_0$] ++(0, 3)
				node (vd) {};

		\draw ($ (vd) + (2, 0) $) 
				node[right=2pt] {$D$}
			 to[short, i_=$i_d$, o-] ++(-2, 0)
			 to[short, *-] ++(-2.5, 0)
				 node (ivbs) {}
			to[isource, l^=$g_{mb} ~ v_{bs}$, -*] ++(0, -3);

		\draw (ivbs) to[short, *-] ++(-2.5, 0)
			to[isource, l^=$g_m ~ v_{gs}$, -*] ++(0, -3);

		\draw (vs) to[open, v_=$v_{gs}$, -o] ++(0, 3)
			node[left=2pt] {$G$};
		\draw (vs) to[open, v^=$v_{bs}$, -o] ++(0, -3)
			node[left=2pt] {$B$};

	\end{circuitikz}
\end{document}
```

##### Transconductancia
---
La transconductancia $g_m \equiv [S]$ $$ g_m = \frac{\partial i_D}{\partial v_{GS}} \biggm|_{Q} = \frac{W}{L} \mu C'_{ox} (V_{GS} - V_T) (1 + \lambda V_{DS}) = \sqrt{2 \frac{W}{L} \mu_n C'_{ox} I_D} = 2\sqrt{k I_D} $$ 
##### Conductancia del drain o conductancia de salida
---
Conductancia del drain o conductancia de salida $g_0 \equiv [S]$ $$ g_0 = \frac{\partial i_D}{\partial v_{DS}} \biggm|_{Q} = \frac{1}{2} \frac{W}{L} (v_{GS} - V_T)^2 \lambda = I_{D ~ (sat)} \lambda \propto \frac{I_{D ~ (sat)}}{L} $$ 
###### Validez
---
Es válido mientras $$ v_{ds} < V_{DSQ} - V_{DS ~ (sat)} $$ es decir, mientras el [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] esté polarizado en el [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|régimen de saturación]] 

##### Transconductancia del backgate
---
Transconductancia del backgate $g_{mb} \equiv [S]$, Recordando que $V_T(v_{BS})$ donde $V_T$ es la [[Tensión umbral#Para un Transistor de efecto de campo metal-óxido-semiconductor (MOSFET) MOSFET|tensión umbral]] tenemos que  $$ \begin{matrix} 
	g_{mb} = \frac{\partial i_D}{\partial v_{BS}} \biggm|_{Q} = \frac{W}{L} (v_{GS} - V_T(v_{BS})) (1 + \lambda v_{DS}) \left( - \frac{\partial V_T}{\partial v_{BS}} \biggm|_{Q} \right) \\
	g_{mb} = g_m \left( - \frac{\partial V_T}{\partial v_{BS}} \biggm|_{Q} \right)
\end{matrix} $$

Recordando que $$ V_T(V_{BS}) = V_{T0} + \gamma ~ \left( \sqrt{-2 \phi_p - V_{BS}} - \sqrt{-2 \phi_p} \right) $$ resulta $$ g_{mb} = g_m \frac{\gamma}{2 \sqrt{-2\phi_p - V_{BS}}} $$ donde $\gamma$ es [[Body factor coefficient|body factor coefficient]]

###### Validez
---
Es válido mientras (esta mal según pipe pero no esta confiado que es este el que esta mal) $$ v_{bs} < 0.4 ~ (V_{GS} - V_T) (-2\phi_p - V_{BS}) $$

#### Modelo para altas frecuencias
---
Las [[Capacitancia|capacitancias]] parásitas del [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] limitan su respuesta dinámica y en [[Función periódica#Frecuencia|frecuencia]]. El régimen más importante para aplicaciones analógicas es el de [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|saturación]].

![[Estructura MOSFET con capacitancias.webp]]

Definimos:
* $C_{gs} \equiv$ [[Capacidad de Gate contra canal de inversión|capacitancia de Gate contra canal de inversión]] + [[Capacidad de overlap|capacitancia de overlap]]
* $C_{gd} \equiv$ [[Capacidad de overlap|capacitancia de overlap]]
* $C_{sb} \equiv$ [[Capacidad de juntura|capacidad de juntura Source-Bulk]] $= C'j(V_{BS}) ~ A_S$
* $C_{db} \equiv$ [[Capacidad de juntura|capacidad de juntura Drain-Bulk]] $= C'j(V_{BD}) ~ A_D$

Dándonos el modelo completo que pequeña señal a alta frecuencia

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
	\begin{circuitikz}[voltage shift=0.5, scale=1.1, transform shape, thick]

		\draw (0, 0) 
				node (vs) {}
				node[left=2pt] {$S$}
			to[short, o-] ++(9.5, 0)
			to[R, l_=$r_0$] ++(0, 3)
				node (vd) {};

		\draw ($ (vd) + (4.5, 0) $) 
				node[right=2pt] {$D$}
			 to[short, i_=$i_d$, o-] ++(-2, 0)
			 to[short] ++(-2.5, 0)
			 to[short, *-] ++(-2.5, 0)
				 node (ivbs) {}
			to[isource, l^=$g_{mb} ~ v_{bs}$, -*] ++(0, -3);

		\draw (ivbs) to[short, *-] ++(-2.5, 0)
				node (ivgs) {}
			to[isource, l^=$g_m ~ v_{gs}$, -*] ++(0, -3);

		\draw (ivgs) to[C, l_=$C_{gd}$, *-] ++(-2.5, 0)
				node (cgs) {}
			to[C, l^=$C_{gs}$, -*] ++(0, -3);

		\draw (vs) to[open, v_=$v_{gs}$] ++(0, 3)
			node (vg) {}
			node[left=2pt] {$G$};
		\draw (vg) to[short, o-*] (cgs);
			
		\draw (vs) to[open, v^=$v_{bs}$] ++(0, -3)
			node (vb) {}
			node[left=2pt] {$B$};
		
		\draw (vb) to[short, o-] ++(4.5, 0)
				node (csb) {}
			to[C, l_=$C_{sb}$, -*] ++(0, 3);
		\draw (csb) to[C, l^=$C_{db}$] ++(5, 0)
			to[short] ++(2.5, 0)
			to[short, -*] ++(0, 6);

	\end{circuitikz}
\end{document}
```

