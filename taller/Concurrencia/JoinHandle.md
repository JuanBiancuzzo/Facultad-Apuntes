---
dia: 2023-03-29
materia: taller
capitulo: 4
---
### Definición
---
El [[Thread - Rust|thread]] padre puede esperar a que un thread hijo creado finalice utilizando la función `join()`.

``` rust
pub fn join(self) -> Result<T>
```

Se invoca sobre el handle del [[Thread - Rust|thread]] obtenido con spawn. Por ejemplo: 
``` rust
let _ = hijo.join(self);
```
