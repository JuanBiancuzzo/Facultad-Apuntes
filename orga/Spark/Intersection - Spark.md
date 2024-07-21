---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite encontrar los registros en común entre dos [[Resilent distributed dataset - Spark|RDD]].

``` python
intersection = rdd1.intersection(rdd2)
```