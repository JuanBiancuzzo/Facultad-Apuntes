---
dia: 2023-03-16
materia: orga
capitulo: 1
---
### Definición
---
Dado la siguiente [[Data frame - Pandas|tabla]]

|     | materia | nota |
| --- | ------- | ---- |
| 0   | 75.06   | 5    |
| 1   | 06.75   | 0    |
| 2   | 75.05   | 2     |

Se puede acceder a las notas de una tabla con 

``` python
# esta es la mejor forma
tabla.nota
# o de la siguiente forma
table["nota"]
```

También se puede obtener varias columnas como:

``` python
tabla[ ["materia", "nota"] ] # -> te devuelve en este caso la matriz entera
```

Podemos filtrar las filas con el siguiente:

``` python
tabla[ [True, False, True] ] # -> te devuelve las filas 1 y 3
```
es necesario que el array sea del largo de la tabla.
