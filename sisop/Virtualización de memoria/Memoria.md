---
dia: 2023-11-20
materia: sisop
capitulo: 3
---
### Definición
---


#### API
---
Es importante, cuando se está trabajando con memoria, cuáles son las funciones que permiten obtener y liberar memoria, y los errores comunes al utilizar estas herramientas

##### `malloc()`
---
La utilización de la función `malloc()` es bastante sencilla se le pasa la cantidad de bites que es necesaria reservar en el [[Heap|heap]] y si hay espacio en el mismo devuelve un puntero al [[Espacio de direcciones|nuevo espacio]] reservado, en caso de fallar devuelve un `NULL`

```c
#include <stdlib.h>

void* malloc(size_t size);
```

Si bien esta forma de usar malloc puede parecer sencilla hay que prestar mucha atención a la hora de utilizarla porque puede generar varios tipos de errores

1. `malloc()` devuelve un puntero a un bloque de memoria de por lo menos size bytes adecuadamente alineado al cualquier tipo de datos que pueda contener el bloque. En la práctica esta [[Alinear memoria|aliniamiento]] depende de la arquitectura
	* 32 bits: `malloc()` devuelve valores de direcciones múltiplos de $8$
	* 64 bits: `malloc()` devuelve valores de direcciones múltiplos de $16$
2. Devuelve `NULL` si algo salió mal y setea errno
3. No inicializa el bloque de memoria, este último se puede solucionar usando `calloc()`

##### `free()`
---
De la misma forma en que la memoria es creada una ve que deja de utilizarse debe ser [[Heap|liberada]], al igual que en la contabilidad el debe tiene que balancear si se ha reservado espacio para alguna cantidad $X$ de memoria una vez que no se utiliza más debe ser liberada, para ello se utiliza `free()`

```c
#include <stdlib.h>

void free(void* ptr);
```

* `ptr` debe ser un bloque que devolvió `malloc()`, `calloc()` o `realloc()`. De no ser así el comportamiento de `free()` está indefinido
* `free()` no avisa si algo salió mal
