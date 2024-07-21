---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
---
### Definición
---
A un [[Resilent distributed dataset - Spark|RDD]] se le puede aplicar una transformación, que se pueden entender como funciones aplicada a todos sus datos, como:
* [[Map - Spark|Map]]
* [[Filter - Spark|Filter]]
* [[FlatMap - Spark|FlatMap]]
* [[ReduceByKey - Spark|ReduceByKey]]
* [[GroupByKey - Spark|GroupByKey]]
* [[Distinct - Spark|Distinct]]

También hay transformaciones que se caracterizan por ser aplicados a dos [[Resilent distributed dataset - Spark|RDDs]]
* [[Union - Spark|Union]]
* [[Intersection - Spark|Intersection]]
* [[Subtract - Spark|Subtract]]
* [[Join - Spark|Join]]
* [[Broadcast Join - Spark|Broadcast Join]]

También hay transformaciones que se caracterizan por ser aplicados sobre las particiones
* [[Glom - Spark|Glom]]
* [[MapPartition - Spark|MapPartion]]
* [[Repartition - Spark|Repartition]]
* [[Coalesce - Spark|Coalesce]]
* [[RepartitionAndSortWithinPartitions - Spark|RepartitionAndSortWithinPartitions]]