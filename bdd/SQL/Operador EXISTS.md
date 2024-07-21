---
dia: 2024-05-12
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
El operador `EXIST` se usa con la [[Sentencia WHERE|sentencia WHERE]] para poder testear si un [[Registro SQL|registro]] existe en una subquery

#### Sintaxis
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

#### Ejemplo
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