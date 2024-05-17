---
dia: 2024-03-21
materia: bdd
capitulo: 2
---
### Definición
---
Es la representación de la falta de [[Información|información]]

#### En SQL
---
En [[Structured Query Language|SQL]] si un campo tiene el valor `NULL` es que ese campo no tiene valor

Al [[Sentencia INSERT INTO|agregar una fila en una tabla]] pero no ingresarse un valor entonces se inserta `NULL` y se puede comprobar usando `IS NULL` o `IS NOT NULL`

```SQL
SELECT columna
FROM nombre_tabla
WHERE columna IS NULL;
```