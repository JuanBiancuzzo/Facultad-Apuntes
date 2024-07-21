---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
  - nota
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite modificar un registros de un [[Resilent distributed dataset - Spark|RDD]], en ese sentido es como el [[Map - Spark|map]], pero cada registro puede generar 0, 1 o más registros, según la función dada

``` python
# devuelve 3 registros, el original, otro uno menos que el original y otro uno más que el original
rdd.flatMap(lambda X: [(x), (x - 1), (x + 1)])
```