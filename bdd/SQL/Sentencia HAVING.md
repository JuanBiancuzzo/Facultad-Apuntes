---
dia: 2024-05-12
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa de forma similar a la [[Sentencia WHERE|sentencia WHERE]], pero si funciona con [[SQL Keywords#Funciones de agregación|funciones de agregación]]

#### Sintaxis
---
```SQL
SELECT nombre_columna(s)
FROM nombre_tabla
WHERE condicion
GROUP BY nombre_columna(s)
HAVING condicion;
```

#### Ejemplo
---
```SQL
SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM (
	Orders INNER JOIN Employees
	ON Orders.EmployeesID = Employees.EmployeeID
)
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 10;
```

Devuelve los apellidos de los empleados con una cantidad de ordenes mayor a 10.