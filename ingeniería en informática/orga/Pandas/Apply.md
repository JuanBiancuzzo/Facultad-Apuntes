---
dia: 2023-03-27
tags:
  - ingeniería-en-informática/orga/Pandas
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Pandas
---
# Definición
---
``` python
DataFrame.apply(func, axis = 0, raw = False, result_type = None, args = (),
	**kwargs)
```

Dado una [[Data frame]] `tabla` podemos modificarlo con la función `apply(funcion)`. Es el equivalente a [[Map|map]]. Por ejemplo:

``` python
def mapeo(valor):
	return valor + 1

tabla.map(mapeo)

# alternativamente podemos usar una funcion lambda
tabla.map(lambda valor: valor + 1)
```