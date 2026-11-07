---
dia: 2026-11-06
etapa: empezado
referencias: []
aliases: []
tags:
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Elección-de-líder
ejercicios: []
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
Es un [[ingeniería en informática/concurrentes/Elección de líder/Algoritmo de elección de Líder|algoritmo de elección de Líder]] en el cuál se tiene una [[ingeniería en informática/distribuidos/Introduccion/Topología de comunicación#Punto a punto|topología punto a punto]]. Cuando un [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|proceso]] $P$ nota que el coordinador no responde, inicia el proceso de elección
1. $P$ envía el mensaje `Election` a todos los procesos que tengan número mayor
2. Si nadie responde, $P$ gana la elección y es el nuevo coordinador
3. Si contesta algún proceso con número mayor, éste continúa con el proceso y $P$ finaliza
4. El nuevo coordinador se anuncia con un mensaje `Coordinator`

Siempre gana el proceso con mayor número

## Ejemplo
---
![[ingeniería en informática/concurrentes/Elección de líder/img/Algoritmo Bully.png|650]]
