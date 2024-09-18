---
dia: 2023-11-15
tags:
  - sisop/Scheduling
  - nota/facultad
---
# Definición
---
Si un determinado programa que se estaba ejecutando debía realizar operaciones de entrada y salida de datos, debía interactuar con un dispositivo de entrada y salida. Esta interacción en términos de tiempos de ejecución de intrucciones del procesador podía parecer infinito. Además, con el agravante de que el tiempo de E/S solía ser en promedio de entre el 80% y 90% del tiempo total del [[Programa|programa]], la [[Procesador|Procesador]] permanecía inactiva un gran período de tiempo.

## Utilización de la [[Procesador|Procesador]]
---
Si se asume que el 20% del tiempo de ejecución de un [[Programa|programa]] es solo cómputo, y el 80% son operaciones de entrada y salida, con tener 5 [[Proceso|procesos]] en [[Memoria|memoria]] se estaría utilizando el 100$ de la [[Procesador|Procesador]].

Siendo un poco más realista se supone que las operaciones de entrada y salida son bloqueantes, es decir, que paran el procesamiento hasta que se haya realizado la operación.

Entonces, el cálculo es más realista si se supone que un proceso hasta una fracción $p$, bloqueado por E/S. De esta manera, si tenemos $n$ procesos esperando para hacer operaciones de entrada y salida, la [[Probabilidad]] de que los $n$ procesos estén haciendo E/S es $p^n$.

Por ende la probabilidad de que se esté ejecutando algún proceso es $$ 1 - p^n $$esta fórmula es conocida como utilización de CPU
