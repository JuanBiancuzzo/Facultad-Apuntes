---
dia: 2023-11-09
materia: sisop
capitulo: 5
---
### Definición
---
Los threads comparten los recursos del [[Proceso|proceso]], entre ellos, el espacio de memoria. Cada thread mantiene su propia información de estado como
* Thread id
* Un conjunto de los valores de los [[Registro|registros]] 
* [[Stack]] propio
* Una política y prioridad de ejecución
* Un propio `errno`
* Datos específicos del thread

Es una secuencia de ejecución atómica que representa una tarea planificable de ejecución. Donde
 * Secuencia de ejecución atómica
	 * Cada thread ejecuta una secuencia de instrucciones como lo hace un bloque de código en el [[Modelo]] de programación secuencial
 * Tarea planificable de ejecución
	 * El [[Sistema operativo]] tiene injerencia sobre el mismo en cualquier momento y puede ejecutarlo, suspenderlo y continuarlo cuando él desee

