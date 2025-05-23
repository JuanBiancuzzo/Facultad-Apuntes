---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/intro/Potencia
  - nota/facultad
---
# Definición
---
El teorema de máxima transferencia de [[Potencia|potencia]] establece que, dada una fuente, con un [[Resistencia|resistencia]] de fuente fijado de antemano, el resistor de carga que maximiza la transferencia de potencia es aquel con un valor igual al resistor de fuente.

Es decir, se toma un [[Circuito eléctrico|circuito]] equivalente como en el [[Teorema de Thevenin|teorema de Thevenin]], en donde el resistor de carga para maximizar la potencia que disipa, debe cumplir que:
$$
\begin{align}
R_\text{Th} = R_\text{carga}
\end{align}
$$

Para [[Fasor|fasores]] nos da $$ Z_L = Z^*_{th} $$
## Análisis
---

```tikz
\usepackage{circuitikz}

\begin{document} 
	\begin{circuitikz}
		[american, voltage shift=0.5, scale=1.3, transform shape, thick]

		\draw (0, 0) to[V, invert, l^=$V_{th}$] ++(0, 3)
			to[short, R=$R_{th}$] ++(3, 0)
			to[short, R=$R_L$, v_=$V_{R_L}$] ++(0, -3)
			to ++(-3, 0);
	\end{circuitikz}
\end{document}
```

Calculo la potencia entregada a la carga con la formula de [[Potencia disipada|potencia disipada]]
$$ P_\text{carga} = V_\text{carga} \cdot I_\text{carga} $$

Sabiendo que, por [[Divisor de tensión|divisor de tensión]] y por [[resistencia|resistencia equivalente]]
$$ 
\left\{ 
\begin{array}{ l } 
V_\text{carga} = \frac{V_\text{Th} \cdot R_\text{carga}}{R_\text{Th} + R_\text{carga}} \\
I_\text{carga} = \frac{V_\text{Th}}{R_\text{Th} + R_\text{carga}}\\
\end{array} \right.
$$
Entonces:
$$
\begin{align}
P_\text{carga} &= \frac{V_\text{Th} \cdot R_\text{carga}}{R_\text{Th} + R_\text{carga}} \cdot \frac{V_\text{Th}}{R_\text{Th} + R_\text{carga}}\\
P_\text{carga} &= \frac{V_\text{Th}^2 \cdot R_\text{carga}}{(R_\text{Th} + R_\text{carga})^2}
\end{align}
$$
Y como el teorema establece que:
$$
\begin{align}
R_\text{Th} = R_\text{carga}
\end{align}
$$
Se concluye que:
$$
\begin{align}
P_\text{carga} &= \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}}
\end{align}
$$
Y si hiciéramos lo mismo para calcular la potencia disipada por el $R_\text{Th}$, nos daría el mismo valor.
Entonces, entendiendo que:
$$ 
\left\{ 
\begin{array}{ l } 
P_\text{salida} &= P_\text{carga} = \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} \\
P_\text{entrada} &= P_\text{salida} + P_\text{perdida} = \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} + \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} \\
\end{array} \right.
$$
Entonces, podemos definir al [[Rendimiento en potencia]] como:
$$
\begin{align}
\eta = \frac{P_\text{salida}}{P_\text{entrada}} \cdot 100 \%
\end{align} = \frac{\frac{V_\text{Th}^2}{4 \cdot R_\text{Th}}}{\frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} + \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}}} \cdot 100 \%= 50 \%
$$
Es decir, se pierde la mitad de la potencia entregada por la fuente.

## Análisis para fasores
---
```tikz
\usepackage{circuitikz}

\begin{document} 
	\begin{circuitikz}
		[american, voltage shift=0.5, scale=1.3, transform shape, thick]

		\draw (0, 0) to[V, invert, l^=$V_{th}$] ++(0, 3)
			to[generic, -o, l_=$Z_{th}$] ++(3, 0)
			to[short, i^=$I$] ++(1, 0)
			to[generic, l^=$Z_{L}$] ++(0, -3)
			to[short, -o] ++(-1, 0)
			to ++(-3, 0);
	\end{circuitikz}
\end{document}
```

Con $Z_{th} = R_{th} + j ~ X_{th}$ y $Z_L = R_L + j ~ X_L$ 

Debemos hallar $Z_L$ tal que la [[Potencia media|potencia media]] sobre la carga sea máxima. $$ I = \frac{V_th}{Z_{th} + Z_L} = \frac{V_{th}}{(R_{th} + j ~ X_{th}) + (R_L + j ~ X_L)} 
$$ $$ P = \frac{1}{2} |I|^2 R_L = \frac{1}{2} \frac{|V_{th}|^2 ~ R_L}{(R_{th} + j ~ X_{th})^2 + (R_L + j ~ X_L)^2} $$
[[Derivable|Derivando]] $$ \frac{\partial P}{\partial X_L} = -\frac{|V_{th}|^2 ~ R_L (X_{th} + X_L)}{\left[ (R_{th} + j ~ X_{th})^2 + (R_L + j ~ X_L)^2 \right] ^2} $$
Igualando a $0$ y resolviendo el sistema de ecuaciones obteneos $X_L = - X_{th}$ y $R_L = \sqrt{R_{th}^2 + (X_{th} + X_L)^2 }$, y de manera equivalente $$ Z_L = R_L + j X_L = R_{th} - j X_{th} = Z_{th}^* $$

Para la máxima transferencia de [[Potencia media|potencia promedio]], la [[Impedancia|impedancia]] de carga $Z_L$ debe ser igual al [[Valor conjutado|conjugado]] de la impedancia compleja de [[Teorema de Thevenin|Thevenin]] $Z_{th}$

Finalmente la potencia máxima obtenida es igual a $$ P_{max} = \frac{|V_{th}|^2}{8 R_{th}} $$
