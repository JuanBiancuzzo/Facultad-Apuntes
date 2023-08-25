---
dia: 2023-01-23
materia: intro
capitulo: 3
---
### Definición
---
Un circuito RC de primer orden es un circuito eléctrico compuesto de un [[Resistor]] y un [[Capacitor]].

##### Esquematización

![[Circuito RC.png]]

##### Análisis
Al cerrar la llave (en el instante $t=0$), por [[Ley de Nodos de Kirchhoff]] de [[Malla]], se puede deducir que:
$$\begin{align}
V_0 (t)= V_R (t) + V_C (t)
\end{align}
$$
Ahora, por [[Ley de Ohm]]:
$$\begin{align}
V_0 (t)= i(t) \cdot R + V_C (t)
\end{align}
$$
Y, sabiendo de la [[Relación entre corriente y tension en un capacitor]]:
$$ i(t) = C \cdot \frac{dV_C(t)}{dt} $$

Entonces, nos queda una EDO de primer orden:
$$ V_0 (t)= R \cdot C \cdot \frac{dV_C(t)}{dt} + V_C (t) $$
Cuya solucion, para un escalon de entrada, es:
$$\begin{equation}
V_C (t)= V_f + (V_i - V_f) \cdot e^\text{-t/RC}
\end{equation}
$$
Con:
$$ 
\begin{cases} 
\text{Condicion Inicial}: &  V_i = V_C(0)\\
\text{Condicion Final}: & V_f = V_C(\infty)\\
\end{cases}
$$
Ahora, sabiendo que en el circuito RC:
$$ 
\begin{cases}
\text{Condicion Inicial}:&  V_i = 0\\
\text{Condicion Final}:& V_f = V_0\\
\end{cases}
$$
Reemplazo en:
$$\begin{align}
V_C (t)&= V_f + (V_i - V_f) \cdot e^\text{-t/RC} \\
V_C (t)&= V_0 + (- V_0) \cdot e^\text{-t/RC} \\
V_C (t)&= V_0 \cdot (1 - e^\text{-t/RC})
\end{align}
$$
Y, entendiendo que:
$$ 
\left\{ 
\begin{array}{ l } 
V_C (t)&= V_0 \cdot (1 - e^\text{-t/RC})\\
i(t) &= C \cdot \frac{dV_C(t)}{dt}\\
\end{array} \right.
$$
Entonces, la [[Corriente]] sobre el capacitor en función del tiempo:
$$\begin{align}
i(t) &= \frac{V_0}{R} \cdot e^\text{-t/RC}\\
\end{align}
$$
