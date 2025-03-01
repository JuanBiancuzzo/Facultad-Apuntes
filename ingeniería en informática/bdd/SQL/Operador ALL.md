---
dia: 2024-05-12
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
---
# Definición
---
El operador `ALL` se usa con la [[Sentencia WHERE|sentencia WHERE]] para comparar un valor con varios valores que se obtiene en una subquery, si todas las comparaciones devuelven true, toda la operación devuelve true

## Sintaxis
---
```SQL
SELECT nombre_columna(s)
FROM nombre_tabla
WHERE nombre_columna operador ALL (
	SELECT nombre_columna
	FROM nombre_tabla
	WHERE condicion
);
```

Donde el operador tiene que ser uno de los siguientes ![[Sentencia WHERE#Operadores]]
## Ejemplo
---
```SQL
SELECT ProductName  
FROM Products  
WHERE ProductID = ALL  
  (SELECT ProductID  
  FROM OrderDetails  
  WHERE Quantity = 10);
```
