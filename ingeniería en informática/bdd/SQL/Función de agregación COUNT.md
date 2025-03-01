---
dia: 2024-03-22
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
---
# Definición
---
Esta [[SQL Keywords#Funciones de agregación|función de agregación]] devuelve el número de filas que se seleccionen

## Sintaxis
---
```SQL
SELECT COUNT (nombre_columna)
FROM nombre_tabla
WHERE condicion;
```

Los valor que sea [[NULL|NULL]] se ignora en el caso de que se especifique el nombre de la columna. Si se selecciona toda `(*)` se consideran los valores `NULL`

## Valores únicos
---
Si se quiere contar los casos únicos se puede usar la [[Sentencia DISTINC|sentencia DISTINC]] 

```SQL
SELECT COUNT (DISTINCT nombre_columna)
FROM nombre_tabla
WHERE condicion;
```

## Alias
---
Si se le quiere dar un nombre más descriptivo al resultado se puede usar un [[Alias#En SQL|alias]] 

```SQL
SELECT COUNT (*) AS [Numero de registros]
FROM Productos;
```

## Group by
---
Cuando se una `COUNT` con la [[Sentencia GROUP BY|sentencia GROUP BY]] el resultado es la cantidad de filas de cada categoría

```SQL
SELECT COUNT (*) AS [Numero de registros], CategoriaID
FROM Productos
GROUP BY CategoriaID;
```