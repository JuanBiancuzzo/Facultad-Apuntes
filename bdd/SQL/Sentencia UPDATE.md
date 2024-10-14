---
dia: 2024-03-21
tags:
  - bdd/SQL
  - nota/facultad
  - lenguajes-de-programación/lenguaje-SQL
---
# Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para modificar un [[Registro SQL|registro]] de una [[Tabla SQL|tabla]]

# Sintaxis
---
```SQL
UPDATE nombre_table
SET columa1 = valor1, columan2 = valor2, ...
WHERE condicion;
```

Hay que tener cuidado al actualizar un registro de una tabla, ya que actualiza todas los registros que coincidan con la condición de la [[Sentencia WHERE|sentencia WHERE]] y por defecto la falta de esta misma es aplicarla a todas