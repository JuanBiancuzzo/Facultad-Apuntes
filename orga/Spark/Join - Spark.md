---
dia: 2023-05-01
tags:
  - orga/Spark
  - nota/facultad
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite combinar dos [[Resilent distributed dataset - Spark|RDD]], en base a las claves de los registros. Junta cada registro del primer [[Resilent distributed dataset - Spark|RDD]] con cada registro del segundo [[Resilent distributed dataset - Spark|RDD]] que tengan la misma clave. Este no agrupa, sino que es de a pares de registro.

Similar al [[Merge - Pandas|merge de pandas]] tenemos 4 tipos de join:

##### Inner join
---
Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ con todos los pares de elementos para cada key, específicamente los que hay en común por esa clave en ambos sets de datos.

``` python
izquierdaRDD.join(derechaRDD)
```

![[Intersección de conjuntos#Representación gráfica]]

##### Left outer join
---
Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ asegurándonos que todos los del set de datos izquierda estarán en el resultado del join.

``` python
izquierdaRDD.leftOuterJoin(derechaRDD)
```

![[Unión izquierda de conjuntos#Representación gráfica]]

##### Right outer join
---
Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ asegurándonos que todos los del set de datos derecho estarán en el resultado del join.

``` python
izquierdaRDD.rightOuterJoin(derechaRDD)
```

![[Unión derecha de conjuntos#Representación gráfica]]

##### Outer join
---
Cuando se llama para sets de datos del tipo $(Key,~Value_1)$ y $(Key, Value_2)$ devuelve un set de datos del tipo $(Key,~(Value_1,~Value_2))$ asegurándonos que todos los datos de ambos set de datos estarán aunque no haya match de keys.

``` python
izquierdaRDD.fullOuterJoin(derechaRDD)
```

![[Unión de conjuntos#Representación gráfica]]