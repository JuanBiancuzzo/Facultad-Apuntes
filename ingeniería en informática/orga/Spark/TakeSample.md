---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[Acción|acción]] que nos permite obtener una muestra de $n$ registros de un [[Resilent distributed dataset|RDD]] con o sin reemplazo.

``` python
cantidad = 5
reemplazo = True
rdd.count(reemplazo, cantidad)
```

Donde reemplazo implica si un mismo registro puede ser elegido más de una vez.