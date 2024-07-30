---
dia: 2023-03-17
tags:
  - taller/Sintaxis
  - nota/facultad
---
### Definición
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