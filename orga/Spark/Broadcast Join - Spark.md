---
dia: 2023-05-02
materia: orga
capitulo: 6
---
### Definición
---
Es una [[Transformación - Spark|transformación]] que nos permite combinar un [[Resilent distributed dataset - Spark|RDD]] y una [[Variable broadcast - Spark|variable broadcasteada]] en base a las claves de los registros. Junta cada registro del primer [[Resilent distributed dataset - Spark|RDD]] con cada valor del segundo [[Variable broadcast - Spark|variable broadcasteada]] que tengan la misma clave. Este no agrupa, sino que es de a pares de registro.

#### Ejemplo
---
Inicializamos
``` python
import pyspark as ps

spark = ps.sql.SparkSession.builder.getOrCreate()
sc = spark.sparkContext

productos = sc.parallelize([1, 1, 2, 1, 3, 6, 3, 6, 3, 5, 7], 3)
nombreProductos = {
	1: "papas",
	2: "cebollas",
	3: "tomates",
	4: "zanahorias",
	5: "batatas",
	6: "peras",
	7: "cilantro"
}
b_nombreProductos = sc.broadcast(nombreProductos)
```

Buscamos los productos que se vendieron más de 4 veces
``` python
productosPopulares = productos
						.map(lambda x: (x, 1))
						.reduceByKey(lambda x, y: x + y)
						.filter(lambda x: x[1] >= 4)
```

Donde usamos [[Map - Spark|map]], [[ReduceByKey - Spark|reduceByKey]] y [[Filter - Spark|filter]].

Ahora hacemos nuestro join
``` python
productosPopulares = productosPopulares.map(
	lambda x: (b_nombreProductos.value[x[0]], x[1])
)
productosPopulares.collect()
```

Donde usamos [[Collect - Spark|collect]] para ver los resultados