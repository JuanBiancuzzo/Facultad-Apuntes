---
dia: 2023-03-15
materia: taller
capitulo: 1
---
### Definición
---
Son constantes por default, no son [[Variable mutable|mutable]]. 

También se puede reutilizar el nombre de la variable, y se descarta el valor anterior, esto se llama shadow.

``` rust
let valor: i32 = 43;
let valor: i32 = 34; // se llama shadow

let mut valor_cambia: i32 = 32; // esto permite que se cambie el valor
valor_cambia = 3;
```
