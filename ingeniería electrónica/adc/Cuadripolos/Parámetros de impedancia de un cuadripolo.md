---
dia: 2023-11-27
tags:
  - carrera/ingeniería-electrónica/adc/Cuadripolos
  - carrera/ingeniería-en-informática/adc/Cuadripolos
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/adc/Cuadripolos/Resumen.md]]"
---
# Definición
---
La relación que tiene esta dada por $$ {\begin{cases} 
	V_1 = z_{11} ~ I_1 + z_{12} ~ I_2 \\ 
	V_2 = z_{21} ~ I_1 + z_{22} ~ I_2
\end{cases}} \implies 
\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} 
	z_{11} & z_{12}  \\ 
	z_{21} & z_{22}
\end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} $$
Se calculan haciendo $I_1$ o $I_2$ iguales a cero $$ \begin{matrix} 
	\displaystyle
	z_{11} = \frac{V_1}{I_1} \biggm|_{I_2 = 0} && 
	\displaystyle
	z_{12} = \frac{V_1}{I_2} \biggm|_{I_1 = 0} \\ 
	\displaystyle
	z_{21} = \frac{V_2}{I_1} \biggm|_{I_2 = 0} && 
	\displaystyle
	z_{22} = \frac{V_2}{I_2} \biggm|_{I_1 = 0}  
\end{matrix} $$
Donde 
* $z_{11} =$ [[Impedancia|Impedancia]] de entrada en [[Circuito eléctrico|circuito]] abierto
* $z_{12} =$ Impedancia de [[Transferencia del sistema|transferencia]] en circuito abierto del puerto 1 al puerto 2
* $z_{21} =$ Impedancia de [[Transferencia del sistema|transferencia]] en circuito abierto del puerto 2 al puerto 1
* $z_{22} =$ Impedancia de salida en circuito abierto

Cuando $z_{11} = z_{22}$ se dice que la red de dos puertos es simétrica.
Cuando la red de dos puertos es [[Función lineal|lineal]] y no tiene [[Fuente de tensión|fuentes dependientes]], las impedancias de transferencia son iguales ($z_{12} = z_{21}$), y se dice que los dos puertos son recíprocos.