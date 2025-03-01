---
dia: 2024-08-28
tags:
  - carrera/ingeniería-en-informática/estructura/Sistema-ARC
  - nota/facultad
  - carrera/ingeniería-electrónica/estructura/Sistema-ARC
---
# Definición
---
Las directivas son los comandos que afectan en el momento de ensamblado, por lo que no generan código objeto sino información necesaria para el ensamblado

| Directiva    | Forma de uso         | Función o significado                                              |
| :----------- | :------------------- | :----------------------------------------------------------------- |
| `.equ X`     | .`equ #10`           | Asignar a `X` el valor $(10)_{16}$                                 |
| `.begin`     | `.begin`             | Comienzo de traducción                                             |
| `.end`       | `.end`               | Fin de traducción                                                  |
| `.org`       | `.org 2048`          | Cambiar el contador de posición a $2048$                           |
| `.dwb`       | `.dwb 25`            | Reservar un bloque de $25$ palabras                                |
| `.global`    | `.global Y`          | La variable `Y` se usa en otro módulo                              |
| `.extern`    | `.extern z`          | La variable `Z` se define en otro módulo                           |
| `.macro`     | `.macro M a, b, ...` | Definir macroinstrucción `M`. Parámetros formales: `a`, `b`, `...` |
| `.endmarcro` | `.endmacro`          | Fin de definición de macroinstrucción                              |
| `.if`        | `.if <cond>`         | Ensamblar solo si `<cond>` es cierta                               |
| `.endif`     | `.endif`             | Fin de estructura condicional                                      |

* Indican al ensamblador como procesar una sección del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]]
* Las instrucciones son específicas de un [[Procesador|microprocesador]], las pseudo-instrucciones son específicas de un programa ensamblador
* Algunas directivas generan información en la [[Memoria|memoria]]