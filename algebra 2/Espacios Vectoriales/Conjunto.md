---
dia: 2023-04-08
tags:
  - algebra-2/Espacios-Vectoriales
  - nota/facultad
  - discreta/Álgebra-de-conjuntos
  - analisis-2/Nomenclatura
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
referencias:
  - "411"
etapa: ampliar
aliases:
  - Conjunto vacío#^conjunto-vacio
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un conjunto es una colección de objetos, llamados [[Elemento|elementos]], que tiene la propiedad que dado un objeto cualquiera, se puede decidir si ese objeto es un elemento del conjunto o no

Donde se denota el conjunto vacío como $\emptyset$ o $\set{~}$, este conjunto no posee ningún elemento ^conjunto-vacio

Los conjuntos se denotan habitualmente por letras mayúsculas. Los objetos que componen el conjunto se llaman elementos o miembros

## Observación
---
El orden de los elementos no importa en un conjunto, y en un conjunto no se tiene en cuenta repeticiones de elementos

## Operaciones
---
* Se dice que "pertenecen" al conjunto, se denota mediante el símbolo $\in$
    * Si un objeto no pertenece al conjunto, se denota mediante el símbolo $\notin$ 
* $A \subset B$ se lee "A incluido en B", significa que todos los elementos de $A$ pertenecen a $B$ $$ \forall a \in A : a \in B $$
* [[Igualdad de conjuntos|Igualdad]]
* [[Operador OR#Álgebra de conjunto|Unión]]
* [[Operador AND#Álgebra de conjunto|Intersección]] 
* [[Operador NOT#Álgebra de conjunto|Complemento]] 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```