---
dia: 2025-03-22
etapa: ampliar
referencias:
  - "1017"
tags:
  - carrera/ingeniería-electrónica/circuitos-2/Fuentes-de-alimentación-lineales
  - nota/facultad
aliases:
  - Line regulation
vinculoFacultad:
  - tema: Fuentes de alimentación lineales
    capitulo: 2
    materia: Taller de diseño de circuitos electrónicos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dada un [[Regulador de tensión|regulador de tensión]], y con una carga fija, podemos obtener la regulación de línea como $$ \frac{\Delta V_{out}}{\Delta V_{in}} $$
Este es el porcentaje de cambio de [[Tensión|tensión]] de salida, dado un específico cambio de tensión en la entrada

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```