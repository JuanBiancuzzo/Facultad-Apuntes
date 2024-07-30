---
dia: 2023-05-02
tags:
  - orga/Spark
  - nota/facultad
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite juntar los registros de un [[Partición - Spark|partición]] en una lista.

``` python
rdd = sc.parallelize(range(1, 11), 2)
rdd.glom().collect()

# Devuelve [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
```