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
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite juntar los registros de un [[Partición - Spark|partición]] en una lista.

``` python
rdd = sc.parallelize(range(1, 11), 2)
rdd.glom().collect()

# Devuelve [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
```