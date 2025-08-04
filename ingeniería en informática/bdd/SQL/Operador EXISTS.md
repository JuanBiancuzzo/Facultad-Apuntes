---
dia: 2024-05-12
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/bdd/SQL/Resumen.md]]"
---
# Definición
---
El operador `EXIST` se usa con la [[Sentencia WHERE|sentencia WHERE]] para poder testear si un [[Registro SQL|registro]] existe en una subquery

## Sintaxis
---
```SQL 
SELECT nombre_columna(s)
FROM nombre_tabla
WHERE EXISTS ( 
	SELECT nombre_columna 
	FROM nombre_tabla 
	WHERE condicion
);
```

## Ejemplo
---
```SQL 
SELECT SupplierName
FROM Suppliers
WHERE EXISTS ( 
	SELECT ProductName 
	FROM Products 
	WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20
);
```