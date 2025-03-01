---
dia: 2023-05-02
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite decrecer la cantidad de [[Partición - Spark|particiones]] del [[Resilent distributed dataset|RDD]]. No hace un [[Etapa de shuffle & sort|shuffle]] por defecto, solo pasa datos de una partición a otra. Por lo tanto no necesariamente queda balanceadas como en [[Repartition|repatition]]

``` python
rdd = sc.parallelize(range(1, 11), 2)
rdd.coalesce(2).glom().collect()

# Devuelve [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
```

En este caso quedó balanceado pero no ncesariamente es el caso.