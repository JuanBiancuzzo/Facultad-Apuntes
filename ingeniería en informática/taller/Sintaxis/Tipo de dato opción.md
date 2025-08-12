---
dia: 2023-03-16
tags:
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - nota/facultad
  - nota/investigacion
aliases:
  - Option type
vinculoFacultad:
  - tema: Sintaxis
    capitulo: 1
    materia: Taller de programación 1
    carrera: Ingeniería en informática
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