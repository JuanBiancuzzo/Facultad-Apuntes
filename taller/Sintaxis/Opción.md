---
dia: 2023-03-16
tags:
  - taller/Sintaxis
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
aliases:
  - Option
---
# Definición
---
Un elemento que puede contener algún valor o nada. $T$ es un [[Generic|generics]] que puede tomar cualquier [[Tipo de dato|tipo de dato]].

``` rust
enum Option<T> {
	Some(T),
	None,
}

fn dividir(num: f64, den: f64) -> Option<f64> {
	if den == 0.0 {
		None
	} else {
		Some(num / den)
	}
}
```