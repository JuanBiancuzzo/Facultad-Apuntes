---
dia: 2024-07-27
tags:
  - carrera/ingeniería-en-informática/algo-1/Introducción-a-la-programación
  - nota/facultad
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - carrera/ingeniería-electrónica/algo-1/Introducción-a-la-programación
  - carrera/ingeniería-electrónica/taller/Sintaxis
referencias:
  - "845"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Al igual que una variable inmutable, las constantes no pueden modificarse, pero hay diferencias entre sí. Una constante es un valor que no cambia durante todo el [[Algoritmo|algoritmo]], este valor posee un identificador único

## Representación en C
---
Se puede definir una constante como

```c
const int CONSTANTE = 45;
```

Notemos que ponemos el nombre en mayúsculas, lo cual es una convención, pero no es realmente necesario

## Representación en Rust
---
A diferencia de las variables inmutables, no se le puede aplicar el modificador de `mut` para hacerlas [[Variable#En Rust|mutables]]

Para declarar una constante se hace de la siguiente forma

``` rust
const CONSTANTE: u16 = 45;
```

Donde el `u16` es el [[Tipo de dato|tipo de dato]]. Notemos que por convención se escriben las constantes en mayúsculas 

Para la constante es necesario aclarar el tipo de dato. También una propiedad que no lo tienen las [[Variable#En Rust|variables inmutables]] y las [[Variable#En Rust|variables mutables]] es que estas pueden ser declaradas en cualquier [[Bloque de acción|scope]], incluso en el global

Las constantes son validas por la duración del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]], o como mínimo el scope en el que fueron declarados

## Representación en Zig
---
Las constantes en [[Lenguaje Zig|Zig]] se declaran

```zig
const anio = 24;
```

Como las constantes son usadas en tiempo de [[Compilador|compilación]], se puede inferir el tipo de dato, pero se puede especificar

No se puede tener constantes o [[Variable|variables]], sin usar ya que el compilador tiraría un error. Se puede descartar el valor asignándosela a el carácter especial `_`, de la siguiente forma

```zig
const anio = 15;
_ = anio;
```


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```