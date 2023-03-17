---
dia: 2023-03-16
materia: orga
capitulo: 1
---
### Definición
---
Dado una [[Data frame|tabla]] `tabla` podemos modificarlo con la función `map(funcion)`. Por ejemplo: 

``` python
def mapeo(valor):
	return valor + 1

tabla.map(mapeo)

# alternativamente podemos usar una funcion lambda
tabla.map(lambda valor: valor + 1)
```
