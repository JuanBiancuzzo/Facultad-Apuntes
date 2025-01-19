---
dia: 2024-12-22
etapa: ampliar
referencias:
  - 700
  - "784"
tags:
  - curso/introduction-to-algorithms/Introduction
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En [[Ciencias de la computación|ciencias de la computación]], se usa el worse-case complexity como medida de tiempo de ejecución o de uso de memoria de un [[Algoritmo|algoritmo]] que usa dado un input de tamaño arbitrario. Esta medida da la [[Cota superior|cota superior]] en los recursos que requiere el algoritmo

Se lo denota con $$ \Theta(n) $$ donde $n$ es el tamaño del input

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```