---
dia: 2023-11-19
tags:
  - carrera/ingeniería-en-informática/sisop/Scheduling
  - nota/facultad
aliases:
  - MQMS
vinculoFacultad:
  - tema: Scheduling
    capitulo: 4
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
# Definición
---
Debido a los problemas que tiene el [[Política de planificación Single Queue Multiprocessor Scheduling|cola única]] varia gente opto por crear un [[Scheduler|planificador]] de multiples [[Cola|colas]].

El esquema básico de la [[Políticas de planificación|planificación]] consiste en múltiples colas. Cada cola va a seguir una determinada disciplina de planificación, cuando una tarea entra en el sistema ésta se coloca exactamente en una única cola de planificación, de acuerdo con alguna heurística. Esto implica que es esencialmente planificada en forma independiente.

### Ventajas
---
MQMS tiene la ventaja sobre SQMS debido a que es enteramente escalable. A medida que las [[Microprocesadores|Procesador]] van creciendo también lo hacen las colas, lo que conlleva a que los [[Lock|locks]] y las [[ingeniería en informática/sisop/Scheduling/Cache|cache]] no sean ya un problema.

MQMS intrínsecamente prevé [[Afinidad de cache|afinidad de cache]], es decir, las tareas intentan mantenerse en la CPU en la que fueron planificadas.

### Desventajas
---
El único problema de MQSM es el load imbalance. El load imbalance se da cuando una [[Microprocesadores|Procesador]] queda ociosa frente a las demás que están sobrecargadas.

La respuesta más obvia es aquella de mover las tareas de un lado a otro, esta técnica se conoce como migración. Mediante la migración de una tarea a otra CPU se puede conseguir de verdadero balance de carga.