---
dia: 2024-05-12
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
  - nota/facultad
  - nota/investigacion
---
# Definición
---
El operador `ANY` se usa con la [[Sentencia WHERE|sentencia WHERE]] para comparar un valor con varios valores que se obtiene en una subquery, si alguna de esas comparaciones devuelve true, toda la operación devuelve true

## Sintaxis
---
```SQL
SELECT nombre_columna(s)
FROM nombre_tabla
WHERE nombre_columna operador ANY (
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
WHERE ProductID = ANY (
	SELECT ProductID  
	FROM OrderDetails  
	WHERE Quantity = 10
);
```