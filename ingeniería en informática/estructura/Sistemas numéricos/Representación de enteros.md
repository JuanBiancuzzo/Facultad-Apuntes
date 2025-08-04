---
dia: 2023-04-05
tags:
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-electrónica/estructura/Sistemas-numéricos
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/estructura/Sistemas-numéricos
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-zig
  - nota/facultad
  - nota/investigacion
aliases:
  - Integer
  - Int
  - Entero
referencias:
  - "845"
etapa: sin-empezar
vinculoFacultad:
  - "[[ingeniería en informática/algo 1/Lenguaje C/Resumen.md]]"
  - "[[ingeniería en informática/estructura/Sistemas numéricos/Resumen.md]]"
  - "[[ingeniería en informática/taller/Sintaxis/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Hay diferentes representaciones de los [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|enteros]], ya que tenemos que representar el signo como parte del número, haciendo esto una convención.

Tenemos 4 métodos:
* [[Representación de enteros magnitud y signo|Magnitud y signo]]
* [[Representación de enteros complemento a la base menos uno|Complemento a la base menos 1]]
* [[Representación de enteros complemento a la base|Complemento a la base]]
* [[Representación de enteros exceso n|Exceso n]]

# Diferencias
---
Podemos verla en la siguiente tabla

| Decimal | Magnitud y signo | Complemento<br>a 2 menos 1 | Complemento<br>a 2 | Exceso 7 |
| :-----: | :--------------: | :------------------------: | :----------------: | :------: |
|   -8    |        -         |             -              |        1000        |    -     |
|   -7    |       1111       |            1000            |        1001        |   0000   |
|   -6    |       1110       |            1001            |        1010        |   0001   |
|   -5    |       1101       |            1010            |        1011        |   0010   |
|   -4    |       1100       |            1011            |        1100        |   0011   |
|   -3    |       1011       |            1100            |        1101        |   0100   |
|   -2    |       1010       |            1101            |        1110        |   0101   |
|   -1    |       1001       |            1110            |        1111        |   0110   |
|    0    |   1000 ó 0000    |        1111 ó 0000         |        0000        |   0111   |
|    1    |       0001       |            0001            |        0001        |   1000   |
|    2    |       0010       |            0010            |        0010        |   1001   |
|    3    |       0011       |            0011            |        0011        |   1010   |
|    4    |       0100       |            0100            |        0100        |   1011   |
|    5    |       0101       |            0101            |        0101        |   1100   |
|    6    |       0110       |            0110            |        0110        |   1101   |
|    7    |       0111       |            0111            |        0111        |   1110   |
|    8    |        -         |             -              |         -          |   1111   |

## Representación en C
---
Son números que no tienen una parte fraccionaria, en este caso veremos los tipos de datos que surgen del especificador de tipo aritmético básico `int` y también de la combinación de especificadores opcionales (`signed`, `unsigned`, `short`, `long`)

En una [[Arquitectura multiprocesador|arquitectura]] de $32$ bits, se tiene

| Tipo                 |  Tamaño   |                          Nombres alternativos                           |            Mínimo            |            Máximo            |
| -------------------- | :-------: | :---------------------------------------------------------------------: | :--------------------------: | :--------------------------: |
| `[signed] char`      | $1 ~$Byte |                                    -                                    |            $-128$            |            $127$             |
| `unsigned char`      | $1 ~$Byte |                                    -                                    |             $0$              |             $0$              |
| `short`              | $2 ~$Byte |           `short int`<br>`signed short`<br>`signed short int`           |          $-32.768$           |           $32.767$           |
| `usigned short`      | $2 ~$Byte |                          `unsigned short int`                           |             $0$              |           $65.535$           |
| `[signed] int`       | $4 ~$Byte | `long`<br>`long int`<br>`signed long`<br>`signed long int`<br>`int32_t` |       $-2.147.483.648$       |       $-2.147.483.647$       |
| `usigned int`        | $4 ~$Byte |          `unsigned long`<br>`unsigned long int`<br>`uint32_t`           |             $0$              |       $4.294.967.295$        |
| `long long`          | $8 ~$Byte |                                `int64_t`                                | $-9.223.372.036.854.775.808$ | $9.223.372.036.854.775.807$  |
| `unsigned long long` | $8 ~$Byte |                               `uint_64_t`                               |             $0$              | $18.446.744.073.709.551.615$ |

En una arquitectura de $64$ bits, se tiene

