---
dia: 2023-01-23
materia: intro
capitulo: 5
---
### Postulado
---
El teorema de máxima transferencia de potencia establece que, dada una fuente, con un [[Resistor]] de fuente fijado de antemano, el resistor de carga que maximiza la transferencia de potencia es aquel con un valor igual al resistor de fuente.

Es decir, se toma un circuito equivalente como en el [[Teorema de Thevenin]], en donde el resistor de carga para maximizar la potencia que disipa, debe cumplir que:
$$
\begin{align}
R_\text{Th} = R_\text{carga}
\end{align}
$$

#### Esquematización
---
![[Pasted image 20221114214118.png]]

#### Análisis
---
Calculo la potencia entregada a la carga con la formula de [[Potencia disipada]]:
$$
\begin{align}
P_\text{carga} = V_\text{carga} \cdot I_\text{carga}
\end{align}
$$
Sabiendo que, por [[Divisor de tension]] y por [[Resistores equivalentes]]:
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
Y si hicieramos lo mismo para calcular la potencia disipada por el $R_\text{Th}$, nos daria el mismo valor.
Entonces, entendiendo que:
$$ 
\left\{ 
\begin{array}{ l } 
P_\text{salida} &= P_\text{carga} = \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} \\
P_\text{entrada} &= P_\text{salida} + P_\text{perdida} = \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} + \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} \\
\end{array} \right.
$$
Entonces, podemos definir al [[Rendimiento]] como:
$$
\begin{align}
\eta = \frac{P_\text{salida}}{P_\text{entrada}} \cdot 100 \%
\end{align} = \frac{\frac{V_\text{Th}^2}{4 \cdot R_\text{Th}}}{\frac{V_\text{Th}^2}{4 \cdot R_\text{Th}} + \frac{V_\text{Th}^2}{4 \cdot R_\text{Th}}} \cdot 100 \%= 50 \%
$$
Es decir, se pierde la mitad de la potencia entregada por la fuente.
