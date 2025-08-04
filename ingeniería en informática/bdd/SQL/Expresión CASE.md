---
dia: 2024-05-12
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
Esta expresión recorre las condiciones y devuelve el valor de la primera condición que se verifique. Se puede pensar como una [[If else statement|sentencia if else]]

## Sintaxis
---
```SQL
SELECT nombre_columna,  
CASE  
    WHEN condicion1 THEN resultado1
    WHEN condicion2 THEN resultado2 
    WHEN condicion3 THEN resultado3 
    ELSE resultado_default
END AS alias  
FROM nombre_tabla;
```