---
dia: 2023-03-29
tags:
  - ingeniería-en-informática/taller/Concurrencia
  - nota/facultad
  - lenguajes-de-programación/lenguaje-Rust
  - ingeniería-electrónica/taller/Concurrencia
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
