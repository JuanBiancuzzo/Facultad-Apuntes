---
dia: 2024-08-18
tags:
  - redes/Capa-de-Red
  - nota/facultad
aliases:
  - Intra-AS routing
---
# Definición
---
En la práctica, la idea de que todos los routers ejecutan el mismo [[Routing algorithms|algoritmo de ruteo]] es demasiado errónea por dos importantes razones
* Escala
    * A medida que aumenta el número de routers, el costo de comunicación y cómputo se vuelve inmanejable
* Autoridad administrativa
    * El [[Internet|internet]] es una [[Red|red]] interconectada de [[Internet Service Provider|ISP]], cada uno consistiendo en su propia red de routers. Usualmente, los ISP querrán administrar su red de la forma que quieran, por lo que sería imposible que todos ejecuten el mismo [[algoritmos/Índice|algoritmo]]

Ambos problemas se solucionan al organizar los [[Router|routers]] en [[Autonomous system|autonomous system]]