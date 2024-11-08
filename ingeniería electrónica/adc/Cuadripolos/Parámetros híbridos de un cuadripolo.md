---
dia: 2023-11-27
tags:
  - ingeniería-electrónica/adc/Cuadripolos
  - nota/facultad
---
# Definición
---
La relación que tiene esta dada por $$ {\begin{cases} 
	V_1 = h_{11} ~ I_1 + h_{12} ~ V_2 \\ 
	I_2 = h_{21} ~ I_1 + h_{22} ~ V_2
\end{cases}} \implies 
\begin{bmatrix} V_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 
	h_{11} & h_{12}  \\ 
	h_{21} & h_{22}
\end{bmatrix} \begin{bmatrix} I_1 \\ V_2 \end{bmatrix} $$
Se calculan haciendo $I_1$ o $V_2$ iguales a cero $$ \begin{matrix} 
	\displaystyle
	h_{11} = \frac{V_1}{I_1} \biggm|_{V_2 = 0} && 
	\displaystyle
	h_{12} = \frac{V_1}{V_2} \biggm|_{I_1 = 0} \\ 
	\displaystyle
	h_{21} = \frac{I_2}{I_1} \biggm|_{V_2 = 0} && 
	\displaystyle
	h_{22} = \frac{I_2}{V_2} \biggm|_{I_1 = 0}  
\end{matrix} $$
Donde 
* $h_{11} =$ [[Impedancia|Impedancia]] de entrada en corto[[Circuito eléctrico|circuito]]
* $h_{12} =$ [[Ganancia|Ganancia]] inversa de [[Tensión|tensión]] en circuito abierto
* $h_{21} =$ Ganancia directa de [[Corriente eléctrica|corriente]] en cortocircuito
* $h_{22} =$ [[Admitancia|Admitancia]] de salida en circuito abierto

## Ejemplo
---
Un caso de [[Cuadripolo|cuadripolo]] es un [[Amplificador Emisor Común con un transistor bipolar de juntura|amplificador mono-etapa emisor común]] 

![[Amplificador emisor común como un cuadripolo.webp]]

# Inversos
---
La relación que tiene esta dada por $$ {\begin{cases} 
	I_1 = g_{11} ~ V_1 + g_{12} ~ I_2 \\ 
	V_2 = g_{21} ~ V_1 + g_{22} ~ I_2
\end{cases}} \implies 
\begin{bmatrix} I_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} 
	g_{11} & g_{12}  \\ 
	g_{21} & g_{22}
\end{bmatrix} \begin{bmatrix} V_1 \\ I_2 \end{bmatrix} $$
Se calculan haciendo $V_1$ o $I_2$ iguales a cero $$ \begin{matrix} 
	\displaystyle
	g_{11} = \frac{I_1}{V_1} \biggm|_{I_2 = 0} && 
	\displaystyle
	g_{12} = \frac{I_1}{I_2} \biggm|_{V_1 = 0} \\ 
	\displaystyle
	g_{21} = \frac{V_2}{V_1} \biggm|_{I_2 = 0} && 
	\displaystyle
	g_{22} = \frac{V_2}{I_2} \biggm|_{V_1 = 0}  
\end{matrix} $$
Donde 
* $g_{11} =$ [[Admitancia|Admitancia]] de entrada en [[Circuito eléctrico|circuito]] abierto
* $g_{12} =$ [[Ganancia|Ganancia]] inversa de [[Corriente eléctrica|corriente]] en cortocircuito
* $g_{21} =$ Ganancia directa de [[Tensión|tensión]] en circuito abierto
* $g_{22} =$ [[Impedancia|Impedancia]] de salida en cortocircuito