---
dia: 2026-10-03
etapa: empezado
referencias: []
aliases: []
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Sincronización
ejercicios: []
vinculoFacultad:
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es una herramienta de [[ingeniería en informática/sisop/Concurrencia/Sincronización de un programa concurrente|sincronización]] que permite a los [[ingeniería en informática/sisop/Concurrencia/Thread|hilos]] tener exlusión mutua y la [[ingeniería en informática/taller/Concurrencia/Estados de un proceso#Blocked|posibilidad de esperar]] por que una condición se vuelva falsa. Tiene un mecanismo para señalizar otros hilos cuando su condición se cumple

Esta consta de 
* Nombre
* Variables internas y su inicialización
* Procedimientos del monitor, rutinas que acceden directamente a las variables internas
* Una [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] pública para que los [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]] puedan acceder a las variables internas
* Un conjunto de [[ingeniería en informática/concurrentes/Semaphores y Barriers Condvars/Condition Variables|condition variables]] que incorporan sincronismo al monitor

Los procesos pueden tomar distintos estados
* Esperando para entrar al monitor
* Ejecutando el monitor (con exlusión mutua, implica que solo un proceso lo ejecuta a la vez)
* Bloqueado en [[First In First Out (FIFO)|FIFO]] de condition variables
* Recién liberado del `wait`
* Recién completó una operación de [[ingeniería en informática/concurrentes/Semaphores y Barriers Condvars/Condition Variables#^op-signal|signal]]

## Comparación con un semáforo
---
Se puede comparar por la operaciones
* En un [[ingeniería en informática/distribuidos/Herramientas de Diseño/Semáforo|semáforo]] el `wait` puede o no bloquear, mientras que el monitor siempre bloquea
* En el semáforo con el `signal` siempre tiene efecto, desbloquea un proceso arbritrario y el proceso continua la ejecución inmediatamente. Mientras que el monitor no tiene efecto si la [[colección/data structures/Queue|cola]] FIFO está vacía, el proceso desbloqueado es el que está en el tope de la cola y solo empieza a ejecutarse cuando el proceso que llamó al `signal` deje de usar el monitor