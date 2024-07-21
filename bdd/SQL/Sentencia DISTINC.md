---
dia: 2024-03-20
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para seleccionar información única, es decir, que no se repita la información, de una [[Base de datos|base de datos]] 

En una [[Tabla SQL|tabla]], las columnas en general tienen valores duplicados y a veces se necesita obtener solo los valores distintos 

#### Sintaxis
---
```SQL
SELECT DISTINCT columna1, columna2, ...
FROM nombre_tabla;
```

Donde `columna1, columna2, ...` son los nombres de las columnas de la [[Tabla SQL|tabla]] uno quiere seleccionar, mientras que `nombre_tabla` es el nombre de la misma tabla

Si se quiere seleccionar todas las columnas de una tabla se puede usar 
```SQL
SELECT DISTINCT * FROM nombre_tabla;
```

#### Contar distintos
---
Existe una función `COUNT`, que devuelve el numero de los valores seleccionados, por lo que al usarlo en conjunto con `DISTINCT` devolvería la cantidad de valores distintos

```SQL
SELECT COUNT (DISTINCT columna) FROM nombre_tabla;
```

También para situaciones donde esto no sea posible se puede hacer
```SQL
SELECT COUNT (*) AS alias_nombre_tabla
FROM (SELECT DISTINCT columna FROM nombre_tabla);
```

