---
dia: 2024-03-21
tags:
  - bdd/SQL
  - nota/facultad
---
### Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para eliminar un [[Registro SQL|registro]] de una [[Tabla SQL|tabla]]

#### Sintaxis
---
```SQL
DELETE FROM nombre_tabla WHERE condicion;
```

Hay que tener cuidado al eliminar un registro de una tabla, ya que actualiza todas los registros que coincidan con la condición de la [[Sentencia WHERE|sentencia WHERE]] y por defecto la falta de esta misma es aplicarla a todas

Si se quisiera eliminar toda la tabla se puede usar la [[Sentencia DROP TABLE|sentencia DROP TABLE|]]