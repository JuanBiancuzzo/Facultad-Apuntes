---
dia: 2023-05-01
tags:
  - ingeniería-en-informática/orga/Spark
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite modificar un registros de un [[Resilent distributed dataset|RDD]], en ese sentido es como el [[Map|map]], pero cada registro puede generar 0, 1 o más registros, según la función dada

``` python
# devuelve 3 registros, el original, otro uno menos que el original y otro uno más que el original
rdd.flatMap(lambda X: [(x), (x - 1), (x + 1)])
```