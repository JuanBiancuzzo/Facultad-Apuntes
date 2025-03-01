---
dia: 2023-03-29
tags:
  - carrera/ingeniería-en-informática/taller/Concurrencia
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-electrónica/taller/Concurrencia
---
# Definición
---
El [[Thread|thread]] padre puede esperar a que un thread hijo creado finalice utilizando la función `join()`.

``` rust
pub fn join(self) -> Result<T>
```

Se invoca sobre el handle del [[Thread|thread]] obtenido con spawn. Por ejemplo: 
``` rust
let _ = hijo.join(self);
```
