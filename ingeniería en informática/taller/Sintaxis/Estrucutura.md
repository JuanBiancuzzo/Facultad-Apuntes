---
dia: 2023-03-16
tags:
  - ingeniería-en-informática/taller/Sintaxis
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
  - ingeniería-electrónica/taller/Sintaxis
---
# Definición
---
Son un conjunto de elementos puestos juntos, que son tratados como una unidad. Se le pueden definir operaciones ([[Metodos]]).

``` rust
struct Persona {
	nombre: String,
	apellido: String
}
```

Hay una variación que es una estructura pero como una tupla, por ejemplo
``` rust
struct Celsius(f32);
struct Fahrenheit(f32);

fn convertir_a_celsius(temperatura: Fahrenheit) -> Celsius {
    Celsius(
        (temperatura.0 - 32.0) * 5.0/9.0
    )
}
```

y también como un unit
``` rust
struct AlgunaCosa;
```