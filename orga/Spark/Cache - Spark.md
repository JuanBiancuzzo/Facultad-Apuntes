---
dia: 2023-05-02
tags:
  - orga/Spark
  - nota
---
### Definición
---
[[Cache|Cachea]] un [[Resilent distributed dataset - Spark|RDD]] intermedio que va a ser utilizado varias veces de modo de evitar tener que ejecutar todas las [[Transformación - Spark|transformaciones]] cada vez

``` python
rdd = sc.parallelize(range(1, 100000))
rddCached = rdd.map(lambda x : x * 10).cache()
```