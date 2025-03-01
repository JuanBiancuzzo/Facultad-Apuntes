---
dia: 2024-03-21
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
---
# Definición
---
Es la representación de la falta de [[Información|información]]

## En SQL
---
En [[Structured Query Language|SQL]] si un campo tiene el valor `NULL` es que ese campo no tiene valor

Al [[Sentencia INSERT INTO|agregar una fila en una tabla]] pero no ingresarse un valor entonces se inserta `NULL` y se puede comprobar usando `IS NULL` o `IS NOT NULL`

```SQL
SELECT columna
FROM nombre_tabla
WHERE columna IS NULL;
```

## En C
---
En [[Lenguaje C|C]] `NULL` representa el estado invalido de un [[Puntero|puntero]] y como es un número, este es guardado con el valor `0`