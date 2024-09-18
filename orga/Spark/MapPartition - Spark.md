---
dia: 2023-05-02
tags:
  - orga/Spark
  - nota/facultad
---
# Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite aplicar una función a cada [[Partición - Spark|partición]] de un [[Resilent distributed dataset - Spark|RDD]].

``` python
rdd = sc.parallelize(range(1, 11), 2)

def f(iterator): 
	yield __builtin__.sum(iterator) # para no tener conflictos

rdd.mapPartitions(f).collect()

# Devuelve [[15], [40]]
```