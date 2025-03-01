---
dia: 2023-03-17
tags:
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Sintaxis
aliases:
  - Trait
---
# Definición
---
`trait` permite definir comportamiento común a las estructuras, similar a las interfaces en otros lenguajes. Representa una capacidad, algo que un [[Tipo de dato|tipo de dato]], [[Estrucutura|estructura]] o [[Enum|enum]] puede hacer.

``` rust
trait NombreCompleto {
	fn nombre_completo(&self) -> String;
}

struct Persona {
	nombre: String,
	apellido: String,
}

impl NombreCompleto for Persona {
	fn nombre_completo(&self) -> String {
		format!("{} {}", self.nombre, self.apellido);
	}
}
```

También se puede implementar un trait de la siguiente forma
``` rust
#[derive(Debug)]
struct Persona {
	nombre: String,
	apellido: String,
}
```

Siempre que todos los elementos del [[Estrucutura|struct]] ya tengan la implementación del trait correspondiente.