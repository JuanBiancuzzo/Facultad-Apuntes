---
dia: 2023-09-03
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-transitorio
  - nota/facultad
  - ingeniería-en-informática/fisica-2/Inducción-electromagnética
  - carrera/ingeniería-electrónica/fisica-2/Inducción-electromagnética
  - ingeniería-en-informática/adc/Circuitos-en-regimen-transitorio
aliases:
  - Bobina
  - Energía de un inductor#Energía almacenada
  - Energía de una bobina#Energía almacenada
  - Potencia de un inductor#Potencia instantánea
  - Potencia de una bobina#Potencia instantánea
  - Inductores en serie#En serie
  - Bobinas en serie#En serie
  - Inductores en paralelo#En paralelo
  - Bobinas en paralelo#En paralelo
---
# Definición
---
Un inductor consta de una bobina de alambre [[Conductor|conductor]], caracterizada por el parámetro $L$ este siendo la [[Autoinductancia|autoinductancia]]

## Relación con la tensión y la corriente
---
Nos interesa conocer la relación entre la [[Tensión|tensión]] y la [[Corriente eléctrica|corriente]] del elemento, ya sea la forma [[Ecuación diferencial ordinaria|diferencial]], como la forma integral 

$$ \begin{CD} 
	\boxed{v = L \frac{di}{dt}} @>>> di = \frac{1}{L} v~dt \\
	& @VVV \\
	& & i(t) = \frac{1}{L}\int_{-\infty}^t v(\tau) ~d\tau  & @>>> 
	\boxed{i(t) = \frac{1}{L} \int_{t_0}^t v(\tau) ~d\tau + i(t_0)}
\end{CD} $$
^relacion-tension-corriente

Notemos que la tensión sobre un inductor debe ser continua

## Potencia instantánea
---
El calculo de la [[Potencia|potencia]] esta dada por $$ p = v~i = \left(L\frac{dv}{dt}\right)~i $$

## Energía almacenada
---
El calculo de la [[Energía almacenada en un inductor|energía almacenada]] esta dada por $$ \omega = \int_{-\infty}^t p(\tau) d\tau = \frac{1}{2} L i^2 $$
El inductor (ideal) no disipa [[Energía|energía]], solo la almacena y la vuelve a entregar en otro momento

## Equivalencias
---
Un inductor equivalente es un inductor que puede sustituir a otros inductores que se encuentran en un determinado [[Circuito eléctrico|circuito]]

### En serie
---
Son aquellos inductores atravesados por la misma [[Corriente eléctrica|corriente]] ([[Elementos en serie|elementos en serie]]) y comparten la misma [[Malla|malla]]

Por lo que el equivalente es $$ L_{eq} = L_1 + L_2 $$ que es igual a los [[Resistencia#En serie|resistencias en serie]] y a los [[Capacitor#En serie|capacitores en serie]]

### En paralelo
---
Son aquellos inductores que comparten la misma [[Tensión|tensión]] entre los mismos [[Nodo#En electrónica|nodo]] ([[Elementos en paralelo|elementos en paralelo]])

Por lo que el equivalente es $$ \begin{CD} 
	L_{eq} = \left( \sum_i^N L^{-1} \right)^{-1} @>{N~=~2}>> \frac{L_1 \cdot L_2}{L_1 + L_2}
\end{CD} $$ que es igual a los [[Resistencia#En paralelo|resistencias en paralelo]] y a los [[Capacitor#En serie|capacitores en serie]]