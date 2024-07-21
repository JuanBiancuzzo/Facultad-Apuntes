---
dia: 2024-05-12
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
Esta expresión recorre las condiciones y devuelve el valor de la primera condición que se verifique. Se puede pensar como una [[Sentencia if-else|sentencia if-then-else]]

#### Sintaxis
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