---
dia: 2023-05-01
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
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite encontrar los registros en común entre dos [[Resilent distributed dataset|RDD]]

``` python
intersection = rdd1.intersection(rdd2)
```

Al igual que [[Merge#^79e8a8|merge inner]]