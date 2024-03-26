---
dia: 2023-03-17
materia: taller
capitulo: 1
---
### Definición
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