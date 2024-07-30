---
dia: 2024-03-21
tags:
  - bdd/SQL
  - nota/facultad
---
### Definición
---
Este [[Operación lógica|operador lógico]] aplica la lógica de [[Operador lógico AND|operador lógico AND]]

#### En SQL
---
En [[Structured Query Language|SQL]] se usa en la cláusula [[Sentencia WHERE|WHERE]], y se usa para filtrar [[Registro SQL|registros]] con más de una condición, donde todas tiene que cumplir

```SQL
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE condicion1 AND condicion2 AND condicion3 ...;
```

##### Combinarlo con el operador OR
---
Se puede combinar el operador AND con el [[Operador OR#En SQL|operador OR]], donde  