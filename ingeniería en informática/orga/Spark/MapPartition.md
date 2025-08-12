---
dia: 2023-05-02
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Spark
    capitulo: 6
    materia: Organización de datos
    carrera: Ingeniería en informática
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