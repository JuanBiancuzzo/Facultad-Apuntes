---
dia: 2023-05-01
tags:
  - ingeniería-en-informática/orga/Spark
  - nota/facultad
---
# Definición
---
Para esto el usuario especifica una función **map** que procesa un par clave-valor para generar un conjunto intermedio de pares clave-valor.

Esta [[Transformación - Spark|transforma]] nuestros datos, y tiene que ser aplicada a cada dato de nuestro set. Por eso lo recomendable es que sea paralelizable y de esa forma poder distribuirse entre las distintas máquinas de un cluster.

``` python
# Transforma todos los elementos en su valor multiplicado por 2
rdd_par = rdd.map(lambda x: x * 2)

# Transforma todos los elementos en una tupla de el elemento, este elevado al cuadrado y por ultiplo el elemento mod 3
rdd_tupla = rdd.map(lambda x: (x, x**2, x % 3))
```