| Tipo                 |  Tamaño   |                             Nombres alternativos                             |            Mínimo            |            Máximo            |
| -------------------- | :-------: | :--------------------------------------------------------------------------: | :--------------------------: | :--------------------------: |
| `[signed] char`      | $1 ~$Byte |                                      -                                       |            $-128$            |            $127$             |
| `unsigned char`      | $1 ~$Byte |                                      -                                       |             $0$              |             $0$              |
| `short`              | $2 ~$Byte |             `short int`<br>`signed short`<br>`signed short int`              |          $-32.768$           |           $32.767$           |
| `usigned short`      | $2 ~$Byte |                             `unsigned short int`                             |             $0$              |           $65.535$           |
| `[signed] int`       | $4 ~$Byte |                                  `int32_t`                                   |       $-2.147.483.648$       |       $-2.147.483.647$       |
| `usigned int`        | $4 ~$Byte |                                  `uint32_t`                                  |             $0$              |       $4.294.967.295$        |
| `long`               | $8 ~$Byte | `long int`<br>`signed long`<br>`signed long int`<br>`long long`<br>`int64_t` | $-9.223.372.036.854.775.808$ | $9.223.372.036.854.775.807$  |
| `unsigned long`      | $8 ~$Byte |          `unsigned long int`<br>`unsigned long long`<br>`uint_64_t`          |             $0$              | $18.446.744.073.709.551.615$ |


## Representación en Rust
---
Son números que no tienen una parte fraccionaria. Lo separamos en dos grupos, cuando necesitamos y cuando no necesitamos que el número sea negativo. Lo indicamos con una `i` para cuando lo necesita y `u` cuando no.

Podemos usar cualquiera de los siguientes tipos:

|  Largo  | Con signo | Sin signo |
| :-----: | :-------: | :-------: |
|  8-bit  |   `i8`    |   `u8`    |
| 16-bit  |   `i16`   |   `u16`   |
| 32-bit  |   `i32`   |   `u32`   |
| 64-bit  |   `i64`   |   `u64`   |
| 128-bit |  `i128`   |  `u128`   |
|  arch   |  `isize`  |  `usize`  |

El defualt es `i32`. Se puede usar de la siguiente forma:
``` rust
let x = 23; // i32

let y: u128 = 503_432;
```

También se puede expresar números literales en diferentes [[Base númerica|bases]], dados por la siguiente tabla

| Bases            |    Ejemplo    |
| ---------------- | :-----------: |
| Decimal          |   `98_222`    |
| Hexa             |    `0xff`     |
| Octal            |    `0o77`     |
| Binario          | `0b1111_0000` |
| Byte (solo `u8`) |    `b'A'`     |

En el caso de que ocurra un [[Overflow|overflow]], se realizará un [[Panic]].

Se puede usar el `_` como separador entre los números para hacer más fácil la lectura, esto no modificará el valor.

## Representación en Zig
---
Como zig busca compatibilidad con [[Lenguaje C|C]], sus valores de enteros tiene una equivalencia con los valores de C

| Tipo de dato   | Equivalente en C      | Descripción                                                                |
| -------------- | --------------------- | -------------------------------------------------------------------------- |
| `i8`           | `int8_t`              | Entero de $8$ [[Información#Bit\|bits]] con signo                          |
| `u8`           | `uint8_t`             | Entero de $8$ bits sin signo                                               |
| `i16`          | `int16_t`             | Entero de $16$ bits con signo                                              |
| `u16`          | `uint16_t`            | Entero de $16$ bits sin signo                                              |
| `i32`          | `int32_t`             | Entero de $32$ bits con signo                                              |
| `u32`          | `uint32_t`            | Entero de $32$ bits sin signo                                              |
| `i64`          | `int64_t`             | Entero de $64$ bits con signo                                              |
| `u64`          | `uint64_t`            | Entero de $64$ bits sin signo                                              |
| `i128`         | `__int128`            | Entero de $128$ bits con signo                                             |
| `u128`         | `unsigned __int128`   | Entero de $128$ bits sin signo                                             |
| `isize`        | `intptr_t`            | Entero de tamaño de un puntero, con signo                                  |
| `usize`        | `uintptr_t`, `size_t` | Entero de tamaño de un puntero, sin signo                                  |
| `c_char`       | `char`                | Para la compatibilidad con C con una [[Application binary interface\|ABI]] |
| `c_short`      | `short`               | Para la compatibilidad con C con una ABI                                   |
| `c_ushort`     | `unsigned short`      | Para la compatibilidad con C con una ABI                                   |
| `c_int`        | `int`                 | Para la compatibilidad con C con una ABI                                   |
| `c_uint`       | `unsigned int`        | Para la compatibilidad con C con una ABI                                   |
| `c_long`       | `long`                | Para la compatibilidad con C con una ABI                                   |
| `c_ulong`      | `unsigned long`       | Para la compatibilidad con C con una ABI                                   |
| `c_longlong`   | `long long`           | Para la compatibilidad con C con una ABI                                   |
| `c_ulonglong`  | `unsigned long long`  | Para la compatibilidad con C con una ABI                                   |
| `c_longdouble` | `long double`         | Para la compatibilidad con C con una ABI                                   |


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```