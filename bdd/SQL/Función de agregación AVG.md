---
dia: 2024-03-24
capitulo: 2
tags:
  - bdd/SQL
  - nota
---
### Definición
---
Esta [[SQL Keywords#Funciones de agregación|función de agregación]] devuelve el promedio de filas que se seleccionen

#### Sintaxis
---
```SQL 
SELECT AVG(nombre_columna)
FROM nombre_tabla
WHERE condicion;
```

Los valor que sea [[NULL|NULL]] se ignoran

#### WHERE
---
Se puede usar esto como parte de la condición de la [[Sentencia WHERE|sentencia WHERE]]

```SQL 
SELECT *
FROM Productos
WHERE precio > (SELECT AVG(precio) FROM Productos);
```

#### Alias
---
Si se le quiere dar un nombre más descriptivo al resultado se puede usar un [[Alias#En SQL|alias]] 

```SQL
SELECT AVG (nombre_columna) AS [Numero de registros]
FROM Productos;
```

#### Group by
---
Cuando se una `AVG` con la [[Sentencia GROUP BY|sentencia GROUP BY]] el resultado es el promedio de filas de cada categoría

```SQL
SELECT CategoriaID, AVG (nombre_columna) AS [Numero de registros]
FROM Productos
GROUP BY CategoriaID;
```

