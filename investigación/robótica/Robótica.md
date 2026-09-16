---
dia: 2024-11-19
estado: Empezando con el contenido de la facultad
etapa: ampliar
tags:
  - investigación/electrónica/Robot
  - investigación/índice
  - investigación/robótica
  - nota/investigacion
aliases: 
  - Robot
vinculoFacultad:
  - tema: Introducción
    capitulo: 1
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar el área de la robótica, sus patrones de diseños específicos y sus consideraciones

## Resumen
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
El robot es un sistema mecánico, específicamente programables, de propósito general, que como el ser humano, puede realizar una variedad de tareas diferentes bajo condiciones que pueden no ser totalmente conocidas apriori

Esto lo logra ejecutar una serie de acciones automáticas, ya sea guiadas externamente o por un [[Sistema embebido|sistema embebido]], y utilizando [[ingeniería electrónica/control/Respuesta dinámica/Controlador|control automático]]

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```