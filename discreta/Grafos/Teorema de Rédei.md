---
dia: 2024-08-16
tags: 
 - discreta/Grafos
 - nota/facultad
---
### Definición
---
El teorema de Rédei, dice. Sea  un [[Torneo|torneo]], entonces  es [[Grafo Hamiltoniano|semihamiltoniano]]. Existe un [[Camino|camino]] hamiltoniano (no necesariamente un [[Camino#Ciclo (Cicle)|ciclo]])

Recordemos, para la demostración, el [[Teorema de Bolzano|teorema de Bolzano]] ![[Teorema de Bolzano#Definición]]
Sea $v_1, v_2, \cdots, v_m$ un camino [[Maximal|maximal]] en un torneo, y $u$ un [[Nodo|vértice]] aislado, no perteneciente al camino. Deben existir las aristas $v_1u$ y $uv_m$, ya que si no se podría agregar al torneo. De la misma forma, deben existir aristas entre los vértices del camino y el vértice $u$. Luego, en algún punto del camino existirá un vértice $v_i$ tal que $v_iu \in E(G)$, y $uv_{i+1} \in E(G)$. Luego, podremos aumentar el camino para incluir el vértice $u$. Entonces, el camino maximal de un torneo incluye todos los vértices, por lo que es semihamiltoniano