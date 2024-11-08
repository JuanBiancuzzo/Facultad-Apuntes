---
dia: 2023-03-17
tags:
  - ingeniería-en-informática/taller/Sintaxis
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
---
# Definición
---
Permite a las [[Función|funciones]] utilizar cualquier [[Tipo de dato|tipo de dato]], y se puede usar en conjunto de los [[Traits]] para exigir que puedan hacer ciertas cosas, por ejemplo

``` rust
struct Celsius(i32);

impl std::cmp::PartialEq for Celsius {
	fn eq(&self, other: &Self) -> bool {
		return self.0 == other.0;
	}
	
	fn ne(&self, other: &Self) -> bool {
		return !(self.eq(other));
	}
}
```

Donde `std::cmp::PartialEq` es un [[Traits|trait]] para comparar dos objetos del mismo tipo.

También se usa para [[Función|funciones]] de la siguiente forma
``` rust
fn comparar<T: std::cmp::PartialEq>(primero: T, segundo: T) {
	if primero == segundo {
		println!("Son iguales");
	} else {
		println!("Son distintos");
	}
}

let primera_temperatura: Celsius = Celsius(45);
let segunda_temperatura: Celsius = Celsius(34);

// imprime que son distintos porque Celsius implementa ese trait
comparar(primera_temperatura, segunda_temperatura); 
```
