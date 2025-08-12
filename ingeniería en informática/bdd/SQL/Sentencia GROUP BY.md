---
dia: 2024-04-22
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: SQL
    capitulo: 2
    materia: Base de datos
    carrera: Ingeniería en informática
---
# Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para agrupa filas que tengan el mismo valor en un subgrupo de columnas, y en general se usa con [[SQL Keywords#Funciones de agregación|funciones de agregación]] para obtener un valor según esa agrupación

## Sintaxis
---
```SQL
SELECT nombre_columna(s)
FROM nombre_tabla
WHERE condicion
GROUP BY sub_nombre_columna(s);
```