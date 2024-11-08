---
dia: 2023-05-01
tags:
  - ingeniería-en-informática/orga/Spark
  - nota/facultad
---
# Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite filtrar registros de un [[Resilent distributed dataset - Spark|RDD]] en base a una función

``` python
rdd_pares = rdd.filter(lambda X: x % 2 == 0)
```