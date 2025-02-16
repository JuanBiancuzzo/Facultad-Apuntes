---
dia: 2024-08-07
tags:
  - ingeniería-en-informática/discreta/Relaciones
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Poset
referencias:
  - "411"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Cuando una [[Relación|relación]] es reflexiva, antisimétrica y [[Relación transitiva|transitiva]], se llama relación de orden

El [[Conjunto|conjunto]] donde se ha introducido esa relación se llama conjunto ordenado

* [[Relación reflexiva|Reflexiva]]
* [[Relación antisimétrica|Antisimétrica]]
* [[Relación transitiva|Transitiva]]

Se dice que $(a,~R)$ es un conjunto parcialmente ordenado, o es poset. De ahora en más, se utilizará el símbolo $\le$ para representar una relación de orden $$ aRb \iff a \le b $$

Se dice orden parcial, ya que no todos los elementos están en relación entre sí. La relación solo está presente para un subconjunto de los elementos. $a \nleq b$  no implica $a \geq b$ 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```