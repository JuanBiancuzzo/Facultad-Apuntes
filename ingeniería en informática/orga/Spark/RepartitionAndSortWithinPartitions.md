---
dia: 2023-05-02
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite [[Partición - Spark|reparticionar]] (como [[Repartition|repartition]]) un [[Resilent distributed dataset|RDD]] de acuerdo a un particionador y ordena los registros en base a su clave. 

``` python
rdd = sc.parallelize(range(1, 11), 4)
rdd.map(lambda x: (x, x))
   .repartitionAndSortWithinPartitions(2)
   .glom()
   .collect()
# Devuelve [[(2, 2), (4, 4), (6, 6), (8, 8), (10, 10)],
#           [(1, 1), (3, 3), (5, 5), (7, 7), (9, 9)]]
```

Cuando aplicar normalmente esta repartición nos da unos registros muy desbalanceados, podemos incorporar una función de partición en `partitionFunc` 
``` python
rdd = sc.parallelize(range(1, 11), 4)
rdd.map(lambda x: (2 * x, x))
   .repartitionAndSortWithinPartitions(2)
   .glom()
   .collect()
# Devuelve [[(2, 1), (4, 2), (6, 3), (8, 4), (10, 5), (12, 6), (14, 7), (16, 8), (18, 9), (20, 10)], []]

rdd.map(lambda x: (2 * x, x))
   .repartitionAndSortWithinPartitions(2, partitionFunc = lambda x: (x % 3))
   .glom()
   .collect()
# Devuelve [[(2, 1), (6, 3), (8, 4), (12, 6), (14, 7), (18, 9), (20, 10)],
#           [(4, 2), (10, 5), (16, 8)]]
```
