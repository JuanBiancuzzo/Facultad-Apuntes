---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
  - nota
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite agrupar registros de un [[Resilent distributed dataset - Spark|RDD]] que tengan la misma clave

``` python
rdd.map(lambda X: (x % 2, x)).groupByKey()
```