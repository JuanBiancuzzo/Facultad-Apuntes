---
dia: 2023-03-17
tags:
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Sintaxis
---
# Definición
---
Se crea una variable en la condición, en el caso de que exista, por ejemplo

``` rust
let number = Some(42);

if let Some(i) = number {
	println!("valor {}!", i);
}
```

Es super útil para conseguir un valor adentro de una [[Estrucutura|estructura]].