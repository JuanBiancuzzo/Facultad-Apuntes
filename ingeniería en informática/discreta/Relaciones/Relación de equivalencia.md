---
dia: 2024-08-07
tags:
  - ingeniería-en-informática/discreta/Relaciones
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
referencias:
  - "411"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una relación de equivalencia es una [[Relación|relación]] que cumple simultáneamente las propiedades
* [[Relación reflexiva|Reflexiva]]
* [[Relación simétrica|Simétrica]]
* [[Relación transitiva|Transitiva]]


```mermaid
graph TD
	subgraph A
    subgraph ca ["[a]"]
			a <--> b
			a --> a
      b --> b
    end
		subgraph cc ["[c]"]
	    c --> c
		end
		subgraph cd ["[e]"]
	    e <--> d & f
      d <--> f
      e --> e
      d --> d
      f --> f
		end
	end

```


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```