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
Guarda un [[Resilent distributed dataset|RDD]] a disco en un archivo con los datos serializados.

``` python
rdd = sc.parallelize(range(1, 100000))
rdd.saveAsPickleFile("numeros.file")

# y obtenemos normalmente de un archivo
numeros = sc.pickleFile("numeros.file")
```