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
Es una [[Acción|acción]] que nos permite obtener todos los registros de un [[Resilent distributed dataset|RDD]]. Esto es un potencial problema, ya que si los datos no son acotados va a sobrecargar el driver. Solo se debe ejecutar si de antemano conocemos que la cantidad de datos (usando [[Count|count]]) es acotada

``` python
rdd.collect()
```

Es equivalente a un [[Take|take]] de todos los elementos.