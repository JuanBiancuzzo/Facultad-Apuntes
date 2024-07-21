---
dia: 2023-03-17
capitulo: 1
tags:
  - taller/Sintaxis
  - nota
---
### Definición
---
`trait` permite definir comportamiento común a las estructuras, similar a las interfaces en otros lenguajes. Representa una capacidad, algo que un [[Tipo de dato rust|tipo de dato]], [[Estrucutura|estructura]] o [[Enum|enum]] puede hacer.

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