---
dia: 2025-03-19
etapa: empezado
referencias:
  - "1021"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Continuidad de Lipschitz
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La continuidad es una forma más estricta que la [[Continuidad uniforme|continuidad uniforme]] para [[Función|funciones]]

Dada una función $F$ para un valor fijo de $c \in \mathbb{R}$, cumple la continuidad de Lipschitz si $$ \lVert F(x) - F(y) \rVert < c ~ \lVert x - y \rVert, ~~ \forall x,~ y $$
Una condición suficiente para una función para ser de Lipschitz es si su [[Jacobiana|Jacobiano]] es [[Función uniformemente acotada|uniformemente acotada]] para todo $x$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```