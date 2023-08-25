---
dia: 2023-01-23
materia: intro
capitulo: 3
---
### Definición
---
La constante de tiempo ($\tau$) es un indicador de la velocidad de reacción del circuito ante una perturbación (debido a un escalón de tensión). Cuanto mayor sea este valor, el valor final del estado de equilibrio se alcanzará más rápidamente.

##### Expresión:
$$\begin{align}
\tau = R \cdot C
\end{align}$$

##### Unidades:
$$\begin{align}
[\tau] = \Omega \cdot F = segundos \space (s)
\end{align}$$

##### Características:
Reformulo, lo obtenido en el apartado de [[Circuito RC]]:
$$ 
\left\{ 
\begin{array}{ l } 
V_C (t)&= V_0 \cdot (1 - e^\text{-t/RC})\\
i(t) &= \frac{V_0}{R} \cdot e^\text{-t/RC}\\
\end{array} \right.
$$
Entonces:
$$ 
\left\{ 
\begin{array}{ l } 
V_C (t)&= V_0 \cdot (1 - e^{-t/\tau})\\
i(t) &= \frac{V_0}{R} \cdot e^{-t/\tau}\\
\end{array} \right.
$$
De aqui, puedo concluir que si $t=\tau$ :
$$\begin{align}
V_C (t)= V_0 \cdot (1 - e^{-t/\tau}) = V_0 \cdot(1 - e^{-1}) \approx 0.63 \cdot V_0
\end{align}$$
Es decir, que la [[Diferencia de potencial]] de carga sobre un capacitor, en un tiempo $t=\tau$ es aproximadamente un $63\%$ de la amplitud pico-pico del escalón de entrada.

##### Esquematizándolo

![[Constante de tiempo.png]]

##### Tiempo de carga de un capacitor
El tiempo que tarda un capacitor para cargarse en su totalidad es de $5\tau$.
