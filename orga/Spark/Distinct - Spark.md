---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
  - nota
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite eliminar registros duplicados de un [[Resilent distributed dataset - Spark|RDD]] donde todo el registro tiene que coincidir

``` python
rdd.distinct()
```