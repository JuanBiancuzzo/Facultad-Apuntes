---
dia: 2023-04-08
tags:
  - ingeniería-en-informática/estructura/Punto-flotante
  - nota/facultad
  - ingeniería-en-informática/taller/Sintaxis
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-electrónica/estructura/Punto-flotante
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-zig
aliases:
  - Floating point
  - Float
  - IEEE 754
referencias:
  - "845"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un método de representación de los números decimales, en [[Sistemas de numeración|base 2]], utilizando el método de notación científica $$ x = M \cdot B^e $$
Donde $M$ es la mantisa, este tiene un bit que representa el signo. $B$ la base, que en nuestro caso sería $2$, y por último $e$ el exponente que tiene la [[Representación de enteros|representación]] [[Representación de enteros exceso n|exceso n]]. Este es un estándar llamado **IEEE 754**. Hay que tener en cuenta algunos [[Valores especificos de IEEE 754|valores específicos]]

Esta se conoce con dos posibles tamaños, simple precisión y doble precisión. La diferencia es que en simple precisión son 32 [[Información#Bit|bits]], mientras que doble precisión es de 64 bits

| tipo   | Exponente | Mantisa |
| ------ | --------- | ------- |
| Simple | 8 bits    | 23 bits |
| Doble  | 11 bits   | 52 bits |

Para utilizarlo, el número que queremos almacenar se normaliza, es decir si tuviéramos $23,433_{10} = 10111.01101110110110010001_2$ se lo piensa de la siguiente forma

$$  \begin{matrix} 
	10111.01101110110110010001 \cdot 2^0 \\
	~~1.011101101110110110010001 \cdot 2^{-4}
\end{matrix} $$
Por lo que guardamos en el exponente es $-4$ y en la mantisa es $011101101110110110010001$.

## Rango de representación
---
Para simple precisión este será $$ 2^{-126} \le |x| \le 2^{128} $$
Para doble precisión este será $$ 2^{-1022} \le |x| \le 2^{1024} $$

## Representación en C
---
La representación de coma flotante es una forma de notación científica usada en los [[Procesador|microprocesadores]] con la cual se pueden representar números racionales extremadamente grandes y pequeños de una manera muy eficiente y compacta, y con la que se puede realizar [[Operación aritmética|operaciones aritméticas]]

| Tipo          | Tamaño     | Rango de valores                                 | Precisión              |
| ------------- | ---------- | ------------------------------------------------ | ---------------------- |
| `float`       | $4~$ Byte  | $1.2 \times 10^{-38}$ a $3.4 \times 10^{38}$     | $6$ lugares decimales  |
| `double`      | $8~$ Byte  | $2.3 \times 10^{-308}$ a $1.7 \times 10^{308}$   | $15$ lugares decimales |
| `long double` | $10~$ Byte | $3.4 \times 10^{-4932}$ a $1.1 \times 10^{4932}$ | $19$ lugares decimales |

## Representación en Rust
---
[[ingeniería en informática/taller/Sintaxis/Resumen|Rust]] tiene dos tipos de punto flotante, que son números con parte decimal. Estos son `f32` y `f64`, que representan un punto flotante con 32 bit y 64 bit, respectivamente. El default es `f64`. La forma de usarlos es la siguiente:
``` rust
let x = 2.0; // f64

let y: f32 = 3.0 // f32
```

## Representación en Zig
---
En [[Lenguaje Zig|Zig]] existen $5$ representaciones de punto flotante, y tiene una equivalencia con los valores de [[Lenguaje C|C]] 

| Tipo de dato | Equivalente en C | Descripción                                                                             |
| ------------ | ---------------- | --------------------------------------------------------------------------------------- |
| `f16`        | `_Float16`       | Float de $16$ bits, con $10$ bits de mantisa, IEEE-754-2008                             |
| `f32`        | `float`          | Float de $32$ bits, con $23$ bits de mantisa, IEEE-754-2008                             |
| `f64`        | `double`         | Float de $64$ bits, con $52$ bits de mantisa, IEEE-754-2008                             |
| `f80`        | `long double`    | Float de $80$ bits, con $64$ bits de mantisa, IEEE-754-2008 $80$-bit extended precision |
| `f128`       | `_Float128`      | Float de $128$ bits, con $112$ bits de mantisa, IEEE-754-2008                           |

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```