---
dia: 2023-03-22
tags:
  - carrera/ingeniería-en-informática/taller/Ownership
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Ownership
---
# Definición
---
La mayoria de los tipos de los tipos de punteros vistos en ejemplos han sido punteros que son [[Ownership|dueños]] de los valores referencia, por ejemplo `String`, `Vec` y `Box` son [[Ownership|dueños]] de los datos a los que apuntan.

Las referencias en Rust son otro tipo de puntero que no se adueñan del valor al que apunta, sino que "toma prestado".

No tiene ningun efecto sobre los [[Lifetime]] de sus referentes. Pero tiene que "sobrevivir" a sus referentes.

Estas referencias nunca son nulas, y por lo tanto no hay un defecto a una referencia. En otros lenguajes seria el `null`.