---
dia: 2023-05-01
materia: orga
capitulo: 6
---
### Definición
---
Es una [[Acción - Spark|acción]] que nos permite obtener todos los registros de un [[Resilent distributed dataset - Spark|RDD]]. Esto es un potencial problema, ya que si los datos no son acotados va a sobrecargar el driver. Solo se debe ejecutar si de antemano conocemos que la cantidad de datos (usando [[Count - Spark|count]]) es acotada

``` python
rdd.collect()
```

Es equivalente a un [[Take - Spark|take]] de todos los elementos.