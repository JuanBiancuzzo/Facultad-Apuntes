---
dia: 2023-03-16
tags:
  - taller/Sintaxis
  - nota/facultad
---
### Definición
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