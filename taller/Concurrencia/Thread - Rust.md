---
dia: 2023-03-29
tags:
  - taller/Concurrencia
  - nota
---
### Definición
---
Para crear un [[Thread|thread]] es utilizando el [[Crate]] de la `std`, creando un [[JoinHandle]] de la siguiente forma 
``` rust
let join_handle: thread::JoinHandle<T> = thread::spawn(|| {
	// codigo del thread hijo
});
```

Donde `T` es nuestro tipo de retorno. Es un [[Generic]].