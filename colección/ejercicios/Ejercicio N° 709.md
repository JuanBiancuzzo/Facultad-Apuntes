---
dia: 2026-09-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 709
etapa: ampliar
---
# Enunciado
---
Verdadero o Falso, justificando la respuesta
1. [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|Procesos]], [[ingeniería en informática/sisop/Concurrencia/Thread|hilos]] y [[investigación/ciencias de la computación/Programación asincrónica/Programación asincrónica|tareas asincrónicas]] todas poseen espacio de memoria independientes entre si  ^parte-1
2. El [[ingeniería en informática/sisop/Scheduling/Scheduler|scheduler]] del [[investigación/ciencias de la computación/sistemas operativos/Sistema operativo|sistema operativo]] puede detener una tarea asincrónica puntual y habilitar la ejecución de otra para el mismo proceso ^parte-2
3. En vectorización, tanto los operaciones verticales como las operaciones orizontales devuelven resultados vectoriales ^parte-3
4. Un hilo esperado sobre una [[ingeniería en informática/concurrentes/Semaphores y Barriers Condvars/Condition Variables|CondVar]] sólo puede despertarse cuando otro hilo hace signal de la misma ^parte-4

# Resolución
---
[[colección/ejercicios/Ejercicio N° 709#^parte-1|1.]] Falso, las tareas asincrónicas comparten el mismo [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]], por lo que no tienen espacio de memoria idependientes entre si

[[colección/ejercicios/Ejercicio N° 709#^parte-2|2.]] Falso, el scheduler toma a todas las tareas asincrónicas como un mismo proceso, por lo que no puede identificar una tarea puntual

[[colección/ejercicios/Ejercicio N° 709#^parte-3|3.]] 

[[colección/ejercicios/Ejercicio N° 709#^parte-4|4.]] Falso, aunque es la forma esperada de despertar un CondVar, existe la posibilidad de despertarlas cuando el por el sistema operativo frena y vuelve a correr el proceso
