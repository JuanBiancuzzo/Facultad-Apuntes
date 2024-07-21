---
dia: 2024-03-25
capitulo: 2
tags:
  - bdd/SQL
  - nota
---
### Definición
---
El operador `IN` se usa con la [[Sentencia WHERE|sentencia WHERE]] para permitir especificar multiples valores, donde simplifica el uso del [[Operador OR|operador OR]]

#### Sintaxis
---
```SQL
SELECT nombre(s)_columna(s)
FROM nombre_tabla
WHERE nombre_columna IN (valor1, valor2, ...);
```

Equivalente con el operador `OR`
```SQL
SELECT nombre(s)_columna(s)
FROM nombre_tabla
WHERE nombre_columna == valor1 OR nombre_columan == valor2 OR ...;
```

#### Combinación con SELECT
---
Se puede usar en conjunción con la [[Sentencia SELECT|sentencia SELECT]], donde podemos buscar si un elemento esta en otra selección

```SQL
SELECT * FROM Clientes
WHERE clienteID in (SELECT clienteID FROM Pedidos);
```