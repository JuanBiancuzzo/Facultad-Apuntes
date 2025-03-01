---
dia: 2023-05-02
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
[[Cache|Cachea]] un [[Resilent distributed dataset|RDD]] intermedio que va a ser utilizado varias veces de modo de evitar tener que ejecutar todas las [[ingeniería en informática/orga/Spark/Transformación|transformaciones]] cada vez

``` python
rdd = sc.parallelize(range(1, 100000))
rddCached = rdd.map(lambda x : x * 10).cache()
```