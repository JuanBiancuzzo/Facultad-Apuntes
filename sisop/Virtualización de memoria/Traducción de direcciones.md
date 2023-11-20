---
dia: 2023-11-20
materia: sisop
capitulo: 3
---
### Definición
---
Es el mecanismo, proporcionado por el [[Hardware|hardware]], que permite a partir de una [[Dirección de memoria virtual|dirección virtual]] obtener la [[Espacio de direcciones|dirección física]] correspondiente. Esa traducción es realizada por el hardware.

El [[Sistema operativo|S.O.]] está en el medio de ese proceso y determina si el mismo se ha realizado correctamente. Lo que hace es gerenciar el manejo de la [[Memoria|memoria]]
1. Manteniendo registro de que parte está libre
2. Manteniendo el control de la forma en la cual la memoria está siendo utilizada

Desde la perspectiva del programador el proceso de address translation es completamente transparente, si bien, el hecho es que en realidad la memoria es almacenada en un lugar completamente diferente de donde él cree que está siendo almacenada

Un ejemplo de su implementación sería el [[Memory Management Unit (MMU)|Memory management unit]].

#### Beneficios 
---
Este mecanismo provee ciertos beneficios

##### [[Proceso|Process]] isolation
---
Proteger el [[Kernel|kernel]] del [[Sistema operativo|sistema operativo]] y otras aplicaciones contra errores o el código malicioso requiere la capacidad de limitar las referencias a la [[Memoria|memoria]] por parte de las aplicaciones. Asimismo, Las aplicaciones pueden utilizar la traducción de direcciones para construir entornos limitados de ejecución segura para terceros Extensiones de partido.

##### [[Proceso|Interprocess]] communication
---


##### Shared code segments
---

##### [[Programa|Program]] initialization
---

##### Efficient dynamic [[Memoria|memory]] [[Memoria#`malloc()`|allocation]] 
---


##### [[Cache|Cache]] management
---

##### [[Programa|Program]] debugging
---

##### Efficient [[Puerto I/O|I/O]]
---

##### [[Memoria|Memory]] mapped files
---

##### [[Virtualización de memoria|Virtual memory]]
---

##### Checkpointing and restart
---

##### Persistent data structures
---

##### [[Proceso|Process]] migration
---

##### Information flow control
---

