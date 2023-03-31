---
dia: 2023-03-29
materia: taller
capitulo: 3
---
### Definición
---
El [[Thread]] padre puede esperar a que un thread hijo craedo finalice utilizando la función `join()`.
``` rust
pub fn join(self) -> Result<T>
```

Se invoca sobre el handle del [[Thread]] obtenido con spawn. Por ejemplo: 
``` rust
let _ = hijo.join(self);
```
