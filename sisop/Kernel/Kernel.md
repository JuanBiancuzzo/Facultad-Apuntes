---
dia: 2023-11-15
materia: sisop
capitulo: 1
---
### Definición
---
Viendo al [[Sistema]] como un conjunto de capas, el [[Sistema operativo|sistema operativo]] se denomina comúnmente kernel del sistema, o simplemente kernel, lo que enfatiza su aislamiento de los [[Programa|programas]] de los usuarios. A pesar de esto, el kernel también es un programa.

Gracias a la existencia del kernel los programas son independientes del [[Hardware]] subyacente, es fácil moverlos entre sistemas [[Unix]] que se ejecutan en hardware diferentes dado que los programas no hacen suposiciones sobre el hardware subyacente, sino que se comunican con el kernel y no con el hardware directamente.

![[Representación en capas de la conexión entre un sistema operativo y el hardware.png]]

Este contiene por un lado una capa para la gestión de dispositivos específicos y por otro una serie de servicios para la gestión de dispositivos agnósticos del hardware que son utilizados por las aplicaciones.

Cuando el código fuente de esta capa es ejecutado, la [[Computadora]] pasa a un estado llamado modo supervisor.

#### Tareas especificas del kernel
---
Este [[Programa]] hace
* [[Scheduler|Planificar]] la ejecución de las aplicaciones
* Gestionar la [[Memoria|memoria]]
* Proveer un [[File system|sistema de archivos]]
* Creación y finalización de [[Proceso|procesos]]
* Acceder a los dispositivos
* Proveer un API

#### Tipos de kernel
---
Existen básicamente dos tipos de estructuras del kernel

##### Kernel Monolítico
![[Kernel monolítico#Definición]]

##### Micro Kernel
![[Micro kernel#Definición]]

#### Modos de operación
---
![[Modo de operación#Definición]]

#### Transferencia entre modos
---
Una vez que el [[Hardware]] posee los mecanismos necesarios para que pueda ejecutarse un kernel, tiene que haber una o varias formas de alternar entre [[User mode|modo usuario]] y [[Kernel mode|modo kernel]]

Este tipo de transición no son eventos raros y por ende deben tener un mecanismo que sea seguro y rápido.

##### De [[User mode|Modo usuario]] a [[Kernel mode|Modo kernel]]
---
Existen tres formas por las cuales se debería pasar de modo usuario a modo kernel
* [[Interrupción|Interrupciones]]
* [[Excepción del procesador|Excepciones del procesador]]
* Ejecución de [[System call|system calls]]

De hecho estas tres formas representan
* Evento externo (interrupciones)
* Evento interno inesperado (excepciones)
* Evento interno intencional (system calls)

##### De [[Kernel mode|Modo kernel]] a [[User mode|Modo usuario]]
---
Así como hay varias formas de pasar de modo usuario a modo kernel, también hay varias formas de pasar de modo kernel a modo usuario
* Un [[Proceso#API's|nuevo proceso]]:
	* Cuando se inicia un nuevo [[Proceso]] el [[Kernel]] copia el [[Programa]] en la [[Memoria|memoria]], setea el contador del programa apuntando a la primera instrucción del proceso setea el [[Stack|stack]] pointer a la base del stack de usuario y switchea a modo usuario
* Continuar después de una [[Interrupción|interrupción]], una [[Excepción del procesador|excepción del procesador]] o de una [[System call|system call]]
	* Una vez que el kernel termino de manejar el pedido, este continua con la ejecución de procesos interrumpidos mediante la restauración de todos los [[Registro|registros]] y cambiando el modo a nivel usuario
* Cambio entre diferentes procesos
	* En algunos casos puede pasar que el kernel decida ejecutar otro proceso que no sea el que se estaba ejecutando, en este caso el kernel carga el [[Estados de un proceso|estado del proceso]] nuevo a través de la PCB y cambia a modo usuario.