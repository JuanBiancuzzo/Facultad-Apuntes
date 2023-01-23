---
dia: 2023-01-23
materia: intro
---
### **Definicion:**
---
"Un circuito RC de primer orden es un circuito eléctrico compuesto de un [[resistor]] y un [[capacitor]]."

**Esquematizacion 1:**

![[Pasted image 20221114123225.png]]

**Analisis:**
Al cerrar la llave (en el instante $t=0$), por [[Leyes de Kirchhoff]] de [[mallas]], se puede deducir que:
$$\begin{align}
V_0 (t)= V_R (t) + V_C (t)
\end{align}
$$
Ahora, por Ley de Ohm:
$$\begin{align}
V_0 (t)= i(t) \cdot R + V_C (t)
\end{align}
$$
Y, sabiendo de la [[relacion entre corriente y tension en un capacitor]]:
$$\begin{align}
i(t) = C \cdot \frac{dV_C(t)}{dt}
\end{align}
$$
Entonces, nos queda una EDO de primer orden:
$$\begin{align}
V_0 (t)= R \cdot C \cdot \frac{dV_C(t)}{dt} + V_C (t)
\end{align}
$$
Cuya solucion, para un escalon de entrada, es:
$$\begin{equation}
V_C (t)= V_f + (V_i - V_f) \cdot e^\text{-t/RC}
\end{equation}
$$
Con:
$$ 
\left\{ 
\begin{array}{ l } 
Condicion \space Inicial:  V_i &= V_C(0)\\
Condicion \space Final:  V_f &= V_C(\infty)\\
\end{array} \right.
$$
Ahora, sabiendo que en el circuito RC:
$$ 
\left\{ 
\begin{array}{ l } 
Condicion \space Inicial:  V_i &= 0\\
Condicion \space Final:  V_f &= V_0\\
\end{array} \right.
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
Entonces, la [[corriente]] sobre el capacitor en función del tiempo:
$$\begin{align}
i(t) &= \frac{V_0}{R} \cdot e^\text{-t/RC}\\
\end{align}
$$
