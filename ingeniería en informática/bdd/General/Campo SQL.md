---
dia: 2024-05-10
tags:
  - carrera/ingeniería-en-informática/bdd/General
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: General
    capitulo: 1
    materia: Base de datos
    carrera: Ingeniería en informática
---
# Definición
---
Corresponde al nombre de la columna. Debe ser único y además de tener un tipo de dato asociado

## Ejemplo
---
Teniendo la tabla

| index | nombre | num_compras |
| ----- | ------ | ----------- |
| ...   | ...    | ...         |
| 34    | Juan   | 0           |
| 35    | Lucia  | 3           |
| 36    | Sofia  | 4           |
| ...   | ...    | ...         |

Y una posible campo sería

| nombre |
| ------ |
| ...    |
| Juan   |
| Lucia  |
| Sofia  |
| ...    |
