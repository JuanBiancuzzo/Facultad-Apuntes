---
dia: 2024-12-23
etapa: empezado
referencias:
  - 665
tags:
  - nota/investigacion
  - investigación/electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En contraste a los [[Circuito saturado|circuitos saturados]], estos [[Circuito eléctrico|circuitos]] permiten tener dos estados y sobrepasar las variaciones entre los [[Transistor|transistores]] para conseguir velocidades mayores a las de los circuitos saturados. Para esto usan lo que se llaman [[Clamping diode|clamping diode]] o [[Retroalimentación|retroalimentación fuertemente negativa]] 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```