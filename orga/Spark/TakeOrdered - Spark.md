---
dia: 2023-05-01
materia: orga
capitulo: 6
---
### Definición
---
Es una [[Acción - Spark|acción]] que nos permite obtener los primeros $n$ registros de un [[Resilent distributed dataset - Spark|RDD]] en base a un orden indicado.

``` python
cantidad = 5
orden = lambda x: -x
# Devuelve los primeros 5 en orden de descendiente
rdd.takeOrdered(cantidad, orden)
```