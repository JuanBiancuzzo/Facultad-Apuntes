---
dia: 2023-11-19
materia: sisop
capitulo: 3
---
### Definición
---
El espacio de direcciones o Address space es la abstracción fundamental sobre la [[Memoria|memoria]] de una [[Computadora|computadora]].

Crear un mecanismo que permite que la [[Memoria|memoria]] física de una [[Computadora|computadora]] sea utilizada de forma fácil y eficiente llevo paulatinamente a concebir el concepto de espacio de direcciones, la abstracción para la [[Memoria|memoria]]

El address space de un [[Proceso|proceso]] contiene todo el estado de la memoria del [[Programa|programa]] en ejecución.

Por ejemplo
* El código del programa tiene que estar alojado en la memoria en algún lugar
* El programa mientras se está ejecutado usa el [[Stack|stack]] para mantener registro de donde se encuentra en la cadena de llamadas a funciones o procedimientos para reservar espacios para las variables locales, para pasar parámetros y a su vez devolver valores de y hacia una rutina.
* Finalmente se utiliza el [[Heap|heap]] para reservar memoria de forma dinámica
* Existen otras cosas de la memoria, como variables estáticas, constantes, etc.

#### Ejemplo
---
Se presenta un pequeño espacio de direcciones de $16 ~ kb$

![[Espacio de direcciones de 16k.png]]

El código fuente del [[Programa|programa]] vive en lo alto del espacio de direcciones empezando de $0$ en este ejemplo y esta empaquetado en la primer $1 ~ kb$ del espacio de direcciones. El código fuente es estático por ende se puede poner al principio del espacio de direcciones y no necesitará más espacio mientras que el programa se ejecute.

Por otro lado hay dos regiones del espacio de direcciones que pueden crecer o achicarse mientras el programa se esta ejecutando. Como ya se sabe son el [[Heap|heap]] y el [[Stack|stack]], debido a que ambas en algún momento van a querer crecer siempre se ponen en los extremos del espacio de direcciones enfrentadas entre sí.

De esta forma se permite tal crecimiento solamente que el mismo se dirige a direcciones opuestas
* El heap empieza justo después del código fuente y crece hacia abajo
* El stack empieza al final del espacio de direcciones y crece hacia arriba

Por supuesto que cuando se describe de esta forma el espacio de direcciones lo que se esta describiendo es la abstracción que el [[Sistema operativo|sistema operativo]] provee para ejecutar un programa.

En realidad el programa no se encuentra en el rango de las direcciones de [[Memoria|memoria]] física entre $0 ~ b$ y $16 ~ kb$. Cuando el sistema operativo realiza esto, se dice que esta [[Virtualización de memoria|virtualizando memoria]].

Por ejemplo, cuando un [[Proceso|proceso]] trata de cargar el contenido de la dirección 0, que a partir de ahora llamaremos la dirección virtual $0$, de alguna forma el sistema operativo con ayuda de [[Memory Management Unit (MMU)|MMU]] se asegura que no se cargue la dirección física $0$ real más bien que se cargue la dirección física en la cual el espacio de direcciones de ese proceso se encuentre.