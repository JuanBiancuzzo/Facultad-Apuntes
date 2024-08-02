---
dia: 2024-08-02
tags:
  - redes/Capa-de-Red
  - nota/facultad
aliases:
  - Link-state algorithms
  - LS algorithms
---
### Definición
---
Un [[Routing algorithms|algoritmo de ruteo]] centralizado computará los caminos de menos costo utilizando el conocimiento global de la [[Red|red]]. Se deberán conocer todos los [[Router|routers]], [[Red#Redes de accesos|enlaces]], y sus costos, para esto todos los nodos realizan un [[Internet Protocol Versión 4#Broadcast|broadcast]] de su información

El [[algo 1/Introducción a la programación/Algoritmo|algoritmo]] utilizado es el [[Algoritmo de Dijkstra|algoritmo de Dijkstra]]. Una vez finalizado el algoritmo, la tabla de envío de cada nodo puede construirse a partir de almacenar, para cada destino posible, el próximo nodo en el camino de menor longitud. La complejidad de este algoritmo es del [[Complejidad computacional|orden]] de $O\left( n^2 \right)$ 

Los algoritmos de ruteo pueden fallar, causando oscilaciones, cuando el costo de los enlaces depende de la cantidad de tráfico. Una solución es decir que el algoritmo no dependerá del tráfico, pero esta solución no es aceptable

Otra solución es la de asegurar que no todos los routers ejecutarán el algoritmo al mismo tiempo. Curiosamente, los tiempos de sincronización de los routers pueden sincronizarse con el tiempo de forma automática. Debido a esto, se podría aleatorizar el tiempo en el que envía un link advertisement

