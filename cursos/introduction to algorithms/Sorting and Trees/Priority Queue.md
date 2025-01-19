---
dia: 2025-01-17
etapa: empezado
referencias:
  - "701"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
aliases:
  - Cola con prioridad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta implementado en un [[Conjunto|conjunto]] $S$, donde cada elemento de $S$ esta asociado con una key. Se usa esta key para definir la prioridad

Para esto, se define las siguientes operaciones
* `insert(S, x)`
    * Inserta un elemento $x$ en el conjunto $S$
* `max(S)`
    * Devuelve el elemento de $S$ con la key más grande
* `extract_max(S)`
    * Devuelve el elemento de $S$ con la key más grande y además lo elimina de $S$
* `increse_key(S, x, k)`
    * Modifica la key del elemento $x$, del conjunto $S$, al nuevo valor $k$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```