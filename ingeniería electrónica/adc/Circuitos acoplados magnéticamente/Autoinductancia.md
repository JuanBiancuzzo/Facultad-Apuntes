---
dia: 2023-11-16
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-acoplados-magnéticamente
  - carrera/ingeniería-electrónica/fisica-2/Inducción-electromagnética
  - carrera/ingeniería-en-informática/adc/Circuitos-acoplados-magnéticamente
  - carrera/ingeniería-en-informática/fisica-2/Inducción-electromagnética
  - nota/facultad
aliases:
  - Coeficiente de autoinducción
vinculoFacultad:
  - tema: Circuitos acoplados magnéticamente
    capitulo: 4
    materia: Análisis de circuitos
    carrera: Ingeniería electrónica
  - tema: Inducción electromagnética
    capitulo: 7
    materia: Física 2 A
    carrera: Ingeniería en informática
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