---
dia: 2023-04-01
tags:
  - taller/Sintaxis
  - nota/facultad
---
# Definición
---
Es reutilizar el nombre de una [[Variable inmutable]] (o [[Variable mutable]]) , haciendo invalido el contendio del anterior. Un ejemplo de esto sería
``` rust
let x: i32 = 5;

let x: i32 = x + 1; 
```

Donde el `i32` es el [[Tipo de dato|tipo de dato]].

No hay problema en usar la variable que se esta reutilizando en la definición de su valor.

Como aclaración, no es necesario que el tipo de dato se mantenga. Es decir que podría hacer lo siguiente
``` rust
let x: i32 = -5;

let x: u32 = 45;
```
