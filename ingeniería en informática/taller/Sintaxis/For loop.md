---
dia: 2023-03-17
tags:
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/taller/Sintaxis/Resumen.md]]"
---
# Definición
---
For permite iterar sobre un [[Iterador]]

``` rust
for n in 1..101 {
	if n % 3 == 0 {
		println!("multiplo de 3");
	} else if n % 4 == 0 {
		println!("multiplo de 4, pero no de 3");
	} else {
		println!("{}", n);
	}
}
```

Los vectores también pueden devolver un [[Iterador]], por ejemplo

``` rust
let nombres = vec!["Juan", "Pedro", "Felipe"];

for nombre in nombres.iter() {
	println!("{}", nombre);
}
```