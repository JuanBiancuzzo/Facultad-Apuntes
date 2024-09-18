---
dia: 2023-05-01
tags:
  - orga/Spark
  - nota/facultad
---
# Definición
---
Es una [[Acción - Spark|acción]] que nos permite contar la cantidad de ocurrencias de registros de un [[Resilent distributed dataset - Spark|RDD]] para cada clave.

En spark para que un registro sea considerado con clave debe ser una tupla de únicamente dos elementos. El primer elemento es la key y el segundo el valor. A su vez, la key y el valor pueden estar compuestos de tuplas.

``` python
# Cuento cuántos números son múltiplos de 2 hay y cuantos no
rdd.map(lambda x: (x % 2, 1)).countByKey()
```

Usamos la [[Transformación - Spark|transformación]] de [[Map - Spark|map]] para convertir los valores que tengamos en una tupla, y de esa forma poder usar `countByKey()`

