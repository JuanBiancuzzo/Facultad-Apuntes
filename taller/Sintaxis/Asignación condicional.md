---
dia: 2023-03-17
capitulo: 1
tags:
  - taller/Sintaxis
---
### Definición
---
Se crea una variable en la condición, en el caso de que exista, por ejemplo

``` rust
let number = Some(42);

if let Some(i) = number {
	println!("valor {}!", i);
}
```

Es super útil para conseguir un valor adentro de una [[Estrucutura|estructura]].