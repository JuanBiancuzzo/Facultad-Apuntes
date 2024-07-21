---
dia: 2024-03-22
capitulo: 2
tags:
  - bdd/SQL
  - nota
---
### Definición
---
Esta [[SQL Keywords#Funciones de agregación|función de agregación]] devuelve el valor más chico de una columna seleccionada

#### Sintaxis
---
```SQL
SELECT MIN (nombre_columna)
FROM nombre_tabla
WHERE condicion;
```

En caso de un valor sea [[NULL|NULL]] se ignora

#### Alias
---
Cuando se usa `MIN`, la columna que se devuelve no tiene un nombre descriptivo por lo que es útil usar un [[Alias#En SQL|alias]] para cambiarle el nombre 

```SQL
SELECT MIN (Precio) AS PrecioMasChico
FROM Productos;
```

#### Group by
---
Cuando se una `MIN` con la [[Sentencia GROUP BY|sentencia GROUP BY]] el resultado es el valor más chico de cada categoría

```SQL
SELECT MIN(Precio) AS PrecioMasChico, CategoriaID
FROM Productos
GROUP BY CategoriaID;
```