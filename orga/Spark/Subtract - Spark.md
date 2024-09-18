---
dia: 2023-05-01
tags:
  - orga/Spark
  - nota/facultad
---
# Definición
---
Es una [[Transformación - Spark|transformación]] que nos sacar los registros del primer [[Resilent distributed dataset - Spark|RDD]] que aparezcan en el segundo [[Resilent distributed dataset - Spark|RDD]].

``` python
substract = rdd1.subtract(rdd2)
```
