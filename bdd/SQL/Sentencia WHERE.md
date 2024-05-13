---
dia: 2024-03-21
materia: bdd
capitulo: 2
---
### Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para filtrar [[Registro SQL|registro SQL]] a partir de una condición

#### Sintaxis
---
```SQL
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE condicion;
```

Donde `columna1, columna2, ...` son los nombres de las columnas de la [[Tabla SQL|tabla]] uno quiere seleccionar, mientras que `nombre_tabla` es el nombre de la misma tabla, la condición tiene como operaciones las que mencionaremos después

##### Nota
---
Esta cláusula no se usa únicamente con la [[Sentencia SELECT|sentencia SELECT]], se puede usar con [[Sentencia UPDATE|UPDATE]], [[Sentencia DELETE|DELETE]], etc.

#### Operadores
---
Los operadores que se pueden usar en esta cláusula son

| Operador    | Descripción                | Negación      |
| ----------- | -------------------------- | ------------- |
| `=`         | Igual                      | `!=`          |
| `>`         | Mayor                      | `!>` / `<=`   |
| `<`         | Menor                      | `!<` / `>=`   |
| `>=`        | Mayor igual                | `<`           |
| `<=`        | Menor igual                | `>`           |
| `<>` / `!=` | Distintos                  | `=`           |
| `BETWEEN`   | Entre un rango             | -             |
| `LIKE`      | Buscar en un patrón        | -             |
| `IN`        | Especificar varios valores | -             |
| `AND`       | Operador AND               | -             |
| `IS NULL`   | Si el valor es NULL        | `IS NOT NULL` |
