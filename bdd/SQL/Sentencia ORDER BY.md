---
dia: 2024-03-21
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
Esta [[Sentencia de SQL|sentencia]] se usa para ordenar los [[Registro SQL|registros]] de forma ascendente o descendente. Como se pueden guardar números y strings, los string los ordena de forma alfabética

#### Sintaxis
---
```SQL 
SELECT columna1, columna2, ...
FROM nombre_tabla
ORDER BY columna_orden1, columna_orden2, ... ASC|DESC;
```

Las columnas de ordenamiento se prioriza la primera y se disminuye la prioridad de las siguientes columnas. Es decir, si por la `columan_orden1` tienen el mismo valor, se usa `columan_orden2` para determinar el orden 

El caso default es de forma ascendente, mientras que para que si se necesita que sea descendente te agrega la keyword `DESC` 

También se puede especificar por columna a ordenar la dirección, de la siguiente forma

```SQL 
SELECT columna1, columna2, ...
FROM nombre_tabla
ORDER BY columna_orden1 ASC|DESC, columna_orden2 ASC|DESC, ... ASC|DESC;
```
