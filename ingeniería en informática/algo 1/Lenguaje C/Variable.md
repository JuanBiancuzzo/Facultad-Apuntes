---
dia: 2024-04-03
tags:
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
  - lenguajes-de-programación/lenguaje-zig
  - lenguajes-de-programación/lenguaje-c
  - ingeniería-en-informática/taller/Sintaxis
  - ingeniería-electrónica/algo-1/Lenguaje-C
  - ingeniería-electrónica/taller/Sintaxis
---
# Definición
---
Es un conjunto de celdas de [[Memoria|memoria]] asociado con un nombre simbólico, que contiene alguna cantidad conocida o desconocida de [[Información|información]] a la que comúnmente se refiere como valor

El nombre de la variable es la forma habitual de hacer referencia al valor almacenado; esta separación de nombre y contenido permite que el nombre sea utilizado de manera independiente de la información exacta que representa

## Punto de vista de la Algoritmia
---
Una variable es una entidad que puede almacenar un valor de un determinado [[Tipo de dato|tipo de dato]], y dicho valor puede ser accedido y/o modificado a lo largo del [[Algoritmo|algoritmo]]. Esta entidad se caracteriza por tener un identificador único.

## Punto de vista de la programación
---
Uno de los componentes de una [[Computadora|computadora]] es su [[Memoria|memoria principal]]. Esta memoria de una computadora en la actualidad se conforma por celdas [[Semiconductor|semiconductoras]] que poseen tres propiedades
1. Presentan dos estados estables que pueden emplearse para representar un $1$ o un $0$
2. Se puede escribir en ellas para establecer su estado
3. Puede leerse para determinar en qué estado se encuentra

Dadas estas características, cada celda de memoria se debe poder acceder para determinar o establecer su estado, para ello cada una de estas celdas posee una [[Dirección de memoria|dirección]], que la identifica de las otras, esta dirección es un número

## En C
---
Para definir una variable en [[Lenguaje C|C]] se debe establecer el tipo de dato al cual pertenece. Seguidamente se debe dotar de un nombre a la variable, a ese nombre se lo denomina identificador. Un identificador se lo escribe teniendo en cuanta que es una secuencia de letras

```c
int numero;
long int contador;
char letra;
float raiz;
```

## En Rust
---
Las variables en [[Lenguaje Rust|rust]] son inmutables por default, y su declaración es

``` rust
let variable: i32 = 43;
```

Donde se puede crear una variable mutable🔗, modificando la sintaxis🔗 de una variable inmutable🔗, de la siguiente forma

``` rust
let mut variable_mutable: i32 = 3;
```

La idea de tener que aclarar que una variable es mutable hace que seamos consientes de cuando una variable tiene que variar de valor

## En Zig
---
