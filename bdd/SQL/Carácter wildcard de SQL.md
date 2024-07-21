---
dia: 2024-03-24
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
Esas se usan para sustituir un o más caracteres en un string, se usan en el [[Operador LIKE|operador LIKE]] para determinar un patrón

| Símbolo | Descripción                                            |
| ------- | ------------------------------------------------------ |
| `%`     | Representa 0 o más caracteres                          |
| `_`     | Representa un solo carácter                            |
| `[]`    | Representa un único carácter dentro de unos corchetes* |
| `^`     | Representa cualquier carácter no entre corchetes*      |
| `-`     | Representa un único carácter dentro de un rango*       |
| `{}`    | Representa cualquier carácter de escape** (como enter) |
\* No se puede usar en [[PostgreSQL|PostgreSQL]] y en [[MySQL|MySQL]]
\*\* Solo se puede usar en [[Base de datos de Oracle|base de datos de Oracle]]

#### Ejemplos
---
Devuelve todos los clientes que terminen en es
```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE '%es';
```

Devuelve todas las ciudades que empiece con cualquier carácter, seguidos por "ondon"
```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE '_ondon';
```

Devuelve todos los clientes que empiecen con "b", "s" o "p"
```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE '[bsp]%';
```

Devuelve todos los clientes que empiecen con un carácter entre "a" y "f"
```SQL
SELECt * FROM Clientes
WHERE ciudad LIKE '[a-f]%';
```

