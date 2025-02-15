---
dia: 2025-01-08
etapa: ampliar
referencias:
  - "700"
tags:
  - curso/introduction-to-algorithms/Introduction
  - nota/curso
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un [[Modelo de computación|modelo de computación]], donde tiene
* Permite [[Memory Managment|alocar memoria de forma dinámica]] que llamaremos [[Objeto|objeto]]
* Acceder y operar en, [[Big O Notation|usando Big O Notation]], cuestan $O(1)$

Es un [[Modelo|modelo]] menos poderoso al de [[Random Access Machine|Random Access Machine]] ya que en este último se puede implementar el Pointer Machine, resolviendo la [[Abstracción|abstracción]] que este modelo propone 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```