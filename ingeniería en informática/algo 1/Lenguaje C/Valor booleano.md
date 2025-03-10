---
dia: 2024-07-28
tags:
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-zig
---
# Definición
---
Los valores booleanos siguen el [[Álgebra de Boole|algebra de boole]], para el caso donde existen dos valores, `true` o `false`

## Representación en C
---
El valor booleano en si no tiene representación, simplemente se evalúa el valor siendo igual o distinto de $0$, donde si es cero se lo coincidiera como falso, y  distinto como verdadero

En el caso de usar las keyword especificas para `true` y `false`, se puede hacer de la siguiente forma
```c
#include<stdbool.h>

bool opcion = true;
```

## Representación en Rust
---
Los booleanos tienen únicamente dos valores `true` y `false`. Se representan con un único byte, y se usan de la siguiente forma:
``` rust
let verdadero = true;

let falso: bool = false; // haciendo explicito el tipo de dato.
```

## Representación en Zig
---
Los booleanos tienen dos valores, `true` y `false`, se usan de la siguiente forma

```zig
var verdadero: bool = true;
```
