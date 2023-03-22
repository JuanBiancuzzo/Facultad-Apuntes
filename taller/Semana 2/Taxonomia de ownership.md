---
dia: 2023-03-22
materia: taller
capitulo: 2
---
### Definición
---
Se puede usar el sistema de [[Tipos de datos|tips]] para validar que [[Variable|algo]] sea mutable o compartido, pero no ambdas a la vez.

| Tipo     | [[Ownership]]         | Alias | Mutable |
| -------- | --------------------- | ----- | ------- |
| `T`      | Adueñado              |       | X       |
| `&T`     | Referencia compartida | X     |         |
| `&mut T` | Referencia mutable    |       | X        |

Donde `T` es un [[Generic]].