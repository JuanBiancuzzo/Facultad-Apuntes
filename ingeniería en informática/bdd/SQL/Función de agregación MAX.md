---
dia: 2024-03-22
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
---
# Definición
---
Esta [[SQL Keywords#Funciones de agregación|función de agregación]] devuelve el valor más grande de una columna seleccionada

## Sintaxis
---
```SQL
SELECT MAX (nombre_columna)
FROM nombre_tabla
WHERE condicion;
```

En caso de un valor sea [[NULL|NULL]] se ignora

## Alias
---
Cuando se usa `MAX`, la columna que se devuelve no tiene un nombre descriptivo por lo que es útil usar un [[Alias#En SQL|alias]] para cambiarle el nombre 

```SQL
SELECT MAX (Precio) AS PrecioMasGrande
FROM Productos;
```

## Group by
---
Cuando se una `MAX` con la [[Sentencia GROUP BY|sentencia GROUP BY]] el resultado es el valor más grande de cada categoría

```SQL
SELECT MAX(Precio) AS PrecioMasGrande, CategoriaID
FROM Productos
GROUP BY CategoriaID;
```