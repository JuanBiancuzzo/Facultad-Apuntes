---
dia: 2024-10-07
tags:
  - algo-1/Lenguaje-C
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
  - lenguajes-de-programación/lenguaje-Rust
  - lenguajes-de-programación/lenguaje-zig
---
# Definición
---
Los comentarios en el código es una forma de transmitir información que el [[Compilador|compilador]] no va a ver, sino que es para los programadores que vean el código, tengan algo de información

## En C
---
Los caracteres `/*` se emplean para iniciar un comentario introducido entre el código del [[Programa|programa]] y se lo termina con los caracteres `*/`

```c
int i = 0; /* Todo esto
    es un comentario */
```

También si se quiere crear un comentario de una única línea se puede usar los caracteres `//` y desde ese punto hasta el final de la línea será un comentario

```c
int i = 0; // Esto también es un comentario
```