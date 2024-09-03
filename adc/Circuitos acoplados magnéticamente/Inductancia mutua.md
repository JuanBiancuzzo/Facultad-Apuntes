---
dia: 2023-11-16
tags:
  - adc/Circuitos-acoplados-magnéticamente
  - nota/facultad
  - fisica-2/Inducción-electromagnética
aliases:
  - Coeficiente de inducción mutuo
---
### Definición
---
La inductancia mutua es la capacidad de un [[Inductor|inductor]] de inducir una [[Tensión|tensión]] en un inductor cercano, medida en henrys $[H]$

Según la [[Ley de Faraday|ley de Faraday]], si tenemos un [[Circuito eléctrico|circuito]] con dos [[Inductor|bobinas]] [[Acoplación magnética|magnéticamente acopladas]] entonces 

![[Circuito con dos bobinas con inductancia mutua.webp]]

$$ \phi_1 = \phi_{11} + \phi_{12} $$
Con las [[Tensión|tensiones]] $$ \begin{align}
	v_1 = N_1 \frac{d \phi_1}{dt} &= N_1 \frac{d \phi_1}{di_1} \frac{di_1}{dt} = L_1 \frac{di_1}{dt} \\
	v_2 = N_2 \frac{d \phi_{12}}{dt} &= N_2 \frac{d \phi_{12}}{di_1} \frac{di_1}{dt} = M_{21} \frac{di_1}{dt}
\end{align} $$ donde $L_1$ es la [[Autoinductancia|autoinductancia]] producida por la bobina $1$, y $M_{21}$ se lo conoce como coeficientes de inductancia mutua de la bobina $2$ respecto de la bobina $1$, donde $N_1$ y $N_2$ son la cantidad de espiras correspondientes a cada bobina

Por cuestiones relacionadas a la [[Conservación de la energía|conservación de la energía]] $M_{12} = M_{21}$

#### Relaciones
---
Se puede determinar el valor de  $M_{ij}$ como $$ M_{ij} = k ~ \sqrt{L_1 L_2} $$ donde $k$ es el [[Coeficiente de acoplamiento|coeficiente de acoplamiento]]

Como la [[Energía|energía]] almacenada en un [[Circuito eléctrico|circuito]] pasivo no puede ser negativa. Si consideramos el caso con $i_1 > 0$ e $i_2 > 0$ y entrantes por [[Acoplación magnética|bornes no homólogos]] $$ \frac{1}{2} L_1 i_1^2 + \frac{1}{2} L_2 i_2^2 - M i_1 i_2 \ge 0 $$
Completando cuadrados, se deduce que $$ M \le \sqrt{L_1 L_2} $$