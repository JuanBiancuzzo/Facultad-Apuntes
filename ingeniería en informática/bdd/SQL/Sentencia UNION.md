---
dia: 2024-04-22
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
  - nota/facultad
  - nota/investigacion
---
# Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para combinar dos o más resultados de una sentencia [[Sentencia SELECT|SELECT]]
* Todos estos resultados de SELECT tiene que tener la misma cantidad de columnas
* Las columnas tienen que tener tipos de datos similares
* Las columnas tienen que tener el mismo orden

## Sintaxis
---
```SQL
SELECT nombre_columna(s) FROM tabla1
UNION
SELECT nombre_columna(s) FROM tabla2
WHERE condicion;
```

Por defecto la unión une valores distintos. Para obtener los duplicados se usa `UNION ALL`
```SQL
SELECT nombre_columna(s) FROM tabla1
UNION ALL
SELECT nombre_columna(s) FROM tabla2
WHERE condicion;
```

El resultado de esta query tiene el nombre de las columnas del primer SELECT