---
dia: 2023-11-15
materia: sisop
capitulo: 4
aliases:
  - RR
---
### Definición
---
La idea del algoritmo es bastante simple, se ejecuta un [[Proceso]] por un período determinado de tiempo y transcurrido el período se pasa a otro proceso, y así sucesivamente cambiando de proceso en la cola de ejecución.

Lo importante del round robin es la elección de un buen time slice. Se dice que el time slice tiene que amortizar el cambio de contexto sin hacer que esto resulte en que el [[Sistema]] no responda más.