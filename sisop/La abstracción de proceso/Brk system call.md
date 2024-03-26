---
dia: 2023-11-16
materia: sisop
capitulo: 2
---
### Definición
---
La [[System call]] `brk()` es necesario para entender el layout o estructura real de [[Memoria|memoria]] de un [[Proceso|proceso]] en [[Linux]].

```c
#inlude <unistd.h>

int brk(void* addr);

void *sbrk(intptr_t increment);
```

El parámetro de `sbrk()` es la [[Dirección de memoria|dirección]] exacta donde el nuevo `break` debe estar. Por otro lado en `sbrk()` se pasa el incremento al cual se le sumará al viejo break para setear el nuevo break. Si se ejecuta `sbrk(0)` se obtiene la dirección del `break` actual.

##### Nota
---
Redimensionar el [[Heap|heap]] (reservado o liberando memoria) es tan simple como pedirle al [[Kernel|kernel]] que ajuste su idea de donde el break del proceso está.

Inicialmente el `break*` del [[Programa|programa]] está ubicado justo en el final de datos no inicializados. Después que `brk()` se ejecuta, el `break` es incrementado, el proceso puede acceder a cualquier memoria en la nueva área reservada, pero no accede directamente a la memoria física.

Esto se realiza automáticamente por el kernel en el primer intento del proceso en acceder al área reservada