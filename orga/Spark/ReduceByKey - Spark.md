---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que combina los registros de un [[Resilent distributed dataset - Spark|RDD]] que tengan la misma clave en base a una función de reduce. La función de reduce debe ser [[Conmutatividad|conmutativa]] y [[Asociatividad|asociativa]].

``` python
rdd.map(lambda x: (x, 1)).reduceByKey(lambda a, b: a + b)
```

Al principio estamos creando un conjunto de clave y valor, para despues usarlo, en este caso va a combinar los valores.