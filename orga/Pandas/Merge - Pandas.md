---
dia: 2023-03-27
materia: orga
capitulo: 1
---
### Definición
---
``` python
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, 
	left_index=False, right_index=False, sort=False, suffixes ('_x', '_y'),
	copy=True, indicator=False, validate=None)
```

Esta función recibe dos [[Data frame - Pandas|data frame]] y al indicarle como, va a unir esos dos [[Data frame - Pandas|data frames]].

Tenemos 4 formas de como unirlos:
* `inner` implica que únicamente los datos que aparezcan en ambos [[Data frame - Pandas|data frame]] van a permanecer en la unión.
* `left` implica que los que esten en ambos y además los que esten en el [[Data frame - Pandas|data frame]] de la izquierda van a permanecer en la unión. Dejando `Nan`'s en los datos que no se pueden completar.
* `right` implica que los que esten en ambos y además los que esten en el [[Data frame - Pandas|data frame]] de la derecha van a permanecer en la unión. Dejando `Nan`'s en los datos que no se pueden completar.
* `outer` implica que todos los datos de ambos [[Data frame - Pandas|data frame]] permanecen en la unión. Dejando `Nan`'s en los datos que no se pueden completar.

Por defecto es un `inner`.