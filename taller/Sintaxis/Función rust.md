---
dia: 2023-03-16
materia: taller
capitulo: 1
---
### Definición
---
Las funciones, al igual que en c tienen que especificar el [[Tipo de dato rust|valor de retorno]] y tienen la siguiente sintaxis
```rust
fn sumar_uno(numero: i32) -> i32 {
	numero + 1
}

// como alternativa
fn sumar_uno(numero: i32) -> i32 {
	return numero + 1;
}

// o funcion que no devuelve nada
fn imprimir_numero(numero: i32) {
	println!("{}", numero);
}
```
