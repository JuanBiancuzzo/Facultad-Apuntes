---
dia: 2023-03-16
tags:
  - carrera/ingeniería-en-informática/orga/Pandas
  - carrera/ingeniería-en-informática/orga/Spark
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Pandas
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
  - nota/facultad
  - nota/investigacion
aliases:
  - GroupByKey
vinculoFacultad:
  - "[[ingeniería en informática/orga/Pandas/Resumen.md]]"
  - "[[ingeniería en informática/orga/Spark/Resumen.md]]"
---
# Definición
---

## Pandas
---
``` python
DataFrame.groupby(by = None, axis = 0, level = None, as_index = True, 
	sort = True, group_keys = _NoDefault.no_default, squeeze = _NoDefault.no_default, observed = False, dropna = True)
```
Dado la [[Data frame|tabla]] podemos agrupar con el método `groupby(["Columnas"])` pero devuelve un tipo [[ingeniería en informática/orga/Pandas/Group|group]]

También podemos usar `grupo.loc(["filas"])` para poder acceder a una fila

## Spark
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite agrupar registros de un [[Resilent distributed dataset|RDD]] que tengan la misma clave

``` python
rdd.map(lambda X: (x % 2, x)).groupByKey()
```