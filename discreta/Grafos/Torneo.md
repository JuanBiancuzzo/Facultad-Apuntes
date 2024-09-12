---
dia: 2024-08-16
tags: 
 - discreta/Grafos
 - nota/facultad
---
### Definición
---
Un torneo es un [[Grafo simple completo|grafo completo]] [[Grafo orientado|orientado]]. Se denomina así, ya que podemos considerar las aristas como el resultado de los partidos entre cada [[Nodo|vértice]]

#### Transitividad
---
Se dice que un torneo es transitivo, si $\forall u,v,w \in V(G): (uv, vw \in E(G)) \to uw \in E(G)$. Esta definición es similar a la [[Transitividad en relaciones de orden|transitividad en relaciones de orden]]. Un torneo es transitivo si y solo si no tiene ciclos

Para demostrarlo, podemos inicialmente demostrar que todo torneo con al menos un [[Camino#Ciclo (Cicle)|ciclo]], tendrá un ciclo de longitud tres. Luego, el ciclo de [[Longitud de un camino|longitud]] tres contradice la transitividad