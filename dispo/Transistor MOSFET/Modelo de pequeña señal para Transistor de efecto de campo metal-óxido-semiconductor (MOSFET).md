---
dia: 2023-11-16
materia: dispo
capitulo: 6
---
### Definición
---
El [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFET]] es un dispositivo [[Función R-lineal|alineal]] por lo que no cumple el [[Principio de superposición]]. Entonces teniendo el [[Circuito eléctrico|circuito]]

![[Circuito de pequeña señal del Transistor de efecto de campo metal-óxido-semiconductor (MOSFET).png]]

Por lo tanto vamos a aproximarla usando el [[Serie de Taylor#Polinomio de Taylor|polinomio de Taylor]] de primer orden $$ \begin{align}
	i_D(V_{GS} + v_{gs}, V_{DS} + v_{ds}, V_{BS} + v_{bs}) \simeq& ~ I_DQ(V_{GS}, V_{DS}, V_{BS}) \\
	& ~ \frac{\partial i_D}{\partial v_{GS}} \biggm|_{Q} v_{gs} \\ 
	& ~ \frac{\partial i_D}{\partial v_{DS}} \biggm|_{Q} v_{ds} \\ 
	& ~ \frac{\partial i_D}{\partial v_{BS}} \biggm|_{Q} v_{bs} \\  
\end{align} $$ donde $Q \equiv$  punto de polarización  $(V_{GS}, V_{DS}, V_{BS})$.

#### Modelo para bajas frecuencias
---
Corriente $i_d$ de pequeña señal $$ i_d \simeq g_m ~ v_{gs} + g_0 ~ v_{ds} + g_{mb} ~ v_{bs} $$
Definimos: 
* $g_m \equiv$ [[Transconductancia|transconductancia]] $[S]$
* $g_0 \equiv$ [[Conductancia del drain|salida o conductancia del drain]] $[S]$
* $g_{mb} \equiv$ [[Transconductancia del backgate|transconductancia del backgate]] $[S]$

