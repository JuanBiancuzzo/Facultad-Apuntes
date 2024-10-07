---
dia: 2023-03-22
tags:
  - taller/Ownership
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
---
# Definición
---
Se puede usar el sistema de [[Tipo de dato|tips]] para validar que [[Variable inmutable|algo]] sea mutable o compartido, pero no ambas a la vez

| Tipo     | [[Ownership]]         | Alias | Mutable |
| -------- | --------------------- | ----- | ------- |
| `T`      | Adueñado              |       | X       |
| `&T`     | Referencia compartida | X     |         |
| `&mut T` | Referencia mutable    |       | X        |

Donde `T` es un [[Generic|generic]]