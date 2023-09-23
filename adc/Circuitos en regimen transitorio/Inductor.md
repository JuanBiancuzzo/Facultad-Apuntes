---
dia: 2023-09-03
materia: adc
capitulo: 2
---
### Definición
---
Un inductor consta de una bobina de alambre [[Conductor]]

#### Relación con la [[Tensión|tensión]] y la [[Corriente eléctrica|corriente]]
---
	Nos interesa conocer la relación entre la tensión y la corriente del elemento, ya sea la forma [[Ecuación diferencial ordinaria|diferencial]], como la forma integral $$ \begin{CD} 
	\boxed{v = L \frac{di}{dt}} @>>> di = \frac{1}{L} v~dt \\
	& @VVV \\
	& & i(t) = \frac{1}{L}\int_{-\infty}^t v(\tau) ~d\tau  & @>>> 
	\boxed{i(t) = \frac{1}{L} \int_{t_0}^t v(\tau) ~d\tau + i(t_0)}
\end{CD} $$
Notemos que la tensión sobre un inductor debe ser continua

#### [[intro/Unidad 5/Potencia|Potencia]] instantánea
---
El calculo de la potencia esta dada por $$ p = v~i = \left(L\frac{dv}{dt}\right)~i $$

#### [[Energía]] almacenada
---
El calculo de la energía almacenada esta dada por $$ \omega = \int_{-\infty}^t p(\tau) d\tau = \frac{1}{2} L i^2 $$
El inductor (ideal) no disipa energía, solo la almacena y la vuelve a entregar en otro momento.


