---
dia: 2023-03-16
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
La función principal (pero no necesariamente la más útilizada) es para enumerar ítems

``` rust
enum Palo {
	Oro,
	Copa,
	Espada,
	Basto,
}

let palo: Palo = Palo::Oro;
```

Tenemos también los enumerados de tipo tupla

``` rust
enum Carta {
	Comodin,
	Oro(u8),
	Copa(u8),
	Espada(u8),
	Basto(u8),
}

let mi_carta: Carta = Carta::Oro(9);
let mi_comodin: Carta = Carta::Comodin;
```

También como estructura

``` rust
enum Jugada {
	Carta { palo: Palo, numero: u8 }.
	Paso,
}

let mi_jugada: Jugada = Jugada::Carta{ palo: Palo::Copa, numero: 6 };
```