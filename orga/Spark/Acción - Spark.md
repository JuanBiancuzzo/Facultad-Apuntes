---
dia: 2023-05-01
capitulo: 6
tags:
  - orga/Spark
  - nota
---
### Definición
---
A un [[Resilent distributed dataset - Spark|RDD]] se le puede aplicar una acción, que devuelven un valor al driver luego de procesar los datos, y provocan que varias [[Transformación - Spark|transformaciones]] encadenadas sean ejecutadas. Algunas son:
* [[Reduce - Spark|Reduce]]
* [[Collect - Spark|Collect]]
* [[Count - Spark|Count]]
* [[Take - Spark|Take]]
* [[TakeOrdered - Spark|TakeOrdered]]
* [[First - Spark|First]]
* [[TakeSample - Spark|TakeSample]]
* [[CountByKey - Spark|CountByKey]]