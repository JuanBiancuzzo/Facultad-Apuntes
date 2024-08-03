---
dia: 2023-03-27
tags:
  - orga/Pandas
  - nota/facultad
---
### Definición
---
``` python
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, 
	left_index=False, right_index=False, sort=False, suffixes ('_x', '_y'),
	copy=True, indicator=False, validate=None)
```

Esta función recibe dos [[Data frame - Pandas|data frame]] y al indicarle como, va a unir esos dos [[Data frame - Pandas|data frames]]

#### Uniones
---
Tenemos 4 formas de como unirlos, que por defecto es un `inner`

##### Inner
---
`inner` implica que únicamente los datos que aparezcan en ambos [[Data frame - Pandas|data frame]] van a permanecer en la unión

![[Operador AND#^c09f24]]

##### Left
---
`left` implica que los que estén en ambos y además los que estén en el [[Data frame - Pandas|data frame]] de la izquierda van a permanecer en la unión. Dejando `Nan`'s en los datos que no se pueden completar.

![[Unión izquierda de conjuntos#Representación gráfica]]

##### Right
---
`right` implica que los que estén en ambos y además los que estén en el [[Data frame - Pandas|data frame]] de la derecha van a permanecer en la unión. Dejando `Nan`'s en los datos que no se pueden completar.

![[Unión derecha de conjuntos#Representación gráfica]]

##### Outer
---
`outer` implica que todos los datos de ambos [[Data frame - Pandas|data frame]] permanecen en la unión. Dejando `Nan`'s en los datos que no se pueden completar.

![[Operador OR#^fccd72]]




