---
dia: 2024-09-03
tags:
  - ingeniería-en-informática/fisica-2/Inducción-electromagnética
  - nota/facultad
  - ingeniería-electrónica/adc/Circuitos-acoplados-magnéticamente
  - ingeniería-electrónica/fisica-2/Inducción-electromagnética
  - ingeniería-en-informática/adc/Circuitos-acoplados-magnéticamente
aliases:
  - Diafonía
  - Bornes homologos#Bornes homólogos
referencias:
  - "217"
etapa: empezado
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se denomina acoplamiento magnético al fenómeno física por el cual el paso de una [[Corriente eléctrica|corriente eléctrica]] variable en el tiempo por una [[Inductor|bobina]] produce una [[Tensión|diferencia de potencial]] entre los extremos de las demás bobinas del [[Circuito eléctrico|circuito]]. Cuando este fenómeno se produce de forma indeseada se denomina diafonía

Este fenómeno se explica combinando la [[Ley de Ampère|ley de Ampère]] y la de [[Ley de Faraday|Faraday]]. Por la primera, sabemos que toda corriente eléctrica variable en el tiempo crea un [[Campo de inducción magnética|campo magnético]] proporcional, también variable en el tiempo. La segunda nos indica que todo flujo magnético variable en el tiempo que atraviesa una [[Superficie|superficie]] cerrada por un circuito induce una diferencia de potencial en este circuito<sup><a href="#ref-217" style="color: inherit; text-decoration: none;">[217]</a></sup> 

## Bornes homólogos
---
Si bien al [[Inductancia mutua|inductancia mutua]] es positiva $M > 0$, la [[Tensión|tensión]] inducida entre las [[Inductor|bobinas]] puede tener cualquier signo, dependiendo de la orientación de las bobinas

Si una [[Corriente eléctrica|corriente]] entra a la terminar marcada de la bobina, la polaridad de referencia para la tensión mutua en la segunda bobina es positiva en la terminal con la marga de la segunda bobina

### Bobinas en paralelo
---
Si consideramos un [[Circuito eléctrico|circuito]] con 2 [[Inductor|bobinas]] en [[Inductor#En paralelo|paralelo]] [[Acoplación magnética|acopladas magnéticamente]]

* Bornes homologados ![[Dos bobinas en paralelo y bornes homólogos.webp]]
* Bornes no homologados ![[Dos bobinas en paralelo y bornes no homólogos.webp]]

### Bobinas en serie
---
Si consideramos un [[Circuito eléctrico|circuito]] con 2 [[Inductor|bobinas]] en [[Inductor#En serie|serie]]  [[Acoplación magnética|acopladas magnéticamente]]

* Bornes homologados ![[Dos bobinas en serie y bornes homólogos.webp]]
* Bornes no homologados ![[Dos bobinas en serie y bornes no homólogos.webp]]


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```