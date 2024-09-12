---
dia: 2024-08-10
tags:
  - discreta/Grafos
  - nota/facultad
aliases:
  - Grafo disconexo
  - Grafo fuertemente conexo
---
### Definición
---
Un [[Grafo|grafo]] es conexo si para cualquier par de vértices $u$, $v$ existe un [[Camino|camino]] $u-v$. En caso contrario es disconexo

La componente conexa [[Maximal|maximal]] de un [[Nodo|vértice]] es el [[Conjunto|conjunto]] de todos los vértices que están conectados con un camino. Existe un camino trivial que conecta todos los vértices consigo mismo. Un grafo conexo tiene una sola componente conexa

Si un grafo es conexo, la [[Longitud de un camino|distancia]] entre cualquier par de vértices es de a lo sumo $n - 1$, ya que si es mayor, entonces se estaría repitiendo algún vértice y no sería el camino mínimo

Podemos verificar que un grafo es conexo a partir de la [[Matriz de adyacencia|matriz de adyacencia]] de $A_G$, donde todas las siguientes afirmaciones implica la otra
* $G$ es conexo
* $\forall v_i,~v_j \in V(G), ~~ \forall i, ~j, ~\exists k \in \mathbb{N}_0, ~ k \in[0,~n-1] : ~~~ A_G^k(i,~j) > 0n$
* $\displaystyle \sum_{k=0}^{n-1} A_G^k(i,~j) > 0$
* $\big( I_n + A_G \big)^{n - 1}(i,~j) > 0$

En un grafo conexo, se verifica que $$ R(G) \le \Phi(G) \le 2R(G) $$ donde $R(G)$ es el [[Radio de un grafo|radio de G]] y $\Phi(G)$ el [[Diámetro de un grafo|diámetro]]

Un [[Grafo orientado|grafo orientado]] se llama conexo si su subgrafo adyacente (sin orientar) se llama conexo. Un grafo se llama fuertemente conexo si para todo par de vértices $u$, $v$, existe un camino que los une ^c4c708

Un grafo se llama orientable, si puede introducirse una orientación que lo convierta en un grafo fuertemente conexo ^338349

1. Si un grafo tiene un puente, no es orientable (por definición de puente)
2. Si un grafo es orientable, no tiene puentes. Su [[Demostración de equivalencia#Usando proposiciones|recíproca]] es verdadera
3. Si un grafo no tiene puentes, es orientable

Recordemos que un puente es un vértice que une dos componentes conexas, de modo que si eliminamos el vértice, el grafo se vuelve disconexo

La demostración de la tercera afirmación, se realiza a través de un [[Algoritmo|algoritmo]]

1. Elegimos una arista inicial
2. Orientamos un ciclo al que pertenezca la arista, como no hay puentes, existe al menos uno
3. Seleccionamos alguna arista incidente sobre el ciclo, un ciclo orientada
4. Orientamos el ciclo al que pertenece la arista, teniendo en cuenta el sentido de la orientación del ciclo adyacente
5. Continuamos hasta que nos quedamos sin aristas, sabemos que en algún momento pasara esto, ya que es un grafo finito

A partir de esta construcción, podremos movernos entre todos los ciclos, a partir de sus adyacencias. Debido a que toda arista pertenece a un ciclo, entonces podremos visitar todas las aristas y, por lo tanto, todos los vértices