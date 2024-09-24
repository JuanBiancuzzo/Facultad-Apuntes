---
dia: 2024-08-05
tags:
  - discreta/Álgebra-de-conjuntos
  - nota/facultad
referencias:
  - "191"
---
# Definición
---
En matemáticas, álgebra de conjuntos es el estudio de las operaciones básicas que pueden realizarse con conjuntos, como la [[Operador OR|unión]], [[Operador AND|intersección]] y [[Operador NOT|complementación]] <sup><a href="#ref-191" style="color: inherit; text-decoration: none;">[191]</a></sup> 

## Equivalencias útiles
---
Muchas veces se utilizan identidades para reescribir una expresión de forma que resulta más conveniente para trabajar

Las siguientes $6$ expresiones son equivalente
1. $X \subseteq Y$
2. $XY = X$
3. $X + Y = Y$
4. $XY' = \emptyset$
5. $X' + Y = I$
6. $Y' \subseteq X'$

Es más simple trabajar con expresiones que están iguales al vacío (o la identidad). Debido a esto, trabajaremos con las siguientes $3$ expresiones equivalentes
1. $X = Y$
2. $X'Y + XY' = \emptyset$
3. $(X' + Y)(X + Y') = I$

## Identidades
---
* [[Conmutatividad|Conmutatividad]] ![[Conmutatividad#^90c16b]]
* [[Distributividad|Distributividad]] ![[Distributividad#^2904a4]]
* [[Elemento neutro|Neutros]] ![[Elemento neutro#^7e8bad]]
* [[Complementario|Complementarios]] ![[Complementario#^ea3733]]
* [[Acotación|Acotación]] ![[Acotación#^f5e1e9]]
* [[Asociatividad|Asociatividad]] ![[Asociatividad#^28e538]]
* [[Involución|Involución]] ![[Involución#^59fc5a]]
* [[Ley de De Morgan|Ley de De Morgan]] ![[Ley de De Morgan#^5efbce]]
* [[Idempotente|Idempotencia]] ![[Idempotente#^13da65]]
* [[Absorción|Absorción]] ![[Absorción#^bf732a]]

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```