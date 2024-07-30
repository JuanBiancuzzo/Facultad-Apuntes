---
dia: 2023-03-27
tags:
  - orga/Pandas
  - nota/facultad
---
### Definición
---
``` python
DataFrame.apply(func, axis = 0, raw = False, result_type = None, args = (),
	**kwargs)
```

Dado una [[Data frame - Pandas]] `tabla` podemos modificarlo con la función `apply(funcion)`. Es el equivalente a [[Map - Pandas|map]]. Por ejemplo:

``` python
def mapeo(valor):
	return valor + 1

tabla.map(mapeo)

# alternativamente podemos usar una funcion lambda
tabla.map(lambda valor: valor + 1)
```