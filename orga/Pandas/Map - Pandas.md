---
dia: 2023-03-16
capitulo: 1
tags:
  - orga/Pandas
  - nota
---
### Definición
---
``` python
Series.map(arg, na_action = None)
```

Dado una [[Series - Pandas]] `serie` podemos modificarlo con la función `map(funcion)`. Es el equivalente a [[Apply - Pandas|apply]].Por ejemplo: 

``` python
def mapeo(valor):
	return valor + 1

serie.map(mapeo)

# alternativamente podemos usar una funcion lambda
serie.map(lambda valor: valor + 1)
```
