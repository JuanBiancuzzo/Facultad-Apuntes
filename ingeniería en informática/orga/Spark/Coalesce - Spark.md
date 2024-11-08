---
dia: 2023-05-02
tags:
  - ingeniería-en-informática/orga/Spark
  - nota/facultad
---
# Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite decrecer la cantidad de [[Partición - Spark|particiones]] del [[Resilent distributed dataset - Spark|RDD]]. No hace un [[Etapa de shuffle & sort|shuffle]] por defecto, solo pasa datos de una partición a otra. Por lo tanto no necesariamente queda balanceadas como en [[Repartition - Spark|repatition]]

``` python
rdd = sc.parallelize(range(1, 11), 2)
rdd.coalesce(2).glom().collect()

# Devuelve [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
```

En este caso quedó balanceado pero no ncesariamente es el caso.