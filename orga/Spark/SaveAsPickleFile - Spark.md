---
dia: 2023-05-02
materia: orga
capitulo: 6
---
### Definición
---
Guarda un [[Resilent distributed dataset - Spark|RDD]] a disco en un archivo con los datos serializados.

``` python
rdd = sc.parallelize(range(1, 100000))
rdd.saveAsPickleFile("numeros.file")

# y obtenemos normalmente de un archivo
numeros = sc.pickleFile("numeros.file")
```