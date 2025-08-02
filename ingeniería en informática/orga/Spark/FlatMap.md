---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
  - nota/facultad
  - nota/investigacion
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite modificar un registros de un [[Resilent distributed dataset|RDD]], en ese sentido es como el [[Map|map]], pero cada registro puede generar 0, 1 o más registros, según la función dada

``` python
# devuelve 3 registros, el original, otro uno menos que el original y otro uno más que el original
rdd.flatMap(lambda X: [(x), (x - 1), (x + 1)])
```