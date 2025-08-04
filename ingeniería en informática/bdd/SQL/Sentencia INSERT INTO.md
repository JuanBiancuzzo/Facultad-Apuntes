---
dia: 2024-03-21
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
Esta [[Sentencia de SQL|sentencia]] se usa para agregar un nuevo [[Registro SQL|registro]] en una [[Tabla SQL|tabla]]

## Sintaxis
---
Existen dos formas de usar esta sentencia
1. Especificar las columnas y los valores a insertar

```SQL
INSERT INTO nombre_tabla (columna1, columna2, columna3, ...)
VALUES (valor1, valor2, valor3, ...);
```

2. Si no se especifica las columnas, se asume el orden de las columnas que tiene la [[Tabla SQL|tabla]]

```SQL
INSERT INTO nombre_tabla
VALUES (valor1, valor2, valor3, ...);
```

## Notas
---
* En el caso que no se agregue valores para todas las columnas se inserta [[NULL|NULL]]
* Se puede insertar varias filas de la siguiente forma 
```SQL
INSERT INTO nombre_tabla (columna1, columna2, columna3, ...)
VALUES (valor11, valor12, valor13, ...)
	   (valor21, valor22, valor23, ...)
	   (valor31, valor32, valor33, ...);
```