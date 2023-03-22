---
dia: 2023-03-22
materia: taller
capitulo: 2
---
### Definición
---
Es la restricción que produce el lenguaje que permite evitar errores con punteros. Esto lo logra con las siguientes reglas
* Cada valor en Rust tiene una variable que es su dueña
* Solo puede existir una dueña a la vez
* Cuando la dueña sale de alcance, el valor sera liberado