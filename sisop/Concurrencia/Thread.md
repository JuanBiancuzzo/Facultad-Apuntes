---
dia: 2023-11-09
capitulo: 5
tags:
  - sisop/Concurrencia
  - nota
---
### Definición
---
Los threads comparten los recursos del [[Proceso|proceso]], entre ellos, el espacio de memoria. Cada thread mantiene su propia información de estado como
* Thread id
* Un conjunto de los valores de los [[Registro|registros]] 
* [[Stack]] propio
* Un propio `errno`
* Prioridad de [[Thread scheduler|scheduling]]
* Status

Es una secuencia de [[Operación atómica|ejecución atómica]] que representa una tarea planificable de ejecución. Donde
 * Secuencia de ejecución atómica
	 * Cada thread ejecuta una secuencia de instrucciones como lo hace un bloque de código en el [[Modelo]] de programación secuencial
 * Tarea planificable de ejecución
	 * El [[Sistema operativo]] tiene injerencia sobre el mismo en cualquier momento y puede ejecutarlo, suspenderlo y continuarlo cuando él desee

En la actualidad hay dos formas de que los threads se relacionen entre sí:
1. Multi-threading cooperativo
	* No hay [[Interrupción]] a menos que se solicite
2. Multi-threading Preemptivo
	* Es el más usado en la actualidad. Consiste en que un thread en estado de [[Estados de un thread#Running|running]] puede ser movido en cualquier momento.

#### Thread vs. [[Proceso|proceso]]
---
Tenemos varios casos de comparación
1. Un thread por proceso
	* Un proceso con una única secuencia de instrucciones ejecutándose de inicio a fin. Esto es equivalente a un bloque de instrucción delimitado por `{` y `}`. Lo que todos los programadores de [[Modelo secuencial]] conocemos
2. Muchos thread por proceso
	* Un [[Programa]] es visto como thread ejecutándose dentro de un proceso con derechos restringidos. En dado un $t_i$ algunos threads pueden estar corriendo y otros estar suspendidos. 
	  Cuando se detecta por ejemplo una operación de I/O por alguna [[Interrupción]], el [[Kernel]] desaloja ([[Preempt]]) a algunos de los threads que están corriendo, atiende la interrupción y al terminar de manejar la interrupción vuelve a correr el thread nuevamente.
3. Muchos proceso con un solo thread cada uno
	* Limitación de algunos [[Sistema operativo|sistemas operativos]] que permitían varios procesos, pero cada uno con un único thread, lo que implica que puede haber varios thread ejecutándose en [[Kernel mode]]
4. Muchos [[Kernel|kernel]] thread
	* Para aprovechar recursos, también el kernel puede ejecutar varios threads en [[Kernel mode]]


#### [[Estados de un thread]]
---
![[Estados de un thread#Definición]]

#### Ciclo de vida de un thread
---
Cada thread tiene dos estados
* El estado per thread
* El estado compartido entre varios thread

##### [[Threads Control Block|El estado per-thread]]
---
![[Threads Control Block#Definición]]

##### [[Thread Shared State|Shared state o Estado compartido]]
---
![[Thread Shared State#Definición]]

#### [[Lock|Locks]]
---
![[Lock#Definición]]

### API's
---
![[POSIX Threads#Definición]]