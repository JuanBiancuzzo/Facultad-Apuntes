---
dia: 2024-03-24
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
El operador `LIKE` se usa con la [[Sentencia WHERE|sentencia WHERE]] para especificar un patrón que debe cumplir la columna

Existen dos wildcards que se usan en conjunción con este operador
* El signo `%` representa cero, uno o muchos caracteres
* El signo `_` representa un único carácter

Notemos que hay otras [[Carácter wildcard de SQL|wildcards]]

#### Sintaxis
---
```SQL
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE columnaN LIKE patron;
```

#### Wildcard _ 
---
Puede representar un único carácter, entonces por lo que si queremos encontrar todas las ciudades que empiezan con L, y su tercera y cuarta letra son nd, con un largo de 6 letras, podríamos hacer

```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE 'L_nd__';
```

#### Wildcard %
---
Puede representar un número $n$ de caracteres, entonces podemos hacer cosas como encontrar todos aquellas ciudades que tengan una L en el nombre

```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE '%L%';
```

O que empiecen con L
```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE 'L%';
```

O que terminen con es
```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE '%es';
```