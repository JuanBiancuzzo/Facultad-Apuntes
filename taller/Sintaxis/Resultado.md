---
dia: 2023-03-16
capitulo: 1
tags:
  - taller/Sintaxis
  - nota
---
### Definición
---
Representar el estado que puede tener un error. $T$ es un [[Generic|generics]] que puede tomar cualquier [[Tipo de dato rust|tipo de dato]]. $E$ es un [[Generic|generics]] que puede tomar cualquier [[Tipo de dato rust|tipo de dato]] que representa un error.

``` rust
enum Result<T, E> {
	Ok(T),
	Err(E),
}

enum ErroresMatematicos {
	ErrorDivisionPorCero,
}

fn dividir(num: f64, den: f64) -> Result<f64, ErroresMatematicos> {
	if den == 0.0 {
		Err(ErroresMatematicos::ErrorDivisionPorCero)
	} else {
		Ok(num / den)
	}
}
```