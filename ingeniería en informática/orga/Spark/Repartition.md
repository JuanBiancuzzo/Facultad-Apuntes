---
dia: 2023-05-02
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
  - nota/facultad
  - nota/investigacion
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite hacer un [[Etapa de shuffle & sort|reshuffle]] de los datos en el [[Resilent distributed dataset|RDD]] de forma aleatoria para crear más o menos particiones y balancearlas.

``` python
rdd = sc.parallelize(range(1, 11), 4)
rdd.glom().collect()
# Devuelve [[1, 2], [3, 4, 5], [6, 7], [8, 9, 10]]

rdd2 = rdd.repartition(2)
rdd.glom().collect()
# Devuelve [[1, 2, 6, 7, 8, 9, 10], [3, 4, 5]]
```
[[Apache|Spark]] no hace un shaffle de registros individuales sino de a bloques con un [[Mínimo|mínimo]] (no es un problema cuando se manejan grandes cantidades de datos)