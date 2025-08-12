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
Es una [[Acción|acción]] que nos permite contar la cantidad de ocurrencias de registros de un [[Resilent distributed dataset|RDD]] para cada clave.

En spark para que un registro sea considerado con clave debe ser una tupla de únicamente dos elementos. El primer elemento es la key y el segundo el valor. A su vez, la key y el valor pueden estar compuestos de tuplas.

``` python
# Cuento cuántos números son múltiplos de 2 hay y cuantos no
rdd.map(lambda x: (x % 2, 1)).countByKey()
```

Usamos la [[ingeniería en informática/orga/Spark/Transformación|transformación]] de [[Map|map]] para convertir los valores que tengamos en una tupla, y de esa forma poder usar `countByKey()`

