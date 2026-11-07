---
dia: 2026-11-06
etapa: empezado
referencias: []
aliases: []
tags:
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Elección-de-líder
ejercicios:
  - 766
vinculoFacultad:
  - tema: Elección de líder
    capitulo: 10
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un [[ingeniería en informática/concurrentes/Elección de líder/Algoritmo de elección de Líder|algoritmo de elección de Líder]] en el cuál se tiene una [[ingeniería en informática/distribuidos/Introduccion/Topología de comunicación#Anillos|topología anillo]], y los [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]] están ordenados lógicamente, cada uno conoce a su sucesor
1. Cuando un proceso nota que el coordinador falló, arma un mensaje `Election` que contiene su número de proceso y lo envía al sucesor
2. El proceso que recibe el mensaje, agrega su número de proceso a la lista dentro del mensaje y lo envía al sucesor
3. Cuando el proceso original recibe el mensaje, lo cambia a `Coordinator` y lo envía. El nuevo coordinador es el proceso de mayor número de la lista. La lista se mantiene para informar el nuevo anillo
4. Cuando este mensaje finaliza la circulación, se elimina del anillo

## Ejemplo
---
![[ingeniería en informática/concurrentes/Elección de líder/img/Algoritmo Ring.png|650]]

