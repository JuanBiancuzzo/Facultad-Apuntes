---
dia: 2023-03-22
materia: taller
capitulo: 3
---
### Definición
---
Es una [[Estrucutura]] que te da un puntero al heap de la memoria que se quiera guardar.

Para invocalrlo se una `Box::new(v)` que es un [[Generic]] porque puede guardar lo que quiera. Este se encarga de destruir todo la memoria cuando sale de scope. Por lo tanto este tiene [[Ownership]] del valor.