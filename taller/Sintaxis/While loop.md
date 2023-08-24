---
dia: 2023-03-17
materia: taller
capitulo: 1
---
### Definición
---
El while puede repetir su bloque de código mientras se cumpla su condición

``` rust
let mut i = 0;

while i < 30 {
	println!("{}", i);
	i += 1;
}
```

O al igual que la [[Asignación condicional|asignación condicional]] se puede hacer

``` rust
while let Some(i) = opcional {
	// código
}
```