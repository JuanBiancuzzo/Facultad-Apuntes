---
dia: 2024-03-29
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


## En SQL
---
En [[Structured Query Language|SQL]] los alias son usados para darle a las [[Tabla SQL|tablas]] o columnas de las tablas un nombre temporal ya que solo duran lo que dura la query. En general se usan para hacer nombres más legible.

### Sintaxis
---
```SQL
SELECT nombre_columna AS alias
FROM nombre_tabla;
```

Hay que notar que el `AS` es opcional por lo que se puede escribir de la siguiente forma y ser una query valida
```SQL
SELECT nombre_columna alias
FROM nombre_tabla;
```

#### Multiples columnas
---
```SQL
SELECT nombre_columna AS alias, nombre_columna2 AS alias2, ...
FROM nombre_tabla;
```

#### Alias con espacios
---
```SQL
SELECT nombre_columna AS [nombre con espacios]
FROM nombre_tabla;
```

Alternativamente 
```SQL
SELECT nombre_columna AS "nombre con espacios"
FROM nombre_tabla;
```
