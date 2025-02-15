---
dia: 2024-09-02
tags:
  - ingeniería-en-informática/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - nota/facultad
  - ingeniería-electrónica/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
aliases:
  - Resistividad eléctrica
referencias:
  - "212"
etapa: terminado
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La conductividad eléctrica (símbolo $\sigma$) es la medida de la capacidad de un material o sustancia para dejar pasar la [[Corriente eléctrica|corriente eléctrica]] a través de él. La conductividad depende de la estructura atómica y molecular del material<sup><a href="#ref-212" style="color: inherit; text-decoration: none;">[212]</a></sup> 

Se puede relacionar el [[Campo eléctrico|campo eléctrico]] con la [[Corriente eléctrica#Densidad de corriente|densidad de corriente]] $$ \vec{J} = \underbrace{q ~ n ~ \mu}_{\sigma} ~ \vec{E} $$ siendo $q$ una [[Carga eléctrica|carga]], $n$ la cantidad de partículas y $\mu$ la [[Movilidad|movilidad]]

La conductividad es inversa de la resistividad (símbolo $\rho$) por lo tanto $$ \sigma = \frac{1}{\rho} $$
# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```