---
dia: 2023-11-16
tags:
  - ingeniería-electrónica/adc/Circuitos-acoplados-magnéticamente
  - nota/facultad
  - ingeniería-en-informática/fisica-2/Inducción-electromagnética
  - ingeniería-electrónica/fisica-2/Inducción-electromagnética
  - ingeniería-en-informática/adc/Circuitos-acoplados-magnéticamente
aliases:
  - Coeficiente de autoinducción
---
# Definición
---
Según la [[Ley de Faraday|ley de Faraday]], si tenemos un [[Circuito eléctrico|circuito]] con una [[Inductor|bobina]] por el cual fluye una [[Corriente eléctrica|corriente]] $i(t)$

![[Circuito con bobina autoinducida.webp]]

$$ \begin{align} 
	v = N ~ \frac{d\phi}{dt} &= \underbrace{N ~ \frac{d\phi}{di}}_L \frac{di}{dt} \\
	v &= L \frac{di}{dt} 
\end{align} $$
Donde $L$ se lo conoce como autoinductancia.