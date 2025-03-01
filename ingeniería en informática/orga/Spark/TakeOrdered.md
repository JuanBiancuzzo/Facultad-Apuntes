---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[Acción|acción]] que nos permite obtener los primeros $n$ registros de un [[Resilent distributed dataset|RDD]] en base a un orden indicado.

``` python
cantidad = 5
orden = lambda x: -x
# Devuelve los primeros 5 en orden de descendiente
rdd.takeOrdered(cantidad, orden)
```