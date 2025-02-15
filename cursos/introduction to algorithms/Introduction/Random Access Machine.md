---
dia: 2025-01-08
etapa: ampliar
referencias:
  - "700"
tags:
  - curso/introduction-to-algorithms/Introduction
  - nota/curso
aliases:
  - RAM
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un [[Modelo de computación|modelo de computación]], donde tiene
* Cargar en, [[Big O Notation|usando Big O Notation]], $O(1)$ un número constante de [[Palabra#En computación|palabra]]
* Computar en $O(1)$ un número constante de operaciones
* Guardar en $O(1)$ un número constante de palabras
* Se tiene una cantidad finita de [[Registro|registros]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```