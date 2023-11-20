---
dia: 2023-11-15
materia: sisop
capitulo: 4
---
### Definición
---
El workload es la carga de trabajo de un [[Proceso|proceso]] corriendo en el [[Sistema]].

Determinar cómo se calcula el workload es fundamental para determinar partes de las [[Políticas de planificación|Políticas de planificación]]. Cuando mejor es el cálculo, mejor es la política. Las suposiciones que se harán para el cálculo del workload son más que irreales.

Los supuestos sobre los procesos o jobs que se encuentran en ejecución son:
* Cada proceso se ejecuta la misma cantidad de tiempo
* Todos los procesos llegan al mismo tiempo para ser ejecutados
* Una vez que empieza un job sigue hasta completarse
* Todos los jobs usan únicamente [[Procesador|cpu]]
* El tiempo de ejecución de cada job es conocido