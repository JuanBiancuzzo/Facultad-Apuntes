---
dia: 2024-08-07
tags:
  - carrera/ingeniería-en-informática/discreta/Relaciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
referencias:
  - "411"
etapa: sin-empezar
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Relaciones/Resumen.md]]"
  - "[[licenciatura en ciencias matemáticas/algebra 1/Conjuntos, relaciones y funciones/Resumen.md]]"
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
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```