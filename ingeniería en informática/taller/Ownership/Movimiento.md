---
dia: 2023-03-22
tags:
  - ingeniería-en-informática/taller/Ownership
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Ownership
---
# Definición
---
Se puede mover valores de un [[Ownership|dueño]] a otro. También se puede "tomar prestado una referencia" a un valor. Las referencias son punteros que no adueñan los valores a los que apuntan, y tienen [[Lifetime]] limitados.

Se mueve una variable cuando se pasa otra [[Función|función]] sin referencia. El origen cede su pertenencia del valor al destinatario, y pasa a ser no inicializada, el destinatario ahora controla el [[Lifetime]] del valor.

``` rust
let variable: i32 = 3;

funcion_toma_ownership(variable);
```

También se puede devolver:

``` rust
let x = funcion_que_da_ownership();
```

También se puede cambiar entre variables

``` rust
let variable_original: i32 = 5;

let variable_tomadora: i32 = variable_original;
```