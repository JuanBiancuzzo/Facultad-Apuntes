---
dia: 2024-06-14
materia: redes
capitulo: 4
---
### Definición
---
Existen múltiples técnicas para determinar el orden en que los [[Paquete|paquetes]] encolados son transmitidos a través del [[Router output port|enlace de salida]]

#### First-in-First-Out (FIFO)
---
Técnica simple que consiste en enviar los paquetes en el mismo orden en el que fueron encolados. También es conocida como first-come-first-server (FCFS)

#### Priority Queuing
---
Bajo esta política, los paquetes son clasificados cuando llegan al buffer en distintas clases, dependiendo de la prioridad. Los paquetes de información de la red o aplicaciones en vivo pueden recibir una prioridad más alta, mientras aquellas aplicaciones que otras tendrán una menor prioridad. Cada clase tendrá su propia cola, la cual será vaciada antes de seguir con la cola de la siguiente prioridad. Bajo técnicas non-preemptive, la transmisión de un paquete no es interrumpida una vez comenzó

#### Round Robin and Weighted Fair Queuing
---
Los paquetes son ordenados en clases, aunque un [[Política de planificación Round Robin|round robin scheduler]] se utilizará para alternar entre las clases. La disciplina work-conserving queuing nunca permitirá que un link permanezca inactivo mientras haya paquetes encolados para la transmisión

La técnica weighted fair queueing (WFQ) es similar a round robin, pero alterna entre clases de forma circular, donde cada clase tiene un peso que se utilizara para asegurar que cada clase una fracción de tiempo acorde a su peso y al de las otras clases