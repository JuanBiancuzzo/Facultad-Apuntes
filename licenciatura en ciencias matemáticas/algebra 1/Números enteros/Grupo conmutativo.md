---
dia: 2024-11-11
etapa: ampliar
referencias:
  - "506"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Grupo abeliano
  - Axiomas de grupo abeliano
vinculoFacultad:
  - tema: Números enteros
    capitulo: 3
    materia: Álgebra 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un grupo abeliano es un [[Conjunto|conjunto]] $A$, junto con una operación $\circ$ que combina dos elementos cualesquiera $a$ y $b$ de $A$ para formar otro elemento de $A$, denotado $a \circ b$. El símbolo $\circ$ es un marcador de posición general para una operación concreta. Para calificar como grupo abeliano, el conjunto y la operación, $(A,~ \circ)$, deben satisfacer cuatro requisitos conocidos como los axiomas de grupo abeliano<sup><a href="#ref-506" style="color: inherit; text-decoration: none;">[506]</a></sup> 
* [[Asociatividad|Asociatividad]] ![[Asociatividad#^2ac183]]
* [[Elemento neutro|Elemento de identidad]] ![[Elemento neutro#^37ef3f]]
* [[Complementario|Elemento inverso]] ![[Complementario#^fbd3f4]]
* [[Conmutatividad|Conmutatividad]] ![[Conmutatividad#^c6b142]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```