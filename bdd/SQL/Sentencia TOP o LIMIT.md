---
dia: 2024-03-22
capitulo: 2
tags:
  - bdd/SQL
  - nota
---
### Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para limitar a un número especifico de [[Registro SQL|registros]] que se devuelven. Se suele usar en conjunción con la [[Sentencia SELECT|sentencia SELECT]]

#### Sintaxis
---
Hay que notar que cada [[Motor de base de datos|motor de base de datos]] implementa esta cláusula de forma diferente

##### SQL Server / MS Access
---
```SQL
SELECT TOP numero/porcentaje nombre_columna1, nombre_columna2, ...
FROM nombre_tabla
WHERE condicion;
```

Donde el porcentaje se escribe como `numero PERCENT`

##### MySQL
---
```SQL
SELECT nombre_columna1, nombre_columna2, ...
FROM nombre_tabla
WHERE condicion
LIMIT numero;
```

##### Oracle 12
---
```SQL
SELECT nombre_columna1, nombre_columna2, ...
FROM nombre_tabla
ORDER BY nombre_columna3, nombre_columna4, ...
FETCH FIRST numero ROWS ONLY;
```

El [[Sentencia ORDER BY|ORDER BY]] nos va a permitir que se ordene el resultado antes de conseguir los primeros $n$ registros, esto no se limita a este motor de base de datos

##### Versiones viejas de Oracle
---
```SQL
SELECT nombre_columna1, nombre_columan2, ... 
FROM nombre_tabla
WHERE ROWNUM <= numero;
```

##### Versiones viejas de Oracle (con ORDER BY)
---
Usando [[Sentencia ORDER BY|ORDER BY]]

```SQL
SELECT * 
FROM (SELECT nombre_columna1, nombre_columan2, ... 
	  FROM nombre_tabla
	  ORDER BY nombre_columan3, nombre_columna4, ...)
WHERE ROWNUM <= numero;
```




