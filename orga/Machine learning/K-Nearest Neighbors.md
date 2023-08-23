---
dia: 2023-08-10
materia: orga
capitulo: 9
---
### Definición
---
Teniendo $m$ puntos en $n$ dimensiones, podemos usar KNN para [[Problema de clasificación|clasificar]] o para [[Problema de regresión|regresión]]. Este modelo tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] $k$ el cual indica cuantos vecinos alrededor, del nuevo valor a clasificar, vamos a utilizar.

Agarrando los $k$ vecinos más cercanos, en caso de ser un problema de clasificación, tomamos la etiqueta que más se repita, y si es un problema de regresión tomaremos un promedio de los valores.

Notemos que como calcular la distancia también es un hiper-parámetro.