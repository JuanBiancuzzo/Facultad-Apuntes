---
dia: 2024-12-22
etapa: ampliar
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un número $a \in \mathbb{Z}$ es compuesto si y solo si es $\ne 0,~ \pm 1$ y existe $d \in \mathbb{Z}$ con $1 < d < |a|$ tal que $d \mid a$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```