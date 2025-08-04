---
dia: 2023-03-22
tags:
  - carrera/ingeniería-electrónica/taller/Ownership
  - carrera/ingeniería-en-informática/taller/Ownership
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/taller/Ownership/Resumen.md]]"
---
# Definición
---
Es una [[Estrucutura]] que te da un puntero al heap de la memoria que se quiera guardar.

Para invocalrlo se una `Box::new(v)` que es un [[Generic]] porque puede guardar lo que quiera. Este se encarga de destruir todo la memoria cuando sale de scope. Por lo tanto este tiene [[Ownership]] del valor.