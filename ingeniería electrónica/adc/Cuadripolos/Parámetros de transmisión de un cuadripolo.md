---
dia: 2023-11-27
tags:
  - carrera/ingeniería-electrónica/adc/Cuadripolos
  - carrera/ingeniería-en-informática/adc/Cuadripolos
  - nota/facultad
---
# Definición
---
La relación que tiene esta dada por $$ {\begin{cases} 
	V_1 = A ~ V_2 - B ~ I_2 \\ 
	I_1 = C ~ V_2 - D ~ I_2
\end{cases}} \implies 
\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = \begin{bmatrix} 
	A & B  \\ 
	C & D
\end{bmatrix} \begin{bmatrix} V_2 \\ -I_2 \end{bmatrix} $$
Se calculan haciendo $I_2$ o $V_2$ iguales a cero $$ \begin{matrix} 
	\displaystyle
	A = \frac{V_1}{V_2} \biggm|_{I_2 = 0} && 
	\displaystyle
	B = -\frac{V_1}{I_2} \biggm|_{V_2 = 0} \\ 
	\displaystyle
	C = \frac{I_1}{V_1} \biggm|_{I_2 = 0} && 
	\displaystyle
	D = -\frac{I_1}{I_2} \biggm|_{V_2 = 0}  
\end{matrix} $$
Donde 
* $A =$ Relación de [[Tensión|tensión]] en un [[Circuito eléctrico|circuito]] abierto
* $B =$ [[Impedancia|Impedancia]] negativa de [[Transferencia del sistema|transferencia]] en cortocircuito
* $C =$ [[Admitancia|Admitancia]] de transferencia en un circuito abierto
* $D =$ Relación negativa de [[Corriente eléctrica|corrientes]] en cortocircuito

# Inversos
---
 La relación que tiene esta dada por $$ {\begin{cases} 
	V_2 = a ~ V_1 - b ~ I_1 \\ 
	I_2 = c ~ V_1 - d ~ I_1
\end{cases}} \implies 
\begin{bmatrix} V_2 \\ I_2 \end{bmatrix} = \begin{bmatrix} 
	a & b  \\ 
	c & d
\end{bmatrix} \begin{bmatrix} V_1 \\ -I_1 \end{bmatrix} $$
Se calculan haciendo $I_1$ o $V_2$ iguales a cero $$ \begin{matrix} 
	\displaystyle
	a = \frac{V_2}{V_1} \biggm|_{I_1 = 0} && 
	\displaystyle
	b = -\frac{V_2}{I_1} \biggm|_{V_1 = 0} \\ 
	\displaystyle
	c = \frac{I_2}{V_1} \biggm|_{I_1 = 0} && 
	\displaystyle
	d = -\frac{I_2}{I_1} \biggm|_{V_1 = 0}  
\end{matrix} $$
Donde 
* $a =$ [[Ganancia|Ganancia]] de [[Tensión|tensión]] en [[Circuito eléctrico|circuito]] abierto
* $b =$ [[Impedancia|Impedancia]] negativa de [[Transferencia del sistema|transferencia]] en cortocircuito
* $c =$ [[Admitancia|Admitancia]] de transferencia en circuito abierto
* $d =$ Ganancia negativa de [[Corriente eléctrica|corriente]] en cortocircuito