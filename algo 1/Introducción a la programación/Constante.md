---
dia: 2024-07-27
tags:
  - algo-1/Introducción-a-la-programación
  - nota
  - taller/Sintaxis
---
### Definición
---
Al igual que una [[Variable inmutable|variable inmutable]], las constantes no pueden modificarse, pero hay diferencias entre sí. Una constante es un valor que no cambia durante todo el [[Algoritmo|algoritmo]], este valor posee un identificador único

#### Representación en C
---
Se puede definir una constante como
```c
const int CONSTANTE = 45;
```

Notemos que ponemos el nombre en mayúsculas, lo cual es una convención, pero no es realmente necesario.

#### Representación en Rust
---
A diferencia de las variables inmutables, no se le puede aplicar el modificador de `mut` para hacerlas [[Variable mutable|mutables]]

Para declarar una constante se hace de la siguiente forma:
``` rust
const CONSTANTE: u16 = 45;
```
Donde el `u16` es el [[Tipo de dato|tipo de dato]]. Notemos que por convención se escriben las constantes en mayusculas. 

Para la constante es necesario aclarar el tipo de dato. También una propiedad que no lo tienen las [[Variable inmutable|variables inmutables]] y las [[Variable mutable|variables mutables]] es que estas pueden ser declaradas en cualquier [[Bloque de acción|scope]], incluso en el global.

Las constantes son validas por la duración del [[Programa|programa]], o como mínimo el scope en el que fueron declarados.

