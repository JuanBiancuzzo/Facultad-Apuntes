---
dia: 2024-07-28
tags:
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - nota/facultad
  - nota/investigacion
---
# Definición
---
Las variables carácter contienen un único carácter y se almacenan en un Byte de [[Memoria|memoria]]. Como se vio el byte es una unidad de medida correspondiente a $8$ bits, la cual para cada posible valor, se estableció un posible carácter dado por una [[Tabla ASCII|tabla ASCCI]]

## Representación en C
---
Se puede conseguir un `char` definiéndolo de la siguiente forma
```c
char letra = 'c';
```

## Representación en Rust
---
Los caracteres son la representación de las letras, o mejor dicho cualquier tipo de carácter que el sistema de [[Unicode|unicode]] pueda representar. Se usa de la siguiente forma:
``` rust
let c = 'z';
let z: char = 'ℤ'; // haciendo explicito el tipo de dato.
let gatito = '😻';
```

Hay que notar que los `char` se especifica con `' '` a diferencia de los `String` 's.