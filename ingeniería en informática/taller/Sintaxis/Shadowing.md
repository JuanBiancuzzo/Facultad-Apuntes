---
dia: 2023-04-01
tags:
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Sintaxis
---
# Definición
---
Es reutilizar el nombre de una [[Variable#En Rust|variable inmutable]] (o [[Variable#En Rust|variable mutable]]) , haciendo invalido el contenido del anterior. Un ejemplo de esto sería

``` rust
let x: i32 = 5;

let x: i32 = x + 1; 
```

No hay problema en usar la variable que se esta reutilizando en la definición de su valor.

Como aclaración, no es necesario que el [[Tipo de dato|tipo de dato]] se mantenga. Es decir que podría hacer lo siguiente

``` rust
let x: i32 = -5;

let x: u32 = 45;
```
