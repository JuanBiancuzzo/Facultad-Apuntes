---
dia: 2023-11-16
materia: dispo
capitulo: 6
---
### Definición
---
El [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFET]] es un dispositivo [[Función R-lineal|alineal]] por lo que no cumple el [[Principio de superposición]]. Entonces teniendo el [[Circuito eléctrico|circuito]]

![[Circuito de pequeña señal del Transistor de efecto de campo metal-óxido-semiconductor (MOSFET).webp]]

Por lo tanto vamos a aproximarla usando el [[Serie de Taylor#Polinomio de Taylor|polinomio de Taylor]] de primer orden $$ \begin{align}
	i_D(V_{GS} + v_{gs}, V_{DS} + v_{ds}, V_{BS} + v_{bs}) \simeq& ~ I_DQ(V_{GS}, V_{DS}, V_{BS}) \\
	+& ~ \frac{\partial i_D}{\partial v_{GS}} \biggm|_{Q} v_{gs} \\ 
	+& ~ \frac{\partial i_D}{\partial v_{DS}} \biggm|_{Q} v_{ds} \\ 
	+& ~ \frac{\partial i_D}{\partial v_{BS}} \biggm|_{Q} v_{bs} \\  
\end{align} $$ donde $Q \equiv$  punto de polarización  $(V_{GS}, V_{DS}, V_{BS})$.
#### Rango de validez del [[Modelo|modelo]]
---
Recordando que $i_D$ esta dada por $$ i_D = \begin{cases} 
	0 & v_{GS} < V_T \\
	k (v_{GS} - V_T)^2 (1 + \lambda v_{DS}) & v_{GS} > V_T, ~ v_{DS} > V_{DS ~ (sat)} \\
	2k \left( v_{GS} - \frac{v_{DS}}{2} - V_T \right) v_{DS} (1 + \lambda v_{DS}) & v_{GS} > V_T, ~ v_{DS} < V_{DS ~ (sat)}\\
\end{cases} $$
Tomando la corriente correspondiente al [[Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|régimen de saturación]]. Al [[Serie de Taylor|aproximar]] una función cuadrática con un polinomio de primer orden, se comete un error. El error está dado por el término de orden 2 del polinomio. Si aceptamos un $10\%$ de error en la linealización $$ k ~ v^2_{gs} < 10\% ~ 2k ~ (V_{GS} - V_T) ~ v_{gs} $$ $$ v_{gs} < 0.2 ~ (V_{GS} - V_T) $$ 
Por lo que el límite del modelo de pequeña señal depende de la polarización.

#### [[Modelo|Modelo]] para bajas frecuencias
---
Corriente $i_d$ de pequeña señal $$ i_d \simeq g_m ~ v_{gs} + g_0 ~ v_{ds} + g_{mb} ~ v_{bs} $$
Definimos: 
* $g_m \equiv$ [[Transconductancia para transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|transconductancia]] $[S]$
* $g_0 \equiv$ [[Conductancia del drain|Conductancia de salida o conductancia del drain]] $[S]$
* $g_{mb} \equiv$ [[Transconductancia del backgate|transconductancia del backgate]] $[S]$

Dándonos el modelo completo que pequeña señal a baja frecuencia 
![[Modelo completo del MOSFET para pequeña señal a baja frecuencia.webp]]

#### [[Modelo|Modelo]] para altas frecuencias
---
Las [[Capacitancia|capacitancias]] parásitas del [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFET]] limitan su respuesta dinámica y en [[Función senoidal#Frecuencia|frecuencia]]. El régimen más importante para aplicaciones analógicas es el de [[Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|saturación]].

![[Estructura MOSFET con capacitancias.webp]]

Definimos:
* $C_{gs} \equiv$ [[Capacidad de Gate contra canal de inversión|capacitancia de Gate contra canal de inversión]] + [[Capacidad de overlap|capacitancia de overlap]]
* $C_{gd} \equiv$ [[Capacidad de overlap|capacitancia de overlap]]
* $C_{sb} \equiv$ [[Capacidad de juntura|capacidad de juntura]] Source-Bulk $= C'j(V_{BS}) ~ A_S$
* $C_{db} \equiv$ [[Capacidad de juntura|capacidad de juntura]] Drain-Bulk $= C'j(V_{BD}) ~ A_D$

Dándonos el modelo completo que pequeña señal a alta frecuencia
![[Modelo completo del MOSFET para pequeña señal a alta frecuencia.webp]]

