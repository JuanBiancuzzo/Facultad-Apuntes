---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Es una [[Acción|acción]] que nos permite obtener todos los registros de un [[Resilent distributed dataset|RDD]]. Esto es un potencial problema, ya que si los datos no son acotados va a sobrecargar el driver. Solo se debe ejecutar si de antemano conocemos que la cantidad de datos (usando [[Count|count]]) es acotada

``` python
rdd.collect()
```

Es equivalente a un [[Take|take]] de todos los elementos.