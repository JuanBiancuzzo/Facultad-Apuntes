---
dia: 2023-03-17
materia: taller
capitulo: 1
---
### Definición
---
Provee un pattern matching (similiar al switch de C), se ejecuta la primera rama que cumple la condición.

``` rust
let mi_carta: Carta = Carta::Oro(9);

match mi_carta {
	Carta::Oro(valor) => println!("La carta es Oro de valor {}", valor),
	_ => {}
}
```

También se puede hacer

``` rust
let punto: (i32, i32, i32) = (0, -2, 3);

match punto {
	(0, y, z) => println!("En el eje x. y:{}, z: {}", y, z),
	(_, 0, _) => println!("En punto esta sobre el eje y"),
	_ => {},
}
```