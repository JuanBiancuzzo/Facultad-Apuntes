---
dia: 2023-05-02
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
---
# Definición
---
Una variable broadcast nos permite mantener una variable solo lectura cacheada en cada una de las máquinas del [[Cluster]] en vez de enviar esa información con cada una de las tareas que se envian al cluster.

Esto es particulamente util cuando, las tareas se ejecutan en multiples etapas y se necesita la misma información, o cuando [[Función Cache|cachear]] información de forma deserializada es importante.

``` python
import pyspark as ps

spark = ps.sql.SparkSession.builder.getOrCreate()
sc = spark.sparkContext

datos = {
		 1: "Analisis",
		 2: "Algebra",
		 3: "Algo1"
}

broadcastDatos = sc.broadcast(datos)
```