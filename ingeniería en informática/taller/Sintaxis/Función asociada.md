---
dia: 2023-03-17
tags:
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Sintaxis
---
# Definición
---
Son los métodos que en otros lenguajes se llaman funciones estáticas. Son métodos que no involucran a una instancia concreta utilizando [[Impls]], por ejemplo un constructor

``` rust
impl Persona {
	fn new(nombre: String, apellido: String) -> Self {
		Persona { nombre, apellido }
	}
}

let persona = Persona::new("Juan".to_string(), "Biancuzzo".to_string());
```

Notemos que si el nombre de la variable es igual al nombre del campo del [[Estrucutura|struct]] entonces no es necesario especificar el nombre. Como ejemplo veamos que pasaria si no son iguales

``` rust
impl Persona {
	fn new(primer_nombre: String, ultimo_nombre: String) -> Self {
		Persona { 
			nombre: primer_nombre, 
			apellido: ultimo_nombre,
		}
	}
}
```