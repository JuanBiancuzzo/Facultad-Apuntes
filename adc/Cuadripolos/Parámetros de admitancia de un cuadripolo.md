---
dia: 2023-11-27
materia: adc
capitulo: 6
---
### Definición
---
La relación que tiene esta dada por $$ {\begin{cases} 
	I_1 = y_{11} ~ V_1 + y_{12} ~ V_2 \\ 
	I_2 = y_{21} ~ V_1 + y_{22} ~ V_2
\end{cases}} \implies 
\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 
	y_{11} & y_{12}  \\ 
	y_{21} & y_{22}
\end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} $$
Se calculan haciendo $I_1$ o $I_2$ iguales a cero $$ \begin{matrix} 
	\displaystyle
	y_{11} = \frac{I_1}{V_1} \biggm|_{V_2 = 0} && 
	\displaystyle
	y_{12} = \frac{I_1}{V_2} \biggm|_{V_1 = 0} \\ 
	\displaystyle
	y_{21} = \frac{I_2}{V_1} \biggm|_{V_2 = 0} && 
	\displaystyle
	y_{22} = \frac{I_2}{V_2} \biggm|_{V_1 = 0}  
\end{matrix} $$
Donde 
* $y_{11} =$ [[Admitancia|Admitancia]] de entrada en corto[[Circuito eléctrico|circuito]]
* $y_{12} =$ Admitancia de [[Función de transferencia|transferencia]] en cortocircuito del puerto 2 al puerto 1
* $y_{21} =$ Admitancia de [[Función de transferencia|transferencia]] en cortocircuito del puerto 1 al puerto 2
* $y_{22} =$ Admitancia de salida en cortocircuito