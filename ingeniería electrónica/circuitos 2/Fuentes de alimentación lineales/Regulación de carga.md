---
dia: 2025-03-22
etapa: ampliar
referencias:
  - "1017"
tags:
  - carrera/ingeniería-electrónica/circuitos-2/Fuentes-de-alimentación-lineales
  - nota/facultad
aliases:
  - Load regulation
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
Dada un [[Regulador de tensión|regulador de tensión]], y variando la carga, podemos obtener la regulación de carga como $$ \frac{\Delta V_{out}}{\Delta I_{out}} $$
Este es el porcentaje de cambio de [[Tensión|tensión]] de salida, dado un específico cambio de [[Corriente eléctrica|corriente]] de salida

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```