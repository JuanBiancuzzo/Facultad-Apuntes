---
dia: 2023-01-23
materia: intro
capitulo: 3
---
### Definición
---
El capacitor es un dispositivo electrónico que almacena energía (representada por la [[Capacitancia]])  en un [[Campo eléctrico]] interno.

##### Simbología
![[Diagrama de un capacitor.webp|400]]


#### Relación con la [[Tensión|tensión]] y la [[Corriente eléctrica|corriente]]
---
Nos interesa conocer la relación entre la tensión y la corriente del elemento, ya sea la forma [[Ecuación diferencial ordinaria|diferencial]], como la forma integral $$ \begin{CD} 
	i = \frac{dq}{dt} @>>> \boxed{i = C \frac{dv}{dt}} \\
	& @VVV \\
	& & v(t) = \frac{1}{C}\int_{-\infty}^t i(\tau) ~d\tau  & @>>> 
	\boxed{v(t) = \frac{1}{C} \int_{t_0}^t i(\tau) ~d\tau + v(t_0)}
\end{CD} $$
Notemos que la tensión sobre un capacitor debe ser continua

#### [[intro/Unidad 5/Potencia|Potencia]] instantánea
---
El calculo de la potencia esta dada por $$ p = v~i = Cv\frac{dv}{dt} $$

#### [[Energía]] almacenada
---
El calculo de la energía almacenada esta dada por $$ \omega = \int_{-\infty}^t p(\tau) d\tau = \frac{1}{2} C v^2 $$
El capacitor (ideal) no disipa energía, solo la almacena y la vuelve a entregar en otro momento.


