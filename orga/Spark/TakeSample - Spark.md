---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
  - nota
---
### Definición
---
Es una [[Acción - Spark|acción]] que nos permite obtener una muestra de $n$ registros de un [[Resilent distributed dataset - Spark|RDD]] con o sin reemplazo.

``` python
cantidad = 5
reemplazo = True
rdd.count(reemplazo, cantidad)
```

Donde reemplazo implica si un mismo registro puede ser elegido más de una vez.