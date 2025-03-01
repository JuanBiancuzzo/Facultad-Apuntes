---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
A un [[Resilent distributed dataset|RDD]] se le puede aplicar una transformación, que se pueden entender como funciones aplicada a todos sus datos, como:
* [[Map|Map]]
* [[Filter|Filter]]
* [[FlatMap|FlatMap]]
* [[ReduceByKey|ReduceByKey]]
* [[GroupBy|GroupByKey]]
* [[Distinct|Distinct]]

También hay transformaciones que se caracterizan por ser aplicados a dos [[Resilent distributed dataset|RDDs]]
* [[Union|Union]]
* [[Intersection|Intersection]]
* [[Subtract|Subtract]]
* [[Merge|Join]]
* [[Broadcast Join|Broadcast Join]]

También hay transformaciones que se caracterizan por ser aplicados sobre las particiones
* [[Glom|Glom]]
* [[MapPartition|MapPartion]]
* [[Repartition|Repartition]]
* [[Coalesce|Coalesce]]
* [[RepartitionAndSortWithinPartitions|RepartitionAndSortWithinPartitions]]