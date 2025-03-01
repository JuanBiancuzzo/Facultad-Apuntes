---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite filtrar registros de un [[Resilent distributed dataset|RDD]] en base a una función

``` python
rdd_pares = rdd.filter(lambda X: x % 2 == 0)
```