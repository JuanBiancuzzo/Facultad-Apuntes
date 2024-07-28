---
dia: 2023-03-22
tags:
  - taller/Ownership
  - nota
---
### Definición
---
Es un tramo, un área, del programa para el cual esa referencia se puede usar de manera segura.

Los lifetimes en signaturas de funciones le permiten a Rust evaluar las relaciones entre las referencias que le pasas a la [[Función|función]] y aquellas que la función retorna, y asegurarse que se estan usando de manera segura.

Vamos a usarlo para una [[Estrucutura]], donde uno de sus componente tiene una referencia 
``` rust
struct S<'a> {
	r: &'a i32
}
```

Donde cada valor que se crea de tipo `S` obtiene un lifetime nuevo `'a`, el cual se restringe segun como se utilize ese valor.

Veamos un ejemplo: 
``` rust
struct Extremos<'elm> {
	mayor: &'elm i32,
	menor: &'elm i32,
}

fn encontrar_extremos<'s>(slice: &'s [i32]) -> Extrema<'s> {
	let mut mayor = &slice[0];
	let mut menor = &slice[0];

	for i in 1..slice.len() {
		if slice[i] < *menor { menor = &slice[i]; }
		if slice[i] > *mayor { mayor = &slice[i]; }
	}

	Extrema {mayor, menor }
}
```