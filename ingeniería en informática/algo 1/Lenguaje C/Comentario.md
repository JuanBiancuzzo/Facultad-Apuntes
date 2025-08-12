---
dia: 2024-10-07
tags:
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-zig
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Lenguaje C
    capitulo: 2
    materia: Algoritmos y programación 1
    carrera: Ingeniería en informática
---
# Definición
---
Los comentarios en el código es una forma de transmitir información que el [[Compilador|compilador]] no va a ver, sino que es para los programadores que vean el código, tengan algo de información

## En C
---
Los caracteres `/*` se emplean para iniciar un comentario introducido entre el código del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] y se lo termina con los caracteres `*/`

```c
int i = 0; /* Todo esto
    es un comentario */
```

También si se quiere crear un comentario de una única línea se puede usar los caracteres `//` y desde ese punto hasta el final de la línea será un comentario

```c
int i = 0; // Esto también es un comentario
```