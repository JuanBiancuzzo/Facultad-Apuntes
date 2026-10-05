---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Intercomunicación-entre-procesos-system-call
  - carrera/ingeniería-en-informática/concurrentes/Channels-y-Actors
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Channels y Actors
    capitulo: 6
    materia: Programación Concurrente
    carrera: Ingeniería en informática
aliases:
  - Unnamed pipe#^unnamed-pipe
  - Named pipe#^named-pipe
  - FIFO#^named-pipe
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta técnica permite el pasaje de [[Información|información]] directa entre $2$ [[Proceso|procesos]]. Tenemos dos tipos de pipes

* Unnamed pipes (Pipes) ^unnamed-pipe
    * Es la comunicación entre procesos padre e hijo
    * Deja de existir al finalizar el proceso
    * Son diferentes a [[ingeniería en informática/distribuidos/Herramientas de Diseño/Msgget system call|message queue]], donde estos permiten un [[ingeniería en informática/algo 1/Introducción a la programación/Tipo de dato compuesto|tipo de dato compuesto]], en vez de un [[ingeniería en informática/algo 1/Introducción a la programación/Información#Byte|byte]], haciendo que el mensaje sea completamente el tipo de dato y no únicamente un byte seguido de otro, por lo que se puede diferenciar entre mensajes
* Named pipes (FIFO) ^named-pipe
    * Es la comunicación entre dos procesos cualesquiera
    * Viven en el [[Sistema operativo|sistema operativo]] por lo cual excede la vida del proceso
    * Se pueden crear en [[ingeniería en informática/sisop/Kernel/Linux|Linux]] con el comando [[colección/programas/Comandos de linux/Mkfifo|mkfifo]]

Ambos cumple el [[ingeniería en informática/concurrentes/Channels y Actors/Modelo de canales|modelo de canales]], por lo que se pueden utilizar con la misma lógica