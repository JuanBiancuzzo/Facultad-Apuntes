---
dia: 2024-11-05
etapa: sin-empezar
referencias:
  - "412"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $H \subseteq \mathbb{R}$ un [[Conjunto|conjunto]]. Se dice que $H$ es un conjunto inductivo si se cumple las dos condiciones siguientes
* $1 \in H$
* $\forall x, ~~ x \in H \implies x + 1 \in H$

Notemos que $\mathbb{N}$ es el conjunto con la [[Cardinalidad|cardinal]] [[Mínimo|mínimo]] de los conjuntos inductivos, en el sentido que si $H \subseteq \mathbb{R}$ es un conjunto inductivo, entonces $\mathbb{N} \subseteq H$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```