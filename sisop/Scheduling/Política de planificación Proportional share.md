---
dia: 2023-11-15
materia: sisop
capitulo: 4
---
### Definición
---
Existen otros tipos de algoritmos de [[Políticas de planificación|planificación]] que utilizan diferentes mecanismos para realizar esta tarea. Por ejemplo el mecanismo de llamado Proportional-Share, algunas veces también conocido como fair-share. Este se basa en un concepto muy simple: En vez de optimizar el [[Métrica Turn Around de planificación|turnaround]] o el [[Métrica Tiempo de respuesta de planificación|response time]] el [[Scheduler|planificador]] en su lugar intentara garantizar que cada [[Proceso|tarea]] obtenga cierto porcentaje de tiempo de [[CPU|CPU]].

El concepto también es conocido como planificación por lotería la idea básica es muy sencilla. Los boletos, son utilizados para representar cuanto se comparte de un determinado recurso para un determinado [[Proceso|proceso]]. El porcentaje de los boletos que un proceso tiene es el porcentaje de cuanto va a compartir el recurso en cuestión.

Utilizar la aleatoriedad lleva a una correcta visión desde el punto de vista [[Probabilidad|probabilístico]] pero no garantiza que esa proporción deseada se lleve a cabo. De hecho en el ejemplo anterior no sucede que se ejecute los porcentajes correctos.