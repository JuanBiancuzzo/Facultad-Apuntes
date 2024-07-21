---
dia: 2023-11-12
capitulo: 3
tags:
  - sisop/Virtualización-de-memoria
  - nota
---
### Definición
---
Esta es una abstracción por la cual la [[Memoria|memoria]] física puede ser compartida por diversos [[Proceso|procesos]].

Un comportamiento clave de la memoria virtual son las [[Dirección de memoria virtual|direcciones virtuales]]. 

La virtualización de memoria le hace creer al [[Proceso|proceso]] que este tiene toda la memoria disponible para ser reservada y usada como si este estuviera siendo ejecutado sólo en la computadora. Todos los procesos en [[Linux]], están divididos en 4 segmentos:
* Text: Instrucciones del programa
* Data: Variables Globales
* [[Heap|Heap]]: Memoria dinámica alocable
* [[Stack|Stack]]: Variables locales y trace de llamadas

Todas estas secciones pertenecientes a un proceso se denominan [[Espacio de direcciones|espacio de direcciones]] del proceso.

#### Metas
---
La virtualización de [[Memoria|memoria]] tiene 3 metas 

##### Transparencia
---
El [[Sistema operativo|sistema operativo]] debería implementar la virtualización de memoria de forma tal que sea invisible al [[Programa|programa]] que se esta ejecutando. El programa debe comportarse como si él estuviera alojado en su propia área de [[Memoria|memoria]] física privada.

Por detrás de escena, el sistema operativo y el [[Hardware|hardware]] ([[Memory Management Unit|MMU]]) hacen todo el trabajo para multiplexar memoria a lo largo de los diferentes [[Proceso|procesos]] y por ende implementar la ilusión.

##### Eficiencia
---
El [[Sistema operativo|sistema operativo]] debe esforzarse para hacer que la virtualización sea lo más eficiente posible en términos de tiempo, no haciendo que los [[Programa|programas]] corran más lentos, y espacio, no usando demasiada [[Memoria|memoria]] para las estructuras necesarios para soportar la virtualización.

##### Protección
---
El [[Sistema operativo|sistema operativo]] tiene que asegurarse de proteger a los [[Proceso|procesos]] unos de otros como también proteger al sistema operativo de los procesos. Cuando un proceso realiza un load, un store, o un fetch de una instrucción este no tiene que ser capaz de hacerlo o afectar de ninguna forma al contenido de la [[Memoria|memoria]] del proceso o del sistema operativo.

La protección por ende habilita una propiedad llamada aislamiento entre procesos. Cada proceso tiene que ejecutarse en su propio caparazón aislado y seguro de los avatares de otros procesos con fallas o incluso maliciosos.
