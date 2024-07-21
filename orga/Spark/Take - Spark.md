---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
---
### Definición
---
Es una [[Acción - Spark|acción]] que nos permite obtener los primeros $n$ registros de un [[Resilent distributed dataset - Spark|RDD]].

``` python
cantidad = 5
rdd.take(cantidad)
```