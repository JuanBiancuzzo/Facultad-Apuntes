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