---
dia: 2023-05-02
tags:
  - ingeniería-en-informática/orga/Spark
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite aplicar una función a cada [[Partición - Spark|partición]] de un [[Resilent distributed dataset|RDD]].

``` python
rdd = sc.parallelize(range(1, 11), 2)

def f(iterator): 
	yield __builtin__.sum(iterator) # para no tener conflictos

rdd.mapPartitions(f).collect()

# Devuelve [[15], [40]]
```