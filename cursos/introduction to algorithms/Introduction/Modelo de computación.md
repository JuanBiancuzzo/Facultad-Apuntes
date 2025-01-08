---
dia: 2025-01-08
etapa: empezado
referencias:
  - "700"
tags:
  - cursos/introduction-to-algorithms/Introduction
  - nota/curso
  - investigación/ciencias-de-la-computación/algoritmos
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Especifica que operaciones un [[Algoritmo|algoritmo]] tiene permitido usar, y el costo de cada operación (como recursos de [[Memoria|memoria]], tiempo, etc.)

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```