---
dia: 2023-03-16
tags:
  - ingeniería-en-informática/orga/Pandas
  - nota/facultad
  - lenguajes-de-programación/Lenguaje-Python/Pandas
  - lenguajes-de-programación/Lenguaje-Python/Spark
  - ingeniería-en-informática/orga/Spark
---
# Definición
---
Podemos guardar en un [[Archivo|archivo]] mediante las siguientes técnicas

## Pandas
---
Usando [[Pandas|Pandas]], podemos leer un [[Coma Separative Value (CSV)|archivos.csv|]] como

``` python
import pandas as pd
datos = pd.read_csv("nombre_archivo.csv")
```

los datos se guardan y son de tipo [[Data frame|data frame]]

## Spark
---
Guarda un [[Resilent distributed dataset|RDD]] a disco en un archivo de texto.

``` python
rdd = sc.parallelize(range(1, 100000))
rdd.saveAsTextFile("numeros.txt")

# y obtenemos normalmente de un archivo
numeros = sc.textFile("numeros.txt")
```