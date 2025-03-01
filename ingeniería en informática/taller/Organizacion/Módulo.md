---
dia: 2023-03-17
tags:
  - carrera/ingeniería-en-informática/taller/Organizacion
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Organizacion
---
# Definición
---

## Representación en Rust
---
Para dividir funcionalidad (como namespaces en `c++`) en este caso veamos cuando es en el mismo archivo podemos usar `mod` de la siguiente forma
``` rust
mod soludos {
	pub fn hola() {
		println!("Hola tanto tiempo");
	}
}

fn main() {
	saludos::hola();
}
```

por default, todo lo que esta dentro de un modulo es privado, y podemos hacerlo publico con `pub`

En el caso que este en otro archivo
``` rust
// saludos.rs
mod soludos {
	pub fn hola() {
		println!("Hola tanto tiempo");
	}
}
```

``` rust
// main.rs
mod saludos;

fn main() {
	saludos::hola();
}

// o alternativamente
mod saludos;
use saludos::hola;

fn main() {
	hola();
}
```

En el caso que este en subdirectorios
``` rust
// frases/mod.rs -> es necesario que se llame mod.rs
pub mod saludos; // tiene que ser el mismo nombre que el archivo siguiente
```

``` rust
// frases/saludos.rs
pub fn hola() {
	println!("Hola tanto tiempo");
}
```

``` rust
// main.rs
mod frases; // el nombre de la carpeta

fn main() {
	frases::saludos::hola();
}
```
