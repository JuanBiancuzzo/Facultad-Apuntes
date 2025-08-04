---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/orga/Spark/Resumen.md]]"
---
# Definición
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite eliminar registros duplicados de un [[Resilent distributed dataset|RDD]] donde todo el registro tiene que coincidir

``` python
rdd.distinct()
```