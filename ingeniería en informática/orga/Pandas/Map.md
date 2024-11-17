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
Es una [[Función|función]] general para iterar y editar cada elemento

* Planteando con un [[Programación oientada a objetos (OOP) (POO)|paradigma de objetos]], se puede implementar usando el [[Patrón iterador|patrón Iterador]]
* En un [[Programación funcional|paradigma funcional]] se puede hacer por medio de [[Recursividad|recursividad]]

## En Pandas
---
``` python
Series.map(arg, na_action = None)
```

Dado una [[Series|series]] `serie` podemos modificarlo con la función `map(funcion)`. Es el equivalente a [[Apply|apply]]. Por ejemplo

``` python
def mapeo(valor):
	return valor + 1

serie.map(mapeo)

# alternativamente podemos usar una funcion lambda
serie.map(lambda valor: valor + 1)
```

## En Spark
---
Para esto el usuario especifica una función map que procesa un par clave-valor para generar un conjunto intermedio de pares clave-valor.

Esta [[ingeniería en informática/orga/Spark/Transformación|transforma]] nuestros datos, y tiene que ser aplicada a cada dato de nuestro set. Por eso lo recomendable es que sea parallelisable y de esa forma poder distribuirse entre las distintas máquinas de un [[Cluster|cluster]]

``` python
# Transforma todos los elementos en su valor multiplicado por 2
rdd_par = rdd.map(lambda x: x * 2)

# Transforma todos los elementos en una tupla de el elemento, este elevado al cuadrado y por ultiplo el elemento mod 3
rdd_tupla = rdd.map(lambda x: (x, x**2, x % 3))
```
