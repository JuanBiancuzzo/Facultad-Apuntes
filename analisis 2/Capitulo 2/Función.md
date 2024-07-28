---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-2
  - nota
  - algo-1/Lenguaje-C
  - taller/Sintaxis
---
### Definición
---
Escribimos estas funciones como $f: A \to B$ donde los conjuntos $A$ (el dominio) y $B$ (el codominio) son no vacíos

#### Expresión en C
---
Se puede representar un [[Algoritmo|algoritmo]]
```c
tipoDeDato nombreAlgoritmo(tipoDeDato variable1, ...) {
	accion1;
	accion2;
	// ...
}
```

#### Expresión en Rust
---
Las funciones, al igual que en c tienen que especificar el [[Tipo de dato|valor de retorno]] y tienen la siguiente sintaxis

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

#### Expresión matemática
---
Esta función, la podemos pensar, como que establece una relación entre [[Espacio vectorial|vector]] de $A$ con los vectores de $B$. Tal que, $a \in A$ tiene un (y solo uno) $b \in B$, y esto se escribe como $f(a) = b$

#### Operaciones
---
* [[analisis 2/Capitulo 2/Suma entre funciones.md|Suma entre funciones]] ![[Suma entre funciones#^7715e3]]
* [[analisis 2/Capitulo 2/Producto entre funciones.md|Producto entre funciones]] ![[Producto entre funciones#^ff1a85]]
* [[analisis 2/Capitulo 2/Cociente entre funciones.md|Cociente entre funciones]] ![[Cociente entre funciones#^b3bde8]]

