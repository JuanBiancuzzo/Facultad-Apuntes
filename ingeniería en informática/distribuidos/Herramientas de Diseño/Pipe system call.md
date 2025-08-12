---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Intercomunicación-entre-procesos-system-call
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta técnica permite el pasaje de [[Información|información]] directa entre $2$ [[Proceso|procesos]]. Tenemos dos tipos de pipes

* Unnamed pipes (Pipes)
    * Es la comunicación entre procesos padre e hijo
    * Deja de existir al finalizar el proceso
* Named pipes (FIFO)
    * Es la comunicación entre dos procesos cualesquiera
    * Viven en el [[Sistema operativo|sistema operativo]] por lo cual excede la vida del proceso