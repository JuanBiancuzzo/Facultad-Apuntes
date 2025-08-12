---
dia: 2023-03-17
tags:
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Sintaxis
    capitulo: 1
    materia: Taller de programación 1
    carrera: Ingeniería en informática
---
# Definición
---
`impl` se usa para definir métodos a [[Enum|enums]] y [[Estrucutura|structs]]

``` rust
struct Persona {
	nombre: String,
	apellido: String,
}

impl Persona {
	fn nombre_completo(&self) -> String {
		format!("{} {}", self.nombre, self.apellido);
	}
}

let persona = Persona{ 
	nombre: "Juan".to_string(), 
	apellido: "Biancuzzo".to_string
};
println!("Mi nombre es: {}", persona.nombre_completo());
```