---
dia: 2023-09-19
materia: adc
capitulo: 2
---
### Definición
---
Un [[Circuito eléctrico|circuito]] RL de [[Circuito de primer orden|primer orden]] es un circuito eléctrico compuesto de un [[Inductor]] y un [[Capacitor]].

##### Esquematización
![[Circuito RL.webp]]

#### Análisis
---
Al cerrar la llave (en el instante $t=0$), por [[Ley de Nodos de Kirchhoff]] de [[Malla]], se puede deducir que $$ \begin{align} 
	         v_R(t) &+ v_L(t) = 0 \\
	L \frac{di}{dt} &+ Ri = 0 \\
	  \frac{di}{dt} &+ \frac{R}{L}i = 0
\end{align} $$
Integrando y utilizando la condición inicial ($i(0) = i_0$) $$ \begin{align} 
	\int_{i_0}^{i(t)} \frac{1}{i} ~ di &= - \int_0^t \frac{R}{L} ~dt \\
	\ln(i) \biggm|_{i_0}^{i(t)} &= - \frac{Rt}{L} \biggm|_0^t \\
	\ln(i(t)) - \ln(i_0) &= - \frac{Rt}{L}  + 0 \\ 
	i(t) &= i_0 \exp \left(- \frac{R}{L} ~ t\right)
\end{align} $$
Donde consideremos $\tau = \frac{L}{R}$ dándonos $$ i(t) = i_0 ~ \exp \left( - \frac{t}{\tau} \right) $$