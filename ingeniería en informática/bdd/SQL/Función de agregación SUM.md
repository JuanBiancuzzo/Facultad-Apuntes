---
dia: 2024-03-24
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
  - nota/facultad
  - nota/investigacion
---
# Definición
---
Esta [[SQL Keywords#Funciones de agregación|función de agregación]] devuelve la suma de filas que se seleccionen

## Sintaxis
---
```SQL 
SELECT SUM(nombre_columna)
FROM nombre_tabla
WHERE condicion;
```

Los valor que sea [[NULL|NULL]] se ignoran

## Expresión
---
Se puede agregar una expresión matemática de la siguiente forma

```SQL 
SELECT SUM(cantidad * 10)
FROM detallesDeLaOrden;
```

O incluso hacerlo con otras columnas

```SQL 
SELECT SUM(cantidad * precio)
FROM detallesDeLaOrden;
```

## Alias
---
Si se le quiere dar un nombre más descriptivo al resultado se puede usar un [[Alias#En SQL|alias]] 

```SQL
SELECT SUM (nombre_columna) AS [Numero de registros]
FROM Productos;
```

## Group by
---
Cuando se una `SUM` con la [[Sentencia GROUP BY|sentencia GROUP BY]] el resultado es la suma de filas de cada categoría

```SQL
SELECT CategoriaID, SUM (nombre_columna) AS [Numero de registros]
FROM Productos
GROUP BY CategoriaID;
```

