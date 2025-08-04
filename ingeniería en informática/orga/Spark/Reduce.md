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
Se debe especificar también una función **reduce** que es una [[Acción|acción]] que combina todos los valores asociados a la misma clave.

Combina los resultados de una [[ingeniería en informática/orga/Spark/Transformación|transformación]], por lo tanto es necesario procesar los datos de todas las máquinas del  [[Cluster]]. Reduce de forma local en paralelo y reduce entre máquinas mediante la [[Etapa de shuffle & sort]].

Esta acción nos permite obtener un solo registro de un [[Resilent distributed dataset|RDD]], combinando el resultado en base a una función dada.

``` python
# sumar todos los números del RDD
rdd.reduce(lambda a, b: a + b)

# El número más grande
rdd.reduce(lambda a, b: a if a > b else b)
```