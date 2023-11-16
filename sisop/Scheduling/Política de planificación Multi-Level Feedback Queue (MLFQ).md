---
dia: 2023-11-15
materia: sisop
capitulo: 4
---
### Definición
---
Esta [[Políticas de planificación|técnica de planificación]] intenta acatar a los siguientes dos problemas
* Intentar optimizar el tiempo de [[Métrica Turn Around de planificación|turn around]], que se realiza mediante la ejecución de la tarea más corta primero, desafortunadamente el [[Sistema operativo|sistema operativo]] nunca sabe a priori cuanto va a tardar en correr una tarea
* Intenta minimizar el [[Métrica Tiempo de respuesta de planificación|tiempo de respuesta]], desafortunadamente los algoritmos como [[Política de planificación Round Robin (RR)|round-robin]] reducen el tiempo de respuesta pero son terribles en turn around.

#### Reglas básicas
---
MLFQ tiene un conjunto de distintas [[Cola|colas]], cada una de estas colas tiene asignado un nivel de prioridad.

En un determinado tiempo, una tarea que está lista para ser corrida está en una única cola. MLFQ usa las prioridades para decidir cual tarea debería correr en un determinado tiempo $t_0$, la tarea con mayor prioridad o la tarea en la cola más alta será elegida para ser corrida.

Dado el caso que existan más de una tarea con la misma prioridad entonces se utiliza el algoritmo [[Política de planificación Round Robin (RR)|round-robin]] para planificar estas tareas entre ellas.

Las reglas son
* Si la prioridad de A es mayor que la prioridad de B, A se ejecuta y B no
* Si la prioridad de A es igual a la prioridad de B, A y B se ejecutan en round-robin

La clave para la planificación MLFQ subyace entonces en cómo el [[Scheduler|planificador]] setea las prioridades. En vez de dar una prioridad fija a cada tarea, MLFQ varia la prioridad de la tarea basándose en su comportamiento observado.

Algunas reglas para esto pueden ser
* Cuando una [[Proceso|tarea]] entra en el sistema se pone con la más alta prioridad
* Una vez que una tarea usa su tiempo asignado en un nivel dado, su prioridad se reduce
* Después de cierto periodo de tiempo $S$, se mueven las tareas a la cola con más prioridad