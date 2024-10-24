---
dia: 2024-04-12
tags:
  - bdd/SQL
  - nota/facultad
  - lenguajes-de-programación/lenguaje-SQL
---
# Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para combinar filas de dos o más [[Tabla SQL|tablas]] basado en la relación entre las columnas de ambas

## Uniones
---
Tenemos 4 formas de como unirlos

### Inner
---
`(INNER) JOIN` devuelve los [[Registro SQL|registros]] que tienen el mismo valor en ambas [[Tabla SQL|tablas]]

![[Operador AND#^c09f24]]


```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
INNER JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna;
```

Donde `JOIN` y `INNER JOIN` devuelven lo mismo.

### Left
---
`LEFT (OUTER) JOIN` devuelve todos los registros de la tabla izquierda y los registros que tengan el mismo valor de la tabla derecha

![[Unión izquierda de conjuntos#^a436b3]]

```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
LEFT JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna;
```

En caso de que falten datos, se agrega [[NULL|NULL]]

### Right
---
`RIGHT (OUTER) JOIN` devuelve todos los registros de la tabla derecha y los registros que tengan el mismo valor de la tabla izquierda

![[Unión derecha de conjuntos#^1974bd]]

```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
RIGHT JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna;
```

En caso de que falten datos, se agrega [[NULL|NULL]]

### Full
---
`FULL (OUTER) JOIN` devuelve todos los registros de la tabla izquierda y derecha

![[Operador OR#^fccd72]]

```SQL
SELECT nombre_columna(s)
FROM nombre_tabla_1
FULL OUTER JOIN nombre_tabla_2
ON nombre_tabla_1.nombre_columan = nombre_tabla_2.nombre_columna
WHERE condicion;
```

En caso de que falten datos, se agrega [[NULL|NULL]].

