---
dia: 2023-03-27
tags:
  - ingeniería-en-informática/orga/Pandas
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Pandas
  - ingeniería-en-informática/orga/Spark
  - lenguajes-de-programación/Lenguaje-Python/Spark
  - lenguajes-de-programación/lenguaje-SQL
  - ingeniería-en-informática/bdd/SQL
aliases:
  - Sentencia JOIN
---
# Definición
---
Las [[Función|funciones]] merge se pueden representar con $4$ posibles uniones

* Inner ![[Operador AND#^c09f24]]
* Left ![[Unión izquierda de conjuntos#^a436b3]]
* Right ![[Unión derecha de conjuntos#^1974bd]]
* Outer ![[Operador OR#^fccd72]]


## SQL
---
Esta [[Sentencia de SQL|sentencia]] se usa para combinar filas de dos o más [[Tabla SQL|tablas]] basado en la relación entre las columnas de ambas

### Uniones
---
Tenemos $4$ formas de como unirlos
* Inner ^79e8a8
    * `(INNER) JOIN` devuelve los [[Registro SQL|registros]] que tienen el mismo valor en ambas [[Tabla SQL|tablas]]. Donde `JOIN` y `INNER JOIN` devuelven lo mismo

```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
INNER JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna;
```


* Left
    * `LEFT (OUTER) JOIN` devuelve todos los registros de la tabla izquierda y los registros que tengan el mismo valor de la tabla derecha. En caso de que falten datos, se agrega [[NULL|NULL]]

```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
LEFT JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna;
```

* Right
    * `RIGHT (OUTER) JOIN` devuelve todos los registros de la tabla derecha y los registros que tengan el mismo valor de la tabla izquierda. En caso de que falten datos, se agrega NULL

```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
RIGHT JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna;
```

* Full
    * `FULL (OUTER) JOIN` devuelve todos los registros de la tabla izquierda y derecha. En caso de que falten datos, se agrega NULL

```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
FULL OUTER JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna
WHERE condicion;
```

## Pandas
---
``` python
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, 
	left_index=False, right_index=False, sort=False, suffixes ('_x', '_y'),
	copy=True, indicator=False, validate=None)
```

Esta función recibe dos [[Data frame|data frame]] y al indicarle como, va a unir esos dos data frames

### Uniones
---
Tenemos $4$ formas de como unirlos, que por defecto es un `inner`
* Inner
    * `inner` implica que únicamente los datos que aparezcan en ambos [[Data frame|data frame]] van a permanecer en la unión
* Left
    * `left` implica que los que estén en ambos y además los que estén en el [[Data frame|data frame]] de la izquierda van a permanecer en la unión. Dejando `Nan`'s en los datos que no se pueden completar
* Right
    * `right` implica que los que estén en ambos y además los que estén en el [[Data frame|data frame]] de la derecha van a permanecer en la unión. Dejando `Nan`'s en los datos que no se pueden completar
* Outer
    * `outer` implica que todos los datos de ambos [[Data frame|data frame]] permanecen en la unión. Dejando `Nan`'s en los datos que no se pueden completar

## Spark
---
Es una [[ingeniería en informática/orga/Spark/Transformación|transformación]] que nos permite combinar dos [[Resilent distributed dataset|RDD]], en base a las claves de los registros. Junta cada registro del primer [[Resilent distributed dataset|RDD]] con cada registro del segundo [[Resilent distributed dataset|RDD]] que tengan la misma clave. Este no agrupa, sino que es de a pares de registro.

### Uniones
---
Tenemos $4$ formas de como unirlos
* Inner
    * Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ con todos los pares de elementos para cada key, específicamente los que hay en común por esa clave en ambos sets de datos

``` python
    izquierdaRDD.join(derechaRDD)
```

* Left
    * Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ asegurándonos que todos los del set de datos izquierda estarán en el resultado del join

``` python
    izquierdaRDD.leftOuterJoin(derechaRDD)
```

* Right
    * Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ asegurándonos que todos los del set de datos derecho estarán en el resultado del join

``` python
    izquierdaRDD.rightOuterJoin(derechaRDD)
```

* Outer ^85bc21
    * Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ asegurándonos que todos los datos de ambos set de datos estarán aunque no haya match de keys

``` python
    izquierdaRDD.fullOuterJoin(derechaRDD)
```
