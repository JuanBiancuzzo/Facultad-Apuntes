---
dia: 2024-03-28
materia: bdd
capitulo: 2
---
### Definición
---
El operador `IN` se usa con la [[Sentencia WHERE|sentencia WHERE]] para permitir especificar un rango de valores que debe cumplir la columna 

#### Sintaxis
---
```SQL
SELECT nombre_columna(s)
FROM nombre_tabla
WHERE nombre_columna BETWEEN valor1 AND valor2;
```

En caso de que sea un texto, se usa el orden alfabético como forma de comparar. Para el caso de fechas se puede especificar los valores con `#mes/dia/año#`
