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
Es un loop infinito que solo se puede salir con un `break`, por ejemplo

``` rust
loop {
	count += 1;
	if count == 3 {
		println!("tres");
		continue;
	}
	println!("{}", count);

	if count == 5000 {
		println!("Listo");
		break;
	}
}
```