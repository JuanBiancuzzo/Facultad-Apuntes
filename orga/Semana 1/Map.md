---
dia: 2023-03-16
materia: orga
capitulo: 1
---
### Definición
---
``` python
Series.map(arg, na_action = None)
```

Dado una [[Series]] `serie` podemos modificarlo con la función `map(funcion)`. Es el equivalente a [[Apply]].Por ejemplo: 

``` python
def mapeo(valor):
	return valor + 1

serie.map(mapeo)

# alternativamente podemos usar una funcion lambda
serie.map(lambda valor: valor + 1)
```
