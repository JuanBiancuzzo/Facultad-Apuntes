---
dia: 2023-04-01
capitulo: 1
tags:
  - taller/Sintaxis
  - nota
---
### Definición
---
Representan un único valor, y en rust hay 4 tipos de datos escalares:
* Enteros (integers)
* Punto flotante (floating-point)
* Booleanos
* Caracteres

### Enteros
---
Son números que no tienen una parte fraccionaria. Lo separamos en dos grupos, cuando necesitamos y cuando no necesitamos que el número sea negativo. Lo indicamos con una `i` para cuando lo necesita y `u` cuando no.

Podemos usar cualquiera de los siguientes tipos:

| Largo   | Con signo | Sin signo |
| ------- | --------- | --------- |
| 8-bit   | `i8`      | `u8`      |
| 16-bit  | `i16`     | `u16`      |
| 32-bit  | `i32`     | `u32`      |
| 64-bit  | `i64`     | `u64`      |
| 128-bit | `i128`    | `u128`      |
| arch    | `isize`   | `usize`   |

El defualt es `i32`. Se puede usar de la siguiente forma:
``` rust
let x = 23; // i32

let y: u128 = 503_432;
```

También se puede expresar números literales en diferentes [[Base numerica|bases]], dados por la siguiente tabla

| Bases           | Ejemplo     |
| --------------- | ----------- |
| Decimal         | `98_222`    |
| Hexa            | `0xff`        |
| Octal           | `0o77`        |
| Binario         | `0b1111_0000` |
| Byte (solo `u8`) | `b'A'`            |

En el caso de que ocurra un [[Overflow|overflow]], se realizará un [[Panic]].

Se puede usar el `_` como separador entre los números para hacer más fácil la lectura, esto no modificará el valor.

### Punto flotante
---
Rust tiene dos tipos de [[Punto flotante]], que son números con parte decimal. Estos son `f32` y `f64`, que representan un punto flotante con 32 bit y 64 bit, respectivamente. El default es `f64`. La forma de usarlos es la siguiente:
``` rust
let x = 2.0; // f64

let y: f32 = 3.0 // f32
```

### Booleano
---
Los booleanos tienen únicamente dos valores `true` y `false`. Se representan con un único byte, y se usan de la siguiente forma:
``` rust
let verdadero = true;

let falso: bool = false; // haciendo explicito el tipo de dato.
```

### Caracteres
---
Los caracteres son la representación de las letras, o mejor dicho cualquier tipo de caracter que el sistema de unicode pueda representar. Se usa de la siguiente forma:
``` rust
let c = 'z';
let z: char = 'ℤ'; // haciendo explicito el tipo de dato.
let gatito = '😻';
```

Hay que notar que los `char` se especifica con `' '` a diferencia de los `String` 's.