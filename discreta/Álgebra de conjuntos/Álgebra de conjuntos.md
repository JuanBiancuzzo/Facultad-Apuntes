---
dia: 2024-08-05
tags:
  - discreta/Álgebra-de-conjuntos
  - nota/facultad
referencias:
  - "191"
---
### Definición
---
En matemáticas, álgebra de conjuntos es el estudio de las operaciones básicas que pueden realizarse con conjuntos, como la [[Operador OR|unión]], [[Operador AND|intersección]] y [[Operador NOT|complementación]] <sup><a href="#ref-191" style="color: inherit; text-decoration: none;">[191]</a></sup> 

#### Equivalencias útiles
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

#### Identidades
---
* [[Conmutatividad|Conmutatividad]] ![[Conmutatividad#^370681]]
* [[Distributividad|Distributividad]] ![[Distributividad#^5d5bd9]]
* [[Elemento neutro|Neutros]] ![[Elemento neutro#^d06bfa]]
* [[Complementario|Complementarios]] ![[Complementario#^2a2c00]]
* [[Acotación|Acotación]] ![[Acotación#^8d99f4]]
* [[Asociatividad|Asociatividad]] ![[Asociatividad#^ce342d]]
* [[Involución|Involución]] ![[Involución#^3ddcb0]]
* [[Ley de De Morgan|Ley de De Morgan]] ![[Ley de De Morgan#^9e560c]] ![[Ley de De Morgan#^fbb41e]]
* [[Idempotente|Idempotencia]] ![[Idempotente#^4f2f11]]
* [[Absorción|Absorción]] ![[Absorción#^49d912]]

### Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```