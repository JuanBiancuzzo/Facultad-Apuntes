---
dia: 2023-03-29
materia: taller
capitulo: 4
---
### Definición
---
Los threads comparten los recursos del [[taller/Concurrencia/Proceso|proceso]], entre ellos, el espacio de memoria. Cada thread mantiene su propia información de estado (stack, PC, registros).

Para crear un thread es utilizando el [[Crate]] de la `std`, creando un [[JoinHandle]] de la siguiente forma 
``` rust
let join_handle: thread::JoinHandle<T> = thread::spawn(|| {
	// codigo del thread hijo
});
```

Donde `T` es nuestro tipo de retorno. Es un [[Generic]].