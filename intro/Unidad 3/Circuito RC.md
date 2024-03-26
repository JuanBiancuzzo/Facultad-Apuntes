---
dia: 2023-01-23
materia: intro
capitulo: 3
---
### Definición
---
Un [[Circuito eléctrico|circuito]] RC de [[Circuito de primer orden|primer orden]] es un circuito eléctrico compuesto de un [[Resistor]] y un [[Capacitor]].

##### Esquematización

![[Circuito RC.webp]]

#### Análisis
---
Al cerrar la llave (en el instante $t=0$), por [[Ley de Nodos de Kirchhoff]] de [[Malla]], se puede deducir que $$ v_0(t)= v_R (t) + v_C (t) $$
Ahora, por [[Ley de Ohm]]
$$ v_0 (t)= i(t) \cdot R + v_C (t) $$

Y, sabiendo de la [[Capacitor#Relación con la Tensión tensión y la Corriente eléctrica corriente|relación entre corriente y tension en un capacitor]]
$$ i(t) = C \cdot \frac{d}{dt}v_C(t) $$

Entonces, nos queda una EDO de primer orden
$$ v_0 (t)= R \cdot C \cdot \frac{d}{dt} v_C(t) + v_C(t) $$
Cuya solución, para un escalón de entrada, es
$$ v_c (t)= v_f + (v_i - v_f) \cdot \exp \left( -\frac{t}{RC} \right) $$

Con
$$ \begin{cases} 
\text{Condicion Inicial}: &  v_i = v_C(0)\\
\text{Condicion Final}: & v_f = v_C(\infty)\\
\end{cases} $$
Ahora, sabiendo que en el circuito RC:
$$ 
\begin{cases}
\text{Condicion Inicial}:&  v_i = 0\\
\text{Condicion Final}:& v_f = v_0\\
\end{cases}
$$
Reemplazo en:
$$\begin{align}
v_C(t)&= v_f + (v_i - v_f) \cdot \exp \left( -\frac{t}{RC} \right) \\
v_C(t)&= v_0 + (- v_0) \cdot \exp \left( -\frac{t}{RC} \right) \\
v_C(t)&= v_0 \cdot \left(1 - \exp \left( -\frac{t}{RC} \right) \right)
\end{align}
$$
Y, entendiendo que:
$$ \begin{cases} 
	v_C(t) &= v_0 \cdot (1 - \exp \left( -\frac{t}{RC} \right))\\
	i(t) &= C \cdot \frac{d}{dt}v_C(t)\\
\end{cases} $$

Entonces, la [[Corriente eléctrica]] sobre el capacitor en función del tiempo:
$$\begin{align}
i(t) &= \frac{c_0}{R} \cdot \exp \left( -\frac{t}{RC} \right) \\
\end{align}
$$
