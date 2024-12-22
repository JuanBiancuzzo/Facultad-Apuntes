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
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un número $p \in \mathbb{Z}$ es primo si y solo si es $\ne 0,~ \pm 1$ y tiene únicamente $4$ [[Algoritmo de división|divisores]], o, lo que es lo mismo, si y solo si tiene únicamente $2$ divisores positivos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```