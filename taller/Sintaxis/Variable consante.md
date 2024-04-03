---
dia: 2023-04-01
materia: taller
capitulo: 1
---
### Definición
---
Al igual que una [[Variable inmutable]], las constantes no pueden modificarse, pero hay diferencias entre sí. 

A diferencia de las variables inmutables, no se le puede aplicar el modificador de `mut` para hacerlas [[Variable mutable|mutables]].

Para declarar una constante se hace de la siguiente forma:
``` rust
const CONSTANTE: u16 = 45;
```
Donde el `u16` es el [[Tipo de dato rust|tipo de dato]]. Notemos que por convención se escriben las constantes en mayusculas. 

Para la constante es necesario aclarar el tipo de dato. También una propiedad que no lo tienen las [[Variable inmutable|variables inmutables]] y las [[Variable mutable|variables mutables]] es que estas pueden ser declaradas en cualquier [[Scope]], incluso en el global.

Las constantes son validas por la duración del programa, o como minimo el scope en el que fueron declarados.
